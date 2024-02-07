<template>
    <nav class="px-6 py-4 md:px-8 md:py-6 lg:px-12 flex items-center justify-between">
        <div class="gap-2 md:gap-3 flex items-center">
            <SvgoLogo id="icon-rm-mg" class="text-6xl md:text-7xl lg:text-8xl" />
            <div class="hidden sm:block">
                <div class="text-black font-display lg:text-4xl">iLearn ET</div>
                <p class="text-grokBlack-500 font-body text-xs lg:text-xl">Moving the Needle</p>
            </div>
        </div>
        <!-- Nav Links -->
        <div>
            <ul class="gap-8 lg:gap-24 flex justify-between font-body text-sm lg:text-xl">
                <a class="cursor-pointer">
                    <li class="text-button-links">
                        Exam Prep</li>
                </a>
                <a class="cursor-pointer">
                    <li class="text-button-links">
                        Study Guide</li>
                </a>
                <a class="cursor-pointer">
                    <li class="hidden md:block text-button-links">
                        Articles</li>
                </a>
            </ul>
        </div>
        <!-- Mobile Hamburger Menu -->
        <div class="sm:hidden">
            <ButtonsHamburger />
        </div>
        <HeaderHamburgerMenu />
        <!-- Desktop Actions -->
        <div class="hidden sm:flex gap-4 lg:gap-8 items-center font-body">
            <button class="font-medium text-black sm:text-sm md:text-base lg:text-xl text-button-links">Login</button>
            <MainButton :buttonText="buttonText" :buttonLink="buttonLink" />
        </div>
    </nav>
</template>

<script>
import MainButton from "~/components/buttons/MainButton.vue";

export default {
    components: {
        MainButton
    },
    data() {
        return {
            buttonText: 'Get Started',
            buttonLink: 'https://www.google.com'
        };
    }
};
</script>