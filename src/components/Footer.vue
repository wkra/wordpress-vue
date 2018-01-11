<template>
  <footer>
    <h1>{{ msg }}</h1>
    </footer>
</template>

<script>
export default {
  data () {
    return {
      msg: 'footer'
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
