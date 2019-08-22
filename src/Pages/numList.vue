<template>
    <div>
      <div id="charts" style="width: 100%;height: 500px;padding:10px"></div>
    </div>
</template>

<script>
  import axios from 'axios'
require("echarts/lib/component/legend");
  import echarts from 'echarts'
  export default {
    name: 'numList',
    data (){
      return{
        option : {
          title: {
            text: '折线图堆叠',
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:[{name:'大棚1',icon:'circle'},'大棚2','大棚3','大棚4','大棚5'],
            left:0,
            top:25
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            top:0,
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['00.00','02.00','04.00','06.00','08.00','10.00','12.00','14.00','16.00','18.00','20.00','22.00']
          },
          yAxis: {
            type: 'value',
            // min: 0,
	          // max: 150,
          },
          series: [
            {
              name:'大棚1',
              type:'line',
              stack: '总量1',
              data:[],
              smooth: true,
              seriesLayoutBy: 'row'
            },
            {
              name:'大棚2',
              type:'line',
              stack: '总量2',
              data:[],
              smooth: true,
              seriesLayoutBy: 'row'
            },
            {
              name:'大棚3',
              type:'line',
              stack: '总量3',
              data:[],
              smooth: true,
              seriesLayoutBy: 'row'
            },
            {
              name:'大棚4',
              type:'line',
              stack: '总量4',
              data:[],
              smooth: true,
              seriesLayoutBy: 'row'
            },
            {
              name:'大棚5',
              type:'line',
              stack: '总量5',
              data:[],
              smooth: true,
              seriesLayoutBy: 'row'
            }
          ]
        },
        option1:[]
      }
    },
    methods:{
      getChart(){
        axios.post('https://www.easy-mock.com/mock/5d23f434da2af57967361f80/doDemo/chart').then((res)=>{
          // console.log(res.data.data.array[0].data)
          // this.option.series=res.data.data.array
          
          this.option1=res.data.data.array
                
                for(let i =0; i<this.option.series.length;i++){
            this.option.series[i].data=this.option1[i].data
          }
          let myChart = echarts.init(document.getElementById('charts'));
          myChart.clear();
          // console.log(this.option1)
          // console.log(this.option.series[1].data)
          myChart.setOption(this.option);
          // console.log(this.option.series)
          // console.log(res.data.data.array[1].data)
          // this.option.series[1].data=res.data.data.array[1].data
          // console.log(this.option.series[1].data)
          // for(let i =0; i<this.option.series.length;i++){
          //   this.option.series[i].data=res.data.data.array[i].data
          // }
          // console.log(this.option.series[1].data)
          // this.option.series.forEach(item=>{item.data=res.data.data.array.forEach(item=>{return item.data})})
        })
      }
    },
    mounted () {
      
      


    },
    created(){
      // console.log(this.option.series[1])
      this.getChart()
    }
  }
</script>

<style scoped>

</style>
