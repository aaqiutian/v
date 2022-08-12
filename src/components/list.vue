<template>   
        <main>
            <header>
<van-row>
  <van-col span="2" class="z2">
    <van-icon name="arrow-left" color="#cf5150" size="25px" @click="back()"/>
  </van-col>
  <van-col span="19" s>
    <van-search  placeholder="请输入搜索关键词" class="z1"/>
  </van-col>
  <van-col span="2" class="z3">
    <van-icon name="apps-o" size="25px" color="#cf5150"/>
    </van-col>
</van-row>
  </header>

  <div class="top">
<van-cell is-link class="top1">
   <span class="tu2"><img src="../assets/img/top1.png" alt=""></span>
   <span class="word">新华</span> 
</van-cell>
  </div>

<van-row type="flex" justify="space-around" class="z4">
  <van-col span="3">
     综合
  <van-icon name="play" class="play"/>
    </van-col>
  <van-col span="3">
    销量<van-icon name="play" class="play"/>
    </van-col>
  <van-col span="3">
    价格<van-icon name="play" class="play"/>
    </van-col>
  <van-col span="3">
    筛选<van-icon name="browsing-history"/>
    </van-col>  
</van-row>


<van-row type="flex" justify="space-around" class="z5">
  <van-col span="5" class="z6">仅看有货</van-col>
  <van-col span="5" class="z6">商品...<van-icon name="arrow-down" class="j"/></van-col>
  <van-col span="5" class="z6">品牌<van-icon name="arrow-down" class="j"/></van-col>
  <van-col span="5" class="z6">语言<van-icon name="arrow-down" class="j"/></van-col>
</van-row>
      
      <div class="content">
        <div class="con">
 <van-row type="flex" justify="space-around" class="flex">
          <van-col span="11" class="s" v-for="(item,index) in list" :key="index">
                       <p class="tu1"><img :src="item.src" alt=""></p>
                       <p class="title">{{item.title}}</p>
                       <span class="writer">{{item.w}}</span><br>
                       <span class="money">{{item.m}}</span>

                       <p class="span" v-if="item.ishot==true">抢购中</p> 
                       
           </van-col>

                 
    </van-row>
        </div>
    
      </div>
        </main>
</template>

<style scoped>
   /* main{
    width: 100%;
   } */
   header{
    margin: 10px;
    /* position: fixed;
    top:0px;
    left: 0px; */
   }
   .z1{
    padding:0px;
   
   }
   .z2{
    margin-top: 5px;
   }
   .z3{
    margin-top: 3px;
    margin-left: 5px;
   }

   .top1{
     background: #f7f7f7;
   }
   .top1 .tu2{
    width: 10vw;
    /* height: 10vw; */
   }

   .top1 .tu2 img{
    width: 19%;
    vertical-align: middle;
   }

   .van-icon-arrow:before{
    margin-top: 13px;
   }

   .word{
    font-size: 16px;
    margin-left: 10px;
   }
   .z4{
    text-align: center;
    color: #999999;
    background: #f7f7f7;
    font-size: 14px;
    line-height: 30px;
   }

 .play{
    transform: rotate(90deg);
}
   .z5{
    text-align: center;
    background: #f7f7f7;
   }
    
    .z6{
       font-size: 13px;
       color: #999999;
        background: #ffffff;
        padding: 2px 2px;
    }
.j{
    margin-left: 10px;
}

.content{
    padding-top: 5px;
    background: #f7f7f7;
}

.con{
 height: 66vh;
 overflow: hidden;
}
.flex{
    /* margin: 10px; */
    flex-flow: row wrap;
    height: 62vh;
    overflow: auto;
}

.s{
    margin-top: 10px; 
    background: #ffffff;
    position: relative;
}

.tu1{
 
    text-align: center;
    width: 100%;
}
.tu1 img{
    width: 100%;
    /* height: 100%; */
}
.title{
    margin-top: 10px;
    margin-left: 5px;
    font-size: 15px;
     word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
 .writer{
    color: #999999;
    font-size: 12px;
      margin-left: 5px;
}

 .money{
    display: inline-block;
    color:#c62f2e;
    margin-top: 10px;
  margin-left: 5px;
}


.span{
  background: #c62f2e;
  text-align: center;
  padding:3px 0px;
  width: 100%;
  position: absolute;
  bottom:70px;
  left:0px;
  color: #ffffff;
  
}

</style>

<script>

 

export default {

  data(){
    return{
        list:[
            {
                src:'q92.jpg',
                title:'新华定制 霍山铁皮石斛枫斗（特级）10g',
                m:'¥299.00'
            },
              {
                src:'q93.png',
                title:'FLYING TOT 全效去渍洗衣液-4斤装',
                ishot:true,
                m:'¥41.90'
            },
               {
                src:'q93.jpg',
                title:'新华定制 新华英雄钢笔',
                m:'¥79.00',
                ishot:true,
            },
              {
                src:'q94.jpg',
                title:'考古学集刊（第23集）',
                w:'朱岩石，洪石，新华 ',
                m:'¥258.00',
                ishot:true,
            }
            ,
               {
                src:'q95.jpg',
                title:'新华1937普洱双饼茶',
                m:'¥798.00'
            },
              {
                src:'q96.jpg',
                title:'新华同义词词典(中型本)',        
                m:'¥39.90'
            }
            ,
               {
                src:'q97.jpg',
                title:'新华之光(精)',        
                m:'¥93.10'
            },
            {
                 src:'q98.jpg',
                title:'宇航员手机支架',        
                m:'¥39.00'
            }
        
        ]
      ,
    
    }
  },
  methods:{
     back(){
        this.$router.push('/index')
     }
  }
  
  



}
</script>