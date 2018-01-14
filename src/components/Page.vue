<template>
  <div class="post-wrapper">
    <h1>PAGE</h1>
      <div v-if="page">
        <h2 v-html="page.title.rendered"></h2>
        <div v-html="page.content.rendered"></div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['page'],
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
