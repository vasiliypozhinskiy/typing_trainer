<template>
    <div>
        <div>
            Точность
        </div>
        <div class="counter">
            {{accuracy}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccuracyCounter",
        computed: {
            accuracy: function () {
                return this.$store.getters.countAccuracy
            }
        }
    }
</script>

<style scoped>

</style>
