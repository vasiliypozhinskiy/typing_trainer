<template>
    <div>
        <div>
            Количество знаков
        </div>
        <div class="counter">
            {{symbols}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "SymbolCounter",
        computed: {
            symbols: function () {
                return this.$store.state.text.length
            }
        }
    }
</script>

<style scoped>

</style>
