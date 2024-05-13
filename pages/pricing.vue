<template>
  <head>
    <title>MemhirET | Pricing</title>
  </head>
  <div class="mt-28 md:mt-32 lg:mt-40 xl:mt-44 responsive-px py-4 col-flex">
    <div
      class="md:w-19/12 flex flex-col items-start md:items-center gap-2 md:gap-4 lg:gap-8 xl:gap-12"
    >
      <p
        class="font-body font-semibold text-4xl lg:text-5xl xl:text-6xl leading-normal"
      >
        <span class="text-grokBlue-500">Simple</span> and
        <span class="text-grokBlue-500">Straighforward</span> Pricing
      </p>
      <p
        class="desc-text text-sm md:text-base lg:text-lg xl:text-xl leading-loose"
      >
        Join students and educators.
      </p>
    </div>
    <div
      class="w-full md:w-9/12 lg:w-11/12 xl:w-8/12 mt-10 lg:mt-12 xl:mt-16 divider"
    ></div>
    <div
      class="md:w-9/12 lg:w-11/12 xl:w-10/12 h-full col-flex lg:flex-row lg:items-stretch mt-4 xl:mt-16 mb-8 xl:mb-16 gap-6 md:gap-8 xl:gap-12"
    >
      <div
        class="w-full px-6 py-4 flex flex-col gap-2 xl:gap-6 justify-between bg-grokBlack-300 bg-opacity-5 rounded-md"
      >
        <p class="font-body font-medium text-base md:text-xl">Personal</p>
        <p class="font-body font-semibold text-2xl md:text-3xl">
          ETB 250.00 / month
        </p>
        <p class="desc-text text-xs md:text-sm leading-normal">
          For those who maybe skeptical of MemhirET and want to take a
          test-drive.
        </p>
        <div class="mt-2 flex flex-col items-start gap-2 xl:gap-6">
          <div class="flex gap-4">
            <SvgoCheck class="icon-rm-mg text-xl" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Includes test preparation guides upto 2 subjects of your choosing.
            </p>
          </div>
          <div class="flex gap-4">
            <SvgoCheck class="icon-rm-mg text-xl" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Includes pre-made study guides for upto 2 subjects of your
              choosing.
            </p>
          </div>
          <div class="hidden xl:inline-flex gap-4">
            <SvgoCheck class="icon-rm-mg text-xl" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Limited evaluations and checkups.
            </p>
          </div>
          <div class="hidden xl:inline-flex gap-4">
            <SvgoCheck class="icon-rm-mg text-xl" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Personal progress and score upgrade limited.
            </p>
          </div>
        </div>
        <MainButton
          :buttonClass="buttonClass2"
          :buttonText="buttonText1"
          :buttonLink="buttonLink1"
        />
      </div>
      <div
        class="w-full px-6 py-4 flex flex-col gap-2 xl:gap-6 justify-between bg-grokBlack-300 bg-opacity-5 rounded-md ring-2 ring-grokBlue-500"
      >
        <p class="font-body font-medium text-base md:text-xl">Personal Pro</p>
        <p class="font-body font-semibold text-2xl md:text-3xl">
          ETB 325.00 / month
        </p>
        <p class="desc-text text-xs md:text-sm leading-normal">
          For those who see the value and are commited to excelling in their
          education.
        </p>
        <div class="mt-2 flex flex-col items-start gap-2 xl:gap-6">
          <div class="flex gap-4">
            <SvgoCheck class="icon-rm-mg text-xl" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Everthing in Personal.
            </p>
          </div>
          <div class="flex gap-4">
            <SvgoCheck class="icon-rm-mg text-xl" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Unlimited personalized and engaging test preparation guides.
            </p>
          </div>
          <div class="hidden xl:inline-flex gap-4">
            <SvgoCheck class="icon-rm-mg text-xl" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Unlimited tailored study-guides.
            </p>
          </div>
          <div class="hidden xl:inline-flex gap-4">
            <SvgoCheck class="icon-rm-mg" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Science-based recall methods
            </p>
          </div>
        </div>
        <MainButton
          :buttonClass="buttonClass1"
          :buttonText="buttonText2"
          :buttonLink="buttonLink1"
        />
      </div>
      <div
        class="w-full px-6 py-4 flex flex-col gap-2 xl:gap-6 justify-between bg-grokBlack-300 bg-opacity-5 rounded-md"
      >
        <p class="font-body font-medium text-base md:text-xl">Educators</p>
        <p class="font-body font-semibold text-2xl md:text-3xl">Let's Talk</p>
        <p class="desc-text text-xs md:text-sm leading-normal">
          For organizations that want to integrate with MemhirET within their
          lesson plans.
        </p>
        <div class="mt-2 flex flex-col items-start gap-2 xl:gap-6">
          <div class="flex gap-4">
            <SvgoCheck class="icon-rm-mg" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Unlimited test-preps and study guides for your students.
            </p>
          </div>
          <div class="flex gap-4">
            <SvgoCheck class="icon-rm-mg" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Host your own study guides and plans.
            </p>
          </div>
          <div class="flex gap-4">
            <SvgoCheck class="icon-rm-mg" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Comes with its own learning management system.
            </p>
          </div>
          <div class="hidden xl:inline-flex gap-4">
            <SvgoCheck class="icon-rm-mg" filled />
            <p class="desc-text text-3xs md:text-xs xl:text-sm leading-normal">
              Integrated content management.
            </p>
          </div>
        </div>
        <MainButton
          :buttonClass="buttonClass3"
          :buttonText="buttonText3"
          :buttonLink="buttonLink3"
        />
      </div>
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
        "w-full mt-4 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
      buttonClass2:
        "w-full mt-4 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover",
      buttonClass3:
        "w-full mt-4 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover",
      buttonText1: "Let me try",
      buttonText2: "I'm ready",
      buttonText3: "Contact us",
      buttonLink1: "/grok/waiting-private",
      buttonLink3: "/grok/waiting-educator",
    };
  },
};
</script>
