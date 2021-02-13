<template>
    <div>
        <div>
            Время
        </div>
        <div class="counter" v-text="time">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Timer",
        data() {
            return {
                time: 0
            }
        },
        mounted() {
            this.$options.timer = window.setTimeout(this.UpdateTimer, 1000);
        },
        beforeDestroy() {
            window.clearTimeout(this.$options.timer);
        },
        methods: {
            UpdateTimer() {
                // Я не знаю почему, но через геттер реактивность счётчика не работает (обновляется только при нажатии клавиши)
                if (this.$store.state.typingStarted) {
                    this.time = Math.round((Date.now() - this.$store.state.startTime) / 1000)
                    this.$options.timer = window.setTimeout(this.UpdateTimer, 1000);
                } else {
                    if (!this.$store.state.startTime) {
                        this.time = 0
                    }
                    this.$options.timer = window.setTimeout(this.UpdateTimer, 1000);
                }
            }
        }
    }
</script>

<style scoped>

</style>
