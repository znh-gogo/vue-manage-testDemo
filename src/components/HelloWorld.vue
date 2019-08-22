<template>
  <div style="height: 100%;background-size: 100%">
  <headers>
    <template slot="b" slot-scope="gets">这里是插槽b{{gets.todo}}</template>
    <template slot="a">这里是插槽a</template>
  </headers>
      <div class="layout">
        <Row type="flex">
          <i-col span="5" class="layout-menu-left">
            <Menu active-key="1-2" theme="dark" width="auto" :open-keys="['1']">
              <div class="layout-logo-left"></div>
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  导航一
                </template>
                <Menu-item name="1-1" to="/main/news">新闻咨询</Menu-item>
                <Menu-item name="1-2" to="/main/newsDetail">新闻详情</Menu-item>
                <Menu-item name="1-3" to="/main/weather">天气预报</Menu-item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  导航二
                </template>
                <Menu-item name="2-1" to="/main/interview">用户调查</Menu-item>
                <Menu-item name="2-2" to="/main/chart">图表测试</Menu-item>
                <Menu-item name="2-3" to="/main/baiduMap">百度地图</Menu-item>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  导航三
                </template>
                <Menu-item name="3-1" to="/main/novelDetail">小说搜索</Menu-item>
                <Menu-item name="3-2" to="/main/hotJoke">热门段子</Menu-item>
              </Submenu>
              <Submenu name="4">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  用户列表
                </template>
                <Menu-item name="4-1" to="/main/UserList">用户列表</Menu-item>
                <Menu-item name="4-2" to="/main/editList">编辑列表</Menu-item>
                <Menu-item name="4-3" to="/main/numList">可视化列表</Menu-item>
                <Menu-item name="4-4" to="/main/imgWall">照片墙</Menu-item>

              </Submenu>
            </Menu>
          </i-col>
          <i-col span="19">
            <div class="layout-header">
              <div style="padding: 10px 10px;font-size: 18px">慢慢进步，总会有结果.</div>
            </div>
            <div class="layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
              </Breadcrumb>
            </div>
            <div class="layout-content">
              <div class="layout-content-main">
                <router-view></router-view>
              </div>
            </div>
            <div class="layout-copy">
              2011-2016 &copy; TalkingData
            </div>
          </i-col>
        </Row>
      </div>
  </div>
</template>

<script>
import headers from './headers'
export default {
  name: 'HelloWorld',
  data () {
    return {
      spanLeft: 5,
      spanRight: 19
    }
  },

  components: {
    headers
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    }
  },
  mounted () {
    // console.log(this.props.gets)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;

  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 750px;
    background-size: 100%;
    height: 100%;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
    overflow: hidden;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
</style>
