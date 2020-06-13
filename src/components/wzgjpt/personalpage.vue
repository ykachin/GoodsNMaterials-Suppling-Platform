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


                <el-collapse v-model="activeNames" @change="handleChange">
                <!--我的需求-->
                <el-collapse-item title="我的需求" name="1" class="ui left aligned  bottom attached segment m-margin-top" >
                  <el-alert v-if="myneedList.length === 0" title="我没有需求" type="info" class="m-margin-top"></el-alert>
                  <div class="ui attached  segment m-margin-top " style="border-radius: 15px" v-for="(item,index) in myneedList">
                    <div class="ui padded vertical segment" >
                      <div class="ui  mobile reversed stackable grid" >
                        <div class="forteen wide column left aligned " >
                          <h3 class="ui header left aligned" ><a   target="_blank" class="m-black" >来自{{item.city}}{{item.companyName}}的需求通知</a></h3>
                          紧急程度：{{item.emergencyValue}}&emsp;&emsp;
                          <el-button type="primary" size="mini" @click="Addemergency(item.needId)">加急</el-button>
                          <el-card shadow="hover" style="background-color: white" class="m-margin-top-small">
                            {{item.detail}}
                            <el-collapse v-model="activeNeedNames" >
                              <el-collapse-item title="具体查看物资清单" name="1">
                                <el-button style="margin-left: 10px" type="primary" size="mini" disabled v-for="(item2,index2) in item.needProductsList">{{item2.productName}}:{{item2.productCount}}</el-button>
                              </el-collapse-item>
                            </el-collapse>
                          </el-card>
                          <div class="ui grid m-margin-top-small">
                            <div class="column">
                              <div class="ui mini horizontal link list">
                                <div class="item">
                                  <div class="content"><a  class="header"  >联系人：{{item.contactName}}</a></div>
                                </div>
                                <div class="item">
                                  <div class="content"><a  class="header"  >联系方式：{{item.contactMedia}}</a></div>
                                </div>
                                <div class="item">
                                  <div class="content"><a  class="header"  >联系电话：{{item.contactPhone}}</a></div>
                                </div>
                                <div class="item">
                                  <i class="calendar icon"></i><span >位置：{{item.province}}{{item.street}}</span>
                                </div>
                                <div class="item">
                                  <i class="calendar icon"></i><span >更新时间：{{item.updateTime}}</span>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--&lt;!&ndash;footer&ndash;&gt;
                  <div class="ui bottom attached segment m-margin-top" >
                    <div class="ui middle aligned">
                      <el-pagination
                        @current-change="handleCurrentNeedChange"
                        background
                        layout="prev, pager, next"
                        :page-size="5"
                        :total="totolNeedNum"
                        :current-page="parseInt(Needpage)">
                      </el-pagination>
                    </div>
                  </div>-->
                </el-collapse-item>

                <el-collapse-item title="我的提供" name="2" class="ui left aligned  bottom attached segment m-margin-top">
                <!--我的提供-->
                <el-alert v-if="myprovideList.length === 0" title="我没有提供物资" type="info"></el-alert>
                <div class="ui attached  segment m-margin-top " style="border-radius: 15px" v-for="(item,index) in myprovideList">
                  <div class="ui padded vertical segment" >
                    <div class="ui  mobile reversed stackable grid" >
                      <div class="forteen wide column left aligned " >
                        <h3 class="ui header left aligned" ><a   target="_blank" class="m-black" >来自{{item.city}}{{item.companyName}}的提供通知</a></h3>
                        <el-card shadow="hover" style="background-color: #dddddd" class="m-margin-top-small">
                          {{item.detail}}
                          <el-collapse v-model="activeProvideNames" >
                            <el-collapse-item title="具体查看物资清单" name="1">
                              <el-button type="primary" size="mini" disabled v-for="(item2,index2) in item.provideProductsList">{{item2.productName}}:{{item2.productCount}}</el-button>
                            </el-collapse-item>
                          </el-collapse>
                        </el-card>
                        <div class="ui grid m-margin-top-small">
                          <div class="column">
                            <div class="ui mini horizontal link list">
                              <div class="item">
                                <div class="content"><a  class="header"  >联系人：{{item.contactName}}</a></div>
                              </div>
                              <div class="item">
                                <div class="content"><a  class="header"  >联系方式：{{item.contactMedia}}</a></div>
                              </div>
                              <div class="item">
                                <div class="content"><a  class="header"  >联系电话：{{item.contactPhone}}</a></div>
                              </div>
                              <div class="item">
                                <i class="calendar icon"></i><span >位置：{{item.province}}{{item.street}}</span>
                              </div>
                              <div class="item">
                                <i class="calendar icon"></i><span >更新时间：{{item.updateTime}}</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--&lt;!&ndash;footer&ndash;&gt;
                <div class="ui bottom attached segment m-margin-top" >
                  <div class="ui middle aligned">
                    <el-pagination
                      @current-change="handleCurrentProvideChange"
                      background
                      layout="prev, pager, next"
                      :page-size="5"
                      :total="totolProvideNum"
                      :current-page="parseInt(Providepage)">
                    </el-pagination>
                  </div>
                </div>-->
                </el-collapse-item>
                </el-collapse>

                <!--描述需求和物资-->
                <!--<div class="ui left aligned  bottom attached segment m-margin-top" >
                  <a class="ui teal header">我的需求：</a>
                  <br>
                  <span>&emsp;&emsp;Follow follow嘿 排着队 担起斗士的称谓 先生们尊贵永不褪 伊比利亚的壮美 烈日空气被撕碎 万人场共舞举杯 攻克下沙场丰碑 暗藏的谋略可贵 Mer 跟着我们 Mer Follow follow嘿 等着谁</span>
                  <br>
                  <a class="ui teal header">我的物资：</a>
                  <br>
                  <span>&emsp;&emsp;Follow follow嘿 排着队 担起斗士的称谓 先生们尊贵永不褪 伊比利亚的壮美 烈日空气被撕碎 万人场共舞举杯 攻克下沙场丰碑 暗藏的谋略可贵 Mer 跟着我们 Mer Follow follow嘿 等着谁</span>
                </div>-->

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
                        <el-form-item label="手机号" :label-width="formLabelWidth" prop="telephone">
                          <el-input v-model="form.telephone"></el-input>
                        </el-form-item>
                        <el-form-item label="旧密码" :label-width="formLabelWidth" prop="newPassword">
                          <el-input type="password" v-model="form.oldPassword" ></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" :label-width="formLabelWidth" prop="newPassword">
                          <el-input type="password" v-model="form.newPassword" ></el-input>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="editFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="alertPassword">确 认</el-button>
                      </div>
                    </el-dialog>
                  </div>
                </div>

                <!--推送消息-->
                <div class="ui segments m-margin-top-large">
                  <div class="ui blue segment ">
                    <i class="bookmark icon"></i>推送消息
                  </div>
                  <el-alert v-if="allposts.length === 0" title="暂时没有推送消息" type="info"></el-alert>
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
          activeNames: ['1','2'],

          //推送
          allposts:[],
          //currentpage
          Needpage:1,
          Providepage:1,

          //totolNeedNum
          totolNeedNum:0,
          //totolNeedNum
          totolProvideNum:0,

          //showGoods
          activeNeedNames: ['1'],
          myneedList:[],
          //showGoods
          activeProvideNames: ['1'],
          myprovideList:[],

          query:'',
          form:{
            telephone:'',
            oldPassword:'',
            newPassword:'',
          },
          formLabelWidth: '120px',
          editFormVisible:false,
          formRules:{
            newPassword: [
              {required:true, validator: validatePass, trigger: 'blur' },
              {min:6,message:'密码至少6个字符!',trigger: 'blur'}
            ],
            telephone: [
              {required:true, validator: userName, trigger: 'blur' },
              {min:11,max:11,message:'手机号位数不正确!',trigger: 'blur'}
            ]
          },
        }
      },
      methods:{
        /*
        *@function:ChangePassword
        * @param:null
        */
        alertPassword(){
          const _this=this
          this.$axios({
            method: 'post',
            url: '/api/user/changePwd',
            data:this.$qs.stringify(_this.form)
          }).then(function (res) {
            if(res.data.status===500){
              _this.$message.error('修改密码失败!'+res.data.msg)
              console.log("修改密码失败:",res)
            }
            else{
              _this.$message.success('修改密码成功')
              console.log("修改密码成功:",res)
              _this.editFormVisible = false
            }
          }).catch(function (res) {
            _this.$message.error('修改密码失败！请检查网络后，稍等再试...')
            console.log("修改密码失败:",res)
          })
        },
        /*
        *@function:getLatestNeed
        * @param:null
        */
        getPush(){
          const _this=this
          this.$axios({
            method: 'get',
            url: '/api/need/getPush',
          }).then(function (res) {
            _this.$message.success('获取推送成功！')
            console.log("获取推送成功:",res)
            _this.allposts=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取推送失败！')
            console.log("获取推送失败:",res)
          })
        },
        /*
        *@function:折叠面板
        * @param:val
        */
        handleChange(val) {
          console.log(val);
        },
        /*
        *@function:Addemergency
        * @param:needId
        */
        Addemergency(needId){
          const _this=this
          let param={needId:needId}
          this.$axios({
            method: 'post',
            url: '/api/need/emergency',
            data: this.$qs.stringify(param),
          }).then(function (res) {
            if(res.data.status===200){
              _this.$message.success('加急成功！')
              console.log("加急成功:",res)
              _this.reload()           }
            else{
              _this.$message.error('加急失败！'+res.data.msg)
              console.log("加急失败:",res.data.msg)
            }
          }).catch(function (res) {
            _this.$message.error('加急失败！')
            console.log("加急失败:",res)
          })
        },
        /*
        *@function:getTotalNeedNum
        * @param:null
        */
        getTotalNeedNum(){
          const _this=this
          this.$axios({
            method: 'post',
            url: '/api/need/getNeedNums',
          }).then(function (res) {
            _this.$message.success('获取需求总数成功！')
            console.log("获取需求总数成功:",res)
            _this.totolNeedNum=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取需求总数失败！')
            console.log("获取需求总数失败:",res)
          })
        },
        /*
        *@function:getNeed
        * @param:null
        */
        getNeeds(){
          const _this=this
          let param={userId:window.sessionStorage.getItem('user_id')}

          this.$axios({
            method: 'post',
            url: '/api/need/getMyNeeds',
            data: this.$qs.stringify(param),
            headers:{
              'token':window.sessionStorage.getItem('token')
            }
          }).then(function (res) {
            _this.$message.success('获取需求List成功！')
            console.log("获取需求List成功:",res)
            _this.myneedList=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取需求List失败！')
            console.log("获取需求List失败:",res)
          })
        },
        /*
        *@function:getTotalgProvideNum
        * @param:null
        */
        getTotalgProvideNum(){
          const _this=this
          this.$axios({
            method: 'post',
            url: '/api/provide/getProvideNums',
          }).then(function (res) {
            _this.$message.success('获取提供总数成功！')
            console.log("获取提供总数成功:",res)
            _this.totolProvideNum=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取提供总数失败！')
            console.log("获取提供总数失败:",res)
          })
        },
        /*
        *@function:getProvides
        * @param:null
        */
        getProvides(){
          const _this=this
          let param={userId:window.sessionStorage.getItem('user_id')}
          this.$axios({
            method: 'post',
            url: '/api/provide/getMyProvides',
            data: this.$qs.stringify(param),
            headers:{
              'token':window.sessionStorage.getItem('token')
            }
          }).then(function (res) {
            _this.$message.success('获取提供List成功！')
            console.log("获取提供List成功:",res)
            _this.myprovideList=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取提供List失败！')
            console.log("获取提供List失败:",res)
          })
        },
        async handleCurrentProvideChange(current){
          console.log('当前页',current)
          this.Providepage=current
          this.getProvides()
        },
        async handleCurrentNeedChange(current){
          console.log('当前页',current)
          this.Needpage=current
          this.getNeeds()
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
        this.getNeeds()
        /*this.getTotalNeedNum()*/
        this.getProvides()
        /*this.getTotalgProvideNum()*/
        this.getPush()
      }
    }
</script>

<style scoped>

</style>
