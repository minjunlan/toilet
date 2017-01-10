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
        console.dump(this.mapType);
    }
    Object.defineProperty(BDMapView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    BDMapView.prototype._createUI = function () {
        com.baidu.mapapi.SDKInitializer.initialize(app.android.context);
        this._android = new com.baidu.mapapi.map.MapView(this._context);
        this.BaiduMap = this._android.getMap();
        this.Point = new com.baidu.mapapi.model.LatLng(34.360662, 107.147942); //地点
        var path = fs.path.join(fs.knownFolders.currentApp().path, 'images', 'icon_openmap_focuse_mark.png');
        //let img = imageSource.fromResource("icon_openmap_focuse_mark");
        var img = imageSource.fromFile(path);
        var bitmap = com.baidu.mapapi.map.BitmapDescriptorFactory.fromBitmap(img.android);
        var option = new com.baidu.mapapi.map.MarkerOptions().position(this.Point).icon(bitmap);
        //this.BaiduMap.addOverlay(option);
        this.BaiduMap.setMapStatus(com.baidu.mapapi.map.MapStatusUpdateFactory.newLatLng(this.Point));
        this.BaiduMap.setMapStatus(com.baidu.mapapi.map.MapStatusUpdateFactory.zoomTo(20));
        console.dump(this.mapType);
    };
    BDMapView.prototype.onLoaded = function () {
        console.dump(this.mapType);
    };
    BDMapView.prototype._onMapTypePropertyChanged = function (data) {
        var picker = data.object;
        if (!picker.android) {
            return;
        }
        console.dump(data.newValue);
        if (this.mapType) {
            this.BaiduMap.setMapType(com.baidu.mapapi.map.BaiduMap.MAP_TYPE_SATELLITE);
        }
    };
    return BDMapView;
}(common.BDMapView));
exports.BDMapView = BDMapView;
//# sourceMappingURL=bdmap.js.map