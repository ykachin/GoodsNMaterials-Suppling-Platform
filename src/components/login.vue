<template>
  <div>
    <div id="login">
    </div>
  <br/>
  <br/>
  <br/>
  <br/>

    <div style="padding-top:10px;padding-bottom:10px;padding-right:20px;border-radius:5px;left:50%;margin-top:50px;width: 500px;background-color: #f2f2f2;margin-left: -250px;position: relative;">
      <div style="margin-left: -15px;margin-top: -50px;margin-bottom: -80px;width: 100%;padding-bottom: 10px">
        <div class="m-container-small m-padded-tb-massive" style="max-width: 30em !important;">
          <div class="ur container">
            <div class="ui middle aligned center aligned grid">
              <div class="column">
                <h2 class="ui teal image header">
                  <div class="content" style="width: 500px">
                    须臾疫物
                  </div>
                </h2>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="用户名/手机" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item >
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <el-button @click="registerFormVisible = true">注册</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


    <el-dialog title="注册" :visible.sync="registerFormVisible" width="30%" :append-to-body="true" center>
      <el-form :model="form" ref="formRef" :rules="formRules" >
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input type="password" v-model="form.password" ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" :label-width="formLabelWidth" prop="checkPass">
          <el-input type="password" v-model="form.password_repeat"></el-input>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-input v-model="form.code" autocomplete="off"></el-input>
          <el-button type="primary" :disabled="isDisabled" class="m-margin-top" plain @click="getCode">{{buttonName}}</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="registerFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="register">注 册</el-button>
      </div>
    </el-dialog>

  </div>
</template>


<script>
  import axios from "axios";
  export default {
    name: "login.vue",
    data() {
      var password=(rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else{
          callback()
        }
      };
      var userName=(rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          callback()
        }

      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.password_repeat !== '') {
            this.$refs.formRef.validateField('password_repeat');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
          if (this.form.password_repeat === '') {
            callback(new Error('请再次输入密码'));
          } else if (this.form.password_repeat !== this.form.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
      };
      return {
        //验证码
        isDisabled: false,
        time: 60,
        buttonName: "发送短信",

        code:'',
        form:{
          username:'',
          password:'',
          password_repeat:'',
          code:''
        },
        formLabelWidth: '120px',
        registerFormVisible:false,
        ruleForm: {
          password: '',
          username: ''
        },
        formRules:{
          password: [
            {required:true, validator: validatePass, trigger: 'blur' },
            {min:6,message:'密码至少6个字符!',trigger: 'blur'}
          ],
          checkPass: [
            { required:true,validator: validatePass2, trigger: 'blur' },
            {min:6,message:'密码至少6个字符!',trigger: 'blur'}
          ],
          username: [
            {required:true, validator: userName, trigger: 'blur' },
            {min:11,max:11,message:'手机号位数不正确!',trigger: 'blur'}
          ]
        },
        rules: {
          password: [
            { required:true,validator: password, trigger: 'blur' },
            {min:6,message:'密码至少6个字符!',trigger: 'blur'}
          ],
          username: [
            {required:true, validator: userName, trigger: 'blur' },
            {min:11,max:11,message:'手机号位数不正确!',trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      /*
      *@function：getCode
      * @param：null
      */
      getCode(){
        const _this=this
        console.log("送给后端的手机号",_this.form.username)
        const tele = {telephone:_this.form.username}
        this.$axios({
          method: 'post',
          url: '/api/user/veriCode',
          data: _this.$qs.stringify(tele),
        }).then(function (res) {
          console.log("获取手机验证码成功",res)
          _this.$message.success('获取验证码成功')
          _this.code=res.data.data
        }).catch(function (res) {
          console.log("获取手机验证码失败",res)
          _this.$message.error('获取验证码失败')
        })

        let me = this;
        me.isDisabled = true;
        let interval = window.setInterval(function() {
          me.buttonName = '（' + me.time + '秒）后重新发送';
          --me.time;
          if(me.time < 0) {
            me.buttonName = "重新发送";
            me.time = 60;
            me.isDisabled = false;
            window.clearInterval(interval);
          }
        }, 1000);
      },
      /*
      * @function：getmyInfomation
      * @param：null
      * */
      getPersonInfo(){
        const _this=this
        const token={'access_token':window.sessionStorage.getItem('token')}
        console.log('输出token')
        console.log(window.sessionStorage.getItem('token'))
        this.$axios({
          method: 'post',
          url: '/api/user/getbyaccess',
          data: this.$qs.stringify(token),
        }).then(function (r) {
          console.log(r)
          //将用户id保存至sessionstorage
          window.sessionStorage.setItem('user_id',r.data.data.id)

          _this.$store.state.userId = r.data.data.id
          _this.$store.state.UserName = r.data.data.username
          _this.$store.state.points = r.data.data.points

          _this.$message.success('获取用户信息成功')
        }).catch(function (res) {
          _this.$message.error('获取用户信息失败')
        })
      },

      /*
      * @function：registeryouraccount
      * @param：null
      * */
      register(){
        const _this=this
        console.log(this.form)
        const zhuce={
          telephone:this.form.username,
          password:this.form.password,
          code:this.form.code
        }
        this.$axios({
          method: 'post',
          url: '/api/user/register',
          data: this.$qs.stringify(zhuce),
          /*data:zhuce*/
        }).then(function (r) {
          console.log(r)
          const res=r.data
          if(!res.status===500)return _this.$message.error('账号已注册！')
          _this.$message.success("恭喜您，注册成功！")
          _this.registerFormVisible=false
        }).catch(function (res) {
          _this.$message.error('网络繁忙，请稍后再试！')
          console.log("注册失败",res)
        })
      },

      /*
      * @function：sendurform2back-end
      * @param：null
      * */
      submitForm() {
        const _this = this
        console.log(this.ruleForm)
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            /*alert('submit!');*/
            console.log("表单验证成功了")
            this.$axios({
              method: 'post',
              url: '/api/user/login',
              data: this.$qs.stringify({          //axios的post方法访问后端this.qs.stringify(
                telephone: _this.ruleForm.username,
                password: _this.ruleForm.password
              }),
            }).then(function (r) {
              console.log("向服务器发送请求成功了")

              /*_this.$alert("恭喜您("+_this.ruleForm.username+")登陆成功！").then(()=>{
                confirmButtonText:'确定',
                callback:action => {
                  _this.$router.push("/work")
                }
              })*/
              console.log(r)
              const res=r.data
              if(res.ok){
                /*_this.$message.success('登陆成功')*/
                /*window.sessionStorage.setItem('primarypagenum',1)*/
                window.sessionStorage.setItem('token',res.data.token.access_token)
                //通过token查找用户信息
                window.sessionStorage.setItem('personalInfo',_this.ruleForm.username)
                //获取userid
                window.sessionStorage.setItem('user_id',res.data.userId)
                /*_this.getPersonInfo()*/
                _this.$confirm("恭喜您("+_this.ruleForm.username+")登陆成功！", '提示', {
                  confirmButtonText: '确定',
                  callback:action => {
                    _this.$router.push("/personalpage")
                  }
                })
              }else{
                _this.$message.error('账号密码不匹配！请重试...')
              }
            }).catch(err=>{//请求错误后执行函数
              console.log('登陆失败错误原因')
              console.log(err)
              _this.$confirm("网络繁忙，登陆失败，请稍后再试！", '提示', {
                confirmButtonText: '确定',
                callback:action => {
                  _this.resetForm(),
                  _this.$router.push("/login")
                }
              })
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        console.log(this.ruleForm)
      },
      /*
      * @function：resetForm
      * @param：null
      * */
      resetForm() {
        this.$refs.ruleForm.resetFields();
      }
    },
    created() {

    }
  }
</script>

<style scoped>
  #login {
    background: url("../../static/images/bg8.jpg");
    background-size:100% 100%;
    height: 100%;
    position: fixed;
    width: 100%
  }
</style>
