<template>
    <nav class="px-6 py-4 md:px-8 md:py-6 lg:px-12 flex items-center justify-between">
        <div class="gap-2 md:gap-3 flex items-center">
            <SvgoLogo id="icon-rm-mg" class="text-6xl md:text-7xl lg:text-8xl" />
            <div class="hidden sm:block">
                <div class="text-black font-display lg:text-4xl">iLearn ET</div>
                <p class="text-grokBlack-500 font-body text-xs lg:text-xl">Moving the Needle</p>
            </div>
        </div>
        <!-- Mobile Nav Links -->
        <div class="md:hidden">
            <ul class="gap-8 flex justify-between font-body text-xs">
                <li>Exam Prep</li>
                <li>Study Guide</li>
            </ul>
        </div>
        <!-- Nav Links -->
        <div class="hidden md:block">
            <ul class="gap-8 lg:gap-24 flex justify-between font-body text-sm lg:text-xl">
                <li>Exam Prep</li>
                <li>Study Guide</li>
                <li>Articles</li>
            </ul>
        </div>
        <!-- Mobile Hamburger Menu -->
        <div class="sm:hidden">
            <ButtonsHamburger />
        </div>
        <!-- Desktop Actions -->
        <div class="hidden sm:flex gap-4 lg:gap-8 items-center font-body">
            <div class="font-medium text-black sm:text-sm md:text-base lg:text-xl">Login</div>
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