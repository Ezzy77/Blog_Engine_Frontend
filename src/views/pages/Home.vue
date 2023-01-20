<template>
<section class="bg-light text-dark p-5 text-center text-sm-start">
    <div class="container">
        <div class="d-sm-flex align-item-center justify-content-between">
            <div>
                <h1>Become a Writter</h1>
                <p class="lead my-4">Create a unique and beautiful article and 
                    publish it for free
                </p>
                <button class="btn btn btn-outline-primary btn-lg">
                    <router-link to="/create-article" class="nav-link active ">Create Articles</router-link>
                </button>
            </div>
            <img class="img-fluid w-50 d-none d-sm-block rounded-5 shadow-lg" src="/assets/undraw-women.png" alt="">
        </div>
    </div>
</section>

<section class="bg-light text-dark p-5 text-center text-sm-start">
    <div class="container">
        <div class="d-sm-flex align-item-center justify-content-between">
            <img class="img-fluid w-50 d-none d-sm-block rounded-5 shadow-lg" src="/assets/undraw_Task_re_wi3v.png" alt="">
            <div class="m-5">
                <h1>Read latest articles </h1>
                <p class="lead my-4">
                 Keep yourself updated with the latest publication. click the link 
                 bellow
                </p>
                <button class="btn btn btn-outline-success btn-lg">
                    <router-link to="/articles" class="nav-link active ">View Articles</router-link>
                </button>
            </div>
        </div>
    </div>
</section>


</template>
<script>
export default{

}
</script>