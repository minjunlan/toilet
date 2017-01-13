declare module "bdmap" {
    import observable = require("data/observable");
    import dependencyObservable = require("ui/core/dependency-observable");
    import view = require("ui/core/view");
    import formattedString = require("text/formatted-string");

    export class BDMapView extends view.View implements formattedString.FormattedStringView, view.AddChildFromBuilder {

        public static textProperty: dependencyObservable.Property;
        public static textWrapProperty: dependencyObservable.Property;

        public static tapEvent: string;

        android: any /* com.baidu.mapapi.map.MapView */;
        
        text: string;
        textWrap: boolean;
        mapType:boolean;

        infos:any;


        whiteSpace: string;
        formattedText: formattedString.FormattedString;
        _addChildFromBuilder(name: string, value: any): void;
    }


}