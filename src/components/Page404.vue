
<template>
  <div>
    <myhead></myhead>
    <div class="notfound">
      <div class="m-container-small m-padded-tb-massive">
        <div class="ui error message m-padded-tb-small" >
          <div class="ui contianer">
            <h2>物资供给平台提醒您</h2>
            <img src="../../static/images/404.jpg" style="border-radius:10px">
            <h2>404</h2>
            <p>对不起，你访问的页面不存在</p>
          </div>
        </div>
      </div>
    </div>

    <myfoot></myfoot>
  </div>
</template>

<script>
  import myhead from "./myhead";
  import myfoot from "./myfoot";

  export default {
    components:{
      myhead:myhead,
      myfoot:myfoot
    },
    data () {
      return {
      }
    },
    methods: {
      onClickRefresh () {
        window.location.reload()
      },
      onClickBack () {
        this.$router.push({ path: '/needer' })
      }
    }
  }
</script>

<style  scoped>
  @media screen and (max-width: 779px) {
    .error-msg-box {
      font-size: 10px;
    }
  }
  @media screen and (min-width: 780px) {
    .error-msg-box {
      font-size: 16px;
    }
  }
  .notfound {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    img {
      width: 50%;
    }
    .contest-text {
      font-size: 1.6em;
      min-height: 8em;
    }
    .msg-text {
      font-size: 5.5em;
    }
    .btn-text {
      font-size: 1.2em;
      width: 18em;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    span {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        border-radius: 0.5em;
        padding: 0.5em 1em;
        color: rgba(65, 184, 131, 1);
        cursor: pointer;
    }
  }


</style>
