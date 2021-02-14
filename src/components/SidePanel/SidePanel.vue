<template>
<div class="SidePanel">
    <AccuracyCounter/>
    <SpeedCounter/>
    <Timer/>
    <SymbolCounter/>
    <MistakesCounter/>
</div>
</template>

<script>
    import AccuracyCounter from "./AccuracyCounter/AccuracyCounter";
    import SpeedCounter from "./SpeedCounter/SpeedCounter";
    import Timer from "./Timer/Timer";
    import MistakesCounter from "./MistakesCounter/MistakesCounter";
    import SymbolCounter from "./SymbolCounter/SymbolCounter";
    export default {
        name: "SidePanel",
        components: {SymbolCounter, MistakesCounter, Timer, SpeedCounter, AccuracyCounter}
    }
</script>

<style scoped>
    >>>.counter {
        border-radius: 5px;
        border: 2px solid black;
        margin: 0 auto;
    }
    .SidePanel {
        margin-left: 10px;
        padding: 5px;
        border: 3px solid black;
        border-radius: 10px;
    }
</style>
