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
      posts: ''
    }
  },
    // Fetches posts when the component is created.
  created () {
    axios.get(`http://localhost/wordpress-vue/wp-json/wp/v2/posts/`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      console.log(response.data)
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}

</style>
