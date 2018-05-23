<template>
    <div class="photoinfo-container">
        <!-- 渲染版 -->
        <!-- <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p> -->
        <!-- 非渲染版 -->
        <h3>扁络桓，单机游戏《仙剑奇侠传六》角色之一。</h3>
        <p class="subtitle">
            <span>发表时间：2018-5-23 22:27:53</span>
            <span>点击：888次</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs">
            <!-- 渲染版 -->
            <!-- <vue-preview :slides="slide1" @close="handleClose"></vue-preview> -->

            <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index,list)" :key="item.src"> -->
            <!-- 非渲染版 -->
            <img class="preview-img" src="../../images/blh1.png" width="100" height="100">
            <img class="preview-img" src="../../images/blh2.png" width="100" height="100">
            <img class="preview-img" src="../../images/blh3.png" width="100" height="100">
            <img class="preview-img" src="../../images/blh.jpg" width="100" height="100">
        </div>



        <!-- 图片内容区域 -->
        <!-- 渲染版 -->
        <div class="content">在衡道众组织四统领中排行老三，精通医术，平常以大夫的身份行走于江湖；闲暇之余喜欢草编一些如蚱蜢、蝴蝶之类的小玩意。但实际上扁络桓身负重要使命，保护越今朝和越祈，同时也暗中毁掉启魂圣宗等。</div>

        <!-- 放置一个现成的评论子组件 -->
        <!-- 渲染版 -->
        <!-- <cmt-box :id="id"></cmt-box> -->

        <!-- 非渲染版 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
//1.导入评论子组件
import comment from '../subcomponents/comment.vue'

export default {

    data () {
        return {
            //从路由中获取到的图片Id
            id: this.$route.params.id,
            //图片详情
            photoinfo : {},
            //缩略图的数组
            list : []
        };
    },
    //调用数据
    created () {
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods : {
        getPhotoInfo () {
            //获取图片的详情
            /*
            this.$http.get('api/getimageInfo/' + this.id).then(result => {
                if (result.body.status === 0) {
                    this.photoinfo = result.body.message[0];
                }
            })
            */
        },
        //获取缩略图
        getThumbs () {
            /*
            this.$http.get('api/gethumimages/' + this.id).then(result => {
                if (result.body.status === 0) {
                    //循环每个图片数据 补全图片的宽和高
                    result.body.message.forEach(item => {
                        item.w = 600
                        item.h = 400
                    });
                    //把完整的数据保存到list中
                    this.list = result.body.message;
                }
            })*/
        }
    },
    //注册评论子组件
    components : {
        'cmt-box' : comment
    }
}
</script>

<style lang="scss" scoped>
.photoinfo-container {
    padding: 3px;
    h3 {
        color: #26A2FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }

    .content {
        font-size: 13px;
        line-height: 30px;
    }
    .thumbs {
        img {
            margin: 5px 8px;
            box-shadow: 0 0 8px #999;
        }
    }
}
</style>



