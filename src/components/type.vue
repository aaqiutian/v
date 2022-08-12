<template>
   <main>
   <header>   
       <van-row type="flex" justify="end">      
          <van-col span="12"> <van-search v-model="value" placeholder="请输入搜索关键词" /></van-col>
          <van-col span="6" class="van"> <span class="xin"><van-icon name="comment-o"  color="red" size="30px"/></span></van-col>
      </van-row>      
   </header>
<div class="main3">
 <div class="main2">
    <van-tree-select  :items="items" :main-active-index.sync="active">
         <template #content>


      <!-- <van-image
         v-if="active === 0"
          src="https://img01.yzcdn.cn/vant/apple-1.jpg" -->
       
        <main v-if="active === 0">
            <div class="main1">
               

              <p class="h">历史</p>
                <ul class="ul4">
                    <li  v-for="(item,index9) in list3" :key="index9">
                        <p class="tu"><img :src="item.src" alt=""></p>
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>

                <p class="h">哲学宗教</p>
                <ul class="ul4">
                    <li  v-for="(item,index10) in list4" :key="index10">
                        <p class="tu"><img :src="item.src" alt=""></p>
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>


                <p class="h">法律</p>
                <ul class="ul4">
                    <li  v-for="(item,index11) in list5" :key="index11">
                        <p class="tu"><img :src="item.src" alt=""></p>
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>




            </div>


        </main>

        <main v-if="active === 1">
           
       <div class="main1">
               <p class="h">小说</p>
                <ul class="ul4">
                    <li  v-for="(item,index6) in list" :key="index6">
                        <p class="tu"><img :src="item.src" alt=""></p>
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>

                <p class="h">文学</p>
                <ul class="ul4">
                    <li  v-for="(item,index7) in list1" :key="index7">
                        <p class="tu"><img :src="item.src" alt=""></p>
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>
                

            <p class="h">艺术</p>
                <ul class="ul4">
                    <li  v-for="(item,index8) in list2" :key="index8">
                        <p class="tu"><img :src="item.src" alt=""></p>
                        <p class="title">{{item.title}}</p>
                    </li>
                </ul>
            
       </div>

           
        </main>

       <!-- <van-image
          v-if="active === 1"
          src="https://img01.yzcdn.cn/vant/apple-2.jpg"
    /> -->
  </template>
    </van-tree-select>
    </div>
</div>
   
   </main>
</template>

<style scoped>

header{
    background: #f7f7f7;
    width: 100%;
    padding:10px 0px;
}

header p{
    display: flex;
    justify-content: flex-end;
}

header .search{
   background: #f7f7f7;
}


.main2{
    width: 100%;
    height: 84vh;
    overflow: auto;
} 
.main3{
    height: 89vh;
    overflow: hidden;
}

.van-sidebar-item--select::before{
    background: #f7f7f7;
}

.van-sidebar-item--select {
    color: red;
  
}

.van-tree-select__nav{
    height: 86vh;
}

.van-tree-select__content{
    height: 86vh;
}
.van-tree-select{
    width: 100vw;
    /* height: 200vw; */
}

.main1 .h{
   text-align: center;
   font-weight: bold;
}

.ul4 {
    display: flex;
    flex-flow: row wrap;
    margin-top: 10px;
    margin: 10px;
} 
.ul4 li{
    width: 33%;
    margin-top: 10px;
}
.tu{
    /* height: 80px; */
    text-align: center;
}
.ul4 li img{
    width: 90%;
}
.title{
   color: #999999;
    text-align: center;
      word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.van{
    text-align: center;
    
}
.xin{
    display: inline-block;
  margin-top: 10px;
}
</style>


<script>
export default{
  data() {
    return {
      value: '',

      active: 0,
      items: [{ text: '人文社科' }, { text: '文学艺术' },{ text: '少儿童书' },{ text: '教育考试' },{ text: '经济金融' },{ text: '生活休闲' },{ text: '服装服饰' },{ text: '鞋包/箱包' },{ text: '母婴/玩具' },{ text: '食品保健' },{ text: '家具/生活' },{ text: '学习用品' },{ text: '办公耗材' },{ text: '运动户外' },{ text: '3C数码' }],
      list:[
        {
            src:'q60.jpg',
            title:'中国小说'
        }
        ,
        {
            src:'q61.jpg',
            title:'外国小说'
        }
      ],
      list1:[
        {
            src:'q62.jpg',
            title:'外国文学'
        },
         {
            src:'q63.png',
            title:'中国文学'
        },
         {
            src:'q64.jpg',
            title:'文学理论'
        },

      ],
      list2:[
         {
            src:'q65.jpg',
            title:'摄影'
        },
         {
            src:'q66.jpg',
            title:'鉴赏收藏'
        },
         {
            src:'q67.jpg',
            title:'艺术概论'
        },
         {
            src:'q71.jpg',
            title:'音乐舞蹈'
        },
         {
            src:'q68.jpg',
            title:'书法篆刻'
        },
         {
            src:'q69.jpg',
            title:'文学理论'
        },
         {
            src:'q70.jpg',
            title:'绘画雕塑'
        },
      ],
      list3:[
         {
            src:'q71.jpg',
            title:'世界史'
        },
         {
            src:'q72.jpg',
            title:'中国史'
        },
         {
            src:'q73.jpg',
            title:'考古文物'
        },
         {
            src:'q74.jpg',
            title:'史学理论'
        },
      ],

      list4:[
           {
            src:'q75.jpg',
            title:'中国哲学'
           },
          {
            src:'q76.jpg',
            title:'西方哲学'
          },
         {
            src:'q77.jpg',
            title:'哲学总论'
        },
         {
            src:'q78.jpg',
            title:'马列著作'
        },
                 
         {
            src:'q79.jpg',
            title:'逻辑学'
        },
         {
            src:'q80.jpg',
            title:'宗教'
        },
         {
            src:'q81.jpg',
            title:'伦理学'
        },              
         {
            src:'q82.jpg',
            title:'美学'
        },
      ],

      list5:[
          {
            src:'q83.jpg',
            title:'法律法规'
           },
          {
            src:'q84.jpg',
            title:'法学理论'
          },
         {
            src:'q85.jpg',
            title:'法律科普'
        },
         {
            src:'q86.jpg',
            title:'中国法律'
        },
                 
         {
            src:'q87.jpg',
            title:'外国及港澳台法律'
        },
      ]
    };
  }
}
</script>