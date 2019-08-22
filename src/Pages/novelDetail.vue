<template>
	<div class="novel">
		<h1 style="margin-top: 10px;text-align: center;">小说搜索</h1>
		<Input class="search" search v-model="novelName"  enter-button placeholder="请输入小说名字" @on-search="searchs" />
		<div class="booklist" v-if="novelFlag===true">
			<p v-for="(item,index) in novelList" :class="{'current':index===nowIndex}" @mouseover="getIndex(index)" @click="getDetail(item)" >{{item}}</p>
		</div>
		<div class="novelContent" v-if="detailFlag===true">
			<div class="boxs">
				<img :src="novelDetails.cover">
				<div class="right">
					<h1>{{novelDetails.title}}</h1>
					<p>{{novelDetails.author}}</p>
					<p style="text-align: left;margin-top: 10px;">{{novelDetails.desc}}...<a href="#" @click="jump">具体详情</a></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
	name: 'novelDetail',
	data (){
		return {
			novelList:[],
			novelName:'',
			novelFlag:false,
			detailFlag:false,
			nowIndex:null,
			novelDetails:[]
		}
	},
	methods:{
		searchs(names){
		axios.post('https://www.apiopen.top/novelSearchApi?name='+names).then((res) => {
        // console.log(res.data.data.toutiao)
        if (res.data.code===200) {
        	this.novelList = res.data.data
        	this.novelFlag=true
        	// console.log(this.novelList)
        } else if (res.data.code===201) {
        	this.$Message.warning(res.data.msg)
        }

      }).catch((err) => {
        console.log(err)
      })
		},
		getIndex(index){
			this.nowIndex=index
		},
		getDetail(item){
			this.novelName=item
			axios.post('https://www.apiopen.top/novelInfoApi?name='+item).then((res)=>{
				if (res.data.code===200) {
					this.novelDetails=res.data.data.aladdin
					// console.log(this.novelDetails)
					this.novelFlag=false
					this.detailFlag=true
				}
			}).catch((err)=>{
				console.log(err)
			})
		},
		jump(){
			this.$Message.success("难搞哦，还没写出来呢")
		}
	},
	mounted(){

	}
}
</script>

<style type="text/css" scoped>
.novel{
	text-align: center;
  width: 100%;
  height: 100%;
}
.search{
	width: 600px;
	/*margin-left: 250px;*/
	/*margin-top: 10px;*/
  margin: 10px auto;
}
.booklist{
	/*margin-top: 1px;*/
	width: 600px;
	border: 1px solid #eee;
	border-radius: 5px;
	/*margin-left: 250px;*/
  margin: -1px auto;
	text-align: left;
	/*position: absolute;*/
	z-index: 2;
	background: #fff
	/*padding: 5px;*/
}
.booklist p{
	margin:5px;
}
.current{
	background: rgb(245, 245, 245);
	color: #000;
}
.novelContent{
	/*margin:20px auto;*/
  margin-top: 20px;
}
.boxs{
	display: flex;
	/*text-align: center;*/
  /*margin: 0 auto;*/
  padding: 0 200px;
}
.boxs img{
	/*margin-left: 100px;*/
  /*margin: 0 auto;*/
}
.right{
	margin-left: 40px;
  /*margin: 0 auto;*/
	width: 600px;
}
</style>
