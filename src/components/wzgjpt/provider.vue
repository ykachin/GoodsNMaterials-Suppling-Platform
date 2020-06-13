<template>
  <div>
    <myhead></myhead>
    <!--主体-->
    <div>
      <div  class="m-container m-padded-tb-big animated fadeIn " style="height:400px; background:url(../../../static/images/provider.jpg)no-repeat;background-size:100%,400px">
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
                    <span class="ui inverted blue button">全部</span>
                    <span class="ui inverted blue button" style="margin-right: 55%"  @click="canIPost">热门</span>

                    <el-dialog title="发布需求" :visible.sync="addProvideStatus" width="60%" center>
                      <el-form :model="ruleForm" status-icon :rules="formRules" label-width="100px" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item label="我的账号" prop="username">
                          <el-input v-model="username" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="机构名" prop="conpanyName">
                          <el-input v-model="ruleForm.providerName"></el-input>
                        </el-form-item>
                        <el-form-item label="物资选择" prop="status">
                          <el-button type="primary" @click="focuseInputGoods()">点击选择物资</el-button><br/>
                          <el-dialog title="需求" :visible.sync="providerInput">
                            <el-tree
                              :props="props"
                              :load="loadNode"
                              lazy
                              show-checkbox
                              @check-change="handleCheckChangeInupt">
                            </el-tree>
                          </el-dialog>
                          <span v-for="tag in addpostProvideList">
                                <el-tag
                                  class="m-margin-top"
                                  :key="tag.productName"
                                  closable>
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
                          <el-select v-model="ruleForm.providerTypeId" clearable placeholder="请选择机构" style="width: 100%;">
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
                  ref="tree"
                  show-checkbox
                  @check-change="handleCheckChange">
                </el-tree>
              </el-dialog>

              <!--content-->
              <div class="ui attached  segment m-margin-top " style="border-radius: 15px" v-for="(item,index) in provideList">
                <div class="ui padded vertical segment" >
                  <div class="ui  mobile reversed stackable grid" >
                    <div class="forteen wide column left aligned " >
                      <h3 class="ui header left aligned" ><a   target="_blank" class="m-black" >来自{{item.city}}{{item.companyName}}的提供通知</a></h3>
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
          providerName:'',
          productList:[],
          contactName:'',
          contactPhone:'',
          detail:'',
          province:'',
          city:'',
          street:'',
          /*emergencyValue:'',*/
          //机构id
          providerTypeId:''
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
        *@function:post myNeed
        * @param:null
        */
      submit(){
        this.ruleForm.productList = this.addpostProvideList
        console.log('传入前检查数据：',this.ruleForm)
        const _this=this
        this.$axios({
          method: 'post',
          url: '/api/provide/postProvide',
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
          _this.$message.success("获取所有机构成功！")
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
          url: '/api/provide/getByProduct',
          /*data: this.$qs.stringify(param),*/
          data:param
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
        this.provideInput = true
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
        let param={start:(parseInt(this.page)-1)*5,count:5,sortTyPe:'byTime',sortMethod:'DESC'}
        this.$axios({
          method: 'post',
          url: '/api/provide/getProvideList',
          data: this.$qs.stringify(param),
        }).then(function (res) {
          _this.$message.success('获取提供List成功！')
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
      myfoot:myfoot
    },
    name: "provider",
    async created() {
      this.getProvides()
      this.getTotalgProvideNum()
      this.getCompanyList()
    }
  }
</script>

<style scoped>

</style>
