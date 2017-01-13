"use strict";
var dependency_observable_1 = require("ui/core/dependency-observable");
var view = require("ui/core/view");
var proxy = require("ui/core/proxy");
var formattedString = require("text/formatted-string");
var platform_1 = require("platform");
var AffectsLayout = platform_1.isAndroid ? dependency_observable_1.PropertyMetadataSettings.None : dependency_observable_1.PropertyMetadataSettings.AffectsLayout;
var textProperty = new dependency_observable_1.Property("text", "BDMapView", new proxy.PropertyMetadata("", AffectsLayout));
var textWrapProperty = new dependency_observable_1.Property("textWrap", "BDMapView", new proxy.PropertyMetadata(false, AffectsLayout));
var formattedTextProperty = new dependency_observable_1.Property("formattedText", "BDMapView", new proxy.PropertyMetadata("", AffectsLayout));
var mapTypeProperty = new dependency_observable_1.Property("mapType", "BDMapView", new proxy.PropertyMetadata(false, AffectsLayout));
function onTextPropertyChanged(data) {
    var mapview = data.object;
    mapview._onTextPropertyChanged(data);
}
textProperty.metadata.onSetNativeValue = onTextPropertyChanged;
function onMapTypePropertyChanged(data) {
    var mapview = data.object;
    mapview._onMapTypePropertyChanged(data);
}
mapTypeProperty.metadata.onSetNativeValue = onMapTypePropertyChanged;
var BDMapView = (function (_super) {
    __extends(BDMapView, _super);
    function BDMapView() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(BDMapView.prototype, "text", {
        get: function () {
            return this._getValue(BDMapView.textProperty);
        },
        set: function (value) {
            this._setValue(BDMapView.textProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BDMapView.prototype, "textWrap", {
        get: function () {
            return this._getValue(BDMapView.textWrapProperty);
        },
        set: function (value) {
            this._setValue(BDMapView.textWrapProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BDMapView.prototype, "mapType", {
        get: function () {
            return this._getValue(BDMapView.mapTypeProperty);
        },
        set: function (value) {
            this._setValue(BDMapView.textWrapProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BDMapView.prototype, "formattedText", {
        get: function () {
            return this._getValue(BDMapView.formattedTextProperty);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BDMapView.prototype, "whiteSpace", {
        get: function () {
            return this.style.whiteSpace;
        },
        set: function (value) {
            this.style.whiteSpace = value;
        },
        enumerable: true,
        configurable: true
    });
    BDMapView.prototype._onTextPropertyChanged = function (data) {
        //
    };
    BDMapView.prototype._onMapTypePropertyChanged = function (data) {
    };
    BDMapView.prototype._addChildFromBuilder = function (name, value) {
        formattedString.FormattedString.addFormattedStringToView(this, name, value);
    };
    BDMapView.textProperty = textProperty;
    BDMapView.textWrapProperty = textWrapProperty;
    BDMapView.formattedTextProperty = formattedTextProperty;
    BDMapView.mapTypeProperty = mapTypeProperty;
    BDMapView.tapEvent = 'tap';
    return BDMapView;
}(view.View));
exports.BDMapView = BDMapView;
var MyInfos = (function () {
    function MyInfos() {
    }
    return MyInfos;
}());
exports.MyInfos = MyInfos;
//# sourceMappingURL=bdmap-common.js.map