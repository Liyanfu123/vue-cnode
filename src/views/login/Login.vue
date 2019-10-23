<template>
  <div id="big-box">
    <div id="box">
       <div>
         <div id="top-tit"> 欢迎来到cNode</div>
         <div class="cont">
           <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
             <el-form-item label="用户名" prop="user">
               <el-input v-model="ruleForm.user"></el-input>
             </el-form-item>
             <el-form-item label="输入密码" prop="pass">
               <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
             </el-form-item>
             <el-form-item label="确认密码" prop="checkPass">
               <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
             </el-form-item>
             <el-form-item>
               <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
               <el-button @click="resetForm('ruleForm')">重置</el-button>
             </el-form-item>
           </el-form>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    components: {},
    props: {},
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (!String === typeof (value)) {
            callback(new Error('请输入正确格式'));
          } else {
              callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          //定义一个空字符串 装密码
          pass: '',
          //定义一个空字符串 装确认密码
          checkPass: '',
          //定义一个空字符串 装用户名
          user: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' },
            {required:true, message:"密码不能为空"}
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' },
            {required:true, message:"确认密码不能为空"}
          ],
          user: [
            { validator: checkAge, trigger: 'blur' },
              //设置需要条件
            {min:6,max:12,message:"长度在 6 到 12 的字符"}
          ]
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           //把收到的数据上传到LocalStorage
            localStorage.setItem(
                //自定义的名字，存到localStorage里面
                "user",
                //stringify里面是一个对象
                JSON.stringify({
                  name:this.ruleForm.user
                })
            );
            //将输入的用户名存到state.js里面
            this.$store.state.user=this.ruleForm.user;
            //成功后跳转页面
            this.$router.push("/")
          } else {
            console.log('登录失败!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  #big-box{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    #box{
      width: 500px;
      height: 400px;
      border: 1px solid #444;
      #top-tit{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #444;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>