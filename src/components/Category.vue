<template>
  <div>
    <h1>CATEGORY</h1>
    <div v-if="wpData">
      <div v-for="category in wpData">
        <h2> {{ category.name }}</h2>
        
        <p>{{ category.description }}</p>
        <span v-if="category.acf.img">
        <img :src="category.acf.img" :alt="category.name">
        </span>


      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted: function () {
    this.getCategories()
  },
  data () {
    return {
      categoryId: 25,
      wpData: ''
    }
  },
  methods: {
    getCategories: function () {
      var vm = this
      vm.loaded = 'false'

      axios.get('http://localhost/wordpress-vue/wp-json/wp/v2/categories', {
        params: { parent: vm.categoryId }
      })
      .then((res) => {
        vm.loaded = 'true'
        vm.wpData = res.data
      })
      .catch((res) => {
        console.log(`Something went wrong : ${res}`)
      })
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
