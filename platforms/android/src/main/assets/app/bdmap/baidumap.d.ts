declare module com {
    module baidu {
        module mapapi{
            export class SDKInitializer {
                public static initialize(context:any);
            }
            module map{
                export class MapView {
                    constructor(context:any);
                    getMap(): com.baidu.mapapi.map.BaiduMap;
                }
                export class BaiduMap {
                    public static MAP_TYPE_NORMAL:any;  //普通地图  
                    public static MAP_TYPE_SATELLITE:any; //卫星地图  
                    public static MAP_TYPE_NONE:any; //空白地图
                    
                    setMapType(type:any);
                    addOverlay(overlay:com.baidu.mapapi.map.OverlayOptions):com.baidu.mapapi.map.Overlay;
                    setMapStatus(option:com.baidu.mapapi.map.MapStatusUpdate);
                }
                export abstract class OverlayOptions {

                }
                export abstract class Overlay{

                }
                export class MarkerOptions extends com.baidu.mapapi.map.OverlayOptions {
                    constructor();
                    position(latlng:com.baidu.mapapi.model.LatLng):com.baidu.mapapi.map.MarkerOptions;
                    icon(icon:any):com.baidu.mapapi.map.MarkerOptions;
                }
                export class MapStatusUpdate {
                    
                }
                export class MapStatusUpdateFactory {
                    constructor();

                    //设置地图新中心点
                    public static newLatLng(latlng:com.baidu.mapapi.model.LatLng):com.baidu.mapapi.map.MapStatusUpdate;

                    //设置显示在屏幕中的地图地理范围
                    public static newLatLngBounds(bound:com.baidu.mapapi.model.LatLngBounds) :com.baidu.mapapi.map.MapStatusUpdate;
                    
                    //设置显示在规定宽高中的地图地理范围
                    public static newLatLngBounds(bound:com.baidu.mapapi.model.LatLngBounds, width:number, height:number);

                    //设置地图中心点以及缩放级别
                    public static newLatLngZoom(latlng:com.baidu.mapapi.model.LatLng,zoom:number):com.baidu.mapapi.map.MapStatusUpdate;

                    //按像素移动地图中心点
                    public static scrollBy(xPixel:number, yPixel:number):com.baidu.mapapi.map.MapStatusUpdate;

                    //根据给定增量缩放地图级别
                    public static zoomBy(amount:number):com.baidu.mapapi.map.MapStatusUpdate;

                    //根据给定增量以及给定的屏幕坐标缩放地图级别
                    public static zoomBy(amount:number,focus:android.graphics.Point):com.baidu.mapapi.map.MapStatusUpdate;

                    //放大地图缩放级别
                    public static zoomIn():com.baidu.mapapi.map.MapStatusUpdate;

                    //缩小地图缩放级别
                    public static zoomOut():com.baidu.mapapi.map.MapStatusUpdate;                

                    public static zoomTo(zoom:number):com.baidu.mapapi.map.MapStatusUpdate;
                }
                export class BitmapDescriptor {
                    constructor(imgsource:android.graphics.Bitmap);
                }
                export class BitmapDescriptorFactory {
                    public static fromFile(path:string):com.baidu.mapapi.map.BitmapDescriptor;
                    public static fromBitmap(bitm:android.graphics.Bitmap):com.baidu.mapapi.map.BitmapDescriptor;
                    decodeStream()
                }
            }
            module model {
                export class LatLng {
                    constructor(lat:number,lng:number);
                }
                export class LatLngBounds {
                    constructor(v1:LatLng,v2:LatLng);
                }
            }
        }
    }
}