# 这是一个NB的项目

## 牛不牛逼 用心去感受 每一行代码中的诗情雅意

### 我们是有灵魂的程序员 所以我们的代码富有诗意

#### 卧槽 不编了 爱看不看

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

## 用(传统方式)命令把修改过后的代码上传到码云
1. git add .
2. git commit -m "提交信息"
3. git push origin master

## 制作首页的App组件
1. 完成Header 区域 使用的是mint-UI中的Header组件
2. 制作底部的Tabbar区域 使用的是MUI的Tabbar.html
  + 在制作购物侧 小图标的时候 操作会相对多一些
  + 先把拓展图标的css 样式 拷贝到项目中
  + 拷贝扩展字体库ttf 文件 到项目中
  + 为购物车小图标 添加如下样式`mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在中间区域防止一个router-view 来展示路由匹配到的组件

## 改造 tabbar为 router-link

## 设置路由高亮

## 点击tabbar 中的路由链接 展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据 如果获取呢 使用vue-resource
2. 使用vue-resource的 this.$this.$http.get 获取数据
3. 获取到的数据 要保存到data身上
4. 使用v-for渲染每隔item项

## 改造九宫格区域的样式


## 改造新闻资讯路由链接

## 新闻资讯页面制作
1. 绘制界面 使用 MUI 中的 media-list.html
2. 使用 vue-resource获取数据
3. 渲染真实数据

## 实现新闻资讯列表点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link 同时 在跳转的时候应该是提供唯一的Id标识符
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中 将新闻详情的路由地址 和组件页面对应起来

##  实现新闻详情的页面布局

## 单独封装一个 comment.vue评论子组件
1. 线创建一个单独的comment.vue组件模板
2. 在需要使用comment组件的页面中 先手动导入comment组件
 + `import comment from './comment.vue'`
3. 在父组件中 使用`components`属性 将刚才导入comment组件 注册为组件的子组件
4. 将注册子组件的时候 注册的名称 以标签形式 在页面中引用即可

## 获取所有的评论数据 显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮 绑定点击事件 在事件中 请求下一页数据
2. 点击加载更多 让pageIndex++ 然后重新调用 this.getComments() 方法重新获取最新一页的数据
3. 为了防止 新数据 覆盖老数据的情况 我们在点击加载更多的时候 每当获取到新数据 应该让 老数据 调用数组的concat方法 拼接上新数组