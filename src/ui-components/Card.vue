<template>
    <div class="shadow-xl card">
         <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Card'
}
</script>
<style scoped>
    .card{
        margin-left: 50px !important;
    }
</style>