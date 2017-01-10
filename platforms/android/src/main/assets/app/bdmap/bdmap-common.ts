import {Property, PropertyMetadataSettings, PropertyChangeData} from "ui/core/dependency-observable";
import view = require("ui/core/view");
import definition = require("bdmap/bdmap");
import proxy = require("ui/core/proxy");
import formattedString = require("text/formatted-string");
import observable = require("data/observable");
import * as weakEventListenerModule from "ui/core/weak-event-listener";
import {WhiteSpace} from "ui/enums";

import {isAndroid} from "platform";

let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

const textProperty      = new Property("text","BDMapView",new proxy.PropertyMetadata("", AffectsLayout));
const textWrapProperty  = new Property("textWrap","BDMapView",new proxy.PropertyMetadata(false, AffectsLayout));
const formattedTextProperty  = new Property("formattedText","BDMapView",new proxy.PropertyMetadata("", AffectsLayout));
const mapTypeProperty = new Property("mapType","BDMapView",new proxy.PropertyMetadata(false, AffectsLayout));

function onTextPropertyChanged(data: PropertyChangeData) {
    var mapview = <BDMapView>data.object;
    mapview._onTextPropertyChanged(data);

}
(<proxy.PropertyMetadata>textProperty.metadata).onSetNativeValue = onTextPropertyChanged;

function onMapTypePropertyChanged(data: PropertyChangeData) {
    var mapview = <BDMapView>data.object;
    mapview._onMapTypePropertyChanged(data);

}
(<proxy.PropertyMetadata>mapTypeProperty.metadata).onSetNativeValue = onMapTypePropertyChanged;
export class BDMapView extends view.View implements definition.BDMapView {

        public static textProperty = textProperty;
        public static textWrapProperty = textWrapProperty;
        public static formattedTextProperty = formattedTextProperty;
        public static mapTypeProperty = mapTypeProperty;
        public static tapEvent = 'tap';
        BaiduMap: any /* com.baidu.mapapi.map.BaiduMap */;

        get text(): string {
            return this._getValue(BDMapView.textProperty);
        }

        set text(value: string) {
            this._setValue(BDMapView.textProperty, value);
        }

        get textWrap(): boolean {
            return this._getValue(BDMapView.textWrapProperty);
        }

        set textWrap(value: boolean) {
            this._setValue(BDMapView.textWrapProperty,value);
        }

        get mapType(): boolean {
            return this._getValue(BDMapView.mapTypeProperty);
        }

        set mapType(value: boolean) {
            this._setValue(BDMapView.textWrapProperty,value);
        }

        get formattedText(): formattedString.FormattedString {
            return this._getValue(BDMapView.formattedTextProperty);
        }

        get whiteSpace(): string {
            return this.style.whiteSpace;
        }

        set whiteSpace(value: string) {
            this.style.whiteSpace = value;
        }

        public _onTextPropertyChanged(data: PropertyChangeData) {
            //
        }
  
        public _onMapTypePropertyChanged(data: PropertyChangeData){

        }

        _addChildFromBuilder(name: string, value: any){
            formattedString.FormattedString.addFormattedStringToView(this, name, value);
        }
}


