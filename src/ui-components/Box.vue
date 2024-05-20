<template>
    <div class="box shadow-lg mb-10 bg-cyan-50 bg-opacity-30">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Box'
}
</script>
<style>

.box{
    /* max-width: 1100px !important; */
    /* margin: 0 auto !important; */
    height: 150px;
    margin-left: 50px !important
}

@media only screen and (max-width: 1020px) {
    .box{
        height: 200px !important;
    }
}

@media only screen and (max-width: 768px) {
    .box{
        height: 300px !important;
    }
}

@media only screen and (max-width: 640px) {
    .container {
        width: 600px !important;
    }
}

@media only screen and (max-width: 600px) {
    .container {
        width: 550px !important;
    }

    .box{
        margin-left: -1px !important;
        width: 400px !important
    }
}
    

</style>