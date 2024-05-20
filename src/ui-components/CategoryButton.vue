    <template>
        <button class="category__btn bg-sky-100 text-sky-500">
            <slot></slot>
        </button>
</template>
<script>
export default {
    name: 'CategoryButton'
}
</script>
<style scoped>
.category__btn {
    width: 200px;
    height: 50px;
    /* background-color: #4f95ff !important; */
    /* color: white !important; */
    transition: all 0.4s !important;
    font-family: 'Poppins', sans-serif !important;
    /* font-weight: 500 !important; */
    cursor: pointer !important;
}

.category__btn:hover{
    color: black !important
}
</style>