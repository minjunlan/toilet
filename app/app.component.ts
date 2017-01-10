import { Component,ElementRef,ViewChild } from "@angular/core";
import {registerElement} from 'nativescript-angular';
import { screen } from 'platform';

var bdmap = require('./bdmap/bdmap');

//加载百度mapview视图
registerElement('MapView',()=>bdmap.BDMapView);

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
})
export class AppComponent  {

    public height:number;
    public title = "百度地图";
    @ViewChild('mapview') mapview: ElementRef;
    constructor(){
        this.height = screen.mainScreen.heightPixels;
    }

    show(view:ElementRef){
        console.log(this.mapview.nativeElement.mapType);
    }

}
