<template>
    <div class="flex flex-col gap-6 justify-between items-start">
        <div>
            <img class="h-auto w-auto rounded-sm" src="~/assets/imgs/Taking.jpg">
        </div>
        <div class="flex flex-col gap-4 items-start">
            <p class="hidden shadow-xl ps-2 pe-12 py-1 text-2xs border rounded-md">Test-Prep</p>
            <p class="font-medium">Test Preparation Material</p>
            <p class="font-body text-grokBlack-500 text-opacity-50 text-2xs">Bite-sized content, gamified experiences, and powerful recall techniques ensure you master challenging concepts and conquer those standardized exams with confidence.</p>
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