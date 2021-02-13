<template>
    <div class="bottomElement">
        <input class="button" type="button" value="Поменять цвет фона" @click="ChangeStyle()">
    </div>
</template>

<script>
    export default {
        name: "BlackModeButton",
        methods: {
            ChangeStyle() {
                this.$store.commit("CHANGE_STYLE")
            }
        }
    }
</script>

<style scoped>

</style>
