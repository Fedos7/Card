<template>
    <div>
        <div class="">
            <b-card
                :img-src="imgUrl"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
            <b-card-text class="text-center" :style="{fontSize: validFontSize + 'px'}">
                {{validTitle}}
            </b-card-text>
            </b-card>
            </div>
    </div>
    
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'MENU'
        },
        fontSize: {
            type: String,
            default: '16'
        },
        imgUrl: {
            type: String,
            default: 'https://images.unsplash.com/photo-1592913068975-aab3db90ffc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
    },
    computed: {
        validTitle: function () {
            return this.title.trim().length ? this.title : 'MENU'
        },
        validFontSize: function () {
            return this.fontSize.length ? this.fontSize : '16'
        }
    }
}
</script>

<style>

</style>