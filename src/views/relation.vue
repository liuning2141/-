<!-- 常见问题 -->
<template>
  <div class="relation">
    <div :style="background" class="bgBackground">
      <div class="moban">
        <div class="content">
            <h3>常见问题</h3>
            <div class="title">
              <h5>1.如何找回密码?</h5>
              <p>
                首先进入登录页面,点击忘记密码,输入目前使用的邮箱,然后点击获取验证码,收到验证码后输入到邮箱验证码中,
                再填写新的密码然后进行提交,页面中显示修改密码成功即可
              </p>
              <h5>2.如何确认报名已完成?</h5>
              <p>
                报名者在报名系统中提交报名信息后，页面会弹出“提交成功”字样，
                报名日期截止后，组委会将根据后台存储资料进行审核，
                符合报名资质的报名者将会收到确认邮件（地址同报名系统中提交的邮箱）
              </p>
              <h5>3.是否接收线下提交报名材料?</h5>
              <p>不接收线下报名材料</p>
              <h5>4.报名时间逾期后能否申请补报?</h5>
              <p>
                报名系统将在2022年12月20日18:00时准时关闭，不接受任何形式的增补报名。
              </p>
            </div>
        </div>
      </div>
    </div>

    <el-button v-if="this.flag" @click="loginOut" class="tuichu"
      >退出登录</el-button
    >
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
    return {
      flag: false,

      // 顶部导航背景图片配置
      background: {
        // 背景图片地址
        backgroundImage: "url(" + require("../assets/images/map-bg.png") + ")",
        // 背景图片是否重复
        backgroundRepeat: "no-repeat",
        // 背景图片大小
        backgroundSize: "cover",
        // 背景图片位置
        backgroundPosition: "0px 0px",
        backgroundAttachment: "fixed",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
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
    if (username == null) {
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
<style rel="stylesheet/scss" lang="scss">
.relation {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  .bgBackground {
    width: 100%;
    height: 150%;
    position: relative;
    text-align: center;
    .content {
      width: 850px;
      height: 98%;
      // padding-left: 30%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0 auto;
      z-index: 10;
     
        h2 {
          font-size: 35px;
          font-weight: 400;
          color: #fff;
          font-family: "Roboto Slab";
          margin: 80px 0px 50px 0px;
        }
        
     
        h3 {
          font-size: 35px;
          font-weight: 4000;
          color: #fff;
          margin: 80px 0px 50px 0px;
        }
        .title {
          color: #fff;
          text-align: left;
          h5 {
            font-size: 20px;
            font-weight: 500;
            margin: 30px 0px 10px 0px;
          }
          p {
            font-size: 17px;
            line-height: 33px;
            font-weight: 400;
          }
      }
    }
  }
}
.moban {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}
</style>