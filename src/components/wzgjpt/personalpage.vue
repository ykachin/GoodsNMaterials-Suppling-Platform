<template>
    <div>
      <myhead></myhead>
      <!--主体-->
      <div>
        <div  class="m-container m-padded-tb-big animated fadeIn ">
          <div class="ui container">
            <div class="ui stackable grid">

              <!--左边广场列表-->
              <div class="eleven wide column" >
                <!--header-->
                  <div class="ui left aligned one column grid" >
                    <div class="column">
                      <div class="ui raised segment">
                        <span class="ui inverted blue button">全部</span>
                        <span class="ui inverted blue button" style="margin-right: 35%">热门</span>
                          <span class="ui right aligned icon inverted white input m-margin-tb-tiny ">
                            <input type="text" name="query" :query='query' v-model="query"  placeholder="搜索我的发布信息..." style="width: 300px">
                            <i @click="search" class="search link icon"></i>
                          </span>
                      </div>
                    </div>
                  </div>


                <!--content-->
                <div class="ui attached  segment m-margin-top " style="border-radius: 15px" v-for="(item,index) in myneedlist">
                  <div class="ui padded vertical segment" >
                    <div class="ui  mobile reversed stackable grid" >
                      <div class="eleven wide column left aligned " >
                        <h3 class="ui header left aligned" ><a   target="_blank" class="m-black" >{{item.title}}</a></h3>
                        <el-card shadow="hover" style="background-color: #dddddd" class="m-margin-top-small">
                          {{item.content}}
                        </el-card>
                        <div class="ui grid m-margin-top-small">
                          <div class="column">
                            <div class="ui mini horizontal link list">
                              <div class="item">
                                <img :src="circleUrl"   alt="" class="ui avatar image">
                                <div class="content"><a  class="header"  >{{item.username}}</a></div>
                              </div>
                              <div class="item">
                                <i class="calendar icon"></i><span >{{formatDate(new Date(item.create_time*1000))}}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--footer-->
                <div class="ui bottom attached segment m-margin-top" >
                  <div class="ui middle aligned">
                    <el-pagination
                      @current-change="handleCurrentChange"
                      background
                      layout="prev, pager, next"
                      :page-size="5"
                      :total="posttotal"
                      :current-page="page">
                    </el-pagination>
                  </div>
                </div>

                <!--描述需求和物资-->
                <div class="ui left aligned  bottom attached segment m-margin-top" >
                  <a class="ui teal header">我的需求：</a>
                  <br>
                  <span>&emsp;&emsp;Follow follow嘿 排着队 担起斗士的称谓 先生们尊贵永不褪 伊比利亚的壮美 烈日空气被撕碎 万人场共舞举杯 攻克下沙场丰碑 暗藏的谋略可贵 Mer 跟着我们 Mer Follow follow嘿 等着谁</span>
                  <br>
                  <a class="ui teal header">我的物资：</a>
                  <br>
                  <span>&emsp;&emsp;Follow follow嘿 排着队 担起斗士的称谓 先生们尊贵永不褪 伊比利亚的壮美 烈日空气被撕碎 万人场共舞举杯 攻克下沙场丰碑 暗藏的谋略可贵 Mer 跟着我们 Mer Follow follow嘿 等着谁</span>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>






              </div>

              <!--右边的top-->

              <div class="five wide column">
                <!--logo-->
                <div class="ui  segments ">
                  <div class="ui blue segment">
                    <!--  <img src="https://picsum.photos/1000/1000/?blur=5"  style="width:70%"/>-->
                    <div class="m-margin-top">用户名：</div>
                    <!--<button class="ui button" @click="editFormVisible = true">
                      修改个人资料
                    </button>-->
                    <el-button class="m-margin-top" type="info" @click="editFormVisible = true" plain>修改个人资料</el-button>
                    <el-dialog title="修改个人信息" :visible.sync="editFormVisible" width="30%" center>
                      <el-form :model="form" ref="formRef" :rules="formRules" >
                        <el-form-item label="手机号" :label-width="formLabelWidth" prop="username">
                          <el-input v-model="form.username"></el-input>
                        </el-form-item>
                        <el-form-item label="旧密码" :label-width="formLabelWidth" prop="password">
                          <el-input type="password" v-model="form.password" ></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" :label-width="formLabelWidth" prop="password">
                          <el-input type="password" v-model="form.password" ></el-input>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="editFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="">确 认</el-button>
                      </div>
                    </el-dialog>
                  </div>
                </div>

                <!--推送消息-->
                <div class="ui segments m-margin-top-large">
                  <div class="ui blue segment ">
                    <i class="bookmark icon"></i>推送消息
                  </div>
                  <div class="ui segment left aligned"  v-for="(item,index) in allposts">
                    <div class="ui red horizontal label">New</div><a  target="_blank" class="m-black m-text-thin" >{{item.title}}</a>
                    <div>111222222222222233333333333</div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <myfoot></myfoot>
    </div>
</template>

<script>
    import myhead from "../myhead";
    import myfoot from "../myfoot";

    export default {
      inject:['reload'],
      data() {
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
            callback();
          }
        };
        return {
          query:'',
          form:{
            username:'',
            password:'',
          },
          formLabelWidth: '120px',
          editFormVisible:false,
          formRules:{
            password: [
              {required:true, validator: validatePass, trigger: 'blur' },
              {min:6,message:'密码至少6个字符!',trigger: 'blur'}
            ],
            username: [
              {required:true, validator: userName, trigger: 'blur' },
              {min:11,max:11,message:'手机号位数不正确!',trigger: 'blur'}
            ]
          },
        }
      },
      methods:{
        async handleCurrentChange(current){

        },
        search(){
          const _this=this
          window.sessionStorage.setItem('query',this.query)
          this.flushCom()
        },
        flushCom:function(){
          this.$router.go(0);
        },
        setvisible(){
          this.editFormVisible = true
          console.log('执行了吗')
        },
      },
      components:{
        myhead:myhead,
        myfoot:myfoot
      },
      name: "personalpage",
      async created() {

      }
    }
</script>

<style scoped>

</style>
