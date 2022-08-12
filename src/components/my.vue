<template>
    <main>
     
<div class="login">
    <router-link to="/index"><van-icon name="arrow-left" size="25px" color="red"/></router-link>
<van-tabs  background="#f7f7f7" id="z7" >
     <van-tab title="账号登录" id="z6" >
           <van-field  class="z4" size="90px"
               v-model="value1"
               label="账号"
            
              placeholder=""
               />
                <van-field class="z1"
                v-model="value2"
                label="密码"
              
                format-trigger="onBlur"
                placeholder="" 
                />

           <div class="a">
                   <p>
                    <router-link to="/regiter">注册</router-link>                      
                    </p>
                 <p>忘记密码</p>
             </div>


  
   <button class="log" @click="on()">
         登录  
    </button>    
    
                </van-tab>

  <van-icon class="z2" name="closed-eye" />

     <van-tab title="快捷登录">

 <van-field  class="z" size="60px"
               v-model="value1"
               label="请输入手机号"
             
              placeholder=""
               />
                <van-field class="z1"
                v-model="value2"
                label="图片验证码"
            
                format-trigger="onBlur"
                placeholder="" 
                />
                 <van-field class="z1"
                v-model="value2"
                label="短信验证码"
           
                format-trigger="onBlur"
                placeholder="" 
                />
                <div class="send">发送验证码</div>
                <div class="tu"><img src="../assets/img/yz1.png" alt=""></div>

                  <button class="log" @click="on()">
         登录  
    </button> 
     </van-tab>

 </van-tabs>

</div>


    </main>
</template>

<style scoped>

main{
    background: #f7f7f7;
    height: 157vw;
    padding-top: 20vw;
}
.login{
    margin:0vw 10vw;
}


/* .van-tabs__nav{
    background: #f7f7f7;
}

.van-tab{
    background: #f7f7f7;
} */
.z{
   border: none; 
   line-height: 40px;
}
.z1{
    position: relative;
    line-height: 40px;
    border-top:1px solid #999999
}

.z2{
    position: absolute;
    top: 125px;
    right: 25px;
}

.z4{
    border-bottom: 1px solid #999999;
    line-height: 40px;
}

#z7,#z6{
    font-size: 18px,
}


.a{
    margin: 10px;
    display: flex;
    justify-content: space-between;
}



.log{
    background: #c62f2e;
    line-height: 50px;
    width: 100%;
    outline: none;
    border: none;
    text-align: center;
    margin-top: 20px;
}


.van-field__control{
    position: relative;
}
.send{
    position: absolute;
    top:180px;
    right:0px;
    color: azure;
    background: #c62f2e;
    line-height: 20px;
    width: 30%;
    text-align: center;
}


.tu{
    position: absolute;
    top:110px;
    right:0px
}
.a p a{
    text-decoration: none;
    color: black;
}
</style>

<script>
export default {
   data() {
    return {
      value1: '',
      value2: '',
    };
  },
  methods: {
     on(){
        this.$router.push('/person')
     }
  },
}
</script>