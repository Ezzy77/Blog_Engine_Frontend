<template>
  <div>
    <Navegation></Navegation>
    <div class="container">
    <router-view></router-view>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>


<script>
import Navegation from './views/components/Navegation.vue';
import Footer from './views/components/Footer.vue';
// import CommentList from './views/components/CommentList.vue';
  export default{
  components: {Navegation, Footer},
    data(){
      return {
      }
    },
    
  }

</script>