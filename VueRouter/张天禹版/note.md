## vue-router

### 什么是路由?

> **什么是路由?**
>
> ​	**1、一个路由 (route) 就是一组映射关系(key - value)**
>
> ​	**2、key 为路径,value可能是 function 或 component**
>
> ​	**3、 多个路由需要路由器 (router) 进行管理.**
>
> ![路由](/img/路由.png)
>
> 
>
> **路由分类:**
>
> ​	**1、后端路由:**
>
> ​		**1)、理解:key是路径, value 是 function,用于处理客户端提交的请求**
>
> ​		**2)、工作过程:服务器接收到一个请求时,根据 请求路径 找到匹配的函数 来处理请求,返回响应数据**
>
> 
>
> **2、前端路由:**
>
> ​		**1)、理解:key是路径, value是组件, 用于展示页面内容**
>
> ​		**2)、工作过程:当浏览器的路径改变时,对应的组件就会显示**



### 基本使用

![SPA](/img/SPA.png)

![router](/img/router.png)



1. **安装 vue-router, 命令 :`npm i vue-router`	vue2 配置 vue-router@3    vue3 配置 vue-router@4**

2. **编写 router 配置项**

   ```js
   // 该文件专门用于创建整个应用的路由器
   import Vue from 'vue';
   import VueRouter from 'vue-router';
   
   // 引入组件
   import About from '../components/About.vue';
   import Home from '../components/Home.vue';
   
   // 挂载 使用插件
   Vue.use(VueRouter);
   
   // 配置路由表,去管理一组一组的路由规则
   const routes = [
     {
       path: '/about',
       component: About,
     },
     {
       path: '/home',
       component: Home,
     },
   ];
   
   // 创建一个路由器
   const router = new VueRouter({
     routes,
   });
   
   // 将准备好的路由器暴露出去
   export default router;
   ```

3. **引入 并 应用插件**

   ```js
   // 引入 Vue
   import Vue from 'vue';
   // 引入 App
   import App from './App.vue';
   // 引入路由器
   import router from './router';
   
   // 关闭 Vue 的生产提示
   Vue.config.productionTip = false;
   
   // 创建 Vue实例(vm)
   new Vue({
     router,
     render: (h) => h(App),
   }).$mount('#app');
   ```

4. **实现切换 `(active-class可配置高亮样式)`**

   ```vue
   <!-- Vue 中借助 router-link 标签实现路由的切换 -->
   <router-link
    class="list-group-item"
    active-class="active"
    to="/about"
   >About</router-link>
   
   <router-link
    class="list-group-item"
    active-class="active"
    to="/home"
   >Home</router-link>
   ```

5. **指定展示位置**

   ```vue
   <!-- 指定组件的呈现位置 -->
   <router-view></router-view>
   ```



### 几个注意点

> **几个注意点:**
>
> 1. 路由组件通常存放在`pages / views`文件夹,一般组件通常存放在`components`文件夹
> 2. 通过切换,"隐藏" 了的路由组件,默认是被销毁掉的,需要的时候再去挂载
> 3. 每个组件都有自己的 `$route`属性,里面存储着自己的路由信息
> 4. 整个应用只有一个 `router`,可以通过组件的 `$router` 属性获取到

![first - $route or $router](/img/first - $route or $router.png)

![second - $route or $router](/img/second - $route or $router.png)



### 多级路由 

> **多级路由 (嵌套路由)**

```js
// 配置路由规则, 使用 children 配置项:

routes:[
    {
        path:'/about',
        component:About,
    },

    {
        path:'/home',
        component:Home,
        children:[ 	// 通过 children 配置项,配置子级路由
            {
                // 此处可以写成完整路径 
                	// 例: /home/news
                // 或 省略父级路由 直接写子级路由
                	// 但是 一定不要写成: /news
                path:'news', 
                component:News
            },
            
            {
                path:'message',// 此处一定不要写:/message
                component:Message
            }
        ]
    }
]
```

```vue
<!-- 跳转(要写完整路径) -->:
	<router-link to="/home/news">News</router-link>
```



### 路由的 query 参数

> **路由的 query 参数**

1. **传递参数**

```vue
 <!-- 跳转路由并携带 query参数, to的字符串写法 -->
<router-link
	:to="`/home/message/detail?id=${item.id}&title=${item.title}`"
>{{item.title}}</router-link> -->


<!-- 跳转路由并携带 query参数, to的对象写法-->
<router-link
    :to="{
         path: '/home/message/detail',
         query: {
         	id: item.id,
	         title: item.title,
         }
    }"
>{{item.title}}</router-link>
```

2. **接收参数**

![route-query](/img/route-query.png)

```js
// 每个组件都有自己的 `$route`属性,里面存储着自己的路由信息.
	{{ $route.query.id }}
	{{ $route.query.title }}
```



### 命名路由

> **命名路由**
>
> 1. **作用:可以简化路由的跳转.**
> 2. **如何使用**:

```js
// 1. 给路由命名:
const routes = [
  {
    // 给路由起一个名字 方便查找
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    // 配置子级路由
    children: [
      {
        name: 'news',
        path: 'news',
        component: News,
      },
      {
        name: 'message',
        path: 'message',
        component: Message,
        children: [
          {
            name: 'detail',
            path: 'detail',
            component: Detail,
          },
        ],
      },
    ],
  },
];
```



```js
// 2. 简化跳转:

<!--简化前,需要写完整的路径 -->
	<router-link to="/home/message/detail">跳转</router-link>

<!--简化后,直接通过名字跳转 注: 此写法 无法传递参数-->
	<router-link :to="{name:'detail'}">跳转</router-link>


<!-- 简化前,需要写完整的路径 -->
<router-link 
   :to="{
      path:'/home/message/detail',	// 完整的路径
      query:{
         id:666,
         title:'你好'
      }
   }"
>跳转</router-link>

<!--简化后,直接通过名字跳转 注: 此写法 可以传递参数 -->
<router-link 
   :to="{
      name:'detail',	// 名字跳转
      query:{
         id:666,
         title:'你好'
      }
   }"
>跳转</router-link>
```



### 路由的 params 参数

> **路由的 params 参数**

**1. 配置路由, 声明接收 params 参数**

```js
{
    name: 'detail',
    path: 'detail/:id/:title', // 占位符(:) 用来接收 params 传递来的参数
    component: Detail,
},
```

**2. 传递参数**

```vue
<!-- 跳转并携带 params 参数,to 的字符串写法 -->
<router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`" >
    {{item.title}}
</router-link>
     

<!-- 跳转并携带 params 参数,to 的对象写法 -->
<router-link 
      :to="{
           name:'detail',
           params:{
              id: item.id,
              title: item.title,
           }
      }"
>跳转</router-link>

<!-- 
	特别注意: 路由携带 params 参数时, 若使用 to 的对象写法, 
	则不能使用 path 配置项, 必须使用 name 配置! 
-->
```

**3. 接收参数**

```js
// 每个组件都有自己的 `$route`属性,里面存储着自己的路由信息.
	{{ $route.params.id }}
	{{ $route.params.title }}
```



### 路由的 props 配置

> **路由的 props 配置**
>
> ​	**作用:让路由组件更方便的收到参数**

```js
{
    name: 'detail',
    path: 'detail/:id/:title', // 占位符(:) 用来接收 params 传递来的参数
    component: Detail,

 	// 第一种写法: props 值为对象, 该对象中所有的 key-value 的组合.
    // 最终都会通过 props 传给 Detail 组件    
	// props: { a: 1, b: 'hello' },	
	// 缺点: 数据是固定好的,


 	// 第二种写法: props 值为布尔值, 布尔值为true, 则把路由收到的所有 params参数.
    // 通过 props 传给 Detail 组件
    // props: true,
    // 缺点: 不支持 query参数

 

	 // 第三种写法: props 值为函数, 该函数返回的对象中 每一组key-value.
     // 都会通过 props 传递给 Detail组件
 	 // 支持 query 参数
 	props ($route){
        return {
            id: route.params.id,
            title: route.params.title
        }
    }
}


// 对象解构赋值
props({params}){
    return {
        id: params.id,
        title: params.title
    }
}


// 连续解构赋值
props({params: { id,title } }){
    return {
        id,
        title
    }
}
```



### `<router-link>` 的 replace 属性

> **`<router-link>` 的 replace 属性**
>
> 1. **作用:控制路由跳转时 操作浏览器历史记录的模式**
>
> 2. **浏览器的历史记录有两种 写入方式:**
>
>    **分别为`push`和`replace`,**
>
>    1. **`push`是追加历史记录,**
>    2. **`replace`是替换当前记录. 路由跳转时候默认为`push`**
>
> 3. **如何开启`replace`模式:`<router-link replace .......>News</router-link>`**



### 编程式路由导航

> **编程式路由导航**
>
> 1. **作用:不借助`<router-link> `实现路由跳转, 让路由跳转更加灵活**

**具体编码**

```js
<button @click="pushShow(item)">push查看</button>
<button @click="replaceShow(item)">replace查看</button>

// $router 的两个 API
// push、replace
methods: {
    pushShow(item) {
        console.log(this.$router);
        this.$router.push({
            name: 'detail',
            params: {
                id: item.id,
                title: item.title,
            },
        });
    },
    
    replaceShow(item) {
        this.$router.replace({
            name: 'detail',
            params: {
                id: item.id,
                title: item.title,
            },
        });
    },
},

this.$router.forward() 	//前进
this.$router.back() 	//后退
this.$router.go() 	//可前进也可后退
```



### 缓存路由组件

> **缓存路由组件**
>
> 1. **作用:让不展示的路由组件保持挂载,不被销毁.**

**具体编码**

```vue
<keep-alive include="News-com"> 
    <router-view></router-view>
</keep-alive>

<!--
注:
	默认缓存 所有被 keep-alive 包裹的组件
	
	如果要指定 缓存某个组件
	配置项 include
		缓存一个组件
			include="News-com" 	此处必须是组件 name
		缓存多个组件
			:include="['News-com', 'Message-com']"
-->
```



### 两个新的生命周期钩子

> **两个新的生命周期钩子**
>
> **作用:路由组件所独有的两个钩子, 用于捕获路由组件的激活状态.**
>
> **具体名字:**
>
> 1. `activated`		路由组件被激活时触发.
> 2. `deactivated`  路由组件失活时触发.
>
> **生命周期钩子函数整理:**
>
> ​	**普通生命周期钩子**
>
>   		1. beforeCreate
>   		2. created
>   		3. beforeMount
>   		4. mounted
>   		5. beforeUpdate
>   		6. updated
>   		7. beforeDestroy
>   		8. destroyed
>
>    **路由生命周期钩子**
>
>   		1. activated
>   		2. deactivated
>
>    **特殊生命周期钩子**
>
>  	1. $nextTick	异步更新队列
>
>    **捕获错误时的生命周期钩子**
>
> ​	1. errorCaptured



### 路由守卫

> **路由守卫**
>
> **作用:对路由进行权限控制**
>
> ​		**分类:全局守卫、独享守卫、组件内守卫**



#### 全局守卫:

**前置守卫**

```js
// 全局前置路由守卫-----初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  console.group('全局前置路由守卫');
  console.log('from.path:', from.path);
  console.log('to.path:', to.path);
  console.groupEnd();

  // if (to.path === '/home/news' || to.path === '/home/message') {
  // 优化一下 判断的条件
  // route属性中 有一个配置项叫做 meta
  // meta 元信息, 专门用来给 程序员提供的, 里面可以存储一些信息的,

  if (to.meta.isAuth) { 	// 判断当前路由是否需要进行权限控制
    if (localStorage.getItem('flag')) {		// 权限控制的具体规则
      next();	// 放行
    } else {
      alert('没有权限访问');
    }
  } else {
    next();		// 放行
  }
});
```

**后置守卫**

```js
// 全局后置路由守卫-----初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
  console.group('全局后置路由守卫');
  console.log('from.path:', from.path);
  console.log('to.path:', to.path);
  console.groupEnd();

  // 改变网页标题
  document.title = to.meta.title || '硅谷系统';
});


// meta 路由的元信息; 对象数据类型
// 里面可以存储一些程序员自己设定的内容
// 例:
	meta: {title: '信息',isAuth: true},
    meta: {title: '新闻',isAuth: true},
```



#### 独享路由守卫

```js
// 独享路由守卫 单独路由守卫
beforeEnter(to, from, next) {
    console.group('独享路由守卫');
    console.log('to:', to);
    console.log('from:', from);
    console.groupEnd();

    if (to.meta.isAuth) {	 // 判断当前路由是否需要进行权限控制
        if (window.localStorage.getItem('flag')) {
            next();
        } else {
            alert('没有权限访问');
        }
    } else {
        next();
    }
},
```



#### 组件内守卫

```js
// 进入守卫: 通过路由规则,进入该组件时被调用
beforeRouteEnter (to, from, next) {

},

// 离开守卫: 通过路由规则,离开该组件时被调用
beforeRouteLeave (to, from, next) {

},
```



### 路由器的两种工作模式

> **路由器的两种工作模式**
>
> ​		**配置项:mode**
>
> ​		**值为:hash  /  history**
>
> 1. **对于一个 url 来说, 什么是 hash 值?** 
>
>     **`#`  及其后面的内容就是 hash 值.**
>
> 2. **hash 值不会包含在  HTTP 请求中, 即:hash值不会带给服务器.**
>
> 3. **hash模式:**
>
>    1. **地址中永远带着#号,不美观 .**
>    2. **若以后将地址通过第三方手机app分享,若app校验严格,则地址会被标记为不合法.**
>    3. **兼容性较好.**
>
> 4. **history模式:**
>
>    1. **地址干净, 美观 .**
>    2. **兼容性 和 hash模式相比略差.**
>    3. **应用部署上线时需要后端人员支持,解决刷新页面服务端404的问题.**

