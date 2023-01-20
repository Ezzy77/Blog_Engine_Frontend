<template>
<section class="py-4">
    <div class="container">
        <p v-if="loading">Loading articles...</p>
        <p v-if="error" class="text-danger">{{ error }}</p>
    <div class="container d-flex ">
        <ul v-if="articles.length" class = "list-group list-group-flush mx-auto">
            <li v-for="article in articles" :key="article.article_id" class="list-group-item py-4 bg-light">
                <router-link :to="'/articles/' + article.article_id" class="text-decoration-none">
                    <ArticleItem
                        :title="article.title"
                        :author="article.author"
                    />
                </router-link> 
            </li>
        </ul>
    </div> 
    </div>
</section>
</template>
  
  <script>
  import ArticleItem from '../components/ArticleItem.vue';
  import { articleService } from '../../services/article.service';
  export default {
      components:{
          ArticleItem
      },
      data(){
          return{
              articles: [],
              error:'',
              loading: true
          }
      },
      mounted(){
          articleService.getAll()
          .then(articles =>{
              this.articles = articles
              this.loading = false
              this.error=null
          }).catch(error=> {
            this.error = error
            this.loading=false
          });
      }
  
  }
  </script>
  
  <style scoped>
  </style>