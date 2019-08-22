<template>
    <div class="news">
      <BackTop></BackTop>
      <div class="top">
        <div class="loop">
        <Carousel autoplay v-model="value2" loop :height="300">
          <CarouselItem>
            <div class="demo-carousel"><img src="./slideShow/pic1.jpg" alt=""></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img src="./slideShow/pic2.jpg" alt=""></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img src="./slideShow/pic3.jpg" alt=""></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img src="./slideShow/pic4.jpg" alt=""></div>
          </CarouselItem>
        </Carousel>
      </div>
      <div style="background:#eee;padding: 20px;" class="words">
        <Card :bordered="false">
          <p slot="title">No border title</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </div>
      </div>
      <div class="contents">
        <Row>
          <Col span="11">
            <Card>
              <p slot="title">The standard card</p>
              <p>Content of card</p>
              <p>Content of card</p>
              <p>Content of card</p>
            </Card>
          </Col>
          <Col span="11" offset="2">
            <Card dis-hover>
              <p slot="title">Disable card with hover shadows</p>
              <p>Content of card</p>
              <p>Content of card</p>
              <p>Content of card</p>
            </Card>
          </Col>
        </Row>
      </div>
      <div class="contents">
        <Row>
          <Col span="11">
            <Card>
              <p slot="title">The standard card</p>
              <p>Content of card</p>
              <p>Content of card</p>
              <p>Content of card</p>
            </Card>
          </Col>
          <Col span="11" offset="2">
            <Card dis-hover>
              <p slot="title">Disable card with hover shadows</p>
              <p>Content of card</p>
              <p>Content of card</p>
              <p>Content of card</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      value2: 0
    }
  }
}
</script>

<style scoped>
  .news{
/*    position: relative;
    overflow: hidden;*/
  }
  .top{
    display: flex;
    margin-bottom: 10px;
    /*justify-content: space-between;*/
  }
  .loop{
    text-align: center;
    width: 600px;
    height: 300px;
    flex: 2
    
  }
  .words{

    /*width: 500px;*/
/*      position: absolute;
    top: 50px;
    right: 20px;*/
    flex: 1
  }
.demo-carousel{
  text-align: center;
  background-size: 100%;
}
  img{
    width: 100%;
    height: 100%;
  }
  .contents{
    overflow: hidden;
  }
</style>
