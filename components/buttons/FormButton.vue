<template>
    <button :class="buttonClass" type="submit">
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
    },

}
</script>
