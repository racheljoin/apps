<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
axios.defaults.withCredentials=true
const form = reactive({
  email: 'hdan6693@gmail.com',
  password: '',
  verityCode: ''
})

const onLogin = () => {
  axios.post('http://127.0.0.1:3000/auth/login', {
      email: form.email,
      verityCode: form.verityCode
    }).then((res) => {
      
  })
}

const getProfile = () => {
  axios.get(`http://127.0.0.1:3000/auth/profile`, {
    withCredentials: true,
    credentials: 'include'
  }).then((res) => {
    console.log(res)
  })
};

const getVerityCode = () => {
  fetch(`http://127.0.0.1:3000/email/getVerityCode?email=${form.email}`, {
    method: 'get',
  }).then((res) => {
    console.log(res)
  })
}

</script>

<template>
  <div>login</div>
  <el-form :model="form" label-width="120px">
    <el-form-item label="邮箱">
      <el-input v-model="form.email">
        <template #append><el-button @click="getVerityCode">发送验证码</el-button></template>
      </el-input>
    </el-form-item>
    <el-form-item label="验证码">
      <el-input v-model="form.verityCode">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onLogin">登录</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
  <el-button @click="getProfile">个人信息</el-button>
</template>

<style scoped>
</style>
