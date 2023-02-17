<template>
  <v-row class="ma-4 justify-space-evenly">
    <v-btn
        @click="variation = !variation"
        :variant="variation ? 'secondary' : 'primary'"
        :prepend-icon="variation ? 'mdi-arrow-right': null"
        :append-icon="!variation ? 'mdi-arrow-right': null"
        :class="[
            showLeftIcon ? 'btn' : 'btn2',
            variation ? 'primary' : 'secondary'
        ]"
    >
      Action
    </v-btn>
    <v-btn
        @click="handleClick1"
        color="#F7BA50"
        :prepend-icon="click1 ? 'mdi-arrow-right': null"
        :append-icon="!click1 ? mdi-arrow-right : null"
    >
      {{ click1 ? '' : 'Accept' }}
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "MindLensBtn",
  data() {
    return {
      variation: false,
      click1: false,
      click2: true,
    }
  },
  props: {
    showLeftIcon: {
      type: Boolean,
      default: () => true
    },
    showRightIcon: {
      type: Boolean,
      default: () => false
    },
    showText: {
      type: Boolean,
      default: () => false
    },
  },
  methods: {
    handleClick1() {
      this.click1 = !this.click1
    }
  }
}
</script>

<style scoped>
.btn {
  width: 130px;
  height: 40px;
  border-radius: 8px;
  padding: 8px 24px 8px 24px;
  gap: 8px;
  background-color: #F7BA50;
  /*font-size: 24px;*/
}

.btn2 {
  width: auto;
  height: 40px;
  border-radius: 8px;
  padding: 8px;
  gap: 8px;
}

.btn:hover {
  background: #F5AB2B;
}

.btn.secondary {
  border-color: #C75100;
  border-width: 1px;
  background-color: white;
}

.btn.secondary:hover {
  box-shadow: 2px 2px 8px #888888;
}
</style>
