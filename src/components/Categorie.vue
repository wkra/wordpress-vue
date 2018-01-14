<template>
  <div>
    <h1>CATEGORIES</h1>
    <div v-if="categorie">
       
      <h2 v-text="categorie.title"></h2>
      
      <div v-for="post in categorie.data">
        <hr>
        <h2 v-html="post.title.rendered"></h2>
        <div v-html="post.content.rendered"></div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['categorie'],
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
