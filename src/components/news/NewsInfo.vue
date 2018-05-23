<template>
    <div class="newsinfo-container">
        <!-- 渲染获取Id -->
        <!-- <h3>新闻详情--- {{ $route.params.id }} </h3> -->
        <!-- 渲染版 -->
        <!--
        <h3 class="title">{{ newsinfo.title }}</h3>
        <h3 class="title"></h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
            <span>点击：{{ newsinfo.click }}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        -->


        <!-- 非渲染版 -->
        <!-- 大标题 -->
        <h3 class="title">部分银行信贷资金借道典当流入楼市</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：2018-5-22 17:46:29</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content">
            <p>去年以来，多个中央和地方监管部门严查资金违规流入楼市、规范购房融资行为。强监管下，银行资金违规入楼市的情况有所遏制。不过，《证券日报》记者近日调查发现，有部分购房者将目光转向了典当行，并寻求融资。</p>
            <p>据《证券日报》记者了解，对于名下有房的购房者，将名下房产典当以获取二套房的首付款或者全款，成为其快速获取资金的方式。虽然利息较高，但是典当行的一大优势就是放款快，审批流程简单。</p>
        </div>
        <!-- 评论子组件区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponents/comment.vue'

export default {
    data () {
        return {
            //将URL地址中传递过来的 id值 挂载到data上 方便以后调用
            id: this.$route.params.id,
            newsinfo: {}
        }
    },
    //方法调用
    created () {
        this.getNewsInfo()
    },
    methods: {
        //获取新闻详情
        getNewsInfo () {
            /*
            this.$http.get('api/getnew/' + this.id).then(result => {
                if (result.body.status === 0) {
                    this.newsinfo = result.body.message[0]
                }else {
                    Toast('获取新闻失败!')
                }
            })
            */
        }
    },
    //用来注册子组件的节点
    components : {
        'comment-box': comment
    }
}
</script>

<style lang="scss">
.newsinfo-container {
    padding: 0 4px;
    .title {
        font-size: 18px;
        text-align: center;
        margin: 15px 0;
        color: #333;
    }
    .subtitle {
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content {
        img {
            width: 100%;
        }
    }
}
</style>


