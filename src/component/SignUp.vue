<template>
    <div class="d-flex justify-content-center" style="margin-top:10%">
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center"><b>Create Account</b></h4>
            <div class="form">
              <label for="username" class="form-label mt-3">Username</label>
              <input type="text" class="form-control" id="username" v-model="user.username">
              <label for="password" class="form-label mt-3">Password</label>
              <input type="password" class="form-control" id="paassword" v-model="user.password">
              <div class="d-flex justify-content-evenly mt-3">
               <button class="btn btn-primary" style="width:100%;"  @click="signUp">Continue</button>
              </div>
              <div class="isAccount">Do have an account?</div>
              <router-link to="/login" tag="p">
                <a class="girişYap">Login</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default({
      data(){
          return{
              user:{
                  username:null,
                  password:null
              }
          }
      },
      methods:{
          signUp(){
              this.$store.dispatch("signUp",this.user);
          }
      }
  })
  </script>
  
  <style scoped>
  
.isAccount{
    text-align: center;
    margin-top: 20px;
    float: left;
}
.girişYap{
    float: left; 
    margin-top: 20px;
}

  </style>