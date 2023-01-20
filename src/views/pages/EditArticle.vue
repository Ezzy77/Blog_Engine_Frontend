<template>
    <section class="vh-100 gradient-custom">
    <form @submit.prevent="updateArticle">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-light text-dark" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center container">
    
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Edit Article</h2>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="title" >Title</label>
                    <input type="text" name="title" class="form-control form-control-lg" v-model="title" />
                    <label class="form-label" for="title" >Author name</label>
                    <input type="text" name="title" class="form-control form-control-lg" v-model="author" />
                  </div>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="article_text">Article Text</label>
                    <textarea class="form-control form-control-lg" name="article_text" rows="3" v-model="article_text"></textarea>
                  </div>
                  <p v-if="error" class="text-danger">{{ error }}</p>
                  <div>
                     <button class="btn btn-outline-secondary btn-lg px-5 me-3 " type="submit">Update</button>
                  </div>
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
    import { articleService } from '../../services/article.service'
    export default{
        data(){
          return{
            title:"",
            author:"",
            article_text:"",
            error:null
          }   
        },
        methods:{
          updateArticle(){
            const data = {
              title: this.title,
              author: this.author,
              article_text: this.article_text
            }
            let id = this.$route.params.article_id;
            articleService.updateArticle(id,data)
            .then(res =>{
              console.log("updated");
              this.error=null;
              this.$router.push(`/articles/${id}`);
          }).catch(error => this.error =error);
          }
        },
        mounted(){
        articleService.getOne(this.$route.params.article_id)
        .then((article)=>{
            this.title = article.title;
            this.author = article.author;
            this.article_text= article.article_text
            this.error=null;
        }).catch(error => this.error = error);
    }
    }
    </script>