<template>
    <div>
        <!-- 渲染版 -->
        <!--
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
         -->
        <!-- 非渲染版 -->
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        全部
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        深圳
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                </div>
            </div>
        </div>
        <!-- 图片列表区域 -->
        <!-- 渲染版 -->
        <!--
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo' + item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
        -->
        <!-- 非渲染版 -->
        <ul class="photo-list">
            <router-link to="/home/photoinfo" tag="li">
                <img src='../../images/blh1.png'>
                <div class="info">
                    <h1 class="info-title">扁络桓，单机游戏《仙剑奇侠传六》角色之一。</h1>
                    <div class="info-body">在衡道众组织四统领中排行老三，精通医术，平常以大夫的身份行走于江湖；闲暇之余喜欢草编一些如蚱蜢、蝴蝶之类的小玩意。但实际上扁络桓身负重要使命，保护越今朝和越祈，同时也暗中毁掉启魂圣宗等。</div>
                </div>
            </router-link>
            <router-link to="/home/photoinfo" tag="li">
                <img src='../../images/blh2.png'>
                <div class="info">
                    <h1 class="info-title">扁络桓，单机游戏《仙剑奇侠传六》角色之一。</h1>
                    <div class="info-body">在衡道众组织四统领中排行老三，精通医术，平常以大夫的身份行走于江湖；闲暇之余喜欢草编一些如蚱蜢、蝴蝶之类的小玩意。但实际上扁络桓身负重要使命，保护越今朝和越祈，同时也暗中毁掉启魂圣宗等。</div>
                </div>
            </router-link>
            <router-link to="/home/photoinfo" tag="li">
                <img src='../../images/blh3.png'>
                <div class="info">
                    <h1 class="info-title">扁络桓，单机游戏《仙剑奇侠传六》角色之一。</h1>
                    <div class="info-body">在衡道众组织四统领中排行老三，精通医术，平常以大夫的身份行走于江湖；闲暇之余喜欢草编一些如蚱蜢、蝴蝶之类的小玩意。但实际上扁络桓身负重要使命，保护越今朝和越祈，同时也暗中毁掉启魂圣宗等。</div>
                </div>
            </router-link>
            <router-link to="/home/photoinfo" tag="li">
                <img src='../../images/blh.jpg'>
                <div class="info">
                    <h1 class="info-title">扁络桓，单机游戏《仙剑奇侠传六》角色之一。</h1>
                    <div class="info-body">在衡道众组织四统领中排行老三，精通医术，平常以大夫的身份行走于江湖；闲暇之余喜欢草编一些如蚱蜢、蝴蝶之类的小玩意。但实际上扁络桓身负重要使命，保护越今朝和越祈，同时也暗中毁掉启魂圣宗等。</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>

//1.导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data () {
        return {
            //所有分类的列表数组
            cates : [],
            //图片列表数组
            list : []
        }
    },
    //当组件中的DOM结构被渲染好并放到页面中后 会执行 这个构造函数
    //如果要操作元素 最好在mounted里面 因为 这里的DOM元素是最新的
    created() {
        this.getAllCategory();
        //默认进入页面 就主动请求 所有图片列表的数据

        this.getPhotoListByCateId(0);
    },
    mounted (){
        //2.初始化滑动控件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods : {
        getAllCategory() {
            /*
            //获取所有的图片分类
            this.$http.get('api/getimagecategory').then(result => {
                if (result.body.status === 0) {
                    //手动拼接出一个最完整的 分类列表
                   return this.body.message.unshift({ title: "全部", id: 0 })
                   this.cates = result.body.message;
                }
            })
            */
        },

        getPhotoListByCateId(cateId) {
            /*
            //根据分类 Id 获取图片列表
            this.$http.get('api/getimages/' + cateId).then(result => {
                if (result.body.status === 0) {
                    this.list = result.body = message;
                }
            })
            */
        }
    }
};
</script>

<style lang="scss" scoped>
//有警告信息用下面的样式
//在滑动的时候chrome为了提供页面的滑动流畅度而折腾出下面的样式
* {
    touch-action: pan-y;
}

.photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
        img {
        width: 100%;
        height: 300px;
        margin: auto;
        vertical-align: middle;
        }
        /*
        img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        }
        */
        .info {
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0,0, 0.4);
            max-height: 84px;
            .info-title {
                font-size: 14px;
            }
            .info-body {
                font-size: 13px;
            }
        }
    }
}



</style>


