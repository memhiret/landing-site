<template>
  <Head>
    <Title>MemhirET | Private Educators</Title>
    <Meta name="description" content="MemhirET for private educators." />
  </Head>
  <div
    class="mt-24 md:mt-32 lg:mt-48 responsive-px py-4 md:py-6 lg:py-16 col-flex gap-8"
  >
    <div
      class="w-full md:w-11/12 xl:w-8/12 flex flex-col items-center md:flex-row-reverse md:gap-6 lg:gap-10 xl:gap-12"
    >
      <SvgoPrivate class="icon-rm-mg text-14xl md:basis-1/2" filled />
      <div class="md:basis-1/2 flex flex-col items-start gap-4 md:gap-8">
        <p
          class="font-body font-semibold text-3xl lg:text-4xl xl:text-5xl leading-relaxed lg:leading-loose xl:leading-relaxed tracking-wider"
        >
          <span class="text-grokBlue-500">MemhirET</span> for <br />Private
          Educators
        </p>
        <p
          class="font-body font-normal text-sm lg:text-base xl:text-lg leading-6 lg:leading-8 xl:leading-10"
        >
          Level up your teaching game in the classroom and beyond by integrating
          MemhirET and getting access to personalized teaching guides.
        </p>
        <MainButton
          :buttonClass="buttonClass1"
          :buttonText="buttonText1"
          :buttonLink="buttonLink1"
        />
      </div>
    </div>
    <div
      class="w-full md:w-11/12 xl:w-8/12 mt-10 lg:mt-12 xl:mt-16 divider"
    ></div>
    <div
      class="md:w-11/12 xl:w-8/12 mt-4 lg:mt-12 xl:mt-16 md:mt-8 col-flex md:gap-6 lg:gap-12 xl:gap-24"
    >
      <p
        class="font-body font-semibold text-center text-xl md:text-3xl xl:text-4xl leading-10 tracking-wider"
      >
        Leverage personalized & interactive learning.
      </p>
      <div class="flex flex-col items-center md:flex-row md:gap-10 lg:gap-12">
        <SvgoInteractive
          class="md:basis-1/2 icon-rm-mg text-14xl xl:text-16xl"
          filled
        />
        <div
          class="md:basis-1/2 flex flex-col items-start gap-2 md:gap-6 lg:gap-10 xl:gap-12"
        >
          <p
            class="font-body font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl"
          >
            Tailored and Engaging
          </p>
          <p
            class="font-body font-normal text-sm lg:text-base xl:text-lg leading-6 lg:leading-8 xl:leading-10"
          >
            Creating an environment that's tailored to individual students'
            needs, incorporating active and engaging learning techniques is the
            way towards knowledge retention.
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-full md:w-11/12 xl:w-8/12 mt-10 lg:mt-12 xl:mt-16 divider"
    ></div>
    <div
      class="md:w-11/12 xl:w-8/12 mt-4 md:mt-8 lg:mt-12 xl:mt-16 col-flex md:gap-6 lg:gap-12 xl:gap-24"
    >
      <p
        class="font-body font-semibold text-center text-xl md:text-3xl xl:text-4xl leading-10 tracking-wider"
      >
        Made for active learning
      </p>
      <div class="flex flex-col items-center md:flex-row-reverse md:gap-10">
        <SvgoActive
          class="md:basis-1/2 icon-rm-mg text-14xl xl:text-16xl"
          filled
        />
        <div class="md:basis-1/2 flex flex-col items-start gap-2 md:gap-6">
          <p
            class="font-body font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl"
          >
            Active Recall and Spaced Repititions
          </p>
          <p
            class="font-body font-normal text-sm lg:text-base xl:text-lg leading-6 lg:leading-8 xl:leading-10"
          >
            Integrate science-based teaching and testing methods into your
            lesson plan, leveling up student's cognitive abilities both in the
            classroom and outside.
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-full md:w-11/12 xl:w-8/12 mt-10 lg:mt-12 xl:mt-16 divider"
    ></div>
    <div
      class="md:w-11/12 mt-4 lg:mt-12 xl:mt-16 md:mt-8 col-flex md:gap-6 lg:gap-12 xl:gap-24"
    >
      <p
        class="font-body font-semibold text-center text-xl md:text-3xl xl:text-4xl leading-10 tracking-wider"
      >
        With it's own management
      </p>
      <div class="flex flex-col items-center md:flex-row md:gap-10 lg:gap-12">
        <SvgoSystem class="md:basis-1/2 icon-rm-mg text-14xl" filled />
        <div class="md:basis-1/2 flex flex-col items-start gap-2 md:gap-6">
          <p
            class="font-body font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl"
          >
            MemhirET's learning management system
          </p>
          <p
            class="font-body font-normal text-sm lg:text-base xl:text-lg leading-6 lg:leading-8 xl:leading-10"
          >
            Comes with it's own learning management system, helping teachers and
            schools couple their own content along side MemhirET and provide a
            seamless and integrated learning experience.
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-full md:w-11/12 xl:w-8/12 mt-10 lg:mt-12 xl:mt-16 divider"
    ></div>
    <div
      class="md:w-11/12 xl:w-8/12 mt-4 md:mt-8 lg:mt-12 xl:mt-16 mb-4 col-flex gap-10 md:gap-4 xl:gap-14"
    >
      <p
        class="md:w-3/4 font-body font-semibold text-center text-2xl md:text-3xl xl:text-4xl leading-10 md:leading-relaxed xl:leading-loose tracking-wider"
      >
        Get your classroom up and running with
        <span class="text-grokBlue-500">MemhirET</span>
      </p>
      <div class="md:w-full col-flex md:flex-row gap-10 md:gap-6 xl:gap-12">
        <SvgoClassroom
          class="md:basis-1/2 icon-rm-mg text-14xl xl:text-16xl"
          filled
        />
        <div
          class="md:basis-1/2 w-full flex flex-col items-center md:items-start md:gap-8"
        >
          <p
            class="hidden md:inline-block font-body font-normal text-sm lg:text-base xl:text-lg leading-6 lg:leading-8 xl:leading-10"
          >
            Integrate MemhirET's personalized study and test preparation guides
            into your classroom and give your students the edge.
          </p>
          <MainButton
            :buttonClass="buttonClass2"
            :buttonText="buttonText2"
            :buttonLink="buttonLink2"
          />
        </div>
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
        "mt-4 w-36 md:w-44 xl:w-48 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg xl:text-xl main-button hover:main-hover",
      buttonText1: "Get a Quote",
      buttonLink1: "/memhir/waiting-educator",
      buttonClass2:
        "w-full md:w-44 xl:w-48 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg xl:text-xl main-button hover:main-hover",
      buttonText2: "Get a Quote",
      buttonLink2: "/memhir/waiting-educator",
    };
  },
};
</script>
