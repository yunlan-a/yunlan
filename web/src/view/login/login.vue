<template>
  <div class="login-box">
    <div class="login-form">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" :size="formSize" status-icon>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus' 
import { useRouter } from 'vue-router';

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: 'admin',
  password: 'admin',
})
const router = useRouter();

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 25, message: '用户名长度在5 到 25', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 2, max: 25, message: '密码长度在 2 to 25', trigger: 'blur' },
  ],

})


const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const res = await UserService.login(ruleForm)
      console.log(res)
      router.push("/manage")
    } else {
      console.log('error submit!', fields)
    }
  })
}
  
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>
<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/bg.jpg");
}

.login-form {
  background-color: aliceblue;
  padding: 25px;
  width: 20%;
  height: 15%;
  border-radius: 5px;
  position: relative;
  top: 20%;

  // 水平居中
  margin: 0 auto;
}
</style>