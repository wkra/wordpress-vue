<template>
  <header>
    <h1>{{ msg }}</h1>
    <div>
      <p v-for="item in menuItems">
        <a :href="replaceUrl(item.url)">{{ item.title }}</a> 
        <span v-if="item.children">
          <span v-for="itemChildren in item.children">
            <a :href="replaceUrl(itemChildren.url)">{{ itemChildren.title }}</a> 
          </span>
        </span>
      </p>
    </div>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  mounted: function () {
    this.getMenu(this.menuId)
  },
  data () {
    return {
      msg: 'HEADER',
      menuId: 23,
      menuItems: []
    }
  },
  methods: {
    getMenu: function (id) {
      var vm = this
      vm.loaded = 'false'

      axios.get('http://localhost/wordpress-vue/wp-json/wp-api-menus/v2/menus/' + id, {
      })
      .then((res) => {
        if (res.data.count > 0) {
          vm.menuItems = res.data.items
        }
      })
      .catch((res) => {
        vm.type = 'error'
        console.log(`Something went wrong : ${res}`)
      })
    },
    replaceUrl: function (url) {
      return url.replace('http://localhost/wordpress-vue/', 'http://localhost:8080/#/')
    }
  },
  watch: {
    '$route' (to, from) {
      this.getMenu(this.menuId)
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
