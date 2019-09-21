<template>

<div>

  <div id="container" style="width:100%;height:500px;"></div>

</div>
</template>

<!--<script charset="utf-8" ></script>-->
<script>
  import {location} from '../common/map'
  export default{
    data(){
      return{
          lat:'',
          lng:'',
          province:'',
          city:'',
          district:''
      }
    },
    mounted() {
          this.getLocation(); // 调用获取地理位置
    },
    methods:{
      init() {
        //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
        //设置地图中心点
        // var myLatlng = new qq.maps.LatLng(39.916527,116.397128);
        var myLatlng = new qq.maps.LatLng(this.lat,this.lng);
        console.log(myLatlng)
        //定义工厂模式函数
        var myOptions = {
          zoom: 15,               //设置地图缩放级别
          center: myLatlng,      //设置中心点样式
          mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
        }
        //获取dom元素添加地图信息
        var map = new qq.maps.Map(document.getElementById("container"), myOptions);
      },
      /**获取地图定位*/
    getLocation() {
      let _that = this;
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", result => {
          console.log(result)
        _that.lat = result.position.lat;
        _that.lng = result.position.lng;
        _that.province = result.addressComponent.province;
        _that.city = result.addressComponent.city;
        _that.district = result.addressComponent.district;
        this.init();
      })
          
    },
    }
  }

</script>

<style scoped>
  .bm-view {
    width: 100%;
    height: 300px;
  }
</style>
