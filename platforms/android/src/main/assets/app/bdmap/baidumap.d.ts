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
                    showZoomControls(value:boolean);
                }
                export class BaiduMap {
                    public static MAP_TYPE_NORMAL:any;  //普通地图  
                    public static MAP_TYPE_SATELLITE:any; //卫星地图  
                    public static MAP_TYPE_NONE:any; //空白地图
                    
                    setMapType(type:any);
                    addOverlay(overlay:com.baidu.mapapi.map.OverlayOptions):com.baidu.mapapi.map.Overlay;
                    clear();
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
            module search {
                module poi {
                    export class PoiSearch {
                        public static newInstance():PoiSearch;
                        public searchInBound(option:PoiBoundSearchOption):boolean;
                        public searchInCity(option:PoiCitySearchOption):boolean;
                        public searchNearby(option:PoiNearbySearchOption):boolean;
                        public searchPoiDetail(option:PoiDetailSearchOption):boolean;
                        public searchPoiIndoor(option:PoiIndoorOption):boolean;
                        public setOnGetPoiSearchResultListener(listener:OnGetPoiSearchResultListener);
                        public destroy();
                    }
                    export class PoiBoundSearchOption {

                    }
                    export class PoiCitySearchOption {
                        city(value:string):PoiCitySearchOption;
                        isReturnAddr(value:boolean):PoiCitySearchOption;
                        keyword(value:string):PoiCitySearchOption;
                        pageCapacity(pageCapacity:number):PoiCitySearchOption;
                        pageNum(pageNum:number):PoiCitySearchOption;
                    }   
                    export class PoiNearbySearchOption {
                        location(location:com.baidu.mapapi.model.LatLng):PoiNearbySearchOption;
                        keyword(value:string):PoiNearbySearchOption;
                        pageCapacity(pageCapacity:number):PoiNearbySearchOption;
                        pageNum(pageNum:number):PoiNearbySearchOption;
                        radius(radius:number):PoiNearbySearchOption;
                    }    
                    export class PoiDetailSearchOption {

                    }     
                    export class PoiIndoorOption {

                    }  
                    export class PoiResult {

                    }
                    export class PoiDetailResult {

                    }
                    export class PoiIndoorResult {

                    }   
                    export interface IOnGetPoiSearchResultListener  {
                        onGetPoiResult(result:PoiResult);
                        onGetPoiDetailResult(result:PoiDetailResult);
                        onGetPoiIndoorResult(result:PoiIndoorResult);
                    }
                    export class OnGetPoiSearchResultListener implements IOnGetPoiSearchResultListener {
                        constructor(implemention: IOnGetPoiSearchResultListener);
                        onGetPoiResult(result:PoiResult);
                        onGetPoiDetailResult(result:PoiDetailResult);
                        onGetPoiIndoorResult(result:PoiIndoorResult);
                    }
                }
                module route {
                    export class RoutePlanSearch {
                        public static  newInstance():RoutePlanSearch;
                        public setOnGetRoutePlanResultListener(listener:OnGetRoutePlanResultListener);
                        public transitSearch(option:WalkingRoutePlanOption):boolean;//发起换乘路线规划
                        public masstransitSearch(option:MassTransitRoutePlanOption):boolean;//跨城公共交通路线
                        public walkingIndoorSearch(option:IndoorRoutePlanOption):boolean;//发起室内路线规划
                        public walkingSearch(option:WalkingRoutePlanOption):boolean;//发起步行路线规划
                        public drivingSearch(option:DrivingRoutePlanOption):boolean;//发起驾车路线规划
                        public bikingSearch(option:BikingRoutePlanOption):boolean;//发起骑行路线规划                        
                    }
                    export class OnGetRoutePlanResultListener implements IOnGetRoutePlanResultListener{
                        constructor(implements:IOnGetRoutePlanResultListener);

                        onGetBikingRouteResult( result:BikingRouteResult );//骑行路线结果回调
                        onGetDrivingRouteResult( result:DrivingRouteResult );//驾车路线结果回调
                        onGetIndoorRouteResult( result:IndoorRouteResult );//室内路线规划回调
                        onGetMassTransitRouteResult( result:MassTransitRouteResult );//跨城公共交通路线结果回调
                        onGetTransitRouteResult( result:TransitRouteResult );//换乘路线结果回调 
                        onGetWalkingRouteResult( result:WalkingRouteResult )//步行路线结果回调
                    }
                    export interface IOnGetRoutePlanResultListener {
                        onGetBikingRouteResult( result:BikingRouteResult );//骑行路线结果回调
                        onGetDrivingRouteResult( result:DrivingRouteResult );//驾车路线结果回调
                        onGetIndoorRouteResult( result:IndoorRouteResult );//室内路线规划回调
                        onGetMassTransitRouteResult( result:MassTransitRouteResult );//跨城公共交通路线结果回调
                        onGetTransitRouteResult( result:TransitRouteResult );//换乘路线结果回调 
                        onGetWalkingRouteResult( result:WalkingRouteResult )//步行路线结果回调
                    }
                    export class PlanNode {
                        constructor(inver:android.os.Parcel);
                        public static withLocation(location:com.baidu.mapapi.model.LatLng):PlanNode;
                        public static withCityNameAndPlaceName(city:string,
                                placeName:string):PlanNode;
                        public static withCityCodeAndPlaceName(city:number,
                                placeName:string):PlanNode;
                    }
                    export class BikingRouteResult{

                    }
                    export class DrivingRouteResult{

                    }
                    export class IndoorRouteResult{

                    }
                    export class MassTransitRouteResult{

                    }
                    export class TransitRouteResult{

                    }
                    export class WalkingRouteResult{
                        describeContents():number;
                        getSuggestAddrInfo():SuggestAddrInfo;
                        getRouteLines():Array<WalkingRouteLine>;
                    }
                    export class WalkingRoutePlanOption {
                        public from( from:PlanNode ): WalkingRoutePlanOption;
                        public to( to:PlanNode ): WalkingRoutePlanOption;
                    }
                    export class TransitRoutePlanOption {

                    }
                    export class MassTransitRoutePlanOption {

                    }
                    export class IndoorRoutePlanOption {

                    }
                    export class DrivingRoutePlanOption {

                    }     
                    export class BikingRoutePlanOption {

                    }     
                    export class SuggestAddrInfo {

                    }   
                    export class WalkingRouteLine {
                        getAllStep():Array<WalkingRouteLine.WalkingStep>;
                    }  
                    module WalkingRouteLine {
                        export class WalkingStep {

                        }
                    }                          
                }
            }
        }
        module location {
            export class LocationClient{
                constructor(context:android.content.Context);

                public registerLocationListener(listener:any);
                public setLocOption(locOption:LocationClientOption);
                public getLocOption():LocationClientOption; //目前的LocationClientOption 设置
                public start();
                public stop();
                public requestNotifyLocation();
                public requestOfflineLocation(): number; //离线定位请求 0：离线定位请求成功 1:service没有启动 2：无监听函数
            }
            export interface IBDLocationListener {
                onReceiveLocation(location:BDLocation);
            }
            export class BDLocationListener implements IBDLocationListener {
                constructor(implementation: com.baidu.location.IBDLocationListener);
                onReceiveLocation(location:BDLocation);
            }
            export class BDLocation {
                constructor();
                constructor(x:BDLocation);  
                constructor(JSONStr:string);
                public static BDLOCATION_BD09_TO_GCJ02:string; //
                public static BDLOCATION_BD09LL_TO_GCJ02 :string; // 
                public static BDLOCATION_GCJ02_TO_BD09 :string; // 
                public static BDLOCATION_GCJ02_TO_BD09LL :string; // 
                public static BDLOCATION_WGS84_TO_GCJ02  :string; // 
                
                public static GPS_ACCURACY_BAD:number; //GPS 质量判断差
                public static GPS_ACCURACY_GOOD:number; //GPS 质量判断好
                public static GPS_ACCURACY_MID:number; //GPS 质量判断中等
                public static GPS_ACCURACY_UNKNOWN:number; //GPS 质量判断未知

                public static INDOOR_LOCATION_NEARBY_SURPPORT_TRUE:number; //该区域附近（40m）支持室内定位
                public static INDOOR_LOCATION_SOURCE_BLUETOOTH:number; //支持蓝牙室内定位
                public static INDOOR_LOCATION_SOURCE_MAGNETIC:number; //支持地磁室内定位
                public static INDOOR_LOCATION_SOURCE_SMALLCELLSTATION:number; //支持小基站室内定位
                public static INDOOR_LOCATION_SOURCE_UNKNOWN:number; //未知类型
                public static INDOOR_LOCATION_SOURCE_WIFI:number; //支持wifi室内定位
                public static INDOOR_LOCATION_SURPPORT_FALSE:number; //该区域不支持室内定位
                public static INDOOR_LOCATION_SURPPORT_TRUE:number; //该区域支持室内定位
                public static INDOOR_NETWORK_STATE_HIGH:number; //该室内定位位置网络状况优
                public static INDOOR_NETWORK_STATE_LOW:number; //该室内定位位置网络质量差
                public static INDOOR_NETWORK_STATE_MIDDLE:number; //该室内定位位置网络状况良

                public static LOCATION_WHERE_IN_CN:number;//定位位置在国内
                public static LOCATION_WHERE_OUT_CN:number;//定位位置在国外
                public static LOCATION_WHERE_UNKNOW:number;//定位位置未知

                public static OPERATORS_TYPE_MOBILE:number;//中国移动运营商
                public static OPERATORS_TYPE_TELECOMU:number;//中国电信运营商
                public static OPERATORS_TYPE_UNICOM:number;//中国联通运营商
                public static OPERATORS_TYPE_UNKONW:number;//未知的运营商

                
                public static TypeCacheLocation:number;//定位结果描述：缓存定位结果，目前该功能已经取消，由离线定位来代替
                public static TypeCriteriaException:number;//定位结果描述：无法定位结果，一般由于定位SDK内部检测到没有有效的定位依据，比如在飞行模式下就会返回该定位类型， 一般关闭飞行模式或者打开wifi就可以再次定位成功
                public static TypeGpsLocation:number;//定位结果描述：GPS定位结果 ，GPS定位结果需要手机打开GPS开关或者设置手机为高精度定位模式，GPS定位结果需要一定的搜星时间才能获得， 连接网络的情况下会加速GPS定位速度
                public static TypeNetWorkException:number;//定位结果描述：网络连接失败，一般由于手机无有效网络连接导致，请检查手机是否能够正常上网
                public static TypeNone:number;//定位结果描述：无效定位结果，一般由于定位SDK内部逻辑异常时出现
                public static TypeOffLineLocation:number;//定位结果描述：离线定位成功结果 ，一般由于手机网络不通，会请求定位SDK内部的离线定位策略，这种定位也属于有效的定位结果
                public static TypeOffLineLocationFail:number;//定位结果描述：离线定位失败结果 ，一般由于手机网络不通，会请求定位SDK内部的离线定位策略但失败了，这种定位也属于无效的定位结果
                public static TypeOffLineLocationNetworkFail:number;//定位结果描述：离线定位成功结果 ，已取消
                public static TypeServerCheckKeyError:number;//定位结果描述：server校验KEY失败，请确认KEY合法
                public static TypeServerDecryptError:number;//定位结果描述：server解密定位请求失败，请检查SO文件是否加载正常
                public static TypeServerError:number;//定位结果描述：server定位失败，没有对应的位置信息

                public static USER_INDDOR_TRUE:number;//定位在室内
                public static USER_INDOOR_FALSE:number;//定位在室外
                public static USER_INDOOR_UNKNOW:number;//定位是否在室内未知

                public getLocType():number;
                public getLatitude():number;
                public getLongitude():number;
                public getPoiList():Array<Poi>; //仅在开发者设置需要POI信息时才会返回，在网络不通或无法获取时有可能返回null
                public setPoiList(list:Poi);
                public isCellChangeFlag():boolean;//仅在getloctype == TypeOffLineLocationNetworkFail起作用。 相比上次请求基站是否发生变化
                public getUserIndoorState():number;//返回用户室内外状态，#USER_INDDOR_TRUE,#USER_INDOOR_FALSE,#USER_INDOOR_UNKNOW
                public setUserIndoorState(value:number);//设置用户室内外状态
                public getIndoorLocationSurpport():number;//返回是否支持室内定位
                public setIndoorLocationSurpport(value:number);//设置是否支持室内定位
                public getIndoorLocationSurpportBuidlingName():string;//返回支持室内定位的building名称
                public getIndoorLocationSurpportBuidlingID():string;//返回支持室内定位的buildingid
                public getIndoorNetworkState():number;//返回室内定位网络状态
                public setIndoorNetworkState(value:number);//室内定位网络状态
                public getIndoorLocationSource():number;//返回支持的室内定位类型
                public setIndoorLocationSource(value:number);//室内定位类型
                public getTime():string;//server返回的当前定位时间
                public setTime(value:string);//server当前定位时间
                public getLatitude():number;//获取纬度坐标
                public setLatitude(value:number);//纬度坐标
                public getLongitude():number;//获取经度坐标
                public setLongitude(value:number);//经度坐标
                public getAltitude():number;//获取高度信息，目前只有是GPS定位结果时或者设置LocationClientOption.setIsNeedAltitude(true)时才有效，单位米
                public setAltitude(value:number);//高度信息
                public getSpeed():number;//获取速度，仅gps定位结果时有速度信息，单位公里/小时，默认值0.0f
                public setSpeed(value:number);//获取速度
                public getRadius():number;//获取定位精度,默认值0.0f
                public setRadius(value:number);//定位精度
                public getCoorType():string;//获取所用坐标系，以locationClientOption里设定的坐标系为准(wgs84,gcj02,bd09,bd09ll)
                public setCoorType(value:string);//坐标系
                public getSpeed():number;//获取速度，仅gps定位结果时有速度信息，单位公里/小时，默认值0.0f
                public setSpeed(value:number);//获取速度
                public setAddrStr(value:string);//
                public hasAltitude():boolean;//是否包含高度信息     
                public hasSpeed():boolean;//是否包含速度信息             
                public hasRadius():boolean;//是否包含半径信息
                public getLocType():number;//获取定位类型:
                public setLocType(value:number);//获取定位类型:                              
                public getLocTypeDescription():string;//获取定位类型相关描述信息:
                public setLocTypeDescription(value:string);//获取定位类型相关描述信息: 
                public getSatelliteNumber():number;//gps定位结果时，获取gps锁定用的卫星数
                public setSatelliteNumber(value:number);//gps定位结果时，获取gps锁定用的卫星数   
                public getDirection():number;//gps定位结果时，行进的方向，单位度
                public setDirection(value:number);//gps定位结果时，行进的方向，单位度  
                public hasSateNumber():boolean;//  
                public hasAddr():boolean;//是否有地址信息     
                public getAddrStr():string;//获取详细地址信息
                public getProvince():string;//获取省份    
                public getCity():string;//获取城市
                public getCityCode():string;//获取城市编码     
                public getCountry():string;//获取国家
                public getCountryCode():string;//获取国家编码 
                public getDistrict():string;//获取区/县信息  
                public getStreet():string;//获取街道信息  
                public getStreetNumber():string;//获取街道号码   
                public getFloor():string;//获取楼层信息，目前只在百度支持室内定位的地方有返回，默认null 
                public setFloor(value:string);//楼层信息，目前只在百度支持室内定位的地方有返回，默认null                                                       
                public isIndoorLocMode():boolean;//是否处于室内定位模式
                public setIndoorLocMode(indoormode:boolean);
                public getLocationWhere():number;//获取当前定位是国内还是国外
                public setLocationWhere(value:number);
                public getGpsAccuracyStatus():number;//如果是GPS位置，获得当前由百度自有算法判断的GPS质量
                public setGpsAccuracyStatus(value:number);    
                public getNetworkLocationType():string;//在网络定位结果的情况下，获取网络定位结果是通过基站定位得到的还是通过wifi定位得到的还是GPS得结果            
                public setNetworkLocationType(value:number);
                public getOperators():number;//获取运营商信息
                public setOperators(value:number);
            }
            export class LocationClientOption{
                public static iLocationMode:com.baidu.location.LocationClientOption.LocationMode;
                public setLocationMode( mode: com.baidu.location.LocationClientOption.LocationMode);
                public setScanSpan(scanSpan:number);
                public setOpenGps(value:boolean);
                public setIsNeedAddress(value:boolean);
                public setIsNeedLocationPoiList(value:boolean);
                public SetIgnoreCacheException(value:boolean);
                public setEnableSimulateGps(value:boolean);
                public setIsNeedAltitude(value:boolean);
                public setIsNeedLocationPoiList(value:boolean);
                public setEnableSimulateGps(value:boolean);
                public setIsNeedLocationDescribe(value:boolean);
                public setNeedDeviceDirect(value:boolean);
                public setIsNeedAddress(value:boolean);
                public setCoorType(value:string);
            }
            export class Poi {
                constructor(id:string,name:string,rank:number);
                public getId():string;
                public getRank():number;
                public getName():string;
                public describeContents():number;
            }
            module LocationClientOption {
                export class LocationMode {
                    static Battery_Saving;
                    static Device_Sensors;
                    static Hight_Accuracy;
                }
            }
        }
    }
}