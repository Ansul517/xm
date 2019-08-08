<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <img src="../assets/log.jpg" />
    <h3 class="title">深圳康复诊所运营管理平台系统</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="请输入用户名称"></el-input>
    </el-form-item>
    <el-form-item prop="psd">
      <el-input type="password" v-model="ruleForm2.psd" auto-complete="off" placeholder="请输入登录密码"><i class="el-icon-view el-icon--right"></i></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;background:#11aa99;border:1px #11aa99 solid;" @click.native.prevent="denglu" >登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios';
import { apiUrl } from '../api/api';
import store from '../store'
import {mapMutations} from 'vuex'
import { constants } from 'crypto';
import { callbackify } from 'util';
// import { constants } from 'crypto';

export default {
 data() {
      return {
          logining: false,
         
        ruleForm2: {
          account: 'zhangsan',
          psd: '123456'
          
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          psd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true,
      Token: ''
    };

    },
    methods: {
      ...mapMutations(['changeLogin']),
      denglu(){
        // let _this = this;
        // console.log(this);
      if (this.ruleForm2.account === '' || this.ruleForm2.psd === '') {
        alert('账号或密码不能为空');
        return;
        // this.$router.replace('/login')
      } else {
        this.$router.push('/home');
          this.$axios({
          method: 'post',
          url: 'http://192.168.1.10:8081/kangfu-login/account/login',
          data: this.ruleForm2
        }).then(res => {
          console.log(res.data);
          this.Token = 'Bearer ' + res.data.data.body.token;
          // 将用户token保存到vuex中
          this.changeLogin({ Authorization: this.Token });
          this.$router.push('/home');
          alert('登陆成功');
        }).catch(error => {
          // alert('账号或密码错误');
          // return;
          console.log(error);
        });
          
        }
        
      }
    },
      }
      
      
</script>

<style lang="scss">
.login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    img{
      margin: 0px 150px 20px 150px;
    };
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #11aa99;
    }
    .remember {
      margin: 0px 0px 35px 0px;
      color: #11aa99;
    }
  }
</style>
