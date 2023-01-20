<template>
  <div>
  <div>
    <h5 >{{title}}</h5>
    <h6 >Author: {{author}}</h6>
  </div>
</div>
</template>

<script>
export default {
    props: {
        title:String,
        author:String
    }

}
</script>

<style scoped>
</style>