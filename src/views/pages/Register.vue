<template>
<section class="vh-100 gradient-custom">
<form @submit.prevent="register">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-light text-dark" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
              <p class="text-white-50 mb-5">Please enter your details!</p>

              <div class="form-outline form-white mb-4">
                <input type="text" name="first_name" class="form-control form-control-lg" v-model="first_name" required/>
                <label class="form-label" >First Name</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="text" name="last_name" class="form-control form-control-lg" v-model="last_name" required/>
                <label class="form-label" for="lname" >Last Name</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="email" name="email" class="form-control form-control-lg" v-model="email"/>
                <label class="form-label" for="email">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" name="password" class="form-control form-control-lg" v-model="password"/>
                <label class="form-label" for="password">Password</label>
              </div>
              <p v-if="error" class="text-danger">{{ error }}</p>
              <button class="btn btn-outline-secondary btn-lg px-5" type="submit">Register</button>
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
        first_name:null,
        last_name:null,
        email: null,
        password: null,
        error:null
      };
    },
    methods: {
      register(){
        console.log("Registered")
        const data = {
            first_name: this.first_name,
            last_name:this.last_name,
            email:this.email,
            password: this.password,
        }
        
        userService.addNewUser(data)
        .then(res =>{
                console.log(res)
                this.$router.push("/dashboard");
                this.error=null;
            
        }).catch(error=> {
          this.error=error
          console.log(error)
        });
      }
    },
  };
  </script>