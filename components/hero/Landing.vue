<template>
    <div class="w-full mt-20 md:mt-32 lg:mt-36 responsive-px py-4 md:py-6 lg:py-16 flex flex-col gap-10">
        <div class="flex flex-col gap-4 items-center">
            <div class="my-4 px-6 flex flex-col gap-2 lg:gap-4 items-center justify-center text-center">
                <p class="font-display font-medium responsive-heading lg:tracking-wider">No More Text Anxiety,</p>
                <p class="font-display font-thin responsive-subheading lg:tracking-wide">Just Pure Text-Taking Mastery</p>
                <p class="my-1 desc-text responsive-description">Personalized study paths and
                    test
                    preparation
                    guides,<br>helping you ace
                    your next test.</p>
            </div>
            <div class="flex gap-12 lg:gap-24 xl:gap-36 font-body text-sm">
                <MainButton :class="buttonClass2" :buttonText="buttonText2" :buttonLink="buttonLink2" />
                <MainButton :class="buttonClass1" :buttonText="buttonText1" :buttonLink="buttonLink1" />
            </div>
        </div>
        <div class="flex flex-col gap-2 md:gap-4 items-center">
            <div class="flex justify-between w-full md:w-8/12 xl:w-1/2">
                <div class="flex gap-2 lg:gap-4 items-center">
                    <img class="h-4 w-auto md:h-6 lg:h-8" src="~/assets/imgs/math-book.png">
                    <p class="font-body responsive-captions hover:hover-enlarge hover:transition-enlarge">Math</p>
                </div>
                <div class="flex gap-2 lg:gap-4 items-center">
                    <img class="h-4 w-auto md:h-6 lg:h-8" src="~/assets/imgs/atomic.png">
                    <p class="font-body responsive-captions hover:hover-enlarge hover:transition-enlarge">Physics</p>
                </div>
                <div class="flex gap-2 lg:gap-4 items-center">
                    <img class="h-4 w-auto md:h-6 lg:h-8" src="~/assets/imgs/biology.png">
                    <p class="font-body responsive-captions hover:hover-enlarge hover:transition-enlarge">Biology</p>
                </div>
                <div class="flex gap-2 lg:gap-4 items-center">
                    <img class="h-4 w-auto md:h-6 lg:h-8" src="~/assets/imgs/chemistry.png">
                    <p class="font-body responsive-captions hover:hover-enlarge hover:transition-enlarge">Chemistry</p>
                </div>
            </div>
            <p class="font-body text-2xs md:text-sm lg:text-base">and more...</p>
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
            buttonClass1: 'w-24 md:w-44 py-3 px-2 sm:py-4 sm:px-3 sm:text-sm md:text-base lg:text-lg main-button hover:main-hover',
            buttonText1: 'Get Started',
            buttonLink1: 'https://www.google.com',
            buttonClass2: 'w-24 md:w-44 py-3 px-2 sm:py-4 sm:px-3 sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover',
            buttonText2: 'Explore',
            buttonLink2: 'https://www.google.com',
        };
    },
};
</script>