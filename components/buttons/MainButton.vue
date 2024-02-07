<template>
    <button
        class="py-1 px-2 sm:py-2 sm:px-4 lg:py-3 lg:px-4 bg-grokBlue-500 text-grokWhite-500 sm:text-sm md:text-base lg:text-lg rounded-lg shadow-xl"
        @click="redirectToLink">
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