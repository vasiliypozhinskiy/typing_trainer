<template>
    <div>
        <div>
            Ошибки
        </div>
        <div class="counter">
            {{mistakes}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MistakesCounter",
        computed: {
            mistakes: function () {
                return this.$store.state.mistakes
            }
        }
    }
</script>

<style scoped>

</style>
