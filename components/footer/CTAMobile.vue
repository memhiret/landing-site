<template>
    <div class="px-8 py-6 flex flex-col gap-6 items-center font-body">
        <div class="flex flex-col gap-4 items-center">
            <img src="~/assets/imgs/Showcase.png" class="rounded-md">
            <div class="flex flex-col gap-2">
                <p class="text-2xl">Pass your exams</p>
                <p class="text-3xl">With <span class="font-bold text-grokBlue-500">GrokET</span></p>
            </div>
        </div>
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
            buttonClass: 'w-full py-2 px-3 sm:py-4 sm:px-5 lg:py-4 lg:px-4 sm:text-md md:text-base lg:text-lg main-button',
            buttonText: 'Get Started',
            buttonLink: 'https://www.google.com'
        };
    }
};
</script>