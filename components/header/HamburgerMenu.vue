<template>
    <div id="hamburger" class="hidden z-20 absolute top-22 right-2 px-4 py-4 bg-grokWhite-500 rounded-lg text-xs shadow-md">
        <ul class="flex flex-col gap-4 w-36 h-auto items-start font-body">
            <a>
                <li class="active:text-grokBlue-500">Articles</li>
            </a>
            <div class="w-full flex flex-col gap-4">
                <a class="flex justify-between items-center">
                    <li class="active:text-grokBlue-500">About Us</li>
                    <SvgoDown class="text-base" @click="toggleAbout" />
                </a>
                <div id="aboutList" class="hidden flex-col gap-3 ms-4 text-2xs">
                    <a class="flex justify-between items-center">
                        <li class="active:text-grokBlue-500">Our Story</li>
                    </a>
                    <a class="flex justify-between items-center">
                        <li class="active:text-grokBlue-500">Careers</li>
                    </a>
                </div>
            </div>
            <div class="w-full flex flex-col gap-4">
                <a class="flex justify-between items-center">
                    <li class="active:text-grokBlue-500">Explore</li>
                    <SvgoDown class="text-base" @click="toggleExplore" />
                </a>
                <div id="exploreList" class="hidden flex-col gap-3 ms-4 text-2xs">
                    <a class="flex justify-between items-center">
                        <li class="active:text-grokBlue-500">For Private Schools</li>
                    </a>
                    <a class="flex justify-between items-center">
                        <li class="active:text-grokBlue-500">For Government Schools</li>
                    </a>
                </div>
            </div>
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
            buttonClass: 'py-2 px-4 main-button hover:main-hover',
            buttonText: 'Get Started',
            buttonLink: 'https://www.google.com'
        };
    },
    methods: {
        toggleAbout() {
            document.querySelector("#aboutList").classList.toggle("list-visible")
            document.querySelector("#aboutList").classList.toggle("hidden")
        },
        toggleExplore() {
            document.querySelector("#exploreList").classList.toggle("list-visible")
            document.querySelector("#exploreList").classList.toggle("hidden")
        }
    }
};
</script>