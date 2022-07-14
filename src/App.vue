<template>
  <div id="app">
    <!-- <router-view /> -->
    <!-- 脚部切换栏 -->
    <transition :name="transitionName">
      <keep-alive :include="cachedViews">
        <router-view :key="1"></router-view>
      </keep-alive>
    </transition>
    <tab-bar v-if="$route.meta.showTabbar"></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar/index.vue";

export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right", // 初始过渡动画方向
      cachedViews: [], // 缓存组件
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.keepAlive && !this.cachedViews.includes(to.name)) {
        // 将需要缓存的组件信息, 添加进其中, 其中to.name的值应该和匹配组件的name选项一致
        this.cachedViews.push(to.name);
      }
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
  methods: {
  },
  components: { TabBar },
  metaInfo() {
    return {
      title:
        this.$store.state.settings.dynamicTitle &&
        this.$store.state.settings.title,
      titleTemplate: (title) => {
        return title
          ? `${title} - ${process.env.VUE_APP_TITLE}`
          : process.env.VUE_APP_TITLE;
      },
    };
  },
};
</script>
<style>
/* 动画效果 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.5s;

  width: 100vw;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
body::-webkit-scrollbar {
  display: none;
}
/* .el-message--error{
  display: none !important;
} */
.tuichu {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 99999;
}
</style>
