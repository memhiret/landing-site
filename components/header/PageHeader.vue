<template>
    <nav
        id="navbar"
        class="fixed top-0 w-full z-50 shadow-md responsive-px py-4 md:py-6 flex items-center justify-between bg-white"
    >
        <!-- Header Logo -->
        <NuxtLink to="/">
            <SvgoMemhir_LogoType_01-04
                class="icon-rm-mg text-grokBlue-500 text-6xl md:text-7xl lg:text-9xl"
            />
        </NuxtLink>
        <!-- Nav Links -->
        <div>
            <ul
                class="flex justify-between gap-16 lg:gap-24 xl:gap-36 font-body responsive-link-text lg:text-xl"
            >
                <li class="cursor-pointer text-button-links">
                    <NuxtLink to="/#product">Products</NuxtLink>
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
            <MainButton
                :buttonClass="buttonClass"
                :buttonText="buttonText"
                :buttonLink="buttonLink"
            />
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
            buttonClass:
                "py-1 px-2 sm:py-2 sm:px-4 lg:py-3 lg:px-4 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
            buttonText: "Get Started",
            buttonLink: "/grok/waiting-private",
        };
    },
};
</script>
