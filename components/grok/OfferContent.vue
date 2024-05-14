<template>
    <div
        class="flex flex-col gap-6 md:flex-row-reverse justify-between items-start md:items-center"
    >
        <div class="basis-1/2">
            <img class="h-auto w-auto rounded-sm" :src="imgSrc" />
        </div>
        <div class="basis-1/2 flex flex-col gap-4 md:gap-8 items-start">
            <p class="font-medium md:text-2xl">{{ offerHeading }}</p>
            <p
                class="font-body text-grokBlack-500 text-opacity-50 responsive-description"
            >
                {{ offerDesc }}
            </p>
            <MainButton
                :buttonClass="buttonClass"
                :buttonText="buttonText"
                :buttonLink="buttonLink"
            />
        </div>
    </div>
</template>

<script>
import MainButton from "~/components/buttons/MainButton.vue";

export default {
    components: {
        MainButton,
    },
    props: {
        imgSrc: {
            type: String,
            required: true,
        },
        offerHeading: {
            type: String,
            required: true,
        },
        offerDesc: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            buttonClass:
                "w-32 md:w-44 py-2 px-1 sm:py-4 sm:px-3 font-body text-xs sm:text-sm md:text-base lg:text-lg border-opacity-50 lg:border-opacity-75 alt-button text-grokBlue-500 hover:button-hover active:button-hover",
            buttonText: "Get Started",
            buttonLink: "/memhir/waiting-private",
        };
    },
};
</script>
