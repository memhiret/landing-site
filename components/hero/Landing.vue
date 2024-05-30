<template>
  <div class="w-full mt-24 md:mt-32 lg:mt-44 responsive-px py-4 md:py-6 lg:py-16 flex flex-col xl:flex-row gap-12">
    <div
      class="lg:basis-1/2 flex flex-col gap-10"
    >
      <div class="flex flex-col gap-8 items-center">
        <div
          class="my-4 px-4 flex flex-col gap-4 md:gap-6 lg:gap-12 items-center justify-center text-center"
        >
          <p
            class="font-body lowercase responsive-subheading lg:tracking-wider"
          >
            No More Test Anxiety,
          </p>
          <p class="main-font lowercase responsive-heading lg:tracking-wide">
            Just Pure Test-Taking <br /><span
              class="inline-block mt-3 md:mt-8 p-2 md:p-4 rounded-md bg-grokBlue-500 text-grokWhite-500"
              >Mastery</span
            >
          </p>
          <p class="my-1 desc-text responsive-description">
            Personalized study paths and test preparation guides,<br />helping
            you ace your next test.
          </p>
        </div>
        <div class="flex gap-12 lg:gap-24 xl:gap-36 font-body text-sm">
          <MainButton
            :buttonClass="buttonClass2"
            :buttonText="buttonText2"
            :buttonLink="buttonLink2"
          />
          <MainButton
            :buttonClass="buttonClass1"
            :buttonText="buttonText1"
            :buttonLink="buttonLink1"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2 md:gap-4 lg:gap-6 items-center">
        <div class="flex justify-between w-full lg:mt-4">
          <div class="flex gap-2 lg:gap-4 items-center">
            <img
              class="h-4 w-auto md:h-6 lg:h-8"
              src="~/assets/imgs/math-book.png"
              alt="Math Book Icon"
            />
            <p
              class="font-body responsive-captions hover:hover-enlarge hover:transition-enlarge"
            >
              Math
            </p>
          </div>
          <div class="flex gap-2 lg:gap-4 items-center">
            <img
              class="h-4 w-auto md:h-6 lg:h-8"
              src="~/assets/imgs/atomic.png"
              alt="Physics Book Icon"
            />
            <p
              class="font-body responsive-captions hover:hover-enlarge hover:transition-enlarge"
            >
              Physics
            </p>
          </div>
          <div class="flex gap-2 lg:gap-4 items-center">
            <img
              class="h-4 w-auto md:h-6 lg:h-8"
              src="~/assets/imgs/biology.png"
              alt="Biology Book Icon"
            />
            <p
              class="font-body responsive-captions hover:hover-enlarge hover:transition-enlarge"
            >
              Biology
            </p>
          </div>
          <div class="flex gap-2 lg:gap-4 items-center">
            <img
              class="h-4 w-auto md:h-6 lg:h-8"
              src="~/assets/imgs/chemistry.png"
              alt="Chemistry Book Icon"
            />
            <p
              class="font-body responsive-captions hover:hover-enlarge hover:transition-enlarge"
            >
              Chemistry
            </p>
          </div>
        </div>
        <p class="font-body text-2xs md:text-sm lg:text-base">and more...</p>
      </div>
    </div>
    <div class="hidden xl:basis-1/2 xl:flex xl:flex-col xl:justify-center">
      <img
        src="~/assets/imgs/HeroScreens.png"
        class="w-full rounded-md"
        alt="Demo picture of app"
      />
    </div>
  </div>
</template>

<script>
import MainButton from "~/components/buttons/MainButton.vue";

export default {
  components: {
    MainButton,
  },
  data() {
    return {
      buttonClass1:
        "w-24 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
      buttonText1: "Get Started",
      buttonLink1: "/memhir/waiting-private",
      buttonClass2:
        "w-24 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover",
      buttonText2: "Explore",
      buttonLink2: "/#grok-product",
    };
  },
};
</script>
