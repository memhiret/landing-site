<script>
import { z } from "zod";
import FormButton from "~/components/buttons/FormButton.vue";
import MainButton from "~/components/buttons/MainButton.vue";

export default {
  components: {
    FormButton,
    MainButton,
  },
  data() {
    return {
      isSubmitting: false,
      buttonClassMain:
        "mt-4 mb-4 w-10/12 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover",
      buttonTextMain: "For Educators",
      buttonLinkMain: "/waiting-educator",
      firstname: "",
      email: "",
      phone: "",
      apiUrl: "https://test-stp.memhiret.com/api/v1",
    };
  },
  computed: {
    buttonText() {
      return this.isSubmitting ? "Submitting..." : "Join";
    },
    buttonClass() {
      return this.isSubmitting
        ? "mt-4 w-10/12 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg form-button main-button hover:main-hover opacity-50"
        : "mt-4 w-10/12 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg form-button main-button hover:main-hover";
    },
  },
  methods: {
    validateForm() {
      const schema = z.object({
        firstname: z
          .string()
          .min(2, "First name must be at least 2 characters")
          .max(24, "First name must be at most 24 characters"),
        email: z.string().email("Invalid email address"),
        phone: z
          .string()
          .regex(
            /^(?:\+2519\d{8}|\+2517\d{8}|09\d{8}|07\d{8})$/,
            "Invalid phone number"
          ),
      });

      try {
        schema.parse({
          firstname: this.firstname,
          email: this.email,
          phone: this.phone,
        });
        this.errors = {};
        return true;
      } catch (e) {
        const errorMessages = e.errors.map((err) => err.message).join("\n");
        alert(errorMessages);
        return false;
      }
    },
    resetForm() {
      this.firstname = "";
      this.email = "";
      this.phone = "";
      return;
    },
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }

      try {
        this.isSubmitting = true;
        const response = await fetch(`${this.apiUrl}/user/early-access`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            first_name: this.firstname,
            email: this.email,
            phone: this.phone,
          }),
        });

        if (response.status === 201) {
          alert("You'll be notified soon! Thank you for signing up!");
          this.resetForm();
          this.$router.replace("/");
        } else {
          alert("Failed to submit form!");
          return;
        }
      } catch (e) {
        alert("Error occured: ", e);
        this.resetForm();
        return;
      } finally {
        this.isSubmitting = false;
        return;
      }
    },
  },
};
</script>

<template>
  <Head>
    <Title>MemhirET | Waiting List - Students</Title>
    <Meta name="description" content="Waiting list for students." />
  </Head>
  <div class="mt-28 md:mt-32 lg:mt-44 mb-8 responsive-px py-4 col-flex">
    <div class="xl:my-16 col-flex lg:flex-row xl:w-11/12 gap-8 xl:gap-16">
      <div class="md:basis-1/2 col-flex gap-6">
        <img
          src="~/assets/imgs/Memhir_LogoType_01-04.png"
          class="h-16 md:h-24"
          alt="MemhirET Logo"
        />
        <p
          class="md:mb-2 main-font lowercase font-medium text-center responsive-heading lg:text-4xl xl:text-5xl lg:tracking-wider"
        >
          Pure Test-Taking
          <span
            class="inline-block mt-3 md:mt-8 p-2 md:p-4 rounded-md bg-grokBlue-500 text-grokWhite-500"
            >Mastery</span
          >
        </p>
        <p
          class="w-11/12 md:w-3/4 lg:w-9/12 font-body font-normal text-center text-xs md:text-sm xl:text-lg lg:tracking-wide leading-relaxed"
        >
          Personalized study paths and test preparation guides, helping you ace
          your next test.
        </p>
        <form
          class="w-full col-flex gap-4 md:gap-8"
          @submit.prevent="submitForm"
        >
          <div
            class="w-10/12 flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-8"
          >
            <div class="w-full">
              <div class="mt-2 xl:mt-3">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  v-model="firstname"
                  placeholder="First Name"
                  class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                  minlength="2"
                  maxlength="24"
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
                  v-model="email"
                  placeholder="Email"
                  class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                  required
                />
              </div>
            </div>
            <div class="w-full">
              <div class="mt-2 xl:mt-3">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  v-model="phone"
                  placeholder="Phone Number"
                  class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                  required
                />
              </div>
            </div>
          </div>
          <FormButton
            :buttonClass="buttonClass"
            :buttonText="buttonText"
            :isSubmitting="isSubmitting"
          />
          <MainButton
            :buttonClass="buttonClassMain"
            :buttonText="buttonTextMain"
            :buttonLink="buttonLinkMain"
          />
          <p
            class="lg:hidden desc-text text-base md:text-lg lg:text-xl xl:text-2xl text-center leading-loose"
          >
            Get early access
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
