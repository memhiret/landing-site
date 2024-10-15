<template>
  <Head>
    <Title>MemhirET | Prodcut Demo</Title>
    <Meta name="description" content="MemhirET's STP Demo" />
  </Head>
  <div class="mt-24 lg:mt-40 responsive-px py-4 col-flex">
    <div
      class="lg:w-5/6 w-full xl:mt-8 flex flex-col item-start gap-6 md:gap-10"
    >
      <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">
        A Sneak Peak of STP
      </p>
      <div
        class="flex flex-col gap-4 lg:gap-10 font-body font-normal text-sm xl:text-lg xl:leading-10"
      >
        <p>
          Take a stroll into how MemhirET's STP functions. Check out our quick
          demo video showcasing two key features designed to help students excel
          in their exams. You'll see how our personalized test paths and
          comprehensive study guides make learning more focused, efficient, and
          enjoyable. Whether it's mastering tough topics or tracking progress,
          our platform is built to support students every step of the way.
        </p>
        <div class="flex justify-center">
          <iframe
            class="W-full md:w-9/12"
            height="315 md:h-450"
            src="https://www.youtube.com/embed/tSTxIDLmX0s?si=kyb4FpHTD0cALnZn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-14">
    <FooterCallToAction />
  </div>
</template>
