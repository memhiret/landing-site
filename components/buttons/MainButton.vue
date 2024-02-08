<template>
    <button
        :class="buttonClass"
        @click="redirectToLink">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    props: {
        buttonClass: {
            type: String,
            required: true,
        },
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