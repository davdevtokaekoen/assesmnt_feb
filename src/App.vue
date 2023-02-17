<template>
  <mind-lens-button/>
  <mind-lens-alert/>
</template>

<script>

import MindLensButton from "@/components/MindLensButton";
import MindLensAlert from "@/components/MindLensAlert";

export default {
  name: 'App',
  components: {
    MindLensAlert,
    MindLensButton,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
