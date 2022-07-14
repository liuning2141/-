<!-- 首页 -->
<template>
  <div class="aboutUs">
    <el-button v-if="this.flag" @click="loginOut" class="tuichu"
      >退出登录</el-button
    >
    <div :style="background" class="bgBackground">
      <div class="moban1"></div>
      <div class="title">
        <h2>国家大剧院青年作曲家计划</h2>
        <p>
          <span
            :class="{ rotate: rotate }"
            ref="rotate"
            @mouseover="mouseOver"
            @mouseleave="mouseLeave"
            ><a href="">网上填报系统</a></span
          >
        </p>
        <h6 class="h6">
          报名时间 2022年10月07日 &nbsp; 9:00 &nbsp; &nbsp; -- &nbsp; &nbsp;
          12月20日 &nbsp; 18:00
        </h6>
        <el-button type="primary" plain @click="apply">点我报名</el-button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Cookies from "js-cookie";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      rotate: true,
      flag: false,

      // 顶部导航背景图片配置
      background: {
        // 背景图片地址
        backgroundImage: "url(" + require("../assets/images/bg.jpg") + ")",
        // 背景图片是否重复
        backgroundRepeat: "no-repeat",
        // 背景图片大小
        backgroundSize: "cover",
        // 背景图片位置
        backgroundPosition: "0px -200px",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 移入
    mouseOver() {
      this.rotate = false;
    },
    // 移出
    mouseLeave() {
      this.rotate = true;
    },

    // 点击报名
    apply() {
      // 获取结束时间
      var date1 = new Date("2022/12/20 18:00:00");
      // 获取当前时间
      var date2 = new Date();
      // 获取一下当前时间到结束时间的差的毫秒数
      var mill = date1 - date2;
      console.log(mill);
      if (mill >= 0) {
        var username = sessionStorage.getItem("username");
        if (username) {
          this.$router.push("/apply");
        } else {
          this.$message({
            showClose: true,
            message: "请先登录",
            type: "warning",
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: "报名已结束",
          type: "warning",
        });
      }
    },

    async loginOut() {
      this.$confirm("确定注销并退出系统吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("LogOut").then(() => {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("sessionObj");
            location.href = "/aboutUs";
          });
        })
        .catch(() => {});
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    var username = sessionStorage.getItem("username");
    var num = Cookies.get("Admin-Token");
    if (username == null || num == undefined) {
      Cookies.remove("Admin-Token");
      console.log(this.flag);
      this.flag = false;
    } else {
      this.flag = true;
    }
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.aboutUs {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  .bgBackground {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    .title {
      width: 100%;
      height: 100%;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      h2 {
        font-size: 72px;
        font-weight: 700;
        color: #000;
        font-family: "Roboto Slab";
        margin: 160px 0px 50px;
        padding: 0;
        //   text-align: center;
      }
      p {
        //   text-align: center;
        font-size: 25px;
        font-weight: 700;
        color: #000;
        font-family: "Roboto Slab";
        margin: 0;
        margin-bottom: 20px;
        padding: 0;
      }
      .h6 {
        font-size: 14px;
        margin-bottom: 20px;
        color: #000;
      }
    }
  }
}
.moban1 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.6);
}
.rotate {
  display: inline-block;
  animation: title 2s ease infinite;
}
@keyframes title {
  50% {
    transform: rotateX(360deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
.tuichu {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 99999;
}
</style>