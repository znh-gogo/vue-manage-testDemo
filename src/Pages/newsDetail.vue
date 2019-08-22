<template>
    <div class="newsDetail">
      <BackTop></BackTop>
      <h2>新闻详情</h2>
      <div class="box">
        <div class="box-item" v-for="item in newsList">
          <div style="background:#eee;padding: 20px 10px">
            <Card :bordered="false">
              <p slot="title">{{item.title}}</p>
              <p style="text-align: left;">{{item.digest}}...<a :href="item.link" target="_blank">详情</a> </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'newsDetail',
  data () {
    return {
      newsList: []
    }
  },
  methods: {
    gets () {
      axios.post('https://www.apiopen.top/journalismApi').then((res) => {
        // console.log(res.data.data.toutiao)
        this.newsList = res.data.data.toutiao
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.gets()
  }
}
</script>

<style scoped>
.newsDetail{
  text-align: center;
}
.box{
    width: 600px;
    margin: 10px auto;
    border: 1px solid #eee;
}
.box-item{
  width: 100%;
  /*padding: 10px 0;*/
  /*margin: 0 10px;*/
}
</style>
