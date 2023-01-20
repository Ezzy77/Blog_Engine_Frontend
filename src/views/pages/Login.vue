<template>
<section class="vh-100 gradient-custom">
<form @submit.prevent="login">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-light text-dark" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" name="email" class="form-control form-control-lg" v-model="email" required/>
                <label class="form-label" for="typeEmailX" >Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" name="password" class="form-control form-control-lg" v-model="password" required/>
                <label class="form-label" for="typePasswordX">Password</label>
              </div>
              <p v-if="error" class="text-danger">{{ error }}</p>
              <button class="btn btn-outline-secondary btn-lg px-5" type="submit">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
</section>
</template>
  
  <script>  
  import {userService} from '../../services/user.service';
  export default {
    data() {
      return {
        user_id:"",
        email: "",
        password: "",
        error:null
      };
    },
    methods: {
      login(){
        const data = {
            email: this.email,
            password: this.password,
        }
        
        userService.userLogin(data)
        .then(res =>{
            console.log("Auth - go to dash")
            this.$router.push("/");
            this.error=null
        }).catch(error=> this.error=error);
      }
    },
  };
  </script>