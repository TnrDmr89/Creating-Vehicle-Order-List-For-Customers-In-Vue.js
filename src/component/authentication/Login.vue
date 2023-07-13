<template>
    <div class="d-flex justify-content-center" style="margin-top:10%">
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center"><b>Sign In</b></h4>
            <div class="form">
              <label for="username" class="form-label mt-3">Username</label>
              <input type="text" class="form-control" id="username" v-model="user.username">
              <label for="password" class="form-label mt-3">Password</label>
              <input type="password" class="form-control" id="paassword" v-model="user.password">
              <div class="d-flex justify-content-evenly mt-3">
               <button class="btn btn-primary" style="width:100%;"  @click="login">Continue</button>
              </div>
              <div class="isAccount">Don't have an account?</div>
              <div class="d-flex justify-content-center mt-3">
                  <router-link to="/signup">
                    <button class="btn btn-warning">Create Account</button>
                  </router-link>
              </div>
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
          login(){
              this.$store.dispatch("login",this.user)
          }
      }
  })
  </script>
  
  <style scoped>
.isAccount{
    text-align: center;
    margin-top: 20px;
}
</style>