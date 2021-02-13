<template>
<div class="SidePanel">
    <AccuracyCounter/>
    <SpeedCounter/>
    <Timer/>
    <MistakesCounter/>
</div>
</template>

<script>
    import AccuracyCounter from "./AccuracyCounter/AccuracyCounter";
    import SpeedCounter from "./SpeedCounter/SpeedCounter";
    import Timer from "./Timer/Timer";
    import MistakesCounter from "./MistakesCounter/MistakesCounter";
    export default {
        name: "SidePanel",
        components: {MistakesCounter, Timer, SpeedCounter, AccuracyCounter}
    }
</script>

<style scoped>
    >>>.counter {
        border-radius: 5px;
        border: 2px solid black;
        margin: 0 auto;
    }
    .SidePanel {
        margin: 0 10px;
        padding: 5px;
        border: 2px solid black;
        border-radius: 5px;
    }
</style>
