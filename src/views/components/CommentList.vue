<template>
  <div>
     <ul class="list-group list-group-flush bg-light">
      <li>
        <Comment v-for="(comment, index) in comments" :key="index" :comment_text="comment.comment_text" :author="comment.author" :date_published="comment.date_published"
        />
      </li>
    </ul> 
  </div>

</template>
<script>
import Comment from './Comment.vue';
export default {
  components:{
    Comment
  },
  data(){
      return {
        comments:[
          {comment_text:'I like vue', author:'Ben', date_published:'14/11/2022'},
          {comment_text:'Vue is the best Framework', author:'Jhon', date_published:'14/11/2022'},
          {comment_text:'React is better ', author:'Will', date_published:'14/11/2022'}
        ]
      }
    }
}
</script>

<style>

</style>