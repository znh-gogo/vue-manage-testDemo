<template>

<div>

  <div id="container" style="width:100%;height:500px;"></div>

</div>
</template>

<!--<script charset="utf-8" ></script>-->
<script>

  export default{
    mounted() {
      this.init();
    },
    methods:{
      init() {
        //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
        //设置地图中心点
        var myLatlng = new qq.maps.LatLng(39.916527,116.397128);
        //定义工厂模式函数
        var myOptions = {
          zoom: 8,               //设置地图缩放级别
          center: myLatlng,      //设置中心点样式
          mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
        }
        //获取dom元素添加地图信息
        var map = new qq.maps.Map(document.getElementById("container"), myOptions);
      }
    }
  }

</script>

<style scoped>
  .bm-view {
    width: 100%;
    height: 300px;
  }
</style>
