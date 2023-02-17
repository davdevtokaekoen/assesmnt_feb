<template>
  <div id="MindLensAlert">
    <v-alert
        :type="tipe ? 'info' : 'success'"
        :title="judul ? 'Title' : null"
        :text="teks ? 'Lorem ipsum olor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!'
      : null"
        :closable="x"
        style="margin-bottom: 4px"
    >
      <p/>
      <v-btn variant="secondary" class="secondary">Action</v-btn>
      <v-btn variant="primary">Button</v-btn>
    </v-alert>
    <v-alert
        type="error"
        :title="judul ? 'Title' : null"
        :text="teks ? 'Lorem ipsum olor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!'
      : null"
        class="alertStyle"
    >
      <p/>
      <v-btn variant="secondary" class="error">Action</v-btn>
      <v-btn variant="primary" class="error ok">Button</v-btn>
    </v-alert>

    <v-alert
        type="warning"
        :title="judul ? 'Title' : null"
        :text="teks ? 'Lorem ipsum olor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!'
      : null"
        class="alertStyle"
    >
      <p/>
      <v-btn variant="secondary" class="warning">Action</v-btn>
      <v-btn variant="primary" class="warning ok">Button</v-btn>
    </v-alert>

    <v-alert
        type="success"
        :title="judul ? 'Title' : null"
        :text="teks ? 'Lorem ipsum olor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!'
      : null"
        class="alertStyle"
    >
      <p/>
      <v-btn variant="secondary" class="success">Action</v-btn>
      <v-btn variant="primary" class="success ok">Button</v-btn>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "MindLensAlert",
  props: {
    tipe: {
      type: Boolean,
      default: () => true
    },
    judul: {
      type: Boolean,
      default: () => true
    },
    teks: {
      type: Boolean,
      default: () => true
    },
    x: {
      type: Boolean,
      default: () => true
    },
  }
}
</script>

<style scoped>
* {
  width: 720px;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  gap: 12px;
}

button {
  margin-top: 10px;
  margin-right: 20px;
  width: 130px;
  height: 40px;
  border-radius: 8px;
  padding: 8px 24px 8px 24px;
  gap: 8px;
  background-color: #F7BA50;
  float: left;
  color: black;
}
button.secondary {
  color: #C75100;
  border-color: #C75100;
  border-width: 1px;
  background-color: white;
}
button.error {
  color: #CC3123;
  border-color: #CC3123;
  border-width: 1px;
  background-color: white;
}
button.error.ok {
  color: white;
  background-color: #CC3123;
}
button.warning {
  color: #C75100;
  border-color: #C75100;
  border-width: 1px;
  background-color: white;
}
button.warning.ok {
  color: white;
  background-color: #C75100;
}
button.success {
  color: #008700;
  border-color: #008700;
  border-width: 1px;
  background-color: white;
}
button.success.ok {
  color: white;
  background-color: #008700;
}

.alertStyle {
  text-justify: auto;
  margin-bottom: 4px
}
</style>
