<template>
    <div>
        <!-- 没渲染版 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo'">
                    <img class="mui-media-object mui-pull-left" src="https://avatars1.githubusercontent.com/u/37974444?s=40&u=14dffd6bd849e3cf538ec8e0137ee7cd5ec35d94&v=4">
                    <div class="mui-media-body">
                        <h1>部分银行信贷资金借道典当流入楼市</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间:2018-5-22 14:38:45</span>
                            <span>点击:0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        <!-- 渲染版 -->
        <!-- <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{ item.add_time | dataFormat }}</span>
                            <span>点击: {{ item.click }} 次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul> -->
    </div>
</template>

<script>
import  { Toast } from 'mint-ui';

export default {
    data () {
        return {
            //新闻列表
            newslist : []
        };
    },
    //调用数据
    creadted() {
        this.getNewsList()
    },
    methods : {
        //获取新闻列表
        getNewsList () {
            this.$http('api/getnewslist').then(result => {
                if (result.body.status === 0) {
                  //如果没有失败 应该把数据保存到data上
                  this.newslist = result.body.message;
                } else {
                    Toast ('获取新闻列表失败')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
    li {
        h1 {font-size: 14px;}
            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
        }
    }
}
</style>



