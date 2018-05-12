<template>
  <div>
    <h1>Home Component</h1>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  created: function () {
    this.$http.get('/api/activity/1')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
    console.log('created home component')
  }
}
</script>
