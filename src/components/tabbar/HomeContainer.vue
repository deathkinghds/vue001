<template>
    <div>
        <!-- 这是轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中 使用v-for循环的话 一定要使用key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格到六宫格的改造工程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/news.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/picShare.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/goodShow.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/feedback.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/search.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/callme.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      //保存轮播图的数组
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  //发送请求
  methods: {
    getLunbotu() {
      //获取轮播图数据的方法
      this.$http.get("http://vue.studyit/api/getlunbo").then(result => {
        //console.log(result.body);
        if (result.body.status === 0) {
          //成功了
          this.lunbotuList = result.body.message;
        } else {
          //失败的
          Toast("加载轮播图失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: skyblue;
    }
    &:nth-child(3) {
      background-color: yellow;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: 0;

  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}

</style>