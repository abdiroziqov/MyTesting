<template>
    <button class="header__btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'PrimaryButton'
}
</script>
<style scoped>
.header__btn {
    padding: 12px 65px !important;
    background-color: #4f95ff !important;
    color: white !important;
    transition: all 0.4s !important;
    font-family: 'Poppins', sans-serif !important;
    font-weight: 500 !important;
}

.header__btn:hover {
    background-color: #0a6dd6 !important;
    transition: all 0.4s !important
}


</style>