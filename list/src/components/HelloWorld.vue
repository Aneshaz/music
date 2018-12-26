<template>
 <div class='hello'>
   <span><router-link to='/login'>手机号登录</router-link></span>
   <span><router-link to='/registy'>注册</router-link></span>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
<style>
.hello{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
span{
    width:80%;
    height:40px;
    line-height:40px;
    margin-top:20px;
    margin-left:10%;
    border:1px solid #f00;
    border-radius:30px;
    text-align: center;
}
</style>

