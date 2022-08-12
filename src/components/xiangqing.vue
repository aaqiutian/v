<template>
    <main>
   <div class="header">
       <van-icon name="arrow-left" color="red" size="25px" @click="back()"/>
   <van-tabs  scrollspy sticky class="zh">
   <van-tab title="商品">
      <div class="tab1">
           <div class="content1">
            <div class="tu">
                    <img :src="id.src" alt="">
            </div>
            <div class="xinxi">    
                <span class="money" v-if="id.zk==null">￥{{id.m}}</span> 
                <div v-if="id.zk!=null" class="zk">
                    <p class="left">直降<span>￥{{id.m}}</span><u>￥{{id.zk}}</u></p>
                    <p class="right">
                     距直降结束：<br>
                     <van-count-down :time="time" format="DD天: HH : mm : ss " />
                     </p>
                     <van-icon name="info-o" size="20px" class="in"/>
                </div>
                <p><van-icon name="like-o" size="25px" class="like" /><br>
                   <span>收藏</span>
                </p>
            </div>

         <div class="title">{{id.jiashao}}</div>
         
         <div class="tc">
            <van-cell is-link >
               <div class="n1">
                   <p>作者<span>{{id.z}}</span></p>
                   <span>更多信息</span>
               </div>
              
            </van-cell>
            <van-cell is-link >
               <div class="n1">
                  <p>出版社<span>{{id.s}}</span></p>
                  <span>更多信息</span>
               </div>
            
            </van-cell>

        
           

         </div>

   <div class="n2">
           <van-cell is-link  >
               <div class="n3">
                  
                  <p class="n4">送至</p>
                  <van-icon name="location-o" size="25px" color="#c62f2e"/><br>
                   <p class="n5">北京 北京市 朝阳区</p>                        
               </div>
                <span class="n6">有货</span>
            </van-cell>
           </div>

         <div class="ping">
           <van-cell is-link >用户评论(0)</van-cell>
      </div>
      </div>

     
       
      </div>
     
   
  </van-tab>

<van-tab title="详情">
    <div class="content2">
       <van-tabs type="card">
       <van-tab class="b" title="图文详情">
         <div class="e" :style="'height:'+height+ 'vh'">
  <div class="b1">
            <h3>内容推荐</h3>
            <p>“小树苗儿童成长经典阅读宝库”是一套适合5～
               8岁孩子阅读的经典读物。本册为《没头脑和不高兴》
               ：以上海美影厂拍摄的同名动画电影和动画片为素材精心
               绘制和设计，讲述两个孩子——记什么都打个折扣的“没头脑”
               和总是由着自己性子来的“不高兴”“变成大人和体验不同社会角色
               后发生的的幽默故事。本书整体采用多格漫画的表现形式，版面编排灵活
               多变、构思新颖。故事生动有趣，体现了智慧和神奇，让小读者获得心灵
               的启迪。插图充满童趣，色彩明快、鲜艳，版式活泼，采用注音，以满足小读者的阅
               读和审美需求。 </p>
         </div>
          <div class="b1">
            <h3>作者简介</h3>
            <p>“小树苗儿童成长经典阅读宝库”是一套适合5～ 8岁孩子阅读的经典读物。本册为《没头脑和不高兴》 ：以上海美影厂拍摄的同名动画电影和动画片为素材精心 绘制和设计，讲述两个孩子——记什么都打个折扣的“没头脑” 和总是由着自己性子来的“不高兴”“变成大人和体验不同社会角色 后发生的的幽默故事。本书整体采用多格漫画的表现形式，版面编排灵活 多变、构思新颖。故事生动有趣，体现了智慧和神奇，让小读者获得心灵 的启迪。插图充满童趣，色彩明快、鲜艳，版式活泼，采用注音，以满足小读者的阅 读和审美需求。 </p>

         </div>
           
           <div class="b2">
              <h3>目录</h3>
               <span>没头脑和不高兴（原著版）</span>
               <span>丢三落四的“没头脑”</span>
               <span>我叫“不高兴”</span>
               <span>没头脑画学校</span>
               <span>不高兴想长大</span>
               <span>一起长大</span>
               <span>没头脑的千层少年宫</span>
               <span>没头脑的千层少年宫</span>
               <span>没头脑和不高兴（原著版）</span>
               <span>丢三落四的“没头脑”</span>
               <span>我叫“不高兴”</span>
               <span>没头脑画学校</span>
               <span>不高兴想长大</span>
               <span>一起长大</span>
               <span>没头脑的千层少年宫</span>
               <span>没头脑的千层少年宫</span>
               <span>没头脑和不高兴（原著版）</span>
               <span>丢三落四的“没头脑”</span>
               <span>我叫“不高兴”</span>
               <span>没头脑画学校</span>
               <span>不高兴想长大</span>
               <span>一起长大</span>
               <span>没头脑的千层少年宫</span>
                <span>没头脑的千层少年宫</span>
                <span>没头脑的千层少年宫</span>
               <span>没头脑的千层少年宫</span>
               <span>没头脑和不高兴（原著版）</span>
               <span>丢三落四的“没头脑”</span>
               <span>我叫“不高兴”</span>
               <span>没头脑画学校</span>
              <span>没头脑的千层少年宫</span>
                <span>没头脑的千层少年宫</span>
                <span>没头脑的千层少年宫</span>
               <span>没头脑的千层少年宫</span>
               <span>没头脑和不高兴（原著版）</span>
               <span>丢三落四的“没头脑”</span>
               <span>我叫“不高兴”</span>
               <span>没头脑画学校</span>
           </div>
           
           </div>
            <div class="center">
             <p class="click" v-if="height<=150" @click="add()">点击展开</p>
             <p class="click" v-if="height==200" @click="shou()">点击收回</p>
            </div>
           
       </van-tab>
       <van-tab title="出版信息">
           <div class="d1">
               <table>
                 <tr>
                     <th>基础信息</th>
                     <th></th>
                 </tr>
                                    
                  <tr>
                     <td>作者</td>
                     <td>任溶溶 等</td>
                  </tr>
                  <tr>
                     <td>出版时间</td>
                     <td>2018-07-01</td>
                  </tr>
                  <tr>
                     <td>出版社</td>
                     <td>安徽少年儿童出版社</td>
                  </tr>
               </table>

             <table>
                  <tr>
                     <th>普通信息</th>
                     <th></th>
                  </tr>
                  <tr>
                     <td>媒质</td>
                     <td>图书</td>
                  </tr>
                  <tr>
                     <td>出地</td>
                     <td>安徽</td>
                  </tr>
                  <tr>
                     <td>出次</td>
                     <td>1</td>
                  </tr>
                  <tr>
                     <td>印次</td>
                     <td>1</td>
                  </tr>
               </table>


           </div>
       </van-tab>
       <van-tab title="售后政策">
            <div class="content3">
               <div class="c1">
               <h4>正品推荐</h4>
               <p>新华书店网上商城向您保证所售商品均为正品行货，所有商品开具电子发票。</p>
               </div>

               <div class="c2">
                  <h4>售后承诺服务</h4>

                   <div class="c3">
                     <p>
                        1） 新华书店网上商城支持商品7天内无理由退换货（不影响二次销售），15天内可以换货，以客户收到商品第二日起计算。（食品、酒类等非图书商品非质量问题不予退换）
                     </p>
                     <p>
                        2） 平台售后审核人员在客户提交申请后72小时之内完成审核。
                     </p>
                     <p>
                       3）退换货业务均会在自接收到问题商品之日起7日之内处理完成，国家法定节假日不计算在内。 
                     </p>
                   </div>
               </div>
               
            </div>
       </van-tab>
</van-tabs>
   </div> 
</van-tab>



<van-tab title="推荐">
   
   <div class="aside">
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
</van-tab>
   </van-tabs>

   </div>


<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
  <van-goods-action-icon icon="cart-o" text="购物车" />
  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
  <van-goods-action-button type="warning" @click="tian(id)" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>


    </main>
</template>

<style scoped>
 .header{
   
    /* margin: 10px; */
    margin-bottom: 30px;
 }
 .ul1{
    display: flex;
    justify-content: space-between;
 }

 li.current{
    border-bottom: 2px solid red;
 }
 


/* .z{
    width: 300px;
    height: 300px;
    background: red;
    margin: 10px;
} */

.zh{
  /* height: 2000px; */
}

.tab1{
   background: #f7f7f7;
}

.content1{
    /* height: 600px; */
    background: #f7f7f7;
    padding-bottom: 30px;
    
}

.tu{
  
}

.tu img{
   width: 100%;
   display: block;
}
.xinxi{
   display: flex;
   margin:0px;
   margin-right: 2vw;
   justify-content: space-between;
   background: #ffffff;
}

.money{
   font-size: 27px;
   color: #c62e2f;
   display: inline-block;
   margin-left: 2vw;
}

.title{
 
   margin-bottom: 10px;
   font-size: 20px;
   background: #ffffff;
   padding-bottom: 5px;

    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.tc{
   margin-bottom: 10px;
}

.tc span{
  font-size: 14px;
  color: #999999;
  margin-left: 10px;
}


.n1{
   display: flex;
   justify-content: space-between;
}

.n2{
 
   margin-bottom: 10px;
   padding-bottom: 10px;
}
.n3{
   display: flex;
}
.n5{
   color: #999999;
}
.n6{
   color: #c62e2f;
   margin-left: 25px;
}
.n3 p{
   display: inline-block;
   
}
.n4{
   margin-bottom: 10px;
}

.ping{

   margin-bottom: 20px;
}

.content2{
   margin: 10px;
}

.van-tabs__nav--card .van-tab{
   color: #c62f2e;
}

.b1{
   margin:30px 20px 10px;
}

.b1 h3{
   text-align: center;
}

.b1 p{
   margin-top: 10px;
   font-size: 13px;
}

.b2{
   margin: 13px;
}
.b2 h3{
   text-align: center;
   margin-bottom: 10px;
}

.b2 span{
   font-size: 14px;
   display: block;
}

.e{
   /* height: 900px; */
   overflow: hidden;
   /* padding-bottom: 30px;
   margin-bottom: 30px; */
}

.click{
   color: #c62f2e;
   text-align: center;
}

.content3{
   margin: 20px;
}

.c1 h4{
   margin: 10px 0px 10px 0px;
}
.c1 p{
   width: 320px;
   font-size: 13px;
   margin-bottom: 20px;
}

.c2 h4{
  margin-bottom: 10px;
}

.c2 p{
   margin-top: 10px;
   font-size: 14px;
}


.aside{
   background: #f7f7f7;
 
   padding-top: 20px;
}

.d1{
   margin: 20px;
}

table{
   border: 1px solid #f7f7f7;
}

table{
   margin-bottom: 20px;
   line-height: 40px;
   width: 100%;
   color: #999999;
   border-collapse:collapse;
}
table td{
   font-size: 13px;
   width: 50%;
   border: 1px solid #f7f7f7;
}
table th{
   text-align: left;
   background: #f7f7f7;
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
   padding-bottom: 30px;
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
    font-size: 19px;
    margin-top: 10px;
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
  font-size: 16px;
}

.bottom{
   position: fixed;
   left: 0px;
   bottom: 0px;
}

.like{
   margin-left: 1vw;
}

.zk{
   background: #7e4dbf;
   width: 85%;
   margin-left: 10px;
   border-top-right-radius: 25px;
   border-bottom-right-radius: 25px;
   display: flex;
}

.left{
   color: #ffffff;
   margin-top: 2vw;
}

.left span{
   font-size: 16px;
}

.left u{
   text-decoration: line-through;
}

.right{
   color: #ffffff;
   font-size: 16px;
   margin-left: 1vw;
 
}

.in{
   margin-top: 2vh;
   margin-left: 2vw;
}
</style>
 
<script>

export default {
   data(){
     return{

        time: 64.8*30 * 60 * 60 * 1000,
        height:150,    
        id: JSON.parse( this.$route.query.items),
        list1:[],
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
   },
   



 methods:{
    back(){
        this.$router.push('/index')
     },
      add(){
         this.height=200 
         console.log('ss')
      },
      shou(){
         this.height=150
      },

      tian(id){          
           this.$router.push({
            //   name:'shopcar', 
              path:'/shopcar',          
              query:{
                item: JSON.stringify(id) 
              }            
           })
      },

  
   

 }
}




</script>