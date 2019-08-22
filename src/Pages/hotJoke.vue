<template>
	<div class="hotJoke">
<!-- 		<Col class="demo-spin-col" span="8" >
            <Spin fix>加载中...</Spin>
        </Col> -->
	    <Tooltip placement="top" class="fresh" style="right: 55px">
        	<Icon type="ios-sync" class="fresh" v-if="freshFlag===true" @click="freshs" />
        <div slot="content">
            <p>点击刷新</p>
        </div>
    	</Tooltip>
        <Col class="demo-spin-col" span="8" v-if="loadFlag===true">
            <Spin fix>
                <Icon type="ios-loading" size=50 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </Col>
		<h1>热门段子推荐</h1>
		<div class="boxs" v-for="(item,index) in hotList">
			<div class="top">
				<img :src="item.profile_image">
				<div class="content">
					<p>{{item.text}}</p>
					<div class="info">
						<span class="names">{{item.screen_name}}</span>
						<span class="times">{{item.passtime}}</span>
					</div>
				</div>
			</div>
			<video :src="item.videouri" controls="controls" v-if="item.videouri!==null" class="videos"></video>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
	name: 'hotJoke',
	data (){
		return {
			hotList:[],
			loadFlag:false,
			freshFlag:false
		}
	},
	methods:{
		getHot(){
			this.loadFlag=true
			axios.post("https://www.apiopen.top/satinApi?type=1&page=1").then((res)=>{
				if (res.data.code===200) {
					this.hotList=res.data.data
					this.loadFlag=false
					window.scrollTo(0,0)
					// console.log(this.hotList)
				}
			}).catch((err)=>{
				console.log(err)
			})
		},
		  scrollToTop () {
		    let that = this
		    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		    that.scrollTop = scrollTop
		    if (that.scrollTop > 60) {
		      that.freshFlag = true
		    } else {
		      that.freshFlag = false
		    }
		},
		freshs(){
			this.getHot()
		}
	},
	mounted(){
  		window.addEventListener('scroll', this.scrollToTop)
		this.getHot()
	},
	destroyed () {
	  window.removeEventListener('scroll', this.scrollToTop)
	}

}
</script>

<style type="text/css" scoped>
.hotJoke{
	text-align: center;
	padding: 20px;
	position: relative;
}
.boxs{
	width: 800px;
	height:100%;
	/*margin-left: 150px;*/
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
	/*margin-top: 5px;*/
  margin: 0 auto;
}
.top{
	display: flex;
}
.top img{
	width: 100px;
	height: 100px;
}
.content{
	margin-left: 20px;
	/*text-align: left;*/

}
.content p {
	font-size: 20px;
	margin-top: 20px;
	margin-right: 10px;
}
.info{

	display: flex;
  /*flex-direction: column;*/
	justify-content: space-between;
	font-size: 14px;
	color: #ccc;
	/*align-content: bottom;*/
}
.videos{
	/*float: right;*/
	/*vertical-align: top;*/
	width: 250px;
	height: 190px;
}
.demo-spin-col{
	/*height: 100px;*/
	position: fixed;
	left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
	color: #fff;
	/*border: 1px solid #eee;*/
	z-index: 3
}
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
.fresh{
	font-size: 30px;
	position: fixed;
	right: 40px;
	cursor: pointer;
	color: #000;
}
</style>
