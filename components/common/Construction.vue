<template>
    <div class="w-full my-24 responsive-px lg:mt-36 flex flex-col gap-6 items-center">
        <SvgoUnder class="icon-rm-mg text-12xl lg:text-16xl" filled />
        <div class="flex flex-col gap-6 md:gap-10 items-center">
            <p class="font-body responsive-heading">Page Under Construction</p>
            <MainButton :class="buttonClass1" :buttonText="buttonText1" :buttonLink="buttonLink1" />
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
            buttonClass1: 'w-full py-3 px-2 sm:py-4 sm:px-3 sm:text-sm md:text-base lg:text-lg main-button hover:main-hover',
            buttonText1: 'Return to Home',
            buttonLink1: 'https://www.google.com',
        };
    },
};
</script>