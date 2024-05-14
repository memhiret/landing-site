<template>
  <head>
    <title>MemhirET - Signup Waiting</title>
  </head>
  <div class="mt-28 md:mt-32 lg:mt-44 mb-8 responsive-px py-4 col-flex">
    <div class="xl:my-16 col-flex lg:flex-row xl:w-11/12 gap-8 xl:gap-16">
      <div class="md:basis-1/2 col-flex gap-4">
        <img
          src="~/assets/imgs/Memhir_LogoType_01-04.png"
          class="mb-4 md:mb-8 h-16 md:h-24"
          alt="MemhirET Logo"
        />
        <p
          class="md:mb-2 font-body font-medium text-center responsive-heading lg:text-4xl xl:text-5xl lg:tracking-wider"
        >
          No More Test Anxiety
        </p>
        <p
          class="w-11/12 md:w-3/4 lg:w-9/12 font-body font-normal text-center text-xs md:text-sm xl:text-lg lg:tracking-wide leading-relaxed"
        >
          Personalized study paths and test preparation guides, helping you ace
          your next test.
        </p>
        <form
          class="w-full col-flex gap-4 md:gap-8"
          action="/"
          method="POST"
          netlify
        >
          <input
            type="hidden"
            name="_redirect"
            value="https://memhiret.netlify.app"
          />
          <div
            class="w-10/12 flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-8"
          >
            <div class="w-full">
              <div class="mt-2 xl:mt-3">
                <input
                  type="text"
                  name="firstname-waiting"
                  id="firstname-waiting"
                  placeholder="First Name"
                  class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                  required
                />
              </div>
            </div>
            <div class="w-full">
              <div class="mt-2 xl:mt-3">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                  required
                />
              </div>
            </div>
          </div>
          <FormButton :buttonClass="buttonClass" :buttonText="buttonText" />
          <MainButton
            :buttonClass="buttonClassMain"
            :buttonText="buttonTextMain"
            :buttonLink="buttonLinkMain"
          />
          <p
            class="lg:hidden desc-text text-base md:text-lg lg:text-xl xl:text-2xl text-center leading-loose"
          >
            Get notified when we're ready.
          </p>
        </form>
      </div>
      <img
        src="~/assets/imgs/Screens.png"
        class="lg:basis-1/2 lg:w-1/2 lg:h-full rounded-md"
        alt="Mobile App Showcase"
      />
    </div>
  </div>
</template>

<script>
import FormButton from "~/components/buttons/FormButton.vue";
import MainButton from "~/components/buttons/MainButton.vue";

export default {
  components: {
    FormButton,
    MainButton,
  },
  data() {
    return {
      buttonClass:
        "mt-4 w-10/12 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg form-button main-button hover:main-hover",
      buttonText: "Join Waitlist",
      buttonClassMain:
        "mt-4 mb-4 w-10/12 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover",
      buttonTextMain: "For Educators",
      buttonLinkMain: "/memhir/waiting-educator",
    };
  },
};
</script>
