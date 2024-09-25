<script>
import FormButton from "~/components/buttons/FormButton.vue";

export default {
  components: {
    FormButton,
  },

  data() {
    return {
      buttonClass:
        "mt-4 w-10/12 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg form-button main-button hover:main-hover",
      firstname: "",
      phone: "",
      isSubmitting: false,
    };
  },
  computed: {
    buttonText() {
      return this.isSubmitting ? "Submitting..." : "Submit";
    },
  },
  methods: {
    async submitForm() {
      try {
        this.isSubmitting = true;
        const response = await fetch("https://submit-form.com/54O8197Ns", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            firstname: this.firstname,
            phone: this.phone,
          }),
        });
        if (response.ok) {
          alert(
            "You'll be contacted shortyl! Thank you for submitting your request!"
          );
          this.$router.replace("/");
        } else {
          alert("Failed to submit form!");
        }
      } catch (e) {
        alert("Error occured: ", e);
        this.firstname = "";
        this.phone = "";
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<template>
  <Head>
    <Title>MemhirET | Account Management</Title>
    <Meta name="description" content="Manage your account information" />
  </Head>

  <div class="mt-28 md:mt-32 lg:mt-44 mb-8 responsive-px py-4 col-flex">
    <div class="col-flex gap-8">
      <img
        src="~/assets/imgs/Memhir_LogoType_01-04.png"
        class="h-16 md:h-24"
        alt="MemhirET Logo"
      />
      <p class="main-font text-xl lg:tracking-wide leading-relaxed text-center">
        Request for account data deletion
      </p>
      <form class="w-full col-flex gap-4 md:gap-8" @submit.prevent="submitForm">
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
                name="phone"
                id="phone"
                v-model="phone"
                placeholder="Phone"
                class="block w-full rounded-md border-0 px-2 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                required
              />
            </div>
          </div>
        </div>
        <FormButton
          :buttonClass="buttonClass"
          :buttonText="buttonText"
          :disabled="isSubmitting"
        />
        <p
          class="w-9/12 desc-text text-sm md:text-lg lg:text-xl xl:text-2xl text-center leading-loose"
        >
          Submit your crendentials to request account data deletion.
        </p>
      </form>
    </div>
  </div>
</template>
