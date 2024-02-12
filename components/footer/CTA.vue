<template>
    <div
        class="hidden absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-4 w-3/4 md:flex flex-col items-center gap-4 text-grokWhite-500 text-center bg-grokBlack-300 rounded-md">
        <p class="">Ditch the stress,<br>Study smarter, not harder.</p>
        <p class="text-3xs">Forget one-size-fits-all prep. GrokET maps your unique learning journey with interactive tools
            and science-backed
            recall techniques.</p>
        <MainButton :class="buttonClass" :buttonText="buttonText" :buttonLink="buttonLink" />
    </div>
</template>

<script>
import MainButton from "~/components/buttons/MainButton.vue";

export default {
    components: {
        MainButton
    },
    data() {
        return {
            buttonClass: 'py-1 px-2 sm:py-2 sm:px-4 lg:py-3 lg:px-4 sm:text-sm md:text-base lg:text-lg main-button hover:main-hover',
            buttonText: 'Get Started',
            buttonLink: 'https://www.google.com'
        };
    }
};
</script>