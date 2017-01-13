"use strict";
var core_1 = require("@angular/core");
var nativescript_angular_1 = require('nativescript-angular');
var platform_1 = require('platform');
var bdmap = require('./bdmap/bdmap');
//加载百度mapview视图
nativescript_angular_1.registerElement('MapView', function () { return bdmap.BDMapView; });
var AppComponent = (function () {
    function AppComponent() {
        this.title = "百度地图";
        this.height = platform_1.screen.mainScreen.heightPixels;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.dump(this.mapview.nativeElement.mapType);
    };
    AppComponent.prototype.show1 = function () {
        var str = "";
        str += "纬度：" + this.mapview.nativeElement.infos.latitude + "\r\n";
        str += "经度：" + this.mapview.nativeElement.infos.longitude + "\r\n";
        alert(str);
    };
    AppComponent.prototype.show2 = function () {
        var str = "";
        str += "省：" + this.mapview.nativeElement.infos.province + "\r\n";
        str += "市区：" + this.mapview.nativeElement.infos.city + "\r\n";
        str += "县：" + this.mapview.nativeElement.infos.district + "\r\n";
        str += "街道：" + this.mapview.nativeElement.infos.street + "\r\n";
        str += this.mapview.nativeElement.infos.netType;
        alert(str);
    };
    __decorate([
        core_1.ViewChild('mapview'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "mapview", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            styleUrls: ["app.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map