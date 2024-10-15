<template>
  <Head>
    <Title>MemhirET | Our Story</Title>
    <Meta name="description" content="MemhirET's origin story and values." />
  </Head>
  <div class="mt-24 lg:mt-40 responsive-px py-4 col-flex">
    <NuxtLink to="/demo" class="mb-8 lg:mb-4 w-5/6 text-black text-lg">
      <div
        class="font-body flex justify-center py-2 md:py-4 bg-grokBlue-500/40 rounded-lg glow-effect"
      >
        Checkout demo here
      </div>
    </NuxtLink>
    <div
      class="lg:w-5/6 w-full xl:mt-8 flex flex-col item-start gap-6 md:gap-10"
    >
      <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
        Our Story
      </p>
      <div
        class="flex flex-col gap-4 lg:gap-10 font-body font-normal text-sm xl:text-lg xl:leading-10"
      >
        <p>
          Memhir ET is one of Ethiopia’s premier test-taking online platforms
          designed specifically for students preparing for national exams. Our
          goal is to transform education by providing an innovative, adaptive,
          and personalized learning experience for every student. Whether it’s
          real-time progress tracking, interactive lessons, study guides, or
          teacher support, Memhir ET is here to empower students on their
          academic journey.
        </p>
        <div class="flex justify-center">
          <iframe
            class="W-full md:w-1/2"
            height="315"
            src="https://www.youtube.com/embed/9yZANgWZwBE?si=oLwc-pkNO_U3Uv93"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div
      class="lg:w-5/6 w-full xl:mt-8 flex flex-col item-start gap-6 md:gap-10"
    >
      <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
        A message from our CEO
      </p>
      <div
        class="flex flex-col gap-4 lg:gap-10 font-body font-normal text-sm xl:text-lg xl:leading-10"
      >
        <p>
          At Memhir ET, we’re all about empowering schools with innovative tools
          that address all stakeholders in the ecosystem. Our platform provides
          customizable learning, real-time progress tracking, and learning
          management solutions that align with the national curriculum. With
          scalable and affordable solutions, Memhir ET helps schools offer
          high-quality education for the next generation of leaders.
        </p>
      </div>
    </div>

    <div
      class="lg:w-5/6 w-full mt-4 xl:mt-8 flex flex-col item-start gap-6 md:gap-10"
    >
      <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
        Vision
      </p>
      <div class="flex flex-col gap-4 font-body font-normal text-sm xl:text-lg">
        <p>
          To be the lead of quality education, equipping students with the
          skills, knowledge and values required to thrive in real-word
          scenarios.
        </p>
        <p>
          We envision a world where everyone has easy access to impact-driven,
          world-class education.
        </p>
      </div>
    </div>

    <div
      class="lg:w-5/6 w-full mt-4 lg:mt-10 xl:mt-20 flex flex-col md:flex-row items-start md:items-center md:gap-8 lg:gap-12"
    >
      <div
        class="md:basis-1/2 flex flex-col items-start gap-6 md:gap-10 md:justify-between"
      >
        <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
          What drives us
        </p>
        <div
          class="flex flex-col gap-4 lg:gap-10 font-body font-normal text-sm xl:text-lg xl:leading-10"
        >
          <p>
            Memhir ET's mission is making quality education accessible to
            everyone.
          </p>
          <p>
            We are committed to providing world-class and easily accessible
            education, creating a learning environment where students are
            challenged but manage to flourish and grow.
          </p>
          <p>
            We believe that education is the key to a better future, and we are
            committed to playing our role in creating a more equitable
            landscape.
          </p>
        </div>
      </div>
      <SvgoGraduation
        class="md:basis-1/2 icon-rm-mg text-13xl mobm:text-14xl md:text-16xl"
        filled
      />
    </div>

    <NuxtLink to="/demo" class="mb-8 lg:mb-4 w-5/6 text-black text-lg">
      <div
        class="font-body flex justify-center py-2 md:py-4 bg-grokBlue-500/40 rounded-lg glow-effect"
      >
        Checkout demo here
      </div>
    </NuxtLink>

    <div class="lg:w-5/6 w-full mt-10 lg:mt-28 divider"></div>
    <div
      class="lg:w-5/6 w-full mt-10 lg:mt-16 xl:mt-32 xl:mb-16 flex flex-col md:flex-row items-center gap-6 md:gap-8"
    >
      <div
        class="basis-1/2 w-full flex flex-col gap-6 md:gap-10 lg:gap-12 xl:gap-16 items-center"
      >
        <p
          class="w-full font-display font-semibold text-left text-3xl lg:text-4xl xl:text-6xl"
        >
          Careers
        </p>
        <SvgoCareers
          class="icon-rm-mg text-14xl md:text-12xl xl:text-16xl"
          filled
        />
      </div>
      <div class="basis-1/2 flex flex-col gap-8 md:gap-10">
        <p
          class="font-body font-normal text-sm xl:text-lg xl:leading-10 text-left"
        >
          We're always on the lookout for passionate individuals to join our
          ever-growing team, whether you're an experienced professional or just
          starting your career journey.<span class="hidden md:inline-block"
            >We foster a dynamic and collaborative environment where you can
            learn, grow, and make a real impact.</span
          >
        </p>
        <div class="flex gap-8 lg:gap-12 xl:gap-32 font-body text-sm">
          <MainButton
            :buttonClass="buttonClass1"
            :buttonText="buttonText1"
            :buttonLink="buttonLink1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow-effect {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

.glow-effect:hover {
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
}

.hover-effect {
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.hover-effect:hover {
  color: white;
  background-color: #007bff;
}
</style>

<script>
import MainButton from "~/components/buttons/MainButton.vue";

export default {
  components: {
    MainButton,
  },
  data() {
    return {
      buttonClass1:
        "w-28 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg bg-grokBlack-500 main-button hover:main-hover",
      buttonText1: "Careers",
      buttonLink1: "/about/careers",
    };
  },
};
</script>
