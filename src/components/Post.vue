<template>
  <div class="post-wrapper">
    <div v-if="postTitle">
      <h1 v-html="postTitle"></h1>
      <p v-html="postContent"></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted: function () {
    this.getPage()
  },
  data () {
    return {
      postTitle: '',
      postContent: ''
    }
  },
  methods: {
    getPage: function () {
      var vm = this
      vm.loaded = 'false'

      axios.get('http://localhost/wordpress-vue/wp-json/wp/v2/posts', {
        params: { slug: vm.$route.params.post }
      })
      .then((res) => {
        vm.page = res.data[ 0 ]
        vm.loaded = 'true'
        vm.postTitle = vm.page.title.rendered
        vm.postContent = vm.page.content.rendered
      })
      .catch((res) => {
        console.log(`Something went wrong : ${res}`)
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.getPage()
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
