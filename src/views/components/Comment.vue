<template>
 <div class="card bg-light d-flex border-light  w-25">
  <div class="card-body">
    <p class="card-text">{{comment_text}}</p>
    <h6 class="card-subtitle mb-2 text-muted">{{date_published}}</h6>
  </div>
</div>
</template>

<script>
export default{
    props: {
      comment_id: Number,
      comment_text: String,
      date_published: String,
    },
    methods:{
      
    }
}
</script>
