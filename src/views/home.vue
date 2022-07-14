<!-- 关于我们 -->
<template>
  <div class="box">
    <div :style="background" class="bgBackground">
      <div class="moban">
        <div class="content1">
          <h2>关于我们</h2>
          <div class="title">
            <p>
              为培养和扶持中国青年作曲家队伍，寻找并弘扬中国当代优秀严肃音乐作品，国家大剧院自2011年起创办了“青年作曲家计划”。
              该计划面向全球青年华人作曲家征集和遴选管弦乐作品，秉承挖掘中国优秀青年创作力量、为青年作曲家搭建国际化展示平台的初衷，
              携手国内外职业乐团及海外艺术机构，为青年作曲家提供实践机会。为入围展演作品组织演出，并向最终的优胜作者颁发奖金或委约创作、对入围终评的作品进行录制唱片出版发行
            </p>
            <p>
              迄今为止，参与过“计划”的机构有：国家大剧院、中国爱乐乐团、中国国家交响乐团、中央歌剧院、中央芭蕾舞团、
              中国电影乐团交响乐团、北京交响乐团、浙江交响乐团、上海爱乐乐团、上海交响乐团、广州交响乐团、贵阳交响乐团、
              德国莱比锡广播乐团、澳大利亚悉尼交响乐团、法国国家广播电台、英国伦敦BBC交响乐团、美国费城交响乐团、
              加拿大国家艺术中心、巴黎爱乐音乐厅、荷兰广播爱乐乐团、法国布列兹现代乐团、阿姆斯特丹皇家音乐厅等（排名不分先后）
            </p>
            <p>
              国家大剧院将“青年作曲家计划”作为一项艺术公益事业，助力青年艺术家实现梦想，为中国艺术创作培育土壤。自创办至今11年来，共计收到作品逾400部，参与展演作品72部。
            </p>
          <h2>联系方式</h2>
          <ul>
            <li>
              电话: 86-10-66550904 &nbsp;/ &nbsp; +86-10-66550237
              （工作日10:30-16:30）
            </li>
            <li>邮箱: youngcomposer@chncpa.org</li>
          </ul>
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
<style lang="less">
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  .bgBackground {
    width: 100%;
    height: 140%;
    position: relative;
    text-align: center;
    .content1 {
      width: 850px;
      height: 100%;
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
        margin: 50px;
      }
      .title {
        margin-top: 70px;
        ul {
            width: 100%;
            text-align: left;
            li {
              font-size: 20px;
              color: #fff;
              margin: 10px;
              padding-left: 20px;
            }
          }
        p {
          color: #fff;
          font-size: 17px;
          line-height: 33px;
          font-weight: 400;
          text-align: left;
          text-indent: 36px;
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