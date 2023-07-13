<template>
    <div class="box">
      <div style="font-size: 20px;"><b>{{getErrorMessage}}</b></div>
    </div>
    </template>
    
    <script>
    import { mapGetters } from 'vuex'
    export default{
        computed:{
            ...mapGetters(["getErrorMessage"])
        }
    }
    </script>
    
    <style>
    .box{
        margin:auto;
        margin-top: 200px;
        height: 100px;
        width: 400px;
        background-color: lightcoral;
        display:flex;
        justify-content: center;
        align-items: center;
        position: relative
    }
 
    </style>