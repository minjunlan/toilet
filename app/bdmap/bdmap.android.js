"use strict";
var common = require("./bdmap-common");
var fs = require('file-system');
var imageSource = require('image-source');
var app = require('application');
global.moduleMerge(common, exports);
var BDMapView = (function (_super) {
    __extends(BDMapView, _super);
    function BDMapView() {
        _super.call(this);
        this.num = 0;
        this.infos = new common.MyInfos();
    }
    Object.defineProperty(BDMapView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    BDMapView.prototype._createUI = function () {
        this._init(); //初始化
        //if(!this._android) return ;
        this.setLocation(); //设置定位
        //this.setSearch();
    };
    BDMapView.prototype._init = function () {
        com.baidu.mapapi.SDKInitializer.initialize(app.android.context);
        this._android = new com.baidu.mapapi.map.MapView(this._context);
        this._android.showZoomControls(false);
        this.BaiduMap = this._android.getMap();
        this.BaiduMap.setMapStatus(com.baidu.mapapi.map.MapStatusUpdateFactory.zoomTo(18));
    };
    BDMapView.prototype._onReceiveLocation = function (location) {
        this.infos.latitude = location.getLatitude();
        this.infos.longitude = location.getLongitude();
        this.infos.province = location.getProvince();
        this.infos.city = location.getCity();
        this.infos.district = location.getDistrict();
        this.infos.street = location.getStreet();
        this.infos.netType = location.getIndoorLocationSurpport();
        this.Point = new com.baidu.mapapi.model.LatLng(this.infos.latitude, this.infos.longitude); //地点
        /*this.mPoiSearch.searchNearby((new com.baidu.mapapi.search.poi.PoiNearbySearchOption())
            .location(this.Point)
            .radius(1000)
            .keyword("厕所")
            .pageNum(1));*/
        var path = fs.path.join(fs.knownFolders.currentApp().path, 'images', 'icon_openmap_focuse_mark.png');
        //let img = imageSource.fromResource("icon_openmap_focuse_mark");
        var img = imageSource.fromFile(path);
        var bitmap = com.baidu.mapapi.map.BitmapDescriptorFactory.fromBitmap(img.android);
        var option = new com.baidu.mapapi.map.MarkerOptions().position(this.Point).icon(bitmap);
        this.BaiduMap.clear();
        this.BaiduMap.addOverlay(option);
        this.BaiduMap.setMapStatus(com.baidu.mapapi.map.MapStatusUpdateFactory.newLatLng(this.Point));
        if (location.getLocType() === com.baidu.location.BDLocation.TypeServerError) {
            console.log("TypeServerError");
        }
        else if (location.getLocType() === com.baidu.location.BDLocation.TypeNetWorkException) {
            console.log("TypeNetWorkException");
        }
        else if (location.getLocType() === com.baidu.location.BDLocation.TypeCriteriaException) {
            console.log("TypeCriteriaException");
        }
    };
    BDMapView.prototype.setLocation = function () {
        var that = new WeakRef(this);
        this.mLocationClient = new com.baidu.location.LocationClient(app.android.context);
        this._listener = new com.baidu.location.BDLocationListener({
            get owner() {
                return that.get();
            },
            onReceiveLocation: function (location) {
                if (this.owner) {
                    this.owner._onReceiveLocation(location);
                }
            }
        });
        var listenoption = new com.baidu.location.LocationClientOption();
        var span = 1000;
        listenoption.setLocationMode(com.baidu.location.LocationClientOption.LocationMode.Hight_Accuracy);
        listenoption.setCoorType("bd09ll");
        listenoption.setScanSpan(span);
        listenoption.setOpenGps(true);
        listenoption.setIsNeedAddress(true);
        this.mLocationClient.setLocOption(listenoption);
        this.mLocationClient.start();
        this.mLocationClient.registerLocationListener(this._listener);
    };
    BDMapView.prototype.setSearch = function () {
        var that = new WeakRef(this);
        console.log("set");
        this.mPoiSearch = com.baidu.mapapi.search.poi.PoiSearch.newInstance();
        this._poiListener = new com.baidu.mapapi.search.poi.OnGetPoiSearchResultListener({
            get owner() {
                console.log("set11");
                return that.get();
            },
            onGetPoiResult: function (result) {
                if (this.owner) {
                    console.log("set1");
                    this.owner._onGetPoiResult(result);
                }
            },
            onGetPoiDetailResult: function (result) {
                console.log("set2");
            },
            onGetPoiIndoorResult: function (result) {
                console.log("set3");
            },
        });
        this.mPoiSearch.setOnGetPoiSearchResultListener(this._poiListener);
    };
    BDMapView.prototype._onGetPoiResult = function (result) {
        console.dump(result);
        //this.mPoiSearch.destroy();
    };
    return BDMapView;
}(common.BDMapView));
exports.BDMapView = BDMapView;
//# sourceMappingURL=bdmap.android.js.map