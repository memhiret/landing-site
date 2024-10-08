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
      isSubmitting: false,
      buttonClassMain:
        "mt-4 mb-4 w-10/12 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover",
      buttonTextMain: "For Students",
      buttonLinkMain: "/waiting-private",
      firstname: "",
      lastname: "",
      email: "",
      organization: "",
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
        lastname: z
          .string()
          .min(2, "Last name must be at least 2 characters")
          .max(24, "Last name must be at most 24 characters"),
        email: z.string().email("Invalid email address"),
        organization: z.string().nonempty("Organization is required"),
      });

      try {
        schema.parse({
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          organization: this.organization,
        });
        return true;
      } catch (e) {
        const errorMessages = e.errors.map((err) => err.message).join("\n");
        alert(errorMessages);
        return false;
      }
    },
    resetForm() {
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.organization = "";
      return;
    },
    async submitForm() {
      try {
        const response = await fetch("https://submit-form.com/tZXD6hvP3", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            organization: this.organization,
          }),
        });
        if (response.ok) {
          alert("You'll be notified when we launch! Thank you for signing up!");
          this.$router.replace("/");
        } else {
          alert("Failed to submit form!");
          this.resetForm();
        }
      } catch (e) {
        alert("Error occured: ", e);
        this.resetForm();
      }
    },
  },
};
</script>

<template>
  <Head>
    <Title>MemhirET | Waiting List - Educators</Title>
    <Meta name="description" content="Waiting list for educators." />
  </Head>
  <div class="mt-28 md:mt-32 lg:mt-44 mb-8 responsive-px py-4 col-flex">
    <div
      class="xl:my-16 col-flex lg:flex-row lg:items-center xl:w-11/12 gap-8 xl:gap-16"
    >
      <div class="md:basis-1/2 col-flex gap-4">
        <img
          src="~/assets/imgs/Memhir_LogoType_01-04.png"
          class="mb-4 md:mb-8 h-16 md:h-24"
          alt="MemhirET Logo"
        />
        <p
          class="md:mb-2 main-font font-medium text-center responsive-heading lg:text-4xl xl:text-5xl lg:tracking-wider"
        >
          Get your classroom running
        </p>
        <p
          class="w-11/12 md:w-1/2 lg:w-9/12 font-body font-normal text-center text-xs md:text-sm xl:text-lg lg:tracking-wide leading-relaxed xl:leading-loose"
        >
          Level up your teaching game in the classroom by integrating MemhirET
          into your workflow.
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
                  name="firstname-e"
                  id="firstname-e"
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
                  name="lastname-e"
                  id="lastname-e"
                  v-model="lastname"
                  placeholder="Last Name"
                  class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                  minlength="2"
                  maxlength="24"
                  required
                />
              </div>
            </div>
          </div>
          <div
            class="w-10/12 flex flex-col md:flex-row md:items-center items-start gap-4 md:gap-8"
          >
            <div class="w-full">
              <div class="mt-2 xl:mt-3">
                <input
                  type="email"
                  name="email-e"
                  id="email-e"
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
                  type="text"
                  name="org-e"
                  id="org-e"
                  v-model="organization"
                  placeholder="Organization"
                  class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                  minlength="2"
                  maxlength="32"
                  required
                />
              </div>
            </div>
          </div>
          <FormButton :buttonClass="buttonClass" :buttonText="buttonText" />
        </form>
        <MainButton
          :buttonClass="buttonClassMain"
          :buttonText="buttonTextMain"
          :buttonLink="buttonLinkMain"
        />
      </div>
      <img
        src="~/assets/imgs/Screens.png"
        class="hidden lg:inline-block lg:basis-1/2 lg:w-1/2 lg:h-full rounded-md"
        alt="Mobile App Showcase"
      />
    </div>
  </div>
</template>
