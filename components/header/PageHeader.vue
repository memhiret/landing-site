<template>
    <nav class="px-16 py-8 flex justify-between items-center">
        <div class="gap-4 flex items-center">
            <div>
                <img class="h-16 w-auto" src="../../assets/imgs/Logo.png" alt="iLearn ET Logo">
            </div>
            <div>
                <div class="text-black font-display text-xl xl:text-3xl">iLearn ET</div>
                <p class="text-grokBlack-500 font-body text-xs xl:text-base">Moving the Needle</p>
            </div>
        </div>
        <div>
            <ul class="gap-8 xl:gap-24 flex justify-between font-body">
                <li>Exam Prep</li>
                <li>Study Guides</li>
                <li>Articles</li>
            </ul>
        </div>
        <div class="gap-8 flex items-center font-body">
            <div class="text-sm xl:text-xl font-medium text-black">Login</div>
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