<template>
    <div class="tham tham-e-squeeze tham-w-6" @click="toggleMenu">
        <div class="tham-box">
            <div class="tham-inner bg-black">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        toggleMenu() {
            document.querySelector('.tham').classList.toggle('tham-active')
            document.querySelector('#hamburger').classList.toggle('hidden')
            document.querySelector('#overlay').classList.toggle('overlay')
        }
    }
}
</script>