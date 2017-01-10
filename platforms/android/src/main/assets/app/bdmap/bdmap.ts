import common = require("./bdmap-common");

import dependencyObservable = require("ui/core/dependency-observable");
import {GestureTypes, TouchGestureEventData, TouchAction} from "ui/gestures";
import * as fs from 'file-system';
import * as imageSource from 'image-source';
import * as app from 'application';

global.moduleMerge(common, exports);



export class BDMapView extends common.BDMapView {

    private _android: com.baidu.mapapi.map.MapView;
    public  BaiduMap: com.baidu.mapapi.map.BaiduMap;
    public Point: com.baidu.mapapi.model.LatLng;
    constructor(){
        super();
        console.dump(this.mapType);
    }

    get android(): com.baidu.mapapi.map.MapView {
        return this._android;
    }

    public _createUI() {
        com.baidu.mapapi.SDKInitializer.initialize(app.android.context);
        this._android = new com.baidu.mapapi.map.MapView(this._context);
        this.BaiduMap = this._android.getMap();
        this.Point = new com.baidu.mapapi.model.LatLng(34.360662,107.147942); //地点
        let path = fs.path.join(fs.knownFolders.currentApp().path,'images','icon_openmap_focuse_mark.png');
        //let img = imageSource.fromResource("icon_openmap_focuse_mark");
        let img = imageSource.fromFile(path);
        let bitmap = com.baidu.mapapi.map.BitmapDescriptorFactory.fromBitmap(img.android);
       
        let option = new com.baidu.mapapi.map.MarkerOptions().position(this.Point).icon(bitmap);
        //this.BaiduMap.addOverlay(option);
        this.BaiduMap.setMapStatus(com.baidu.mapapi.map.MapStatusUpdateFactory.newLatLng(this.Point));
        this.BaiduMap.setMapStatus(com.baidu.mapapi.map.MapStatusUpdateFactory.zoomTo(20));
        console.dump(this.mapType);
    }

    public onLoaded(){
        console.dump(this.mapType);
    }

    public _onMapTypePropertyChanged(data: dependencyObservable.PropertyChangeData){
            var picker = <BDMapView>data.object;
            if (!picker.android) {
                return;
            }
            console.dump(data.newValue);
            if(this.mapType){
                this.BaiduMap.setMapType(com.baidu.mapapi.map.BaiduMap.MAP_TYPE_SATELLITE);
            }
    }
}

