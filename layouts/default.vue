<template>
    <div class="h-screen flex flex-col justify-between">
        <div>
            <HeaderPageHeader />
            <CommonOverlay />
        </div>
        <div>
            <slot />
        </div>
        <div class="mt-auto">
            <Footer />
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('hashchange', () => {
            const target = document.getElementById(location.hash.slice(1));
            if (target) {
                const navbarHeight = document.querySelector('#navbar').offsetHeight;
                const usableHeight = window.innerHeight - navbarHeight;
                const offset = 20;
                window.scrollTo(0, target.offsetTop - usableHeight + offset);
            }
        })
    }
}
</script>
