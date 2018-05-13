<template>
  <div class="v-container">
    <HeaderComponent/>
    <ContentComponent/>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ContentComponent from '../components/ContentComponent.vue'

export default {
  components: {
    HeaderComponent,
    ContentComponent
  }
}
</script>

<style scoped>
</style>
