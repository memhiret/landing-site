<template>
    <div class="flex flex-col md:flex-row-reverse gap-6 justify-between items-start md:items-center">
        <div class="basis-1/2">
            <img class="h-auto w-auto rounded-sm" src="~/assets/imgs/Study.jpg">
        </div>
        <div class="basis-1/2 flex flex-col gap-4 md:gap-8 items-start">
            <p class="font-medium md:text-2xl">Guided Study Paths</p>
            <p class="font-body text-grokBlack-500 text-opacity-50 responsive-description">Bite-sized content, gamified experiences, and powerful recall techniques ensure you master challenging concepts and conquer those standardized exams with confidence.</p>
            <MainButton :class="buttonClass" :buttonText="buttonText" :buttonLink="buttonLink" />
        </div>
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
            buttonClass: 'w-32 px-2 py-3 border-opacity-50 alt-button text-xs text-grokBlue-500 hover:button-hover active:button-hover',
            buttonText: 'Get Started',
            buttonLink: 'https://www.google.com'
        };
    }
};
</script>