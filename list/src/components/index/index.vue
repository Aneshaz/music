<template>
 <div class='index'>
   <div class='header'>
    <h2><input type="text" placeholder="猜你喜欢 张杰"></h2>
    <h2><router-link to='/list'>个性推荐</router-link>
   <router-link to='/list/radio'>主播电台</router-link></h2>
   </div>
   <router-view/>
 </div>
</template>

<script>
export default {
  name: 'index'

}
</script>
<style>
.index{
    width:100%;
    height:100%;
}
.header{
    width:100%;
    border-bottom:1px solid #ccc;
    display: flex;
    flex-direction: column;
}
.header h2{
    width:100%;
    line-height:25px;
}
.header h2 input{
    width:80%;
    height:30px;
    margin:10px 10%;
    border-radius: 10px;
    border:1px solid #ccc;
    padding-left:10px;
}
.header h2{
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    line-height:30px;
}
</style>

