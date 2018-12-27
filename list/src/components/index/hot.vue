<template>
 <div class='hot'>
   <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in list" :key="index"><img :src="item.name" alt=''/></div>
    </div>
  </div>
  <ul class='nav'>
    <li v-for='(val,index) in hotnav' :key='index'>
      <span><i :class="val.icon"></i></span>
      <p>{{val.name}}</p>
    </li>
   
  </ul>
  <div class='hotlist'>
    <h3>推荐歌单 ></h3>
    <ol>
      <li v-for='(val,index) in hotlist' :key='index'>
        <img :src='val.src'/>
        <p>{{val.name}}</p></li>
    </ol>

  </div>
 </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import {hot,hotnav} from '../../mock/data.js'
export default {
  name: 'hot',
  data(){
    return{
      hotnav:hotnav,
      hotlist:hot,
      list:[
          {
            name:'http://p1.music.126.net/alIjtE-c7GL9QOIxznvv-g==/109951163652688789.webp?imageView&thumbnail=370x0&quality=75&tostatic=0&type=webp'
          },{
            name:'http://p1.music.126.net/FEtAiCUdFIG4E2WCAJpyAg==/109951163648127080.webp?imageView&thumbnail=370x0&quality=75&tostatic=0&type=webp'
          },{
            name:'http://p1.music.126.net/L_hxswhsZTrMqarhBXIhSg==/109951163618886748.webp?imageView&thumbnail=370x0&quality=75&tostatic=0&type=webp'
          },{
            name:'http://p2.music.126.net/VSHLOoUEg4pdd5lXvxCOnQ==/109951163747716978.webp?imageView&thumbnail=370x0&quality=75&tostatic=0&type=webp'
          }
      ]
  }
  },
    mounted(){
      new Swiper('.swiper-container', {
        autoplay:true
      })
    }
}
</script>
<style>
.swiper-container{
  width:100%;
  height:200px;
}
.swiper-container img{
  width:100%;
  height:100%;
}
.nav{
  width:100%;
  display: flex;
  justify-content: space-around;
  margin-top:10px;
}
.nav li{
  width:22%;
  text-align: center;
  line-height:30px;
}
.nav li span{
  display:inline-block;
  width:50px;
  height:50px;
  line-height:50px;
  border-radius:50%;
  background:#ccc;
}
.nav li span i{
  font-size: 30px;
}
.hotlist{
  width:100%;
}
.hotlist h3{
  width:100%;
  line-height:40px;
  padding-left:10px;
}
.hotlist ol{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.hotlist ol li{
  width:33%;
  line-height:20px;
  margin-top:10px;
}
.hotlist ol li img{
  width:80%;
  height:80px;
  background:#ccc;
  margin-left:10%;
}
.hotlist ol li p{
  padding-left:10%;
  font-size: 13px;
}
</style>

