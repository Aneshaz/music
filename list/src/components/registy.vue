<template>
 <div class='registy'>
   <input type='text' placeholder="手机号"/>
   <input type='text' placeholder="密码"/>
   <button>注册</button>
 </div>
</template>

<script>
export default {
  name: 'registy'
}
</script>
<style>
.registy{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding:10px;
}
.registy input{
    width:100%;
    height:40px;
    margin-top:10px;
    border:none;
    border-bottom:1px solid #ccc;
}
.registy button{
    width:100%;
    height:50px;
    margin-top:20px;
    border-radius: 30px;
    background:#ccc;
}
</style>
