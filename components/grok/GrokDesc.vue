<template>
  <div
    id="grok-product"
    class="w-full col-flex gap-6 lg:gap-12 bg-grokBlack-500 py-6 lg:py-12 responsive-px bg-opacity-5 scroll-mt-24 lg:scroll-mt-32"
  >
    <div
      class="md:w-3/4 lg:w-1/2 flex flex-col gap-2 md:gap-4 lg:gap-8 items-center"
    >
      <p class="main-font font-medium text-grokBlue-700 responsive-heading">
        MemhirET
      </p>
      <p class="desc-text responsive-description text-center">
        Leveraging data-driven insights and proven learning science, MemhirET
        personalizes your path to standardized exam mastery.
      </p>
    </div>
    <div class="md:w-9/12 col-flex gap-12 lg:gap-16">
      <GrokFeat :featureHead="featureHead1" :featureDesc="featureDesc1">
        <template #svg-picture>
          <SvgoTest
            class="icon-rm-mg text-9xl md:text-10xl lg:text-12xl xl:text-14xl"
            filled
          />
        </template>
      </GrokFeat>
      <GrokFeat
        :featureHead="featureHead2"
        :featureDesc="featureDesc2"
        class="md:flex-row-reverse"
      >
        <template #svg-picture>
          <SvgoExams
            class="icon-rm-mg text-9xl md:text-10xl lg:text-12xl xl:text-14xl"
            filled
          />
        </template>
      </GrokFeat>
      <GrokFeat :featureHead="featureHead3" :featureDesc="featureDesc3">
        <template #svg-picture>
          <SvgoSorting
            class="icon-rm-mg text-9xl md:text-10xl lg:text-12xl xl:text-14xl"
            filled
          />
        </template>
      </GrokFeat>
    </div>
  </div>
</template>

<script>
import GrokFeat from "~/components/grok/GrokFeat.vue";

export default {
  components: {
    GrokFeat,
  },
  data() {
    return {
      featureHead1: "Personalized and Tailored Paths",
      featureHead2: "Engaging and Interactive",
      featureHead3: "Science-Based Methods",
      featureDesc1:
        "Say goodbye to one-size-fits-all: MemhirET analyzes your strengths and weaknesses, building a personalized blueprint for exam success.",
      featureDesc2:
        "MemhirET keeps you glued with interactive tools, bite-sized content, and interactive methods that fire up your brain and make learning stick.",
      featureDesc3:
        "Remember more, with less effort. MemhirET leverages cognitive science to build lasting memory bridges for effortless recall.",
    };
  },
};
</script>
