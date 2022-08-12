
<template>
    <article>
        <router-view></router-view>
        <ul class="buttom">
            <li>
               <router-link to="/index">
                  <van-icon name="home-o" size="25px" class="tb"/>
                   <van-icon name="home-o" size="25px" class="tc" color="red"/>
                <br>
                <span>首页</span>
                
               </router-link>
            </li>
             
            <li>
               <router-link to="/type">
              <van-icon name="apps-o" size="25px" class="tb" />
                <van-icon name="apps-o" size="25px" class="tc" color="red"/>
               <br>
               <span>分类</span>
               
               </router-link>                
            </li>
            <li>
                <router-link to='/find'>
                <van-icon name="eye-o" size="25px" class="tb"/>
                 <van-icon name="eye-o" size="25px" class="tc" color="red"/>
                <br>
                  <span>发现</span>
                </router-link>
            </li>
            <li>
                <router-link to="/shopcar">              
               <van-icon name="shopping-cart-o" size="25px" class="tb"/>
                <van-icon name="shopping-cart-o" size="25px" class="tc" color="red"/>
                <br>
                    <span>购物车</span>
                </router-link>
            </li>
            <li>
                
                <router-link to="/my">
               <van-icon name="user-o" size="25px" class="tb"/>
                      <van-icon name="user-o" size="25px" class="tc" color="red"/>
                <br>
                <span>我的</span>
                </router-link>
            </li>
        </ul>
    </article>
</template>

<style>
*{
    margin: 0px;
    padding:0px;
    list-style: none;
}
</style>

<style scoped>
.buttom{
    position: fixed;
    left: 0px;
    bottom: 0px;
    background: #f3f3ef;
    width: 100%;
    /* height: 52px; */
    display: flex;
    justify-content: space-around;
}

.buttom li {
    /* width: 20%; */
   text-align: center;
   font-size: 12px;
}

.buttom li a{
    text-decoration: none;
    color: black;
}
.tb{
    margin-top: 0.5vh;
}


.tc{
    display: none;
    margin-top: 0.5vh;
}

.router-link-active .tb{
     display: none;
}
.router-link-active .tc{
    display: inline-block;
}
.router-link-active span{
    color: red;
}
.router-link-active {
    color: red;
}

</style>

<script>

export default {
    data(){
        return{
            item:JSON.parse(sessionStorage.getItem('item')) ,
            id:this.$route.params.item
        }
    },
    
}
</script>

