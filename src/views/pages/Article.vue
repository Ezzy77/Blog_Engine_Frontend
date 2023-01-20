<template>
<section class=" bg-light text-dark p-5 text-center text-sm-start vh-100">
<div>
    <div class="container shadow-sm p-3 mb-5 rounded">
        <ArticleBody :author="article.author" :date_published="article.date_published" :title="article.title"
            :article_text="article.article_text"
            :article_id="article.article_id"
        />
        <p v-if="articleError" class="text-danger">{{ articleError }}</p>
        <div class="d-flex">
            <router-link class="nav-link active " :to="'/edit-article/' + article.article_id">
                <button class="btn btn-outline-secondary m-3">Edit Article</button>
            </router-link>
            <button @click="deleteArticle(article.article_id)" class="btn btn-outline-secondary m-3">Delete Article</button>
        </div>
    </div>
    <div class="shadow-sm p-3 mb-5 rounded">
        <div>
            <p v-if="commentError" class="text-danger">{{ commentError }}</p>
            <div class="container d-flex">
                <h5>Comments({{num_comments}})</h5>
                <button @click="toggleCommentArea" type="button" class="btn btn-outline-secondary btn-sm ms-5 mb-5">Add</button>
            </div>
            <div v-if="showCommentTextArea" class="mb-3">
                <div class="container">
                    <textarea class="form-control w-25" rows="2" v-model="comment"></textarea>
                    <div class="text-danger">{{ error }}</div>
                    <button @click="submitComment" :disabled="canNotSubmitComment" class="btn btn-outline-secondary btn-sm ms-5 m-2">Send</button>
                </div>
            </div>
            <ul v-if="comments.length" class = "list-group list-group-flush mx-auto">
                <li v-for="comment in comments" :key="comment.comment_id" class="list-group-item py-4 bg-light d-flex ">
                    <Comment :date_published="comment.date_published"
                        :comment_text="comment.comment_text"
                        :comment_id="comment.comment_id"
                    />
                    <div>
                        <font-awesome-icon @click="deleteComment(comment.comment_id)" :icon="['fas', 'trash-can']" class="cursor" id="deleteIcon"/>
                    </div>
                </li>
            </ul>   
        </div>
    </div>
</div>
</section>
</template>

<script>
import Comment from '../components/Comment.vue';
import ArticleBody from '../components/ArticleBody.vue'
import { articleService } from '../../services/article.service';
import {commentsService} from '../../services/comments.service';

export default {
    components:{
        Comment, ArticleBody
    },
    data(){
        return{
            commentId:null,
            canNotSubmitComment: false,
            showCommentTextArea: false,
            article:{},
            comments:[],
            num_comments: null,
            comment:'',
            commentError:'',
            articleError:''
        }
    },
    methods:{
        deleteArticle(id){
            const article_id = id

            articleService.deleteArticle(article_id)
            .then(res=>{
                console.log("Deleted")
                this.$router.push("/articles");
            })
            .catch(error => this.articleError = error)
        },
        toggleCommentArea(){
            this.showCommentTextArea = !this.showCommentTextArea;
        },

        submitComment(){
            const data = {
                comment_text: this.comment
            }
            commentsService.addNewComment(this.$route.params.article_id, data)
            .then(
                res =>{
                    commentsService.getAll(this.$route.params.article_id)
                    .then((comments)=>{
                        this.comments = comments
                        this.error="";
                        this.num_comments = comments.length
                    }).catch(error => this.commentError = error)
                }
            ).catch(error => this.commentError =error);

            this.comment="";
        },
        deleteComment(index){
            const id = index;
        commentsService.deletComment(id)
        .then(res=> {
            commentsService.getAll(this.$route.params.article_id)
            .then((comments)=>{
                this.comments = comments
                this.error="";
                this.num_comments = comments.length
            }).catch(error => this.commentError = error)
        }
        ).catch(error => this.commentError = error)
      }
    
    },
    mounted(){
        this.article.loading = true,
        this.comments.loading = true,

        articleService.getOne(this.$route.params.article_id)
        .then((article)=>{
            this.article = article;
            commentsService.getAll(this.$route.params.article_id)
            .then((comments)=>{
                this.comments = comments
                this.num_comments = comments.length
            }).catch(error => this.commentError = error)
        }).catch(error => this.articleError = error);
    }

}
</script>


<style scoped>
#deleteIcon{
    cursor: pointer;
}
</style>