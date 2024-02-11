<template>
    <div class="flex flex-col gap-4 items-center">
        <slot name="svg-picture"></slot>
        <div class="flex flex-col gap-2 md:gap-4 items-center font-body font-medium">
            <p class="md:text-xl">{{ featureHead }}</p>
            <p class="desc-text responsive-description">{{ featureDesc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        featureHead: {
            type: String,
            required: true,
        },
        featureDesc: {
            type: String,
            required: true,
        }
    }
}
</script>