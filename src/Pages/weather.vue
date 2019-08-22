<template>
	<div class="weather">
		<h1 style="margin-top: 10px">天气预报查询</h1>
		<Input class="search" search  enter-button placeholder="请输入城市名字" @on-search="go" />
		<div class="contents" v-if="checkFlag===true">
			<div class="weathBox">
				<div class="wTop">
					<h2>{{cityName}}</h2>
				</div>
				<div class="detail">
					<div style="margin-left: 10px">
						<span>现在的温度：<h3 style="display: inline-block;">{{wendu}}</h3>°</span>
					</div>
					<div style="margin-left: 10px">
						<span>流感情况：<h3 style="display: inline-block;">{{ganmao}}</h3></span>
					</div>
				</div>
				<div class="future" v-for="item in forecast">
					<div style="margin-left: 10px">
						<span>日期:{{item.date}}</span>--<span>天气:{{item.type}}</span>--<span>风向:{{item.fengxiang}}</span>
					</div>
					<div style="margin-left: 10px">
						<span>{{item.high}}</span>-<span>{{item.low}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
	name: 'weather',
	data (){
		return {
			weatherList:[],
			cityName:'',
			wendu:'',
			ganmao:'',
			forecast:[],
			checkFlag:false
		}
	},
	methods:{
		postWeather(names){
		 axios.post('https://www.apiopen.top/weatherApi?city='+names).then((res) => {
        // console.log(res.data.data.toutiao)
        if (res.data.code===200) {
	        this.weatherList = res.data.data
	        this.cityName=res.data.data.city
	        this.wendu=res.data.data.wendu
	        this.ganmao=res.data.data.ganmao
	        this.forecast=res.data.data.forecast
	        this.checkFlag=true
        } else if (res.data.code===201) {
        	this.$Message.error(res.data.msg)
        	this.checkFlag=false
        }


        // console.log(this.weatherList)
      }).catch((err) => {
        console.log(err)
      })
		},
		go(names){
			// this.checkFlag=true
			this.postWeather(names);
		}
	},
	mounted (){
		// this.postWeather()
	}
}
</script>

<style type="text/css" scoped>
	.weather{
		text-align: center;
	}
	.search{
		width: 600px;
    margin: 10px auto;
	}
	.contents{
		width: 600px;
		/*margin-left: 250px;*/
		/*margin-top: 10px;*/
    margin: 0 auto;
		border: 1px solid #eee;
		border-radius: 4px;
		text-align: left;
	}
	.wTop{
		width: 100%;
		/*height: 100px;*/
		border-bottom: 1px solid #eee;
		padding: 10px;
		text-align: left;
		}
	.detail{
		border-bottom: 1px solid #eee;
	}
	.future{
		margin-bottom: 5px;
	}
</style>
