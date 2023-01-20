<template>
  <div>
    <p>User ID:{{ user_id }}</p>
    <p>First Name: {{ first_name }}</p>
    <p>Last Name: {{ last_name }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script>
export default {
    props:{
        user_id: Number,
        first_name:String,
        last_name: String,
        email: String
    },
}
</script>
