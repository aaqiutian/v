<template>
    <main>
        <header>
            <p class="header1">
                <van-icon name="setting-o" size="25px" color="white" />
                <span><van-icon name="comment-o" badge="1" size="25px"  color="white"/></span>
            </p>
            
            <div class="xinxi">
                <div class="tou">
                    <img src="../assets/img/tou.png" alt="">
                </div>
                <div class="tou1">
                    <span>秋天啊</span>
                    <p class="jifen">普通会员&nbsp; 0积分</p>
                </div>
            </div>



              
        </header>

      <div class="footer">
        <ul class="ul1">
               <li class="li1">
                <van-icon name="pending-payment" size="28px"/>
                <span>待付款</span>
               </li>
               <li class="li1">
  <van-icon name="logistics" size="28px"/>
                <span>待发货</span>
               </li>
               <li class="li1">
  <van-icon name="send-gift-o" size="28px" />
                <span>待收货</span>
               </li>     
           </ul>

              <ul class="ul2">
               <li class="li1">
              <van-icon name="flower-o" size="28px"/>
                <span>待评价</span>
               </li>
               <li class="li1">
        <van-icon name="smile-o" size="28px"/>
                <span>售后</span>
               </li>
               <li class="li1">
                <span class="zui">全部订单 ></span>
               </li>     
           </ul>

           
  
      </div>
                <ul class="ul3">
               <li>
                <span class="red">0</span><br>
                <span class="xiao">优惠卷</span>
               </li>
               <li>
                 <span class="red">0</span><br>
                <span class="xiao">礼品卡</span>
               </li>
               <li>
                 <span class="red">0</span><br>
                <span class="xiao">我的收藏</span>
               </li>
               <li>
                 <span class="red">4</span><br>
                <span class="xiao">浏览记录</span>
               </li>
           </ul>

           <div class="content1">
               <van-cell is-link >
                   <van-icon name="edit" />我的学习
               </van-cell>
                <van-cell is-link >
                   <van-icon name="description" />我的家庭图书馆
               </van-cell>
                <van-cell is-link >
                  <van-icon name="records" />我的帖子
               </van-cell>
           </div>

        <div class="content2">
               <span class="tj">新华推荐</span>
                <ul class="ul4">
                   <li v-for="(item,index12) in list" :key="index12">
                       <p class="tu1"><img :src="item.src" alt=""></p>
                       <p class="title">{{item.title}}</p>
                       <span class="writer">{{item.w}}</span><br>
                       <span class="money">{{item.m}}</span>
                   </li>         
                </ul>
           </div>
    </main>
</template>


<style scoped>

main{
    background: #f7f7f7;
    position: relative;
  
}
header{
    width: 100%;
    /* height: 250px; */
    padding-bottom: 30px;
    padding-top: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background:linear-gradient(to top right, #e31e48,#d71a62,#d71763,#d01775,#c81486)
}
.header1{
    margin-right: 10px;
    display: flex;
    justify-content: flex-end;
}
.header1 span{
    margin-left: 20px;
}

.xinxi{
    margin-top: 70px;
    /* background:blue; */
    display: flex; 
}

.tou{
    margin: 10px;
    /* height: 80px; */
    width: 80px;
    border-radius: 50%;
    background: green;
}

.tou img{
   width: 100%;
   display: block;
}
.tou1{
    color: #ffffff;
}
.tou1 span{
    display: inline-block;
    margin-top: 28px;
}
.jifen{
    font-size: 12px;
    padding: 2px 4px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.3);
    margin-top:10px;
}


.footer{
    background: #ffffff;
    position: absolute;
    margin-left: 8px;
    width: 90%;
    left: 11px;
    top:220px;
    z-index: 3;
}

.ul1{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: 10px;
    border-bottom: 1px solid #999999;
    padding-bottom: 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
   background: #ffffff;
  
}
.ul1 .li1{
    display: flex;
    align-items: center;
}

.ul2{
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    margin: 10px;
    padding-bottom: 20px;
 
}

.zui{
    margin-top: 9px;
    display: inline-block;
}

.ul3{
    margin-top: 116px;
    background: #ffffff;
    display: flex;
    margin-left: 20px;
    width: 90%;
    /* justify-content: space-around; */
}

.ul3 li{
    text-align: center;
    line-height: 40px;
    width: 25%;
    border-right: 1px solid #f6f6f6
}

.ul3 li .red{
    color: red;
    
}
.ul3 li .xiao{
    font-size: 12px;
}

.content1{
    margin: 11px 11px 13px 21px;
    width: 90%;
}

.content2{

   margin: 30px 10px 0px;
}


.tj{
    margin-bottom: 10px;
    font-weight: bold;
    display: inline-block;
}
.ul4{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
     padding-bottom: 50px;
}

.ul4 li{
    background: #ffffff;
    width: 45%;
    margin-top: 10px;

}
/* .ul4 .title{
    height: 30px;
    margin-top: 10px;
} */
.tu1{
  
    text-align: center;
}
.tu1 img{
    width: 87%;
}
.title{
    margin-left: 5px;
    /* height: 43px; */
    font-size: 15px;
     word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.ul4 .writer{
    color: #999999;
    font-size: 12px;
      margin-left: 5px;
}

.ul4 .money{
    display: inline-block;
    color:#c62f2e;
    margin-top: 10px;
  margin-left: 5px;
}
</style>

<script>
export default {
    data(){
        return{
            list:[
              
              {
                src:'q88.jpg',
                title:'金银岛+鲁滨逊漂流记+八十天环游地球（漫画版 全9册）',
                w:'丹尼尔·笛福 等',
                m:'¥264.00'
              },

                {
                src:'q89.jpg',
                title:'世说新语(无障碍读本上中下)',
                w:'(南朝宋)刘义庆',
                m:'¥88.00'
              },
              {
                src:'q90.jpg',
                title:'这才是孩子爱看的漫画中国史（全8册）',
                  w:'青蓝图书',
                m:'¥198.00'   
              },
                 {
                src:'q91.jpg',
                title:'pandapia熊猫文创原创《Q版伴伴手机架》可爱实用软胶手机支架',
                 
                m:'¥65.00'   
              }
            ]
        }
    }
}
</script>