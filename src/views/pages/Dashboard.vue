<template>
  <div class="container shadow-sm p-3 mb-5 rounded">
    <div class="container d-flex justify-content-center align-items-center">
      <img class="img-fluid w-25 d-none d-sm-block rounded-15 " src="/assets/account_circle.svg" alt="profile Image">
      <div class="m-5">
        <h5>User ID : {{ loggedInUserId }}</h5>
      </div>
    </div>
    <div>
      <div>
        <button class="btn btn-outline-secondary btn-sm ms-5 mb-5">View Users</button>
        <button class="btn btn-outline-secondary btn-sm ms-5 mb-5">
          <router-link to="/register" class="nav-link active ">Add User</router-link>
        </button>
      </div>
      <div>
        <p v-if="error" class="text-danger">{{ error }}</p>
        <ul v-if="users.length" class="list-group list-group-flush">
          <li v-for="user in users" :key="user.user_id" class="list-group-item">
            <UserItem
              :user_id="user.user_id"
              :first_name="user.first_name"
              :last_name="user.last_name"
              :email="user.email"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from '../../services/user.service';
import UserItem from '../components/UserItem.vue';
export default {
  components:{
    UserItem
  },
  data(){
    return{
      users:[],
      loggedInUserId:null,
      error:null
    }
  },
  mounted(){
    userService.getAllUsers()
    .then((user)=>{
      this.users = user;
      this.error=null;
    })
    .catch(error => this.error = error);

    let userEmail = localStorage.getItem("user_id");
    this.loggedInUserId = userEmail

  }

}
</script>