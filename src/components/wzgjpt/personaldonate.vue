<template>
    <div>
      <myhead></myhead>
      <!--主体-->
      <div>
        <div style="padding-top:10px;padding-bottom:10px;padding-right:20px;border-radius:5px;left:50%;margin-top:50px;width: 800px;background-color: #f2f2f2;margin-left: -400px;position: relative;">
          <div style="margin-left: 20px;margin-top: 20px;width: 100%;padding-bottom: 10px">
            <el-page-header @back="backtoprimarypage" content="个人捐赠">
            </el-page-header>
          </div>
          <br>
          <el-form :model="ruleForm" status-icon :rules="rules" label-width="100px" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="我的账号" prop="user_id">
              <el-input v-model="username" disabled></el-input>
            </el-form-item>
            <el-form-item label="物资选择" prop="status">
              <template>
                <el-select v-model="ruleForm.status" clearable placeholder="请选择状态" style="width: 100%;">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-form-item>
            <el-form-item label="联系人" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="tags">
              <el-input v-model="ruleForm.tags"></el-input>
            </el-form-item>

            <el-form-item label="联系方式2" prop="score">
              <el-input v-model.number="ruleForm.score"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="url">
              <el-input v-model="ruleForm.url"></el-input>
            </el-form-item>
            <el-form-item label="机构" prop="content">
              <el-input v-model="ruleForm.content"></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="content">
              <el-input type="textarea" v-model="ruleForm.content"></el-input>
            </el-form-item>

            <el-form-item class="m-margin-top">
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <br>
        <br>
        <br>
        <br>
      </div>
      <myfoot></myfoot>
    </div>
</template>

<script>
    import myhead from "../myhead";
    import myfoot from "../myfoot";

    export default {
      components:{
        myhead:myhead,
        myfoot:myfoot
      },
      name: "personaldonate",
      created() {
        this.username=window.sessionStorage.getItem('personalInfo')
      },
      data() {
        var check=(rule, value, callback)=> {
          if (!value) {
            return callback(new Error('内容不能为空'));
          }else{
            callback();
          }
        };
        var checkScore = (rule, value, callback) => {
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 0) {
                callback(new Error('必须大于等于0'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
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
          dialogImageUrl: '',
          dialogVisible: false,
          username:'',
          options:[{label:'口罩',value:'0'},
            {label: '防护衣',value: '1'}],
          ruleForm: {
            user_id:window.sessionStorage.getItem('user_id'),
            title:'',
            tags:'',
            status:'',
            score:0,
            url:'',
            content:'',
          },
          rules: {
            title: [
              { required:true,validator: check, trigger: 'blur' },
            ],
            tags: [
              { required:true,validator: check, trigger: 'blur' }
            ],
            status: [
              { required:true, trigger: 'blur' }
            ],
            score: [
              { required:true,validator: checkScore, trigger: 'blur' }
            ],
            url: [
              { required:true,validator: check, trigger: 'blur' }
            ],
            content: [
              { required:true,validator: check, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        backtoprimarypage(){
          this.$router.push("/needer")
        },
        submitForm(formName) {
          console.log("这里面数据有问题吗")
          console.log(this.ruleForm)
          const _this = this
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
