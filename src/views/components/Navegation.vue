<template>
<nav class="navbar navbar-expand-lg navbar-light shadow-sm bg-light py-4">
  <div class="container">
    <a class="navbar-brand fw-bolder fs-2" href="/">Blog Engine</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav ms-auto ">
          <li ><router-link to="/" class="nav-link active fw-bold text-secondary" aria-current="page">Home</router-link></li>
          <li ><router-link to="/articles" class="nav-link active fw-bold text-secondary" aria-current="page">Articles</router-link></li>
          <li><router-link to="/login" class="nav-link active fw-bold text-secondary" aria-current="page">Login</router-link></li>
        </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span><font-awesome-icon icon="user"/></span>
          </a>
          <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><router-link to="/dashboard" class="dropdown-item">Dashboard</router-link></li>
            <li><router-link to="/create-article" class="dropdown-item">Create Article</router-link></li>
            <li><a @click="logoutUser" class="dropdown-item" href="#">Log Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { userService } from '../../services/user.service';
export default {
   data(){
    return{
      user_id:false
    }

   },
   methods:{
    logoutUser(){
      userService.userLogout()
      .then(res=>{
        console.log(res)
        this.$router.push("/login");
      }).catch(error => this.error =error);
    }
   },
}
</script>
