<template>
    <div class="container m-2">
      <div class="row">
        <div class="col">
          <Card :title="title" :fontSize="fontSize" />
        </div>
        <div class="col">
          <form>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="titleInp">Title</label>
                <input class="form-control" id="titleInp" type="text" placeholder="MENU" v-model="title">
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="fontSizeInp">Font size</label>
                <input class="form-control" id="fontSizeInp" type="number" placeholder="16" v-model="fontSize">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'App',
  data () {
    return {
      title: '',
      fontSize: '16'
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>