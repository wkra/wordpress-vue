<template>
  <div>
    <h1>POSTS</h1>
    <div v-if="posts">
       
      <h2 v-text="posts.title"></h2>
      
      <div v-for="post in posts.data">
        <hr>
        <h2 v-html="post.title.rendered"></h2>
        <div v-html="post.content.rendered"></div>
        <a :href="changelinkUrl(post.link)">czytaj wiecej...</a>
        <hr>
      </div>
    </div>
        <p v-text="pageTitle"></p>
    
  </div>
</template>

<script>
export default {
  props: ['posts'],
  data () {
    return {
      pageTitle: this.posts.title.rendered,
      pageContent: ''
    }
  },
  methods: {
    changelinkUrl: function (url) {
      console.log('old')
      console.log(url)
      var newUrl = url.replace('http://localhost/wordpress-vue/projekty/', 'http://localhost:8080/#/')
      console.log('new')
      console.log(newUrl)
      return newUrl
    }
  },
  watch: {
    '$route' (to, from) {
      this.getPost()
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
