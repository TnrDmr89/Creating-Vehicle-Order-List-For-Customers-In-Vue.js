<template>
    <div class="box d-flex justify-content-center align-items-center" >
      <p style="font-size: 20px;">
         {{ process.name }}
      </p>
    </div>
</template>

<script>
export default{
    props:["process"]
}
 
</script>

<style scoped>
.box {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    border: 1px solid #666;
    transition: box-shadow .5s;
    margin-left: 15px;
    background:linear-gradient(#e37777, #9198e5);
    text-align: center;
    

}

</style>