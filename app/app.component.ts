import { Component,ElementRef,ViewChild,OnInit } from "@angular/core";
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
export class AppComponent implements OnInit {

    public height:number;
    public title = "百度地图";
    @ViewChild('mapview') mapview: ElementRef;

    constructor(){
        this.height = screen.mainScreen.heightPixels;
        
    }

    ngOnInit(){
        console.dump(this.mapview.nativeElement.mapType);
    }

    show1(){
        let str = "";
        str += "纬度："+ this.mapview.nativeElement.infos.latitude+"\r\n";
        str += "经度："+ this.mapview.nativeElement.infos.longitude+"\r\n";
        alert(str);
    }

    show2(){
        let str = "";
        str += "省："+ this.mapview.nativeElement.infos.province+"\r\n";
        str += "市区："+ this.mapview.nativeElement.infos.city+"\r\n";
        str += "县："+ this.mapview.nativeElement.infos.district+"\r\n";
        str += "街道："+ this.mapview.nativeElement.infos.street+"\r\n";
        str += this.mapview.nativeElement.infos.netType;
        alert(str);
    }
}
