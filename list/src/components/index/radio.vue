<template>
 <div class='radio'>
   <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in list" :key="index"><img :src="item.name" alt=''/></div>
    </div>
  </div>
  <ul class='nav'>
    <li v-for='(val,index) in radionav' :key='index'>
      <span><i :class="val.icon"></i></span>
      <p>{{val.name}}</p>
    </li>
  </ul>
  <div class='radiolist'>
    <h3>今日优选</h3>
    <ol>
      <li v-for='(val,index) in radiolist' :key='index'>
        <img :src='val.src'/>
        <p>{{val.name}}</p></li>
    </ol>
  </div>
 </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import {hot,radionav} from '../../mock/data.js';
export default {
  name: 'radio',
  data(){
    return{
      radionav:radionav,
      radiolist:hot,
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
  border-radius:50%;
  background:#ccc;
}
.nav li span i{
  font-size: 30px;
}
.radiolist{
  width:100%;
  box-sizing: border-box;
  padding:10px;
}
.radiolist h3{
  width:100%;
  line-height:30px;
}
.radiolist ol{
  width:100%;
}
.radiolist ol li{
  width:100%;
  line-height:20px;
  margin-top:10px;
  display: flex;
 
}
.radiolist ol li img{
  width:30%;
  height:80px;
  background:#ccc;
}
.radiolist ol li p{
  padding-left:10px;
  font-size: 13px;
}
</style>

