<template>
    <div
        id="hamburger"
        class="hidden z-40 absolute top-24 right-2 px-4 py-4 bg-grokWhite-500 rounded-lg text-xs shadow-md"
    >
        <ul class="flex flex-col gap-4 w-36 h-auto items-start font-body">
            <div class="w-full flex flex-col gap-4">
                <div class="flex justify-between items-center">
                    <li class="active:text-grokBlue-500">About Us</li>
                    <SvgoDown class="text-base" @click="toggleAbout" />
                </div>
                <div id="aboutList" class="hidden flex-col gap-3 ms-4 text-2xs">
                    <div class="flex justify-between items-center">
                        <li class="active:text-grokBlue-500" @click="toggleHam">
                            <NuxtLink to="/about/story">Our Story</NuxtLink>
                        </li>
                    </div>
                    <div class="flex justify-between items-center">
                        <li class="active:text-grokBlue-500" @click="toggleHam">
                            <NuxtLink to="/about/careers">Careers</NuxtLink>
                        </li>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-col gap-4">
                <div class="flex justify-between items-center">
                    <li class="active:text-grokBlue-500">Explore</li>
                    <SvgoDown class="text-base" @click="toggleExplore" />
                </div>
                <div
                    id="exploreList"
                    class="hidden flex-col gap-3 ms-4 text-2xs"
                >
                    <div class="flex justify-between items-center">
                        <li class="active:text-grokBlue-500" @click="toggleHam">
                            <NuxtLink to="/explore/private"
                                >For Private Schools</NuxtLink
                            >
                        </li>
                    </div>
                </div>
            </div>
            <div>
                <li class="active:text-grokBlue-500" @click="toggleHam">
                    <NuxtLink to="/pricing">Pricing</NuxtLink>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
import toggleHam from "~/mixins/toggleHam";

export default {
    mixins: [toggleHam],
    methods: {
        toggleAbout() {
            document
                .querySelector("#aboutList")
                .classList.toggle("list-visible");
            document.querySelector("#aboutList").classList.toggle("hidden");
        },
        toggleExplore() {
            document
                .querySelector("#exploreList")
                .classList.toggle("list-visible");
            document.querySelector("#exploreList").classList.toggle("hidden");
        },
    },
};
</script>
