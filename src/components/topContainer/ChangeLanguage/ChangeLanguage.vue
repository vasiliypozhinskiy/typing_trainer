<template>
    <div class="bottomElement">
        <select class="select" @change="changeLanguage($event.target.value)">
            <option value="russian">Русский</option>
            <option value="english">English</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "ChangeLanguage",
        methods: {
            changeLanguage(language) {
                this.$store.commit("CHANGE_LANGUAGE", language)
            }
        }
    }
</script>

<style scoped>
    .select {
        outline: none;
        border-radius: 5px;
        border: 2px solid black;
    }
</style>
