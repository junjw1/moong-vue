<template>
  <div>
    <h1>Home Component</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters({
      house: 'getHouse'
    })
  },
  created: function () {
    this.$store.dispatch('getHouse')
  }
}
</script>
