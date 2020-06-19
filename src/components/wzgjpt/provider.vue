<template>
  <div>
    <div class="nmsl bubbles">
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>
      <div class="nmsl bubble"></div>

    </div>
    <myhead></myhead>
    <!--主体-->
    <div>
      <!--<div  class="m-container m-padded-tb-big animated fadeIn " style="height:400px; background:url(../../../static/images/provider.jpg)no-repeat;background-size:100%,400px">-->
      <!--<div  class="m-container m-padded-tb-big animated fadeIn provide-bg" >
        <div class="eight wide column">
          <div class="ui stackable grid">
            <div class="wide column two-size-center">
              <div style="margin-top:100px">
                <nav class="mainNavs">
                  <a class="ui big-font" style="color: yellow">物资共享平台</a>
                </nav>
                <br>
                <br>
                <div class="right m-item item m-mobile-hide">
                  <form name="search" action="#"  method="post" target="_blank">
                    <div class="ui icon inverted white input m-margin-tb-tiny">
                      <input type="text" name="query" :query='query' v-model="query"  placeholder="模糊搜索物资，多种物资逗号隔开......" style="width: 500px">
                      <i @click="search" class="search link icon"></i>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <div  class="m-container m-padded-tb-big animated fadeIn" >
        <div class="ui container provide-bg">
          <div class="ui stackable grid ">
            <div class="sixteen wide column two-size-center">
              <div style="margin-top:200px">
                <nav class="mainNavs">
                  <!--<a class="ui big-font" style="color: yellow">物资共享平台</a>-->
                  <div class="ui big-font animate one" style="color: yellow">
                    <span>物</span><span>资</span><span>共</span><span>享</span><span>平</span><span>台</span>
                  </div>
                </nav>
                <br>
                <br>
                <!--<div class="right m-item item m-mobile-hide">
                  <form name="search" action="#"  method="post" target="_blank">
                    <div class="ui icon inverted white input m-margin-tb-tiny">
                      <input type="text" name="query" :query='query' v-model="query"  placeholder="模糊搜索物资，多种物资逗号隔开......" style="width: 500px">
                      <i @click="search" class="search link icon"></i>
                    </div>
                  </form>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  class="m-container m-padded-tb animated fadeIn ">
        <div class="ui container">
          <div class="ui stackable grid">

            <!--左边广场列表-->
            <div class="sixteen wide column" >
              <!--header-->

              <div class="ui left aligned one column grid" >
                <div class="column">
                  <div class="ui raised segment">
                    <span class="ui inverted blue button" @click="reloadAgain">全部</span>
                    <span class="ui inverted blue button" style="margin-right: 55%"  @click="canIPost">我要发布</span>

                    <el-dialog :modal-append-to-body=false title="发布供给" :visible.sync="addProvideStatus" width="60%" center>
                      <el-form :model="ruleForm" status-icon :rules="formRules" label-width="100px" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item label="我的账号" prop="username">
                          <el-input v-model="username" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="机构名" prop="conpanyName">
                          <el-input v-model="ruleForm.companyName"></el-input>
                        </el-form-item>
                        <el-form-item label="物资选择" prop="status">
                          <el-button type="primary" @click="focuseInputGoods()">点击选择物资</el-button><br/>
                          <el-dialog :modal-append-to-body=true append-to-body  title="提供" :visible.sync="providerInput">
                            <el-tree
                              :props="props"
                              :load="loadNode"
                              lazy
                              :check-strictly="true"
                              show-checkbox
                              @check-change="handleCheckChangeInupt">
                            </el-tree>
                          </el-dialog>
                          <span v-for="tag in addpostProvideList">
                                <el-tag
                                  class="m-margin-top"
                                  :key="tag.productName"
                                  closable
                                  @close="handlePostClose(tag.name)"
                                  >
                                {{tag.productName}}
                                </el-tag>
                                数量：<el-input style="width:90px" v-model="tag.productCount"></el-input>
                                <br/>
                              </span>

                        </el-form-item>
                        <el-form-item label="联系人" prop="contactName">
                          <el-input v-model="ruleForm.contactName"></el-input>
                        </el-form-item>
                        <el-form-item label="联系方式" prop="contactPhone">
                          <el-input v-model="ruleForm.contactPhone"></el-input>
                        </el-form-item>
                        <el-form-item label="联系方式2" prop="contactName">
                          <el-input v-model="ruleForm.contactMedia"></el-input>
                        </el-form-item>
                        <el-form-item label="地址" prop="address">
                          <v-distpicker @selected="onSelected"></v-distpicker>
                        </el-form-item>
                        <el-form-item label="机构" prop="companyName">
                          <el-select v-model="ruleForm.companyTypeId" clearable placeholder="请选择机构" style="width: 100%;">
                            <el-option
                              v-for="item in companyList"
                              :key="item.companyTypeId"
                              :label="item.companyType"
                              :value="item.companyTypeId"
                            >
                            </el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="备注" prop="detail">
                          <el-input type="textarea" v-model="ruleForm.detail"></el-input>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="addProvideStatus = false">取 消</el-button>
                        <el-button type="primary" @click="submit">发 布</el-button>
                      </div>
                    </el-dialog>

                    <span class="ui right aligned icon inverted white input m-margin-tb-tiny ">
                            <input @focus="focuseInput()" type="text" name="query" :query='query' v-model="query"  placeholder="搜索物资信息..." style="width: 300px">
                            <i @click="searchProvideList" class="search link icon"></i>
                    </span>
                  </div>
                </div>

              </div>

              <div class="ui left aligned attached  segment m-margin-top " style="border-radius: 15px" v-if="showTags">
                <div class="ui padded vertical segment" >
                  筛选条件：
                  <el-tag
                    class="m-margin-top"
                    v-for="tag in searchList"
                    :key="tag.name"
                    closable>
                    {{tag.name}}
                  </el-tag>
                </div>
              </div>

              <el-dialog title="需求" :visible.sync="provideSearch">
                <el-tree
                  :props="props"
                  :load="loadNode"
                  lazy
                  :check-strictly="true"
                  ref="tree"
                  show-checkbox
                  @check-change="handleCheckChange">
                </el-tree>
              </el-dialog>

              <!--content-->
              <!--<div class="ui attached  segment m-margin-top " style="border-radius: 15px" v-for="(item,index) in provideList">
                <div class="ui padded vertical segment" >
                  <div class="ui  mobile reversed stackable grid" >
                    <div class="forteen wide column left aligned " >
                      <h3 class="ui header left aligned" ><a   target="_blank" class="m-black" >{{item.city}}{{item.companyName}}</a></h3>
                      <el-button type="primary" size="mini" @click="deletePost(item.provideId)" v-if="myId==item.userId">删除</el-button>
                      <el-button type="primary" size="mini" v-if="item.finish" disabled>已完成</el-button>
                      <el-card shadow="hover" style="background-color: white" class="m-margin-top-small">
                        {{item.detail}}
                        <el-collapse v-model="activeNames" >
                          <el-collapse-item title="具体查看物资清单" name="1">
                            <el-button style="margin-left: 10px" type="primary" size="mini" disabled v-for="(item2,index2) in item.provideProductsList">{{item2.productName}}:{{item2.productCount}}</el-button>
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
              </div>-->
              <div class="m-margin-top " style="border-radius: 15px" v-for="(item,index) in provideList">
                <div class="main-container container animated">
                  <div class="left-container" style="background-color: #2c3e50">
                    <div class="title">
                      <p><span>{{item.city}}</span><br />{{item.companyName}}</p>
                    </div>

                    <div class="profile">

                      <el-button type="primary" size="mini" @click="deletePost(item.provideId)" v-if="myId==item.userId">删除</el-button>
                      <el-button type="primary" size="mini" v-if="item.finish" disabled>已完成</el-button>

                    </div>
                  </div>

                  <div class="right-container">
                    <div class="text">

                      <div>
                        提供物资：<el-button style="margin-left: 10px" type="primary" size="medium" disabled v-for="(item2,index2) in item.provideProductsList">{{item2.productName}}:{{item2.productCount}}</el-button>
                      </div>
                      <div class="m-margin-top-large">
                        备注：{{item.detail}}
                      </div>
                      <div class="m-margin-top">
                        <i class="home icon"></i><span >位置：{{item.province}}{{item.street}}</span>
                        <i class="calendar icon"></i><span >更新时间：{{item.updateTime}}</span>
                      </div>

                    </div>
                    <div class="footer">
                      <!--<p class="date">2020 5月07日 星期二 - <strong>18:00</strong></p>
                      <div class="comments">
                        <img src="static/images/KvP.svg" alt="comment-icon" />
                        <p class="comment-count">23</p>
                        <img src="static/images/Kuh.svg" alt="more-icon" />
                      </div>-->
                      <a>联系人：{{item.contactName}}</a>
                      <a  class="header"  >联系方式：{{item.contactMedia}}</a>
                      <a  class="header"  >联系电话：{{item.contactPhone}}</a>

                    </div>

                  </div>
                </div>
              </div>
              <!--footer-->
              <div class="ui bottom attached segment m-margin-top" >
                <div class="ui middle aligned">
                  <div v-if="!provideList.length">
                    暂无相关供给
                  </div>
                  <el-pagination
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next"
                    :page-size="5"
                    :total="totolProvideNum"
                    :current-page="parseInt(page)">
                  </el-pagination>
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
  import VDistpicker from 'v-distpicker'
  import bg from '../../../static/js/bg_script'

  export default {
    inject:['reload'],
    data() {
      var validateemergencyValue = (rule, value, callback) => {
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
      var validatecontactPhone=(rule, value, callback) => {
        if (!value) {
          return callback(new Error('联系方式不能为空'));
        }else{
          callback()
        }

      };
      var validatecontactName=(rule, value, callback) => {
        if (!value) {
          return callback(new Error('联系人不能为空'));
        }else{
          callback()
        }

      };
      var validatecompanyName=(rule, value, callback) => {
        if (!value) {
          return callback(new Error('机构名不能为空'));
        }else{
          callback()
        }

      };

      return {
        myId:window.sessionStorage.getItem('user_id'),
        //showTags or not
        showTags : false,
        //addpostNeedList
        addpostProvideList:[],
        //获取所有机构
        companyList:[],
        username:window.sessionStorage.getItem('personalInfo'),
        //表单
        ruleForm:{
          contactMedia:'',
          userId:window.sessionStorage.getItem('user_id'),
          companyName:'',
          provideProducts:[],
          contactName:'',
          contactPhone:'',
          detail:'',
          province:'',
          city:'',
          street:'',
          /*emergencyValue:'',*/
          //机构id
          companyTypeId:''
        },
        formRules:{
          emergencyValue:[
            {required:true, validator: validateemergencyValue, trigger: 'blur' },
          ],
          contactName:[
            {required:true, validator: validatecontactName, trigger: 'blur' },
          ],
          contactPhone: [
            {required:true, validator: validatecontactPhone, trigger: 'blur' },
            {min:11,max:11,message:'手机号位数不正确!',trigger: 'blur'}
          ],
          companyName:[
            {required:true, validator: validatecompanyName, trigger: 'blur' },
          ],
        },
        formLabelWidth: '120px',
        //显示添加need页面
        addProvideStatus : false,
        //筛选需求
        mySearchList:[],
        //查询清单
        searchList:[],
        searchListOnlyString:[],
        //查询
        provideSearch:false,
        providerInput:false,
        //currentpage
        page:1,
        //totolNeedNum
        totolProvideNum:0,

        //showGoods
        activeNames: ['1'],
        provideList:[],
        props: {
          label: 'name',
          children: 'zones'
        },
        query:'',
        count: 1,
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",

      }
    },
    methods:{
      /*
        *@function:removePostTag
        * @param:tagName
        */
      handlePostClose(tagName){
        for(var c in this.addpostProvideList){
          if(this.addpostProvideList[c].name===tagName){
            this.addpostProvideList.splice(c,1)
          }
        }
      },
      /*
        *@function:reload
        * @param:null
        */
      reloadAgain(){
        this.reload()
      },
      /*
        *@function:deletePost
        * @param:needId
        */
      deletePost(needId){
        const _this=this
        let param={provideId:needId}
        this.$axios({
          method: 'DELETE',
          url: '/api/provide/deleteMyProvide?provideId='+needId,
          // data: this.$qs.stringify(param),
        }).then(function (res) {
          if(res.data.status===200){
            _this.$message.success('删除成功！')
            console.log("删除成功:",res)
            _this.reload()           }
          else{
            _this.$message.error('删除失败！'+res.data.msg)
            console.log("删除失败:",res.data.msg)
          }
        }).catch(function (res) {
          _this.$message.error('删除失败！')
          console.log("删除失败:",res)
        })
      },
      /*
        *@function:post myNeed
        * @param:null
        */
      submit(){
        this.ruleForm.provideProducts = this.addpostProvideList
        console.log('传入前检查数据：',this.ruleForm)
        const _this=this
        this.$axios({
          method: 'post',
          url: `/api/provide/postProvide`,
          /*data: this.$qs.stringify(_this.ruleForm),*/
          data:_this.ruleForm
        }).then(function (res) {
          _this.$message.success("发布供给成功！")
          console.log("发布供给成功:",res)
          _this.reload()
        }).catch(function (res) {
          _this.$message.error('发布供给失败！')
          console.log("发布供给失败:",res)
        })
      },
      /*
      *@function:whether goto login page
      * @param:null
      */
      canIPost(){
        if(window.sessionStorage.getItem('user_id')){
          this.addProvideStatus = true
        }else{
          this.$message.error('请先登录！')
          this.$router.push("/login")
        }
      },
      /*
      *@function:获取所有机构
      * @param:null
      */
      getCompanyList(){
        const _this=this
        this.$axios({
          method: 'get',
          url: '/api/companyType',
        }).then(function (res) {
          _this.companyList=res.data.data
          /*_this.$message.success("获取所有机构成功！")*/
          console.log("获取所有机构成功:",res)
        }).catch(function (res) {
          _this.$message.error('获取所有机构失败！')
          console.log("获取所有机构失败:",res)
        })
      },
      /*
      *@function:城市
      * @param:item
      */
      onSelected(data){
        console.log(data.province.value + ' | ' + data.city.value + ' | ' + data.area.value)
        /*this.province = data.province.value
        this.city = data.city.value
        this.street = data.area.value*/
        this.ruleForm.province = data.province.value
        this.ruleForm.city = data.city.value
        this.ruleForm.street = data.area.value
      },
      /*
      *@function:search
      * @param:null
      */
      searchProvideList(){
        const _this=this
        console.log('查询参数：',_this.searchListOnlyString)
        let param={products:_this.searchListOnlyString,start:0,count:5}
        this.$axios({
          method: 'post',
          url: "/api/provide/getByProduct",
          data:param,
        }).then(function (res) {
          _this.$message.success('获取筛选供给成功！')
          console.log("获取筛选供给成功:",res)
          _this.mySearchList=res.data.data
          _this.provideList=res.data.data
          _this.totolProvideNum=res.data.data.length
        }).catch(function (res) {
          _this.$message.error('获取筛选供给失败！')
          console.log("获取筛选供给失败:",res)
        })
      },
      /*
      *@function:getfocused emit
      * @param:null
      */
      focuseInputGoods(){
        this.providerInput = true
      },
      /*
      *@function:getfocused emit
      * @param:null
      */
      focuseInput(){
        console.log('进入这里')
        this.provideSearch = true
      },
      //处理页码改变后的数据
      async handleCurrentChange(current){
        console.log('当前页',current)
        this.page=current
        this.getProvides()
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
          /*_this.$message.success('获取提供总数成功！')*/
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
        let param={start:(parseInt(this.page)-1)*5,count:5,sortTyPe:'byTime',sortMethod:'DESC'}
        this.$axios({
          method: 'post',
          url: '/api/provide/getProvideList',
          data: this.$qs.stringify(param),
        }).then(function (res) {
          // _this.$message.success('获取提供List成功！')
          console.log("获取提供List成功:",res)
          _this.provideList=res.data.data
        }).catch(function (res) {
          _this.$message.error('获取提供List失败！')
          console.log("获取提供List失败:",res)
        })
      },
      handleCheckChangeInupt(data, checked, indeterminate) {
        if(checked){
          console.log(data.name);
          this.addpostProvideList.push({productName:data.name})
        }else{
          for(var c in this.addpostProvideList){
            if(this.addpostProvideList[c].productName===data.name){
              this.addpostProvideList.splice(c,1)
            }
          }
        }
      },
      handleCheckChange(data, checked, indeterminate) {
        if(checked){
          console.log(data.name);
          this.searchList.push({name:data.name})
          this.searchListOnlyString.push(data.name)
          this.showTags = true
        }else{
          console.log(data.name);
          // console.log(data,checked,indeterminate);
          for(var c in this.searchList){
            if(this.searchList[c].name===data.name){
              this.searchList.splice(c,1)
            }
          }
          this.searchListOnlyString = this.searchListOnlyString.filter(item => item !== data.name);
          console.log('this.searchList数组：',this.searchList)
        }
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([
            { name: '口罩' },
            { name: '手术衣' },
            { name: '手套' },
            { name: '消毒液' },
            { name: '护目镜' },
            { name: '医用帽' },
            { name: '隔离衣' },
            { name: '防护面罩' },
            { name: '鞋套' },
            { name: '防护服' },
            { name: '医用设备' },
            { name: '其他' }
          ]);
        }
        if (node.level > 1) return resolve([]);

        /*var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);*/
        var data;
        if (node.data.name === '口罩') {
          data = [
            {name:"外科口罩"},
            {name:"KN95口罩"},
            {name:"一次性医用口罩"},
            {name:"医用防护口罩"},
            {name:"医用外科口罩"},
            {name:"普通医用口罩"},
            {name:"一次性手术口罩"},
            {name:"医用护理口罩"},
            {name:"3M医用防护口罩"},
            {name:"一次性无菌口罩"},
            {name:"民用性防护口罩"},
            {name:"其他防护口罩"}
          ];
          resolve(data);
        } else if (node.data.name === '手术衣') {
          data = [
            {name:"一次性使用无菌手术衣"},
            {name:"一次性无菌手术衣"},
            {name:"外科手术衣"},
            {name:"一次性使用非编造布手术衣"},
            {name:"手术衣"},
          ];
          resolve(data);
        } else if (node.data.name === '手套') {
          data = [
            {name:"一次性使用灭菌橡胶外科手套"},
            {name:"一次性使用医用橡胶检查手套"},
            {name:"检查手套"},
            { name:"一次性使用聚乙烯手套"},
            { name:"无粉乳胶手套"},
            { name:"一次性使用薄膜手套"},
            { name:"一次性使用PE检查手套"},
            { name:"外科手套"},
            { name:"医用手套"},
          ];
          resolve(data);
        }else if (node.data.name === '消毒液') {
          data = [
            {name:"邻苯二甲醛消毒液"},
            {name:"复合醇手消毒液"},
            { name:"皮肤消毒液"},
            { name:"聚维酮碘消毒液"},
            { name:"75%医用酒精"},
            {name:"医疗器械消毒液"},
            {name: "柠檬酸消毒液"},
            {name: "洗手消毒液"},
            {name: "免洗外科消毒液"},
            {name: "双氧水接触镜消毒液"},
            {name: "内镜消毒液"},
            {name: "皮肤粘膜消毒液"},
            {name: "84消毒液"},
            {name: "酮碘消毒液"},
            { name:"次氯酸消毒液"}
          ];
          resolve(data);
        }else if (node.data.name === '护目镜') {
          data = [
            {name:"医用眼罩"},
            {name:"医用隔离眼罩(PET眼罩片)"},
            {name:"医用隔离眼罩(PP眼罩框)"},
          ];
          resolve(data);
        }else if (node.data.name === '医用帽') {
          data = [
            {name:"一次性使用医用帽"},
            {name:"手术帽"},
          ];
          resolve(data);
        }else if (node.data.name === '隔离衣') {
          data = [
            {name:"一次性隔离衣"},
            {name:"医用隔离衣"}
          ];
          resolve(data);
        }else if (node.data.name === '防护面罩') {
          data = [
            {name: '医用隔离面罩'},
            {name: '个人用防护面罩'}
          ];
          resolve(data);
        }else if (node.data.name === '鞋套') {
          data = [
            {name: '一次性使用医用防护鞋套' },
            {name: '其他鞋套'}
          ];
          resolve(data);
        }else if (node.data.name === '防护服') {
          data = [
            {name: '一次性防护服'},
            {name: '重复性使用防护服'}
          ];
          resolve(data);
        }else if (node.data.name === '医用设备') {
          data = [
            {name: "空气消毒机"},
            {name: "测温设备"},
            {name: "负压监护型救护车"},
            { name: "物联网机器人"},
            { name: "无人机"},
            { name: "消毒机器人"},
            { name: "疫情应急车辆"},
            {name: "呼吸机"},
          ];
          resolve(data);
        }else if (node.data.name === '其他') {
          data = [
            {name:"空气压缩机"},
            {name:"杀菌仪"},
            {name: "核酸检测试剂盒"},
            {name: "抗体检测试剂盒"},
            {name: "智能巡检机器人"},
            {name: "PP中空板隔断"},
          ];
          resolve(data);
        }
        /*var data;
        data = [
          {name: 'zone' + this.count++},
          {name: 'zone' + this.count++}
        ];
        resolve(data);*/
      },
      search(){
        const _this=this
        window.sessionStorage.setItem('query',this.query)
        this.flushCom()
      },
      flushCom:function(){
        this.$router.go(0);
      },
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
    },
    components:{
      myhead:myhead,
      myfoot:myfoot,
      VDistpicker,
      bg
    },
    name: "provider",
    async created() {
      this.getProvides()
      this.getTotalgProvideNum()
      this.getCompanyList()
    }
  }
</script>

<style scoped lang="less">
  .provide-bg{
    height:400px;
    background:url(../../../static/images/provide2.png)no-repeat;
    background-size:100%,400px;
  }

  .el-tree-node {
  .is-leaf + .el-checkbox .el-checkbox__inner {
    display:inline-block;
  }
  .el-checkbox__input> .el-checkbox__inner {
    display:none;
  }
  }

  /**
 * transform-origin 设置旋转元素的基点位置
 * animation-name 设置动画名称
 * animation-duration 设置动画时间
 * animation-fill-mode 设置播放后的状态
 * animation-iteration-count 设置循环播放的次数
 * transition-timing-function: cubic-bezier 贝塞尔曲线效果，它有四个值，指在X轴与Y轴的两个曲线的点，第一个点：X1 Y1;第二个点：X2 Y2
 * transform: translate3d 设置动画Z轴位移几个元素，表示只在Z轴上移动
 *
 * 需要注意：transform: translate3d 不等于 transform: translateZ
 */

  .animated {
    animation-duration: 1s; /*动画时间*/
    animation-fill-mode: both; /*播放后的状态*/
  }

  .animated {
    animation-iteration-count: 1; /*动作循环的次数：infinite 无限循环*/
  }

  .animated {
    animation-duration: 2s; /*动画时间*/
  }


  .container:hover{
    animation-name:container; /*动画的名称*/
    transform-origin: center bottom; /*设置动画旋转元素的基点为：居中靠下*/
    cursor: pointer;
  }

  @keyframes container{
    0%,
    100%,
    20%,
    50%,
    80% {
      transition-timing-function: cubic-bezier(0.215,.61,.355,1); /*贝塞尔曲线 ： X1 Y1 X2 Y2*/
      transform: translate3d(0,0,0); /*设置只在Z轴上移动*/
    }
    40%,
    43%{
      transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
      transform: translate3d(0,-30px,0);
    }
    70%{
      transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
      transform: translate3d(0,-15px,0);
    }
    90%{
      transform: translate3d(0,-4px,0);
    }
  }
  /*卡片*/
  .main-container {
    height: 360px;
    max-height: 360px;
    margin: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.2);
  }

  .left-container {
    background: var(--dark-gray);
    color: #fff;
    width:30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 300;
  }

  .title {
    font-size: 2rem;
    padding: 65px 40px;
  }

  .title span {
    font-weight: bold;
  }

  .line {
    border: 2px solid var(--dark-orange);
    margin-top: 10px;
  }

  .profile {
    display: flex;
    align-items: center;
    padding: 35px 40px;
  }

  .profile img {
    width: 65px;
    border-radius: 50%;
    margin-right: 15px;
    box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.5);
  }

  .right-container {
    background: #fcfcfc;
    width:70%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .text {
    line-height: 1.4;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 65px 40px 35px 40px;
  }

  .text span {
    font-size: 1.2rem;
    /*font-weight: bold;*/
    font-weight: 300;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 35px 40px;
    border-top: 1px solid #fbfbfb;
    box-shadow: 0px -15px 10px -10px rgba(0, 0, 0, 0.1);
  }


  .comments {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .comments p {
    margin: 0 20px 0 5px;
    color: var(--light-gray);
  }

  /*文字动画*/
  .animate {
    font-size: 50px;
    margin: 100px 0 0;
  }

  .animate span {
    display: inline-block;
  }


  .animate span:nth-of-type(2) {
    animation-delay: .05s;
  }

  .animate span:nth-of-type(3) {
    animation-delay: .1s;
  }

  .animate span:nth-of-type(4) {
    animation-delay: .15s;
  }

  .animate span:nth-of-type(5) {
    animation-delay: .2s;
  }

  .animate span:nth-of-type(6) {
    animation-delay: .25s;
  }

  .animate span:nth-of-type(7) {
    animation-delay: .3s;
  }

  .animate span:nth-of-type(8) {
    animation-delay: .35s;
  }

  .animate span:nth-of-type(9) {
    animation-delay: .4s;
  }

  .animate span:nth-of-type(10) {
    animation-delay: .45s;
  }

  .animate span:nth-of-type(11) {
    animation-delay: .5s;
  }

  .animate span:nth-of-type(12) {
    animation-delay: .55s;
  }

  .animate span:nth-of-type(13) {
    animation-delay: .6s;
  }

  .animate span:nth-of-type(14) {
    animation-delay: .65s;
  }


  /* Animation One */

  .one span {
    opacity: 0;
    transform: translate(-150px, -50px) rotate(-180deg) scale(3);
    animation: revolveScale 2.3s forwards;
  }

  @keyframes revolveScale {
    60% {
      transform: translate(20px, 20px) rotate(30deg) scale(.3);
    }
    100% {
      transform: translate(0) rotate(0) scale(1);
      opacity: 1;
    }
  }

  /*背景*/
  @import '../../../static/css/bg_style.css';
</style>
