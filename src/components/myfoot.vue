<template>
  <div class="ui inverted attached segment m-padded-tb-mini m-shadow-small" >
    <div class="ui  center aligned container m-padded-tb-large">
      <div class="ui inverted  stackable grid">
        <div class="three wide column">
          <div class="ui inverted link list">
            <div class="item">
              <img src="../../static/images/mask.png"   class="ui rounded image" alt="" style="width: 110px">
            </div>
          </div>
        </div>
        <div class="three wide column" >
          <h4 class="ui inverted header m-text-thin m-text-spaced " >以爱之名</h4>
          <div id="newblog-container">
            <div class="ui inverted link list">
              <a class="item m-text-thin center aligned" >明德至诚</a>
              <a class="item m-text-thin center aligned" >博学远志</a>
            </div>
          </div>
        </div>
        <div class="three wide column">
            <h4 class="ui inverted header m-text-thin m-text-spaced ">联系我们</h4>
          <div class="ui inverted link list">
            <div class="item m-text-thin" >Email<br/>supremacyxxxxx@gmail.com</div>
          </div>
        </div>

        <div class="seven wide column">
          <h4 class="ui inverted header m-text-thin m-text-spaced ">须臾疫物</h4>
          <p class="m-text-thin m-text-spaced m-opacity-mini" >2020年，新冠肺炎肆虐，各类防疫物资紧缺，有多余物资的机构或民众却又因缺乏透明公开的物资捐赠渠道而无法帮助一线的医护人员。本平台旨在开发一个疫情期间的实时物资共享平台，能够将物资汇集到有需要的人手上。</p>

        </div>
      </div>
      <div class="ui inverted section divider"></div>
      <p class="m-text-thin m-text-spaced m-opacity-tiny">Copyright © 2020 - <span >{{new Date().getFullYear()}}</span> 物资共享平台  Designed by  春日部防卫队(福州大学)</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'myfoot',
  data:function() {
    return{
      getNewShares:[],
      works:[]
    }
  },
  methods:{
    gotosource(){
      this.$router.push('/resource')
    }
  },
  created() {

  }
}
</script>

<style scoped>
  .teamname{
    margin: 0px;
    font-size: medium;
    float: left;
  }
  /*a{
    font-size: medium;
    text-decoration: none;
    float: right;
  }*/
  .headbody{
    overflow: hidden;
    background-color: #333;
  }
  .headbody .op{
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 2%;
    text-decoration: none;
    font-size: large;
  }
  .headbody .op:hover{
    background-color: #ddd;
    color: black;
  }
  .headbody .op2{
    float: right;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 4%;
    text-decoration: none;
    font-size: large;
  }
  .opleft {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
</style>
