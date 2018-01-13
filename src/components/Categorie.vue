<template>
  <div>
    <h1>CATEGORIES</h1>
      {{ posts }}
  </div>
</template>

<script>
export default {
  props: ['posts'],
  data () {
    return {
      pageTitle: '',
      pageContent: ''
    }
  }
}
</script>

<style scoped lang="less">
h1, h2 {
  font-weight: normal;
  color: blue;
}

</style>
