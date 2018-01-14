<template>
<div>
<!-- 404 -->
  <div v-if="type === 'error'">
    <h1>404</h1>
  </div>
<!-- PAGE -->
  <div v-if="type === 'page'">
    <app-page :page="wpData"></app-page>  
  </div>
<!-- CATEGORIES -->
  <div v-if="type === 'categorie'">
    <app-categorie :posts="wpData"></app-categorie>  
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  mounted: function () {
    this.findCategories()
    this.getPage()
  },
  data () {
    return {
      wpData: '',
      type: ''
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
        if (res.data.length > 0) {
          vm.wpData = res.data
          vm.type = 'page'
        }
      })
      .catch((res) => {
        vm.type = 'error'
        console.log(`Something went wrong : ${res}`)
      })
    },
    findCategories: function () {
      var vm = this
      vm.loaded = 'false'

      axios.get('http://localhost/wordpress-vue/wp-json/wp/v2/categories', {
        params: { slug: vm.$route.params.name }
      })
      .then((res) => {
        if (res.data.length > 0) {
          vm.getPostsfromCatId(res.data[0].id)
          vm.type = 'categorie'
        }
      })
      .catch((res) => {
        vm.type = 'error'
        console.log(`Something went wrong : ${res}`)
      })
    },
    getPostsfromCatId: function (catId) {
      var vm = this
      vm.loaded = 'false'

      axios.get('http://localhost/wordpress-vue/wp-json/wp/v2/posts', {
        params: { categories: catId }
      })
      .then((res) => {
        vm.wpData = res.data
      })
      .catch((res) => {
        vm.type = 'error'
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
