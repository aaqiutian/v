<template>
   <main>
     
      <div class="header">
<van-row type="flex" justify="end" gutter="30">
     <van-col span="3" class="j">
      <van-icon name="arrow-left" color="red" size="25px" @click="back()"/>
    </van-col>
  <van-col span="9">
       购物车<van-icon name="location-o" />
    </van-col>
  <van-col span="6" class="bj">
        编辑
    </van-col>
</van-row>
        </div> 

<div class="wrap">
   
<van-coupon-cell
  @click="showList = true"
/>
<ul class="car">
    <li v-for="(item,index16) in list1" :key="index16">
         <div class="t">   
         <div class="p">
             <van-checkbox v-model="item.select" checked-color="#ee0a24" class="c" @click="select(index16)"></van-checkbox>
             <img :src="item.src" alt="">    
             <div class="a">
               <p>{{item.jiashao}}</p>
               <div class="b">
                <span>￥{{item.m}}</span>
                <div class="js">                 
                      <button  @click="jian(index16)" class="cz">-
                      </button>
                       {{item.count}}                   
                        <button @click="add(index16)" class="cz">+
                      </button>
                </div>
                
            <van-icon name="delete-o" size="25px" @click="del(index16)" color="red"/>
               </div>
             </div>   
        </div>
    </div>
    </li>

    
</ul>

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
</div>

        <div class="bottom">
            <van-submit-bar :price="summoney*100" button-text="提交订单">
            <van-checkbox v-model="checked" @click="select1()">全选</van-checkbox>
</van-submit-bar>
        </div>
   </main>
</template>


<style scoped>
   .header{
     background: #f7f7f7;
     padding: 10px;
   }

   .bottom{
    position: fixed;
    bottom: 0px;
    left: 0px;
   }

   .p{
    display: flex;
    justify-content: space-around;
   }

.p img{
    width: 18%;
}

.a{
    margin-left: 10px;
    width: 80%;
}
.b span{
    display: block;
    margin-right: 20px;
    color: red;
}
   .b{
    display: flex;
    margin-top: 30px;
   }
   .c{
    margin-top: 15px;
    width: 8%;
   
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

.wrap{
    height: 90vh;
    overflow: auto;
}

.j{
    margin-right: 17vw;
}

.bj{
    margin-left: 15px;
}

.car li{
    margin-top: 3vh;
}

.a p{
    width: 100%;
}

.c{
    margin-right: 1vw;
}

.cz{
    background: #f6f6f6;
    outline: none;
    border: none;
    width: 10vw;
    margin-left: 5vw;
}
</style>
<script>

export default {
   
   data() {
    return {
   
    value:1,
    checked:false,   
    a:0,
    
   
list1:[
        {
             src:'q4.jpg',
             jiashao:'没头脑和不高兴/小树苗儿童成长经典阅读宝库',
             m:'25.00',
             count:1,
             select:false
        },
        {
             src:'q5.jpg',
             jiashao:'新享卡-通用卡（电子卡无实体）',
             m:'50.00',
            count:1,
            select:false
        },
        {
             src:'q6.jpg',
             jiashao:'精准回应 让孩子养成自主自律的好习惯',
             m:'75.00',
             zk:'￥150.00',
            count:1,
           select:false
        },
        
          {
             src:'q7.jpg',
             jiashao:'写给少年的水浒人物故事（全5册）',
             m:'67.00',
             zk:'￥472.00',
             count:1,
             select:false
        },
          {
             src:'q8.jpg',
             jiashao:'建设美丽中国：新时代生态文明建设理论与实践',
             m:'41.90',
            count:1,
            select:false
             
        }
        ,{
            src:'q9.jpg',
            jiashao:'宫西达也小卡车绘本（全5册）',
            m:'90.00',
            count:1,
            select:false
        }

,],

       list:[            
              {
                src:'q88.jpg',
                title:'金银岛+鲁滨逊漂流记+八十天环游地球（漫画版 全9册）',
                w:'丹尼尔·笛福 等',
                m:'￥264.00'
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
              },
               {
                src:'q99.jpg',
                title:'2021《五三》小升初总复习考前讲练测语数英（全3册）',
                  w:'曲一线',
                m:'¥128.00'   
              },
                 {
                src:'q100.jpg',
                title:'《气象中的二十四节气（全四册）》【赠送手帐本】',
                 
                m:'¥198.00'   
              }
            ]
    };
  },

 computed: {
        summoney: function (){
        
        if(this.checked==false){
                let total=0;
                for(var c=0;c<this.list1.length;c++){
                  if(this.list1[c].select==true){               
                    let list2 = this.list1[c];
                    total += list2.m * list2.count;           
                   }               
                }
               return total
        }
          
        if(this.checked==true){
            let total = 0;
            for(let i=0;i<this.list1.length;i++){
                let list2 = this.list1[i];
                total += list2.m * list2.count;
            }          
            return total
            }          
    },
 },

methods:{  

     back(){
        this.$router.back()
     },
     select(index){
        if(this.list1[index].select==true){
        this.list1[index].select=true    
        }else{
            this.list1[index].select=false
        }
     },
  
    add(index){
       this.list1[index].count++; 
    },
    
    jian(index){
           if (this.list1[index].count == 1)
           {
             return;
             }
           this.list1[index].count--;
    },
    
    del(index){
       this.list1.splice(index,1);
    },
    
   select1(){
     if(this.checked==true){
          for(let i=0;i<this.list1.length;i++){
            this.list1[i].select=true;       
            }  
            }          
         else{
                for(let i=0;i<this.list1.length;i++){    
                this.list1[i].select=false;             
            }
            }

   }

  }
}
</script>