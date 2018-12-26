<template>
 <div class='login'>
   <input type='text' placeholder="手机号"/>
   <input type='text' placeholder="密码"/>
   <button>登录</button>
 </div>
</template>

<script>
export default {
  name: 'login'
}
</script>
<style>
.login{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding:10px;
}
.login input{
    width:100%;
    height:40px;
    margin-top:10px;
    border:none;
    border-bottom:1px solid #ccc;
}
.login button{
    width:100%;
    height:50px;
    margin-top:20px;
    border-radius: 30px;
    background:#ccc;
}
</style>

