<!-- 底部栏切换组件 -->
<template>
  <div class="tabbar">
    <ul>
      <router-link to="/aboutUs" tag="li">
        <b></b>
        <div>
          <img src="../../assets/images/profile-pic.jpg" alt="" />
        </div>
      </router-link>
       <router-link to="/login" tag="li">
        <b></b>
        <div>
          <i
            class="iconfont icon-denglu"
            style="font-size: 36px; color: red"
            v-if="this.$route.path.includes('/login')"
          ></i>
          <i class="iconfont icon-denglu" style="font-size: 36px" v-else></i>
          <p style="margin-top: -155px">登录/注册</p>
        </div>
      </router-link>
       <router-link to="/constitution" tag="li">
        <b></b>
        <div>
          <i
            class="iconfont icon-zhangcheng"
            style="font-size: 30px; color: red"
            v-if="this.$route.path.includes('/constitution')"
          ></i>
          <i class="iconfont icon-zhangcheng" style="font-size: 30px" v-else></i>
          <p style="margin-top: -153px">本期章程</p>
        </div>
      </router-link>
       <router-link to="/apply" tag="li">
        <b></b>
        <div>
          <i
            class="iconfont icon-cz-bmdj"
            style="font-size: 40px; color: red"
            v-if="this.$route.path.includes('/apply')"
          ></i>
          <i class="iconfont icon-cz-bmdj" style="font-size: 40px" v-else></i>
          <p style="margin-top: -158px">开始报名</p>
        </div>
      </router-link>
       <router-link to="/introduce" tag="li">
        <b></b>
        <div>
          <i
            class="iconfont icon-chanpinjieshao"
            style="font-size: 30px; color: red"
            v-if="this.$route.path.includes('/introduce')"
          ></i>
          <i class="iconfont icon-chanpinjieshao" style="font-size: 30px" v-else></i>
          <p style="margin-top: -155px">报名表</p>
        </div>
      </router-link>
      <router-link to="/home" tag="li">
        <b></b>
        <div style="padding-top:5px">
          <i
            class="el-icon-user-solid"
            style="font-size: 30px; color: red"
            v-if="this.$route.path.includes('/home')"
          ></i>
          <i class="el-icon-user" style="font-size: 30px; margin-top:10px;" v-else></i>
          <p style="margin-top: -154px">关于我们</p>
        </div>
      </router-link>
      <router-link to="/relation" tag="li">
        <b></b>
        <div>
          <i
            class="iconfont icon-lianxiwomen"
            style="font-size: 30px; color: red"
            v-if="this.$route.path.includes('/relation')"
          ></i>
          <i class="iconfont icon-lianxiwomen" style="font-size: 30px" v-else></i>
          <p style="margin-top: -155px">常见问题</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.tabbar {
  padding: 0px 200px;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ccc;
  height: 180px;
  width: 100%;
  z-index: 999;
  background-color: #fff;
}
.tabbar ul {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabbar ul li {
  flex: 1;
  height: 180px;
  line-height: 180px;
  border-left: 1px solid #ccc;
  text-align: center;
  b {
    width: 100%;
    height: 5px;
    background: #52e5ab !important;
    position: absolute;
    top: -5px;
    left: 0px;
    display: none;
  }
  div {
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      margin-top: 15px;
    }
  }
}
.tabbar ul li:nth-child(7) {
  border-right: 1px solid #ccc;
}
.router-link-active {
  color: #e22c2c;
  position: relative;
}
.router-link-active b {
  display: block !important;
  transition: all 2s;
}
.el-icon-user-solid > ::before {
  content: "\f007";
}
</style>