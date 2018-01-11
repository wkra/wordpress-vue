<template>
  <div class="post-wrapper">
    <div v-if="pageTitle">
      <h1 v-html="pageTitle"></h1>
      <p v-html="pageContent"></p>
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
      pageTitle: '',
      pageContent: ''
    }
  },
  methods: {
    getPage: function () {
      var vm = this
      vm.loaded = 'false'

      axios.get('http://localhost/wordpress-vue/wp-json/wp/v2/pages', {
        params: { slug: vm.$route.params.name }
      })
  .then((res) => {
    vm.page = res.data[ 0 ]
    vm.loaded = 'true'
    vm.pageTitle = vm.page.title.rendered
    vm.pageContent = vm.page.content.rendered
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
