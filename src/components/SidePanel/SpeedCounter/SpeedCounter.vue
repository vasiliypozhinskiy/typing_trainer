<template>
    <div>
        <div>
            Скорость, зн./мин.
        </div>
        <div class="counter" v-text="speed">
        </div>
    </div>
</template>

<script>
    export default {
        name: "SpeedCounter",
        data() {
            return {
                speed: 0
            }
        },
        mounted() {
            this.$options.timer = window.setTimeout(this.UpdateTimer, 1000);
        },
        beforeDestroy() {
            window.clearTimeout(this.$options.timer);
        },
        methods:
            {
                UpdateTimer() {
                    // Я не знаю почему, но через геттер реактивность счётчика не работает (обновляется только при нажатии клавиши)
                    if (this.$store.state.typingStarted) {
                        this.speed = Math.round(this.$store.state.current_index
                            / ((Date.now() - this.$store.state.startTime) / 1000 / 60))
                        this.$options.timer = window.setTimeout(this.UpdateTimer, 1000);
                    } else {
                        if (!this.$store.state.startTime) {
                            this.speed = 0
                        }
                        this.$options.timer = window.setTimeout(this.UpdateTimer, 1000);
                    }
                }
            }
    }
</script>

<style scoped>

</style>
