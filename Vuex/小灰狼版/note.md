### **`Vuex`**

> 一个 Vue 的核心插件, 来做数据管理, 当多个组件之间有数据通讯和修改的时候
>
> 使用 Vuex 来管理所有被共享的数据 



### `Vuex` 的基本使用

- 下载文件, 引入

- 创建一个存储库

```js
const store = new Vuex.Store({...})
```

- 把创建好的存储库挂载到 vue 实例身上

```js
new Vue({
  el: '...',
  store
})
```

- 在各个组件内使用存储库内的数据, 和修改存储库内的数据了

  

### Vuex 存储库内的配置项

```js
state
// 是一个对象数据类型,  内部存储的都是数据.
state: {
    num: xxx,
    str: yyy
}
// 所有存储在 state 内的数据, 都可以直接在各个组件内使用
```

```js
mutations
// 是一个对象数据类型, 内部存储的都是方法
// 这些方法, 都是用来修改 state 中的数据的,在修改数据的同时, 会记录下修该的状态.
mutations: {
    changeNum(state, payload) {
        state.num = payload
 	}
}
// 所有 mutations 内的方法, 都建议书写同步代码, 不建议书写异步代码.
```

```js
actions
// 是一个对象数据类型, 内部存储的都是方法.
// 这些方法, 用来书写异步代码, 调用 mutations 内的方法去修改 state 中的数据
actions: {
    asyncChangeNum (context, value) {
        setTimeout( () => {
            context.commit('changeNum', value)
        }, 3000 )
    },
},
// 当你需要异步修改 state 中的数据的时候
    // 首先调用 actions 内的方法
    // actions 中的方法去执行异步代码
    // actions 中的方法执行完毕异步代码以后, 调用 mutations 中的方法
    // mutations 中的方法去修改 state 中的数据, 并进行记录
```

```js
getters
// 是一个对象数据类型, 内部存储的都是方法
// 这些方法, 就等价于 Vue 中的 计算属性
// 就是对 state 中的数据进行监控处理, 并且在被监控数据修改的时候, 重新计算得到新的值
// 这里的属性也是可以直接在各个组件中使用的
getters: {
    superNum (state) {
        return state.num * 100
    }
}
```

```js
modules
// 是一个对象数据类型, 内部就是一个 存储库的 分库
// 内部可以书写完整的一套 state mutations ... 的内容
modules: {
    users: {
        state: {},
        mutations: {},
        actions: {},
        getters: {},
        modules: {...}
    },
    goods: {
        state: {},
        mutations: {},
        actions: {},
        getters: {},
    }
}
```



### 组件内使用 `Vuex` 的数据及修改

> **在组件内使用 state 中的数据**
>
> - 建议以 计算属性 来接收数据
>
>   - 因为计算属性会根据 state 中的数据修改而自动重新获取一次值.
>   - 如果放在 data 内, 因为 data 不会二次获取, 所以 state 内的数据修改了, 但是组件内不会更新
>
> - 获取方式
>
>   -  `this.$store.state.数据名称`
>   -   示例:
>
>   ```js
>   computed:{
>   	num(){
>           return this.$store.state.num
>   	}
>   }
>   ```
>
> 
>
> **在组件内进行同步修改 state 数据**
>
> - 通过调用 mutations 中的方法来实现
>
>   - 示例:
>
>   ```js
>   methods: {
>       handler () {
>           this.$store.commit('mutations 中的方法名称', 参数)
>       }
>   } 
>   ```
>
> - 注意: commit 的第一个参数一定是以字符串的形式进行书写.
>
>   -  注意: 参数只能是一个数据, 数据类型不进行限制.
>
> 
>
> **在组件内进行异步修改 state 数据**
>
> - 通过调用 actions 中的方法来实现
>
>   - 示例: 
>
>   ```js
>   methods: {
>   	handler() {
>   		this.$store.dispatch('actions 中的方法名称', 参数)
>   	}
>   }
>   ```
>
> - 注意: dispatch 的第一个参数一定是以字符串的形式进行书写.
>
> - 注意: 参数只能是一个数据, 数据类型不进行限制



```js
const cunchuku = new Vuex.Store({
    state: {
        num: 100
    },
    mutations: {
        changeNum (state) {
            
        }
    },
    actions: {
        asyncChangeNum (aaa) {
            // 第一个参数 aaa 接收的就是 cunchuku 这个变量一样的内容.
            // 就是拿到了整个存储库
            // 你可以在这里直接使用 aaa.state.num 去访问数据
            // 也可以在这里使用 aaa.commit() 去提交 mutations 内的方法.
        }
    }
})


const router = new VueRouter({
    routes:[]
})
// router.push('/xxx')

new Vue({
    el: '...',
    // 这个配置项配置的是该 Vue 实例所使用的路由表
    // 会给 Vue 实例及所有组件多一个属性叫做 $router
    router: router,
    // this.$router.push('/xxx')

    // 这个配置项配置的是该 Vue 实例所使用的存储库
    // 会给 Vue 实例及所有组件多一个 属性叫做 $store
    // 当你挂载在实例上的时候, 是会进行一些 Vue 实例的包装.
    store: cunchuku
})

	// 因为 Vue 实例进行了以上的配置
	// 所以我们可以在组件内使用 this.$store.xxx 来进行一系列操作
	// 当你使用 this.$store 的时候, 其实用的就是 store 这个对象.
	// 既然你可以书写 this.$store.state.num 
	// 那么你就可以书写 cunchuku.state.num
	// 我们通过 this.$store.commit() 去提交 mutations 内的方法	
	// 我们也可以通过 cunchuku.commit() 去提交 mutations 内的方法
```