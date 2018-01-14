<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div v-for="post in wpData">
        <h2>{{ post.title.rendered }}</h2>
        <span v-html="post.content.rendered"></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted: function () {
    this.getPostsfromCatId(this.homeCategoryId)
  },
  data () {
    return {
      msg: 'HOME',
      wpData: '',
      homeCategoryId: 24
    }
  },
  methods: {
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
        console.log(`Something went wrong : ${res}`)
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.getPostsfromCatId()
    }
  }
}
</script>

<style scoped lang="less">
h1, h2 {
  font-weight: normal;
  color: red;
}

</style>
