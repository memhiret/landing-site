<script>
export default {
  props: {
    buttonClass: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button :class="buttonClass" type="submit">
    {{ buttonText }}
  </button>
</template>
