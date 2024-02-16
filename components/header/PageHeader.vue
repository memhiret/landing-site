<template>
    <nav id="navbar"
        class="fixed top-0 w-full z-50 shadow-md responsive-px py-4 md:py-6 flex items-center justify-between bg-white">
        <!-- Header Logo -->
        <NuxtLink to="/">
            <div class="gap-2 md:gap-3 flex items-center">
                <SvgoLogo class="icon-rm-mg text-6xl md:text-7xl lg:text-8xl" />
                <div class="hidden sm:block">
                    <div class="text-black font-display lg:text-4xl">iLearn ET</div>
                    <p class="text-grokBlack-500 font-body text-xs lg:text-xl">Moving the Needle</p>
                </div>
            </div>
        </NuxtLink>
        <!-- Nav Links -->
        <div>
            <ul class="flex justify-between gap-8 lg:gap-24 xl:gap-36 font-body responsive-link-text lg:text-xl">
                <li class="cursor-pointer text-button-links">
                    <NuxtLink to="/grok/studyguide">Products</NuxtLink>
                </li>
                <li class="cursor-pointer text-button-links">
                    <NuxtLink to="/articles">Articles</NuxtLink>
                </li>
                <li class="cursor-pointer hidden md:block text-button-links">
                    <NuxtLink to="/pricing">Pricing</NuxtLink>
                </li>
            </ul>
        </div>
        <!-- Mobile Hamburger Menu -->
        <div class="sm:hidden">
            <ButtonsHamburger />
        </div>
        <HeaderHamburgerMenu />
        <!-- Desktop Actions -->
        <div class="hidden sm:flex gap-4 lg:gap-8 items-center font-body">
            <MainButton :buttonClass="buttonClass" :buttonText="buttonText" :buttonLink="buttonLink" />
        </div>
    </nav>
</template>

<script>
import MainButton from "~/components/buttons/MainButton.vue";

export default {
    components: {
        MainButton,
    },
    data() {
        return {
            buttonClass: 'py-1 px-2 sm:py-2 sm:px-4 lg:py-3 lg:px-4 sm:text-sm md:text-base lg:text-lg main-button hover:main-hover',
            buttonText: 'Get Started',
            buttonLink: '#getStarted'
        };
    }
};
</script>