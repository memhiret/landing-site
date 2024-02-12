<template>
    <div class="w-full col-flex md:flex-row md:justify-between gap-4 md:gap-0">
        <div class="md:basis-1/2 md:items-start col-flex gap-2 md:gap-4 font-body font-medium">
            <p class="w-full text-center md:text-left md:text-lg lg:text-2xl">{{ featureHead }}</p>
            <p class="w-full md:text-left desc-text responsive-description">{{ featureDesc }}</p>
        </div>
        <slot name="svg-picture" class="basis-1/2"></slot>
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