<!-- 用户登录界面 -->
<template>
  <div id="login">
    <div class="bg"></div>
    <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top">
          <i class="iconfont icon-kaoshi"></i><span class="title">在线考试系统</span>
        </div>
        <div class="bottom">
          <div class="container">
            <p class="title">账号登录</p>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
              <el-form-item label="用户名">
                <el-input v-model.number="formLabelAlign.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="formLabelAlign.password" placeholder="请输入密码" type='password'></el-input>
              </el-form-item>
              <div class="submit">
                <el-button type="primary" class="row-login" @click="addSQl()">新增</el-button>
                <el-button type="primary" class="row-login" @click="searchSQl()">查询</el-button>

                <el-button type="primary" class="row-login" @click="updateSQl()">修改</el-button>
                <el-button type="primary" class="row-login" @click="deleteSQl()">删除</el-button>

              </div>
              <div class="options">
                <!-- <p class="find"><a href="javascript:;">找回密码</a></p> -->
                <div class="register">
                  <span>没有账号?</span>
                  <span><a @click="register()">去注册</a></span>
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="footer">
      <el-col>
        <p class="msg2">版权所有 ©{{ fullYear }} 威爹 保留所有权利 <a href="http://beian.miit.gov.cn/"
            target="_blank">渝ICP备19001371号</a></p>
      </el-col>
    </el-row>
    <section class="remind">
      <span>管理员账号：9527</span>
      <span>教师账号：20081001</span>
      <span>密码都是：123456</span>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { timestamp, standardTime, getFormatDate } from '@/common/common.js'
export default {
  name: "login",
  data() {
    return {
      role: 2,
      labelPosition: 'left',
      formLabelAlign: {
        nombre: 'sssssssss',
        email: 'james.gosling@gmail.com',
        createAt: '2018-03-03',
        foto: '',
        id: 89,
        apellido: 'ffsssaaaaassf'
      },
      formLabelUpdate: {
        nombre: 'sssssssss',
        email: 'james.gosling@gmail.com',
        createAt: '2018-03-03',
        foto: '',
        id: 86,
        apellido: 'ffsssaaaaassf'
      },
      formLabeldelete: {
        nombre: 'sssssssss',
        email: 'james.gosling@gmail.com',
        createAt: '2018-03-03',
        foto: '',
        id: 86,
        apellido: 'ffsssaaaaassf'
      },
      fullYear: null,
    }
  },
  methods: {
    register() {
      this.$router.push({
        path: '/register'
      })
    },



    //用户登录请求后台处理
    addSQl() {
      console.log("登录操作执行-------");
      this.$axios({
        url: `/api/clientes`,
        method: 'post',
        data: {
          ...this.formLabelAlign
        }
      }).then(res => {
        console.log(res)
        /*if (resData != null) {
          switch (resData.role) {
            case "0":  //管理员
              this.$cookies.set("cname", resData.adminName)
              this.$cookies.set("cid", resData.adminId)
              this.$cookies.set("role", 0)
              this.$router.push({ path: '/index' }) //跳转到首页
              break
            case "1": //教师
              this.$cookies.set("cname", resData.teacherName)
              this.$cookies.set("cid", resData.teacherId)
              this.$cookies.set("role", 1)
              this.$router.push({ path: '/index' }) //跳转到教师用户
              break
            case "2": //学生
              this.$cookies.set("cname", resData.studentName)
              this.$cookies.set("cid", resData.studentId)
              this.$router.push({ path: '/student' })
              break
          }
        }
        if (resData == null) { //错误提示
          this.$message({
            showClose: true,
            type: 'error',
            message: '用户名或者密码错误'
          })
        }*/
      })
    },
    //用户登录请求后台处理
    updateSQl() {
      console.log("登录操作执行-------");
      this.$axios({
        url: `/api/clientes`,
        method: 'post',
        data: {
          ...this.formLabelUpdate
        }
      }).then(res => {
        console.log(res)
      })
    },
    searchSQl() {
      console.log("登录操作执行-------");
      this.$axios({
        url: `/api/clientes`,
        method: 'get',
      }).then(res => {
        console.log(res)
      })
    },
    deleteSQl() {
      console.log("登录操作执行-------");
      this.$axios({
        url: `/api/clientes/delete`,
        method: 'post',
        data: {
          ...this.formLabeldelete
        }
      }).then(res => {
        console.log(res)
      })
    },
    clickTag(key) {
      this.role = key
    },
    getFormatDate() {
      return getFormatDate()
    }
  },
  computed: mapState(["userInfo"]),
  mounted() {
    this.fullYear = this.getFormatDate().getFullYear
  }
}
</script>

<style lang="less" scoped>
.remind {
  border-radius: 4px;
  padding: 10px 20px;
  display: flex;
  position: fixed;
  right: 20px;
  bottom: 50%;
  flex-direction: column;
  color: #606266;
  background-color: #fff;
  border-left: 4px solid #409eff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}

.container {
  margin-bottom: 32px;
}

.container .el-radio-group {
  margin: 30px 0px;
}

a:link {
  color: #ff962a;
  text-decoration: none;
}

#login {
  font-size: 14px;
  color: #000;
  background-color: #fff;
}

#login .bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background: url('../../assets/img/loginbg.png')center top / cover no-repeat;
  background-color: #b6bccdd1 !important;
}

#login .main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#login .main-container .top {
  margin-top: 100px;
  font-size: 30px;
  color: #ff962a;
  display: flex;
  justify-content: center;
}

#login .top .icon-kaoshi {
  font-size: 80px;
}

#login .top .title {
  margin-top: 20px;
}

#login .bottom {
  display: flex;
  justify-content: center;
  background-color: #78dd5fd1;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#login .bottom .title {
  text-align: center;
  font-size: 30px;
}

.bottom .container .title {
  margin: 30px 0px;
  ;
}

.bottom .submit .row-login {
  width: 100%;
  background-color: #04468b;
  border-color: #04468b;
  margin: 20px 0px 10px 0px;
  padding: 15px 20px;
}

.bottom .submit {
  display: flex;
  justify-content: center;
}

.footer {
  margin-top: 50px;
  text-align: center;
}

.footer .msg1 {
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
}

.footer .msg2 {
  font-size: 14px;
  color: #e3e3e3;
  margin-top: 70px;
}

.bottom .options {
  margin-bottom: 40px;
  color: #ff962a;
  display: flex;
  justify-content: space-between;
}

.bottom .options>a {
  color: #ff962a;
}

.bottom .options .register span:nth-child(1) {
  color: #8C8C8C;
}
</style>
