<template>
<div>
    <h4>{{title}}</h4>
    <h6>Written By: {{author}}</h6>
    <h6>Published: {{date_published}}</h6>
</div>
<div>
    <p>
       {{article_text}}
    </p>
</div>
</template>

<script>
export default {
    props:{
        title:String,
        author: String,
        date_published:String,
        article_text: String,
        article_id: Number
    }

}
</script>

<style>

</style>