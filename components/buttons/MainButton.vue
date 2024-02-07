<template>
    <button class="bg-grokBlue-500 text-grokWhite-500 py-3 px-6 rounded-lg" @click="redirectToLink">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            required: true
        },
        buttonLink: {
            type: String,
            required: true
        }
    },
    methods: {
        redirectToLink() {
            window.location.href = this.buttonLink;
        }
    }

}
</script>