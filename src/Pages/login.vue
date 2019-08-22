<template>
<div class="login">
  <h3 style="margin-top: 40px">登陆入口</h3>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" inline style="margin-top: 30px">
    <FormItem prop="user">
      <i-input type="text" v-model="formInline.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </i-input>
    </FormItem>
    <FormItem prop="password">
      <i-input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </i-input>
    </FormItem>
    <FormItem prop="check">

        <i-input type="text" v-model="formInline.check" placeholder="check" style="width: 120px;height: 35px;">
          <!--        <Icon type="ios-lock-outline" slot="prepend"></Icon>-->
        </i-input>
        <img :src="imgs" alt="check" @click="getCheck" style="height: 35px;vertical-align: middle;">

    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
    </FormItem>
  </Form>
</div>
</template>
<script>
  import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      formInline: {
        user: '',
        password: '',
        check:''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ],
        check:[{required: true, message: 'Please fill in the check words', trigger: 'blur'}]
      },
      imgs:''
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
          sessionStorage.setItem('username', this.formInline.user)
          this.$router.push('/main/news')
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    getCheck(){
      // axios.post(``,)
      this.imgs=this.$global.host + "/fore/captcha/get.action?" + Math.random();
    }
  },
  mounted () {
    this.getCheck()
  }
}
</script>

<style scoped>
.login{
  width: 300px;
  height: 380px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
}
</style>
