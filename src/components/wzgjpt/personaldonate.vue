<template>
    <div>
      <myhead></myhead>
      <!--主体-->
<!--      <div>-->
<!--        <div style="padding-top:10px;padding-bottom:10px;padding-right:20px;border-radius:5px;left:50%;margin-top:50px;width: 800px;background-color: #f2f2f2;margin-left: -400px;position: relative;">-->
<!--          <div style="margin-left: 20px;margin-top: 20px;width: 100%;padding-bottom: 10px">-->
<!--            <el-page-header @back="backtoprimarypage" content="个人捐赠">-->
<!--            </el-page-header>-->
<!--          </div>-->
<!--          <br>-->
<!--          <el-form :model="ruleForm" status-icon :rules="rules" label-width="100px" ref="ruleForm" class="demo-ruleForm">-->
<!--            <el-form-item label="我的账号" prop="user_id">-->
<!--              <el-input v-model="username" disabled></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="物资选择" prop="status">-->
<!--              <template>-->
<!--                <el-select v-model="ruleForm.status" clearable placeholder="请选择状态" style="width: 100%;">-->
<!--                  <el-option-->
<!--                    v-for="item in options"-->
<!--                    :key="item.value"-->
<!--                    :label="item.label"-->
<!--                    :value="item.value"-->
<!--                  >-->
<!--                  </el-option>-->
<!--                </el-select>-->
<!--              </template>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="联系人" prop="title">-->
<!--              <el-input v-model="ruleForm.title"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="联系方式" prop="tags">-->
<!--              <el-input v-model="ruleForm.tags"></el-input>-->
<!--            </el-form-item>-->

<!--            <el-form-item label="联系方式2" prop="score">-->
<!--              <el-input v-model.number="ruleForm.score"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="地址" prop="url">-->
<!--              <el-input v-model="ruleForm.url"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="机构" prop="content">-->
<!--              <el-input v-model="ruleForm.content"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="备注" prop="content">-->
<!--              <el-input type="textarea" v-model="ruleForm.content"></el-input>-->
<!--            </el-form-item>-->

<!--            <el-form-item class="m-margin-top">-->
<!--              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
<!--              <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
<!--        </div>-->
<!--        <br>-->
<!--        <br>-->
<!--        <br>-->
<!--        <br>-->
<!--      </div>-->
      <div>
        <!--<div  class="m-container m-padded-tb-big animated fadeIn need-bg" style="height:400px; background:url(../../../static/images/needer.jpg)no-repeat;background-size:100%,400px">-->
        <div  class="m-container m-padded-tb-big animated fadeIn donate-bg" >
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
                        <input type="text" name="query" :query='query' v-model="query"  placeholder="模糊搜索捐献渠道......" style="width: 500px">
                        <i @click="search" class="search link icon"></i>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div  class="m-container m-padded-tb-big animated fadeIn ">
          <div class="ui container">
            <div class="ui stackable grid">

              <!--左边广场列表-->
              <div class="sixteen wide column" >
                <!--header-->
                <div class="ui left aligned one column grid" >
                  <div class="column">
                    <div class="ui raised segment">
                      <span class="ui inverted blue button" @click="showAll">全部</span>
                      <!--<el-button type="text" @click="open">点击打开 Message Box</el-button>
                      <el-button @click="needSearch = true">搜索</el-button>-->
                    </div>
                  </div>

                </div>

                <!--content-->
                <div class="ui attached  segment m-margin-top " style="border-radius: 15px" v-for="(item,index) in donateList">
                  <div class="ui padded vertical segment" >
                    <div class="ui  mobile reversed stackable grid" >
                      <div class="forteen wide column left aligned " >
                        <h3 class="ui header left aligned" ><a   target="_blank" class="m-black" >来自捐献地址为{{item.name}}的通知</a></h3>
                        <el-card shadow="hover" style="background-color: white" class="m-margin-top-small">
                          捐献单位：{{item.accountName}}<br/>
                          捐献账户：{{item.account}}<br/>
                          受理银行：{{item.bank}}
                        </el-card>
                        <div class="ui grid m-margin-top-small">
                          <div class="column">
                            <div class="ui mini horizontal link list">
                              <div class="item">
                                <div class="content"><a  class="header"  >相关联系人：{{item.person}}</a></div>
                              </div>
                              <div class="item">
                                <div class="content"><a  class="header"  >相关联系方式：{{item.tel}}</a></div>
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
                      :total="totolDonateNum"
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

    export default {
      inject:['reload'],
      data() {
        return {
          donateList:[],
          page:1,
          //totolNeedNum
          totolDonateNum:0,

          //showGoods
          activeNames: ['1'],
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
        showAll(){
          this.reload()
        },
        handleCurrentChange(current){
          console.log('当前页',current)
          this.page=current
          this.getDonateList()
        },
        /*
        *@function:getTotalDonateNum
        * @param:null
        */
        getTotalDonateNum(){
          const _this=this
          this.$axios({
            method: 'get',
            url: '/api/donate/getNums',
          }).then(function (res) {
            _this.$message.success('获取捐献渠道总数成功！')
            console.log("获取捐献渠道总数成功:",res)
            _this.totolDonateNum=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取捐献渠道总数失败！')
            console.log("获取捐献渠道总数失败:",res)
          })
        },
        /*
        *@function:getSearchDonateNum
        * @param:null
        */
        getSearchDonateNum(){
          const _this=this
          this.$axios({
            method: 'post',
            url: '/api/donate/getQueryNums',
            data:{query:_this.query}
          }).then(function (res) {
            _this.$message.success('获取搜索捐献渠道总数成功！')
            console.log("获取搜索捐献渠道总数成功:",res)
            _this.totolDonateNum=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取搜索捐献渠道总数失败！')
            console.log("获取搜索捐献渠道总数失败:",res)
          })
        },
        /*
        *@function:获取捐献渠道
        * @param:null
        */
        getDonateList(){
          const _this=this
          let param={start:(parseInt(this.page)-1)*5,count:5,query:this.query}
          this.$axios({
            method: 'post',
            url: '/api/donate/getInfo',
            data: param
          }).then(function (res) {
            _this.$message.success('获取捐献渠道List成功！')
            console.log("获取捐献渠道List成功:",res)
            _this.donateList=res.data.data
          }).catch(function (res) {
            _this.$message.error('获取捐献渠道List失败！')
            console.log("获取捐献渠道List失败:",res)
          })
        },
        search(){
          const _this=this
          _this.getDonateList()
          _this.getSearchDonateNum()
          //_this.reload()
          /*window.sessionStorage.setItem('query',this.query)
          this.flushCom()*/
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
        VDistpicker
      },
      name: "personaldonate",
      async created() {
        this.getDonateList()
        this.getTotalDonateNum()
      }
    }
</script>

<style scoped>
  .donate-bg{
    height:400px;
    background:url(../../../static/images/needer.jpg)no-repeat;
    background-size:100%,400px;
  }
</style>
