<template>
    <div class="tham tham-e-squeeze tham-w-6" @click="toggleMenu">
        <div class="tham-box">
            <div class="tham-inner bg-black">
            </div>
        </div>
    </div>

    <div id="hamburger" class="hidden text-xs">
        <div>About</div>
        <div>Articles</div>
        <div>Login</div>
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
            buttonText: 'Get Started',
            buttonLink: 'https://www.google.com'
        };
    },
    methods: {
        toggleMenu() {
            document.querySelector('.tham').classList.toggle('tham-active')
            document.querySelector('#hamburger').classList.toggle('hidden')
        }
    }
}
</script>