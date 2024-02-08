<template>
    <div id="hamburger" class="hidden z-20 absolute top-20 right-5 px-4 py-4 bg-grokWhite-500 rounded-lg text-xs shadow-md">
        <ul class="flex flex-col gap-4 w-36 h-auto items-start font-body">
            <a>
                <li class="active:text-grokBlue-500">Articles</li>
            </a>
            <a>
                <li class="active:text-grokBlue-500">About</li>
            </a>
            <a>
                <li class="active:text-grokBlue-500">Login</li>
            </a>
            <MainButton :class="buttonClass" :buttonText="buttonText" :buttonLink="buttonLink" />
        </ul>
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
            buttonClass: 'py-1 px-2 sm:py-2 sm:px-4 lg:py-3 lg:px-4 sm:text-sm md:text-base lg:text-lg main-button',
            buttonText: 'Get Started',
            buttonLink: 'https://www.google.com'
        };
    }
};
</script>