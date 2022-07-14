<template>
  <!-- 注册页面 -->
  <div class="register">
    <el-form
      ref="registerForm"
      :model="registerForm"
      :rules="registerRules"
      class="register-form"
    >
      <h3 class="title">注册</h3>
      <el-form-item prop="email">
        <el-input
          v-model="registerForm.email"
          type="text"
          auto-complete="off"
          placeholder="邮箱"
        >
          <svg-icon
            slot="prefix"
            icon-class="user"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="registerForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleRegister"
        >
          <svg-icon
            slot="prefix"
            icon-class="password"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input
          v-model="registerForm.confirmPassword"
          type="password"
          auto-complete="off"
          placeholder="确认密码"
          @keyup.enter.native="handleRegister"
        >
          <svg-icon
            slot="prefix"
            icon-class="password"
            class="el-input__icon input-icon"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="captchaOnOff">
        <el-input
          v-model="registerForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter.native="handleRegister"
        >
          <svg-icon
            slot="prefix"
            icon-class="validCode"
            class="el-input__icon input-icon"
          />
        </el-input>
        <div class="register-code">
          <el-button type="primary" @click="getCodeBtn" class="getCode">{{
            content
          }}</el-button>
        </div>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width: 100%"
          @click.native.prevent="handleRegister"
        >
          <span v-if="!loading">注 册</span>
          <span v-else>注 册 中...</span>
        </el-button>
        <div style="float: right">
          <router-link class="link-type" :to="'/login'"
            >使用已有账户登录</router-link
          >
        </div>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-register-footer">
      <span>Copyright © 2018-2022 ruoyi.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
import { getCodeImg, register, getCodeZC } from "@/api/login";
import validateReg from "@/utils/validate.js";
export default {
  name: "Register",
  data() {
    const equalToPassword = (rule, value, callback) => {
      if (this.registerForm.password !== value) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };
    // 邮箱
    var checkEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        if (!validateReg.regEmail.test(value)) {
          callback(new Error("请输入正确的邮箱格式"));
        }
        callback();
      }
    };
    return {
      content: "获取验证码",
      totalTime: 60,
      canClick: true,
      codeUrl: "",
      registerForm: {
        email: "",
        password: "",
        // confirmPassword: "",
        code: "",
        // uuid: "",
      },

      registerRules: {
        email: [
          {
            validator: checkEmail,
          },
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" },
          {
            min: 5,
            max: 20,
            message: "用户密码长度必须介于 5 和 20 之间",
            trigger: "blur",
          },
        ],
        confirmPassword: [
          { required: true, trigger: "blur", message: "请再次输入您的密码" },
          { required: true, validator: equalToPassword, trigger: "blur" },
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }],
      },
      loading: false,
      captchaOnOff: true,
    };
  },
  created() {
    this.getCode();
  },
  methods: {
    getCode() {
      getCodeImg().then((res) => {
        this.captchaOnOff =
          res.captchaOnOff === undefined ? true : res.captchaOnOff;
        if (this.captchaOnOff) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.registerForm.uuid = res.uuid;
        }
      });
    },
    getCodeBtn() {
      var email = this.registerForm.email;
      if (email == "") {
        this.$message({
          showClose: true,
          message: "请输入邮箱",
          type: "warning",
        });
      } else {
        if (!this.canClick) {
          return;
        }
        this.canClick = false;
        this.content = this.totalTime + "s后重新发送";
        let clock = window.setInterval(() => {
          this.totalTime--;
          this.content = this.totalTime + "s后重新发送";
          if (this.totalTime < 0) {
            //当倒计时小于0时清除定时器
            window.clearInterval(clock); //关闭
            this.content = "重新发送验证码";
            this.totalTime = 60;
            this.canClick = true; //这里重新开启
          }
        }, 1000);
        getCodeZC(this.registerForm).then((res) => {
          if (res == 1) {
            this.loading = false;
            this.$message({
              showClose: true,
              message: "该邮箱已经注册",
              type: "warning",
            });
          }
        });
      }
    },
    handleRegister() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          register(this.registerForm)
            .then((res) => {
              console.log(res);
              if (res == 1) {
                const email = this.registerForm.email;
                this.$alert(
                  "<font color='#13CE66'>恭喜你，您的账号 " +
                    email +
                    " 注册成功！</font>",
                  "系统提示",
                  {
                    dangerouslyUseHTMLString: true,
                    type: "success",
                  }
                )
                  .then(() => {
                    this.$router.push("/aboutUs");
                  })
                  .catch(() => {});
              } else if (res == 2) {
                this.loading = false;
                this.$message({
                  showClose: true,
                  message: "注册失败",
                  type: "warning",
                });
              } else if (res == 3) {
                this.loading = false;
                this.$message({
                  showClose: true,
                  message: "邮箱验证码错误",
                  type: "warning",
                });
              } else if (res == 4) {
                this.loading = false;
                this.$message({
                  showClose: true,
                  message: "该邮箱已经注册",
                  type: "warning",
                });
              }
            })
            .catch(() => {
              this.loading = false;
              if (this.captchaOnOff) {
                this.getCode();
              }
            });
        }
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/images/login-background.jpg");
  background-size: cover;
}
.title {
  font-size: 25px;
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.register-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.register-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.register-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-register-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.register-code-img {
  height: 38px;
}
.getCode {
  width: 112px;
  height: 37px;
  padding: 0px;
}
.register .el-input--medium {
    width: 335px;
}
.register .el-form .el-button {
  width: 100%!important;
}
</style>
