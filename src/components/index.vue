
<template>

    <main>
        <header>
             <div class="header1">
                    <van-icon name="scan" color="white"  size="30px"/>
                    <img src="../assets/img/t2.png" alt="">
                    <span><van-icon name="comment-o"  color="white" size="30px"/></span>
            </div>
               
            <p>
                    <router-link to="/list">
                        <van-search class="search" v-model="value" placeholder="请输入搜索关键词" />
                    </router-link>
            </p>          
        </header>
       

       <section>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                 <van-swipe-item><img src="../assets/img/l1.jpg" alt=""></van-swipe-item>
                 <van-swipe-item><img src="../assets/img/l2.png" alt=""></van-swipe-item>
                 <van-swipe-item><img src="../assets/img/l3.jpg" alt=""></van-swipe-item>
                 <van-swipe-item><img src="../assets/img/l4.png" alt=""></van-swipe-item>
                <van-swipe-item><img src="../assets/img/l5.jpg" alt=""></van-swipe-item>
            </van-swipe>
      </section>

      <ul class="p1">
           <li>
            <img src="../assets/img/p.jpg" alt="">
            <br>
            主题读物
            </li>
           <li>
            <img src="../assets/img/p1.jpg" alt="">
            <br>
            新华惠农

           </li>
           <li>
            <img src="../assets/img/p2.jpg" alt="">
            <br>
            新华优选

           </li>
           <li>
                <img src="../assets/img/p3.jpg" alt="">
               <br>
               日用百货

           </li>
           <li>
             <img src="../assets/img/p4.gif" alt="">
            <br>
            直播 

           </li>
      </ul>

      <div class="tu">
          <img src="../assets/img/p6.gif" alt="">
      </div>
            
        
      <div class="x1">
        <van-notice-bar left-icon="volume-o" :scrollable="false"  background="#fffefa" color="black" >
      <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
  >
            <van-swipe-item>2022年8月物流通知</van-swipe-item>
            <van-swipe-item>积分服务停止运营公告</van-swipe-item>
         
       </van-swipe>
     </van-notice-bar>

      </div>


      <div class="y1">
          <img src="../assets/img/l6.jpg" alt="">
          <img src="../assets/img/l7.jpg" alt="">
      </div>

      <div class="l2">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                 <van-swipe-item><img src="../assets/img/q1.jpg" alt=""></van-swipe-item>
                 <van-swipe-item><img src="../assets/img/q2.jpg" alt=""></van-swipe-item>
                 <van-swipe-item><img src="../assets/img/q3.jpg" alt=""></van-swipe-item>               
         </van-swipe>
      </div>

      <van-divider />
  

<ul class="ul2">
    <li v-for="(item,index) in list" @click="c(item)" :key="index">
        <p class="tu2">
          
             <img  :src="item.src" alt="">
             
        </p>
        <p class="text">{{item.jiashao}}</p>
        <span>￥{{item.m}}      
        </span><br>
        <u class="zk" v-if="item.zk!=null">￥{{item.zk}}</u>
    </li>
</ul>

   <div class="b1">
    <img src="../assets/img/l8.jpg" alt="">
   </div>


<ul class="ul2">
    <li v-for="(item,index1) in list1" @click="c(item)" :key="index1">
        <p class="tu2"><img  :src="item.src" alt=""></p>
        <p class="text">{{item.jiashao}}</p>
        <span>￥{{item.m}}      
        </span><br>
        <u class="zk" v-if="item.zk!=null" >￥{{item.zk}}</u>
    </li>
</ul>


 <div class="b1">
    <img src="../assets/img/q25.jpg" alt="">
   </div>


<ul class="ul2">
    <li v-for="(item,index2) in list2" @click="c(item)" :key="index2">
        <p class="tu2"><img  :src="item.src" alt=""></p>
        <p class="text">{{item.jiashao}}</p>
        <span>￥{{item.m}}      
        </span><br>
        <u class="zk" v-if="item.zk!=null">￥{{item.zk}}</u>
    </li>
</ul>

<div class="b1">
    <img src="../assets/img/l9.jpg" alt="">
    <img src="../assets/img/l10.jpg" alt="">
</div>


<ul class="ul2">
    <li v-for="(item,index3) in list3"  @click="c(item)" :key="index3">
        <p class="tu2"><img  :src="item.src" alt=""></p>
        <p class="text">{{item.jiashao}}</p>
        <span>￥{{item.m}}      
        </span><br>
        <u class="zk" v-if="item.zk!=null">￥{{item.zk}}</u>
    </li>
</ul>


<div class="b1">
    <img src="../assets/img/l11.jpg" alt="">
    <img src="../assets/img/l12.jpg" alt="">
</div>

<ul class="ul2">
    <li v-for="(item,index4) in list4"  @click="c(item)" :key="index4">
        <p class="tu2"><img  :src="item.src" alt=""></p>
        <p class="text">{{item.jiashao}}</p>
        <span>￥{{item.m}}      
        </span><br>
        <u class="zk" v-if="item.zk!=null">￥{{item.zk}}</u>
    </li>
</ul>



<div class="b1">
    <img src="../assets/img/l13.jpg" alt="">
</div>


<ul class="ul3">
    <li v-for="(item,index5) in list5"  @click="c(item)" :key="index5">
        <p class="tu3"><img  :src="item.src" alt=""></p>
        <p class="text1">{{item.jiashao}}</p>
        <span>{{item.w}}      
        </span><br>
        <u class="zk1" v-if="item.m!=null">￥{{item.m}}</u>
    </li>
</ul>


<div class="zanwei">
    
</div>

    </main>
</template>



<style scoped>
    header{
        width: 100%;
        background: #c62f2e;   
        text-align: center;
           
    }
    .header1{
        margin: 0px 10px;
        display: flex;
        justify-content: space-between;
    }
       
    header img{
        /* height: 50px; */
        width: 30%;
    }
    header span{
        /* position: absolute;
        top:13px;
        right:13px; */
    }


    header .search{
        background: #c62f2e;
    }
   
   section{
        /* margin: 10px; */
        /* background: skyblue;  */   
   }  
     
.my-swipe .van-swipe-item {
    color: #fff;
  }
.my-swipe .van-swipe-item img{
    /* height: 100%; */
    width: 100%;
    border-radius: 15px;
}

.p1{
    display: flex;
    justify-content: space-around;
    margin: 10px;
    background: #ffffff;
}

.p1 li{
    background: #ffffff;
    text-align: center;
}

.p1 li img{
    width: 60%;
}

.tu{
    margin: 10px;
}

.tu img{
    width: 100%;
    /* height: 30%; */
   /* background-size: cover; */
}

 .notice-swipe {
    height: 10vh;
    line-height: 10vh;
  }

.y1{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.y1 img{
    width: 50%;
}

.ul2{
    margin: 20px 0px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
.ul2 li{
    width: 30%;
}

.ul2 .text{
    font-size: 12px;
    height: 32px;
     word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.tu2{
    text-align: center;
   
}


.ul2 li img{
    width: 94%;
} 

.ul2 li{
    margin: 5px 0px;
}
.ul2 li span{
    display: inline-block;
    /* height: 30%; */
    margin-top: 30px;
    color: #c62f2e;
    font-weight: bold;
}

.ul2 li .zk{
    text-decoration: line-through;
    color: #999999;
    font-size: 13px;
}


.b1{
    width: 100%;
}

.b1 img{
    width: 100vw;
    display: block;
    /* height: 34vh; */
}

.ul3{
    margin-top: 30px;
    /* width: 100%; */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 45px;
    /* margin: 10px; */
    /* flex-flow: row  wrap; */
}

.ul3 li{
    margin: 5px 0px;
    width: 45%;
}
.ul3 .tu3{
    text-align: center;
  
}
.ul3 li img{
    width: 100%;
}
.text1{
     font-size: 14px;
    /* height: 40px; */
    color: #363433;
     word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.ul3 li span{
    display: inline-block;
    color: #999999;
    margin-top: 5px;
    font-size: 12px;
}

.zk1{
    text-decoration: none;
    display: inline-block;
    margin-top: 13px;
    color: #c62f2e;
}
/* .zanwei{
    height: 600px;
    width: 100%;
    background: skyblue;
} */

</style>


<script>

export default {

    data() {        
    return {
   
      value: '',
      list:[
        {
             src:'q4.jpg',
             jiashao:'没头脑和不高兴/小树苗儿童成长经典阅读宝库',
             m:'25.00',
             zk:'50.00',
             z:'任溶溶',
             s:'安徽少年儿童出版社'
             
        },
        {
             src:'q5.jpg',
             jiashao:'新享卡-通用卡（电子卡无实体）',
             m:'50.00'
        },
        {
             src:'q6.jpg',
             jiashao:'精准回应 让孩子养成自主自律的好习惯',
             m:'75.00',
             zk:'150.00',
             z:'杨杰',
             s:'人民邮电出版社'

        },
        
          {
             src:'q7.jpg',
             jiashao:'写给少年的水浒人物故事（全5册）',
             m:'67.00',
             zk:'472.00',
             z:'郄亚威',
             s:'重庆出版社'
        },
          {
             src:'q8.jpg',
             jiashao:'建设美丽中国：新时代生态文明建设理论与实践',
             m:'41.90',
             zk:'128.00',
              z:'曹前发',
             s:'人民教育出版社'
        }
        ,{
              src:'q9.jpg',
             jiashao:'宫西达也小卡车绘本（全5册）',
             m:'90.00',
              z:'宫西达也',
             s:'北京联合出版中心'
        }

        ],

        list1:[            
        {
             src:'q10.jpg',
             jiashao:'道德经+史记+山海经（精装全3册）',
             m:'69.40',
             zk:'122.40'
        },
        {
             src:'q11.jpg',
             jiashao:'四大名著（足本足回经典绣像珍藏版 全4册）',
             m:'61.80',
             zk:'365.40'

        },
        {
             src:'q12.jpg',
             jiashao:'史记（全6册）',
             m:'41.80',
             zk:'258.00'
        },
        
          {
             src:'q13.jpg',
             jiashao:'藏在古诗里的趣味游戏（全4册）',
             m:'25.50',
             zk:'128.00'
        },
          {
             src:'q14.jpg',
             jiashao:'福尔摩斯探案与思维故事（全4册）',
             m:'120.00',
            
        }
        ,{
              src:'q15.jpg',
             jiashao:'有故事的词语（全5册）',
             m:'71.00',
             zk:'174.00'
        },
        {
              src:'q16.jpg',
             jiashao:'一本书读懂中国史',
             m:'26.00',
             zk:'39.00'
        },

        {
              src:'q17.jpg',
             jiashao:'中国诗词大会第六季（全2册）',
             m:'40.50',
             zk:'78.00'
        },

        {
              src:'q18.jpg',
             jiashao:'中国绘国学启蒙点读版（四大名著100册+宋词三百首60册+唐诗三百首60册）支持小达人和考拉点读',
             m:'150.00',
             zk:'660.00'
        },
        {
              src:'q19.jpg',
             jiashao:'王阳明大传（全3册）',
             m:'50.00'
             ,
             zk:'168.00'
        },
        {
              src:'q20.jpg',
             jiashao:'生命探索之旅（假如给我三天光明+了不起的盖茨比+鲁滨孙漂流记+名人传+童年 全5册）',
             m:'34.00'
             ,
             zk:'124.00'
        },
        {
              src:'q21.jpg',
             jiashao:'论语超有趣（全4册）',
             m:'70.00'
             ,
             zk:'108.00'
        },
        {
              src:'q22.jpg',
             jiashao:'微笑科学馆：自然世界（全6册）',
             m:'50.00',
             zk:'148.00'

        },
        {
             src:'q23.jpg',
             jiashao:'分解背诵小古文，灵活运用写作文',
             m:'101.00',
             zk:'189.00'
        },
        {
              src:'q24.jpg',
             jiashao:'茅盾文学奖获得者刘震云作品集：一句顶一万句+一地鸡毛（全2册）',
             m:'57.90',
             zk:'87.00'
        },

        ],
          
          list2:[
             {
             src:'q25.jpg',
             jiashao:'和田玉平安扣',
             m:'198.00',
             zk:'199.00'
        },
        {
             src:'q26.jpg',
             jiashao:'竹隐紫砂盘香炉 中式创意摆件香薰',
             m:'238.00',
             zk:'258.00'
        },
        {
             src:'q27.jpg',
             jiashao:'NONOO蓝精灵联名吸管杯',
             m:'139.00',
             zk:'149.00'
        },
        
          {
             src:'q28.jpg',
             jiashao:'青花转运筒手链',
             m:'129',
             zk:'149.00'
        },
          {
             src:'q29.jpg',
             jiashao:'爆满金星·天然小叶紫檀手串组合',
             m:'194.00',
             zk:'199.00'
        }
        ,{
              src:'q35.jpg',
             jiashao:'金山·蓝色幻影盖碗',
             m:'339.00',
             zk:'600.00'
        },
        {
              src:'q30.jpg',
             jiashao:'张小凤文房四宝 皓月千里套装',
             m:'275.00',
             zk:'320.00'
        },

        {
              src:'q30.png',
             jiashao:'新中国成立、抗日战争胜利纪念币套装',
             m:'398.00',
             zk:'589.00'
        },

         {
              src:'q31.jpg',
             jiashao:'中国诗词大会第六季（全2册）',
             m:'398.00',
             zk:'425.00'
        },

         {
              src:'q32.jpg',
             jiashao:'宋香南朝遗梦手串',
             m:'398.00',
             zk:'450.00'
        },

        {
              src:'q33.jpg',
             jiashao:'宋香南朝遗梦平安方牌（挂绳流苏颜色随机）',
             m:'450.00',
             zk:'600.00'
        },
        {
              src:'q34.jpg',
             jiashao:'精美国风创意吊坠-好柿莲莲',
             m:'376.00',
             zk:'379.00'
        },

          ],

          list3:[
              
         {
             src:'q36.jpg',
             jiashao:'双枪 无漆无蜡节节高升竹筷子30双装',
             m:'18.90',
             zk:'39.00'
        },
        {
             src:'q37.jpg',
             jiashao:'欧普 明顾可移式LED台灯 MT-HY03T-151',
             m:'179.00',
             zk:'198.00'
        },
        {
             src:'q38.png',
             jiashao:'NONOO蓝精灵联名吸管杯',
             m:'34.90',
             zk:'40.00'
        },
        
          {
             src:'q39.jpg',
             jiashao:'张小泉摩捷•优雅蓝刀具三件套',
             m:'138',
             zk:'226.00'
        },
          {
             src:'q40.jpg',
             jiashao:'沃品三合一伸缩充电线',
             m:'50.00',
             zk:'69.00'
        },

         {
             src:'q41.jpg',
             jiashao:'特斯恩花式篮球 7号标准篮球',
             m:'168.0',
             zk:'258.00'
        },

          ],

         list4:[
               {
             src:'q42.jpg',
             jiashao:'陈薯酸辣粉6种口味大礼包',
             m:'52.90',
             zk:'55.90'
        },
        {
             src:'q43.jpg',
             jiashao:'稻香村定胜益生益生菌定胜糕礼盒',
             m:'109.00',
             zk:'129.00'
        },
        {
             src:'q44.jpg',
             jiashao:'四川2022年早春雀舌全芽头绿茶50g ',
             m:'94.50',
             zk:'109.00'
        },
        
          {
             src:'q45.jpg',
             jiashao:'悦活峨眉山天然矿泉水500ML*24全纸包',
             m:'74.90',
             zk:'100.00'
        },
          {
             src:'q46.jpg',
             jiashao:'杞果小圣枸杞鲜蜜8瓶装',
             m:'119.00',
             zk:'158.00'
        }
        ,{
              src:'q47.jpg',
             jiashao:'同仁堂枇杷露果汁饮料（15瓶/箱）',
             m:'129.00',
             zk:'180.00'
        },
        {
              src:'q48.png',
             jiashao:'平仄 小青柑茶  130g/盒',
             m:'70.00',
             zk:'99.00'
        },

        {
              src:'q51.jpg',
             jiashao:'炎昊农场枸杞花蜜成熟蜜500g ',
             m:'69.90',
             zk:'70.00'
        },

         {
              src:'q52.jpg',
             jiashao:'四川宜宾毛尖绿茶250g',
             m:'54.00',
             zk:'59.00'
        },

        {
              src:'q53.jpg',
             jiashao:'手工捏尖祥源茶  黄山太平猴魁绿茶 ',
             m:'95.00',
             zk:'169.00'
        },


        {
              src:'q49.jpg',
             jiashao:'恋潮香酥黄鱼酥',
             m:'24.90',
             zk:'29.00'
        },

        
        {
              src:'q50.jpg',
             jiashao:'安徽品源荟深山土蜂蜜500g',
             m:'39.00',
             zk:'40.00'
        },

         ],
         list5:[
            {
                src:'q54.jpg',
                jiashao:'刺客伍六七（第一季 全4册）',
                w:'何小疯',
                m:'168.00'
            },
                {
                src:'q55.jpg',
                jiashao:'数学简史',
                w:'约瑟夫·雷巴科夫 等',
                m:'128.00'
            },

            {
                src:'q56.jpg',
                jiashao:'爱恩倍薰衣草持久留香促销组合家庭装洗衣液2L*1桶）',
               
                m:'39.00'
            },

           {
                src:'q57.jpg',
                jiashao:'多派 厨房冰箱带盖储物盒1500ml*4个装',               
                m:'33.90'
            },

              {
                src:'q58.jpg',
                jiashao:'国学小辞典', 
                w:'李时',              
                m:'48.00'
            },

              {
                src:'q59.jpg',
                jiashao:'vux 电动牙刷',               
                m:'299.00'
            },

         ]
        

    };
  },


     methods: {
        c(id){ 
        this.$router.push({
        path:'/xiangqing',
        query:{
            items:JSON.stringify(id)  
        }
      
      })

}



     }
}
</script>
