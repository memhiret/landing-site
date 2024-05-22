<template>
  <div
    class="w-full flex flex-col-reverse items-center md:flex-row md:justify-between gap-4 md:gap-0"
  >
    <div
      class="md:basis-1/2 md:items-start col-flex gap-2 md:gap-4 xl:gap-10 font-body font-medium"
    >
      <p
        class="w-full md:text-left md:text-lg lg:text-2xl xl:text-3xl text-grokBlue-500"
      >
        {{ featureHead }}
      </p>
      <p class="w-full desc-text responsive-description">{{ featureDesc }}</p>
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
    },
  },
};
</script>
