<script setup lang="ts">
import { reactive } from "vue";
import { login, getVerityCode } from "../api/auth";
import { userStore } from "../store/user";
import router from "../router";
const store = userStore();
const form = reactive({
  email: "hdan6693@gmail.com",
  password: "",
  verityCode: "",
});

const onLogin = () => {
  login({
    email: form.email,
    verityCode: form.verityCode,
  }).then((res) => {
    if (res.status === 200) {
      store.$patch({ token: res.data });
      router.push("/");
    }
  });
};

const handleProfile = () => {
  // getProfile().then((res) => {
  //   console.log(res);
  // });
};

const handleVerityCode = () => {
  getVerityCode(form.email);
};
</script>

<template>
  <div>login</div>
  <el-form :model="form" label-width="120px">
    <el-form-item label="邮箱">
      <el-input v-model="form.email">
        <template #append
          ><el-button @click="handleVerityCode">发送验证码</el-button></template
        >
      </el-input>
    </el-form-item>
    <el-form-item label="验证码">
      <el-input v-model="form.verityCode"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onLogin">登录</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
  <el-button @click="handleProfile">个人信息</el-button>
</template>

<style scoped></style>
