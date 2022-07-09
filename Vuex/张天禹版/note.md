### vuex

**理解 vuex**

> **vuex是什么？**
>
> 概念：专在 Vue  中实现集中式状态（数据）管理的一个 Vue 插件，
>
> ​			对 vue 应用中 多个组件的状态进行集中式管理（读 / 写），也是一个种组件间通信的方式，
>
> ​			且 适用于任意组件间通信
>
> Github 地址: https://github.com/vuejs/vuex
>
> **什么时候使用 Vuex?**
>
> 	1.	多个组件依赖同一状态
> 	1.	来自不同组件的行为 需要变更同一状态

![多组件共享数据-vuex](img\多组件共享数据-$bus.png)

![多组件共享数据-vuex](img\多组件共享数据-vuex.png)

> **1. 搭建vuex环境**
>
> - **创建文件：`src/store/index.js`**
>
> ```js
> // 引入Vue核心库
> import Vue from 'vue'
> // 引入Vuex
> import Vuex from 'vuex'
> // 应用Vuex插件
> Vue.use(Vuex)
> 
> // 准备actions对象_响应组件中用户的动作
> const actions = {}
> // 准备mutations对象_修改state中的数据
> const mutations = {}
> // 准备state对象_保存具体的数据
> const state = {}
> 
> // 创建并暴露store
> export default new Vuex.Store({
>    actions,
>    mutations,
>    state
> })
> ```
>
> - **在```main.js```中创建 vm 时传入```store```配置项**
>
> ```js
> ......
> // 引入store
> import store from './store'
> ......
> 
> // 创建vm
> new Vue({
>    el:'#app',
>    render: h => h(App),
>    store
> })
> ```



> **基本使用**
>
> ![vuex](img\vuex.png)
>
> - **初始化数据、配置 `state`、 配置`actions`、配置`mutations`,操作文件`store.js`**
>
> ```js
> // 引入Vue核心库
> import Vue from 'vue'
> // 引入Vuex
> import Vuex from 'vuex'
> // 引用Vuex
> Vue.use(Vuex)
> 
> const actions = {
>     // 响应组件中 '加' 的动作
>    jia(context,value){
>       // console.log('actions中的jia被调用了',context, value)
>       context.commit('JIA', value)
>    },
> }
> 
> const mutations = {
>     // 执行加
>    JIA(state,value){
>       // console.log('mutations中的JIA被调用了',state, value)
>       state.sum += value
>    }
> }
> 
> // 初始化数据
> const state = {
>    sum:0
> }
> 
> // 创建并暴露store
> export default new Vuex.Store({
>    actions,
>    mutations,
>    state,
> })
> ```



> **组件中读取 vuex 下 state 中的数据**
>
> - **语法：`$store.state.sum`**
>
> **注：**
>
> - **可以直接读取 vuex 中的数据作为依赖直接使用。**
>
> - **但如果将 vuex 中的数据作为依赖存储到一个变量中，然后在读取变量中的数据，**
>   - **此时 vuex 中的数据改变时 组件内是获取不到的**
>   - **因为：变量中的数据只会在初始阶段 获取一次 之后更新不会去再次获取**
>   - **解决：用 computed 计算属性，来获取 vuex 中的数据，将数据作为一个依赖去使用。**
>
> 
>
> **组件中修改 vuex 下 state 中的数据**
>
> - **语法：`$store.dispatch('action中的方法名',携带参数)`** 
>
> - **语法：`$store.commit('mutations中的方法名',携带参数)`**
>   - **`携带参数`：只能携带一个参数，但是数据类型不做限制**
>
> **注：若没有 网络请求 或 其他业务逻辑, 组件中也可以越过 actions, 即不写`dispatch`, 直接编写`commit`**

​	

> **getters 的使用**
>
> **概念：当 state 中的数据需要经过加工后再使用时, 可以使用 getters 加工.**
>
> **个人解释：可以把 vuex 中的 getters 配置项， 理解成 vue 中的 computed计算属性**
>
> 
>
> **在```store.js```中追加```getters```配置**
>
> ```js
> ......
> 
> const getters = {
> bigSum(state){
>    return state.sum * 10
> }
> }
> 
> //创建并暴露 store
> export default new Vuex.Store({
> ......
> getters
> })
> ```
>
> 
>
> **组件中读取 vuex 下 getters 中的数据**
>
> - **语法：`$store.getters.bigSum`**



> **四个 map 方法的使用**
>
> **`mapState`、`mapGetters`、`mapActions`、`mapMutations`**
>
> 
>
> - **mapState方法：**用于帮助我们映射  `state` 中的数据
>
> ```js
> computed: {
>     // 借助 mapState 生成计算属性: sum、school、subject(对象写法)
>      ...mapState({sum:'sum',school:'school',subject:'subject'}),
> 
>     // 借助 mapState 生成计算属性: sum、school、subject(数组写法)
>     ...mapState(['sum','school','subject']),
> },
> ```
>
> 
>
> - **mapGetters方法：** 用于帮助我们映射  `getters`  中的数据
>
> ```js
> computed: {
>     // 借助 mapGetters 生成计算属性: bigSum(对象写法)
>     ...mapGetters({bigSum:'bigSum'}),
> 
>     // 借助mapGetters生成计算属性:bigSum (数组写法)
>     ...mapGetters(['bigSum'])
> },
> ```
>
> 
>
> - **mapActions方法：** 用于帮助我们生成与 `actions` 对话的方法，
>   - 即：包含 `$store.dispatch(xxx)`的函数
>
> ```js
> methods:{
>     // 靠 mapActions 生成: incrementOdd、incrementWait(对象形式)
>     ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})
> 
>     // 靠 mapActions 生成: incrementOdd、incrementWait(数组形式)
>     ...mapActions(['jiaOdd','jiaWait'])
> }
> 
> // 注: 使用数组形式，数组中的 ’数据‘  需要和 Actions 中的  '方法名称'   一致。
> ```
>
> 
>
> - **mapMutations方法：**  用于帮助我们生成与  `mutations` 对话的方法,
>   - 即：包含 `$store.commit(xxx)` 的函数
>
> ```js
> methods:{
>     // 靠 mapMutations 生成: increment、decrement(对象形式)
>     ...mapMutations({increment:'JIA', decrement:'JIAN'}),
> 
>     //靠 mapMutations 生成:JIA、JIAN(数组形式)
>     ...mapMutations(['JIA','JIAN']),
> }
> 
> // 注: 使用数组形式，数组中的 ’数据‘  需要和 Actions 中的  '方法名称'   一致。
> ```
>
> 
>
> **备注：mapActions 与 mapMutations 使用时**
>
> **若需要传递参数：需要在模板中绑定事件时传递好参数，否则默认参数是事件对象**



> **模块化 + 命名空间  `modules` **
>
> **目的：让代码更好维护，让多种数据分类更加明确.**
>
> 
>
> **修改 `store.js`**
>
> ```js
> import countOptions from './count.js'
> import personOptions from './person.js'
> 
> const store = new Vuex.Store({
> modules: {
>  countAbout,
>  personAbout
> }
> });
> ```
>
> ```js
> const countAbout = {
> namespaced: true, //开启命名空间
> 
> state: {x:1},
> mutations: { ... },
> actions: { ... },
> getters: {
>  bigSum(state){
>     return state.sum * 10
>  }
> }
> };
> export default countAbout
> ```
>
> ```js
> export default {
> namespaced: true,//开启命名空间
> 
> state: { ... },
> mutations: { ... },
> actions: { ... }
> };
> ```
>
> 
>
> - **开启命名空间后，组件中读取 state 数据**
>
> ```js
> // 方式一: 自己直接读取
> 	this.$store.state.personAbout.list
> // 方式二: 借助 mapState 读取:
> 	...mapState( 'countAbout', ['sum','school','subject']),
> ```
>
> 
>
> - **开启命名空间后，组件中读取 getters 数据**
>
> ```js
> // 方式一: 自己直接读取
> 	this.$store.getters['personAbout/firstPersonName']
> // 方式二: 借助mapGetters读取:
> 	...mapGetters('countAbout',['bigSum'])
> ```
>
> 
>
> - **开启命名空间后，组件中调用 dispatch**
>
> ```js
> // 方式一: 自己直接dispatch
> 	this.$store.dispatch('personAbout/addPersonWang',person)
> // 方式二: 借助mapActions:
> 	...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
> ```
>
> 
>
> - **开启命名空间后，组件中调用 commit**
>
> ```js
> // 方式一: 自己直接commit    
> 	this.$store.commit('personAbout/ADD_PERSON',person)
> // 方式二: 借助mapMutations:
>     ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
> ```