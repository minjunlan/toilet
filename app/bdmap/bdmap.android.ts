import common = require("./bdmap-common");

import dependencyObservable = require("ui/core/dependency-observable");
import {GestureTypes, TouchGestureEventData, TouchAction} from "ui/gestures";
import * as fs from 'file-system';
import * as imageSource from 'image-source';
import * as app from 'application';
import * as utils from 'utils/utils';

global.moduleMerge(common, exports);



export class BDMapView extends common.BDMapView {

    private _android: com.baidu.mapapi.map.MapView;
    public  BaiduMap: com.baidu.mapapi.map.BaiduMap;
    public  Point: com.baidu.mapapi.model.LatLng;
    public  mLocationClient: com.baidu.location.LocationClient;
    public  mPoiSearch:com.baidu.mapapi.search.poi.PoiSearch;
    private _listener: com.baidu.location.BDLocationListener;
    private _poiListener: com.baidu.mapapi.search.poi.OnGetPoiSearchResultListener;
    private _routeListener: com.baidu.mapapi.search.route.OnGetRoutePlanResultListener;
    private _mSearch: com.baidu.mapapi.search.route.RoutePlanSearch;

    private num = 0;
    private _latitude:number;
    private _longitude:number;

    public infos:common.MyInfos;

    constructor(){
        super();
        this.infos = new common.MyInfos();
        
    }

    get android(): com.baidu.mapapi.map.MapView {
        return this._android;
    }

    public _createUI() {   
        this._init(); //初始化
        //if(!this._android) return ;
        //this.setLocation();//设置定位
        //this.setSearch();

        this.setRoutePlanSearch();
    }

    private _init(){
        com.baidu.mapapi.SDKInitializer.initialize(app.android.context);
        this._android = new com.baidu.mapapi.map.MapView(this._context);
        this._android.showZoomControls(false);
        this.BaiduMap = this._android.getMap();
        this.BaiduMap.setMapStatus(com.baidu.mapapi.map.MapStatusUpdateFactory.zoomTo(18));
    }

    public _onReceiveLocation(location:com.baidu.location.BDLocation){

        this.infos.latitude = location.getLatitude();
        this.infos.longitude = location.getLongitude();
        this.infos.province = location.getProvince();
        this.infos.city = location.getCity();
        this.infos.district = location.getDistrict();
        this.infos.street = location.getStreet();
        this.infos.netType = location.getIndoorLocationSurpport();
        this.Point = new com.baidu.mapapi.model.LatLng(this.infos.latitude,this.infos.longitude); //地点
        /*this.mPoiSearch.searchNearby((new com.baidu.mapapi.search.poi.PoiNearbySearchOption())  
            .location(this.Point) 
            .radius(1000) 
            .keyword("厕所")  
            .pageNum(1));*/
        let path = fs.path.join(fs.knownFolders.currentApp().path,'images','icon_openmap_focuse_mark.png');
        //let img = imageSource.fromResource("icon_openmap_focuse_mark");
        let img = imageSource.fromFile(path);
        let bitmap = com.baidu.mapapi.map.BitmapDescriptorFactory.fromBitmap(img.android);
       
        let option = new com.baidu.mapapi.map.MarkerOptions().position(this.Point).icon(bitmap);
        this.BaiduMap.clear();
        this.BaiduMap.addOverlay(option);
        this.BaiduMap.setMapStatus(com.baidu.mapapi.map.MapStatusUpdateFactory.newLatLng(this.Point));
        
        
        if(location.getLocType() === com.baidu.location.BDLocation.TypeServerError){
            console.log("TypeServerError");
        } else if (location.getLocType() === com.baidu.location.BDLocation.TypeNetWorkException) {
            console.log("TypeNetWorkException");
        } else if (location.getLocType() === com.baidu.location.BDLocation.TypeCriteriaException) {
            console.log("TypeCriteriaException");
        }
    }

    public setLocation (){
        var that = new WeakRef(this);
        this.mLocationClient = new com.baidu.location.LocationClient(app.android.context);
        this._listener = new com.baidu.location.BDLocationListener(
            <com.baidu.location.IBDLocationListener>{
                get owner() {
                    return that.get();
                },

                onReceiveLocation: function (location:com.baidu.location.BDLocation) {
                    if (this.owner) {
                        this.owner._onReceiveLocation(location);
                    }
                }
            });
        
        let listenoption = new com.baidu.location.LocationClientOption();
        let span = 3000;
        listenoption.setLocationMode(com.baidu.location.LocationClientOption.LocationMode.Hight_Accuracy);
        listenoption.setCoorType("bd09ll");
        listenoption.setScanSpan(span);
        listenoption.setOpenGps(true);
        listenoption.setIsNeedAddress(true);
        this.mLocationClient.setLocOption(listenoption);
        this.mLocationClient.start();
        this.mLocationClient.registerLocationListener( this._listener );
        
    }

    public setSearch() {
        let that = new WeakRef(this);
        console.log("set");
        this.mPoiSearch = com.baidu.mapapi.search.poi.PoiSearch.newInstance();
        this._poiListener = new com.baidu.mapapi.search.poi.OnGetPoiSearchResultListener(
            <com.baidu.mapapi.search.poi.IOnGetPoiSearchResultListener>{
                get owner() {
                    console.log("set11");
                    return that.get();
                },
                onGetPoiResult: function (result:com.baidu.mapapi.search.poi.PoiResult){
                    if (this.owner) {
                        console.log("set1");
                        this.owner._onGetPoiResult(result);
                    }
                },
                onGetPoiDetailResult: function (result:com.baidu.mapapi.search.poi.PoiDetailResult){
                    console.log("set2");
                },
                onGetPoiIndoorResult: function (result:com.baidu.mapapi.search.poi.PoiIndoorResult){
                    console.log("set3");
                },
            }
        )
        this.mPoiSearch.setOnGetPoiSearchResultListener(this._poiListener);
       
    }

    public setRoutePlanSearch() {
        let that = new WeakRef(this);
        this._mSearch = com.baidu.mapapi.search.route.RoutePlanSearch.newInstance();
        this._routeListener = new com.baidu.mapapi.search.route.OnGetRoutePlanResultListener(
            <com.baidu.mapapi.search.route.IOnGetRoutePlanResultListener>{
                get owner() {
                    return that.get();
                },
                onGetWalkingRouteResult: function(result:com.baidu.mapapi.search.route.WalkingRouteResult){
                    if (this.owner) {
                        this.owner._onGetWalkingRouteResult(result);
                    }
                },
                onGetBikingRouteResult: function(result:com.baidu.mapapi.search.route.BikingRouteResult){

                },
                onGetDrivingRouteResult: function(result:com.baidu.mapapi.search.route.DrivingRouteResult){

                },
                onGetIndoorRouteResult: function(result:com.baidu.mapapi.search.route.IndoorRouteResult){

                },
                onGetMassTransitRouteResult: function(result:com.baidu.mapapi.search.route.MassTransitRouteResult){

                }, 
                onGetTransitRouteResult: function(result:com.baidu.mapapi.search.route.TransitRouteResult){

                },                                                                
            }
        );
        this._mSearch.setOnGetRoutePlanResultListener(this._routeListener);
        let startNode = com.baidu.mapapi.search.route.PlanNode.withCityNameAndPlaceName("北京","天安门");
        let endNode   = com.baidu.mapapi.search.route.PlanNode.withCityNameAndPlaceName("北京","北站");
        this._mSearch.walkingSearch(new com.baidu.mapapi.search.route.WalkingRoutePlanOption().from(startNode).to(endNode))
    }

    private _onGetPoiResult(result:com.baidu.mapapi.search.poi.PoiResult){
        console.dump(result);
        //this.mPoiSearch.destroy();
    }

    private _onGetWalkingRouteResult(result:com.baidu.mapapi.search.route.WalkingRouteResult){
        let arr = result.getRouteLines();
        this.infos.arr = arr;
        alert(arr);
        //this.mPoiSearch.destroy();
    }
}



