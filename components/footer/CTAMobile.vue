<template>
    <div class="md:w-10/12 md:mb-8 responsive-px py-6 flex flex-col md:flex-row gap-6 md:gap-12 items-center font-body">
        <img src="~/assets/imgs/Showcase.png" class="h-64 w-auto basis-1/2 rounded-md">
        <div class="basis-1/2 w-full flex flex-col gap-4 md:gap-6 items-center md:items-start">
            <div class="md:basis-1/2 flex flex-col gap-2">
                <p class="text-xl">Pass your exams</p>
                <p class="text-2xl md:text-3xl">With <span class="font-bold text-grokBlue-500">GrokET</span></p>
            </div>
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
            buttonClass: 'w-full py-2 px-3 sm:py-4 sm:px-5 lg:py-4 lg:px-4 sm:text-md md:text-base lg:text-lg main-button',
            buttonText: 'Get Started',
            buttonLink: 'https://www.google.com'
        };
    }
};
</script>