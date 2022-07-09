> **需求:把 `100` 这个数据放在 first 组件内部** 
>
> **first 组件内需要使用,second 组件内需要使用,third 组件内需要使用.**
>
> **功能**:
>
> ​	点击 first 组件内的按钮 将数据 修改为 `200`,并且 second 、third 组件内使用到的数据也要随着改变.
>
> ​	点击 third 组件内的按钮 将数据 修改为 `500`,并且 first、second  组件内使用到的数据也要随着改变.
>
> **利用之前学过的知识点 props down + event up or global event bus  来实现这个内容**