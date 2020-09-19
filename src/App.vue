<template>
  <div id="app">
    <div class="container">
      <Custom :title='title' :fontSize='fontSize' @titleChange='titleChange' @fontSizeChange='fontSizeChange'/>
    </div>
  </div>
</template>

<script>
import Custom from './components/CustomComponent/Custom'
export default {
  name: 'App',
  components: {
    Custom
  },
  data () {
    return {
      title: 'MENU',
      fontSize: '16'
    }
  },
    methods: {
      titleChange (chnages) {
        this.title = chnages
      },
      fontSizeChange (chnages) {
        this.fontSize = chnages
      },
    },
}
</script>
