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
                <input class="form-control" id="titleInp" type="text" placeholder="MENU" @input="titleChange" :value="title">
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="fontSizeInp">Font size</label>
                <input class="form-control" id="fontSizeInp" type="number" placeholder="16" @input="fontSizeChange" :value="fontSize">
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
  props: {
      title: {
          type: String,
          default: 'MENU'
      },
      fontSize: {
          type: String,
          default: '16'
      }
  },
  components: {
    Card
  },
  methods: {
    titleChange (e) {
      this.$emit('titleChange', e.target.value)
    },
    fontSizeChange (e) {
      this.$emit('fontSizeChange', e.target.value)
    }
  }
}
</script>

<style>

</style>