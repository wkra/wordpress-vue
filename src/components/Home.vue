<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div class="post__wrapper" v-for="post in posts">
        <h2>{{ post.title.rendered }}</h2>
        <span v-html="post.content.rendered"></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      msg: 'HOME',
      posts: '',
      categoryId: 16
    }
  },

  created () {
    axios.get(`http://localhost/wordpress-vue/wp-json/wp/v2/posts?categories=16`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped lang="less">
h1, h2 {
  font-weight: normal;
  color: red;
}

</style>
