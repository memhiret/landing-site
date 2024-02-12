<template>
    <div class="w-full responsive-px md:px-8 md:py-6 lg:px-12 flex flex-col gap-10">
        <div class="flex flex-col gap-4 items-center">
            <div class="my-4 px-6 flex flex-col gap-2 items-center justify-center text-center">
                <p class="font-display font-medium responsive-heading">No More Text Anxiety,</p>
                <p class="font-display font-thin responsive-subheading">Just Pure Text-Taking Mastery</p>
                <p class="my-1 desc-text responsive-description">Personalized study paths and
                    test
                    preparation
                    guides,<br>helping you ace
                    your next test.</p>
            </div>
            <div class="flex gap-12 font-body text-sm">
                <MainButton :class="buttonClass2" :buttonText="buttonText2" :buttonLink="buttonLink2" />
                <MainButton :class="buttonClass1" :buttonText="buttonText1" :buttonLink="buttonLink1" />
            </div>
        </div>
        <div class="flex flex-col gap-2 md:gap-4 items-center">
            <div class="flex justify-between w-full md:w-8/12">
                <div class="flex gap-2 items-center">
                    <img class="h-4 w-auto md:h-6" src="~/assets/imgs/math-book.png">
                    <p class="font-body text-xs md:text-base">Math</p>
                </div>
                <div class="flex gap-2 items-center">
                    <img class="h-4 w-auto md:h-6" src="~/assets/imgs/atomic.png">
                    <p class="font-body text-xs md:text-base">Physics</p>
                </div>
                <div class="flex gap-2 items-center">
                    <img class="h-4 w-auto md:h-6" src="~/assets/imgs/biology.png">
                    <p class="font-body text-xs md:text-base">Biology</p>
                </div>
                <div class="flex gap-2 items-center">
                    <img class="h-4 w-auto md:h-6" src="~/assets/imgs/chemistry.png">
                    <p class="font-body text-xs md:text-base">Chemistry</p>
                </div>
            </div>
            <p class="font-body text-2xs md:text-sm">and more...</p>
        </div>

    </div>
</template>

<script>
import MainButton from "~/components/buttons/MainButton.vue";

export default {
    components: {
        MainButton,
    },
    data() {
        return {
            buttonClass1: 'w-24 md:w-44 py-3 px-2 sm:py-4 sm:px-3 sm:text-sm md:text-base lg:text-lg main-button',
            buttonText1: 'Get Started',
            buttonLink1: 'https://www.google.com',
            buttonClass2: 'w-24 md:w-44 py-3 px-2 sm:py-4 sm:px-3 sm:text-sm md:text-base lg:text-lg alt-button',
            buttonText2: 'Explore',
            buttonLink2: 'https://www.google.com',
        };
    },
};
</script>