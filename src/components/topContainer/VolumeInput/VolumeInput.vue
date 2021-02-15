<template>
    <div class="bottomElement">
        <label class="label" for="volume">Громкость</label>
        <input id="volume" type="range" min="0" max="1" step="0.01" v-model="volume">
    </div>
</template>

<script>
    export default {
        name: "VolumeInput",
        computed: {
            volume: {
                get() {
                    return this.$store.state.volume
                },
                set(volume) {
                    this.$store.commit("CHANGE_VOLUME", volume)
                }
            }
        }
    }
</script>

<style scoped>

</style>
