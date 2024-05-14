<template>
  <div class="flex flex-col items-center">
    <div class="w-full flex py-4 lg:py-8 responsive-px bg-grokBlack-500">
      <div class="basis-1/2 md:basis-1/3 lg:basis-1/3 mr-8 lg:mr-0">
        <div class="gap-2 md:gap-3 flex items-center">
          <img
            src="~/assets/imgs/Memhir_LogoType_01-05.png"
            class="h-6 md:h-10"
            alt="MemhirET Logo"
          />
          <div>
            <div
              class="text-white font-display text-sm md:text-base lg:text-xl"
            >
              MemhirET
            </div>
            <p
              class="text-grokWhite-500 font-body text-3xs md:text-sm lg:text-base"
            >
              Moving the Needle
            </p>
          </div>
        </div>
        <div
          class="md:w-10/12 lg:w-9/12 flex justify-between mt-4 text-grokWhite-500"
        >
          <SvgoFacebook class="icon-rm-mg text-lg md:text-2xl lg:text-3xl" />
          <SvgoInstagram class="icon-rm-mg text-lg md:text-2xl lg:text-3xl" />
          <SvgoLinkedin class="icon-rm-mg text-lg md:text-2xl lg:text-3xl" />
          <SvgoTwitter class="icon-rm-mg text-lg md:text-2xl lg:text-3xl" />
          <SvgoYoutube class="icon-rm-mg text-lg md:text-2xl lg:text-3xl" />
        </div>
        <div class="flex flex-col mt-5 gap-2 md:gap-4">
          <div class="flex gap-2 items-center">
            <SvgoLocation
              class="icon-rm-mg text-base md:text-xl lg:text-2xl text-grokWhite-500 text-opacity-50"
            />
            <p class="text-grokWhite-500 text-3xs md:text-xs lg:text-sm">
              Addis Ababa, Ethiopia
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <SvgoEmail
              class="icon-rm-mg text-base md:text-xl lg:text-2xl text-grokWhite-500 text-opacity-50"
            />
            <p class="text-grokWhite-500 text-3xs md:text-xs lg:text-sm">
              support@memhiret.com
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <SvgoCall
              class="icon-rm-mg text-base md:text-xl lg:text-2xl text-grokWhite-500 text-opacity-50"
            />
            <p class="text-grokWhite-500 text-3xs md:text-xs lg:text-sm">
              +251 - 912 - 345678
            </p>
          </div>
        </div>
      </div>
      <div
        class="basis-1/2 md:basis-2/3 lg:basis-2/3 mt-2 flex flex-col md:flex-row gap-4 md:gap-8"
      >
        <div class="lg:basis-4/5 flex gap-6 md:gap-10">
          <div class="basis-1/2 flex flex-col gap-2 md:gap-4">
            <p class="text-grokWhite-500 text-xs lg:text-base">Download</p>
            <div class="flex flex-col items-start gap-2 lg:gap-6">
              <SvgoAppStore
                class="icon-rm-mg h-5 md:h-7 lg:h-10 xl:h-12 w-auto cursor-pointer"
                filled
                :fontControlled="false"
              />
              <SvgoGooglePlay
                class="icon-rm-mg h-5 md:h-7 lg:h-10 xl:h-12 w-auto cursor-pointer"
                filled
                :fontControlled="false"
              />
            </div>
          </div>
          <div
            class="basis-1/2 md:basis-1/3 lg:basis-2/5 flex flex-col gap-2 md:gap-4"
          >
            <p class="text-grokWhite-500 text-xs lg:text-base">Company</p>
            <ul
              class="flex flex-col gap-1 md:gap-2 lg:gap-4 text-2xs lg:text-sm text-grokWhite-500 text-opacity-60"
            >
              <li class="hover:text-button-hover">
                <NuxtLink to="/about/story">Our Story</NuxtLink>
              </li>
              <li class="hover:text-button-hover">
                <NuxtLink to="/about/careers">Careers</NuxtLink>
              </li>
            </ul>
          </div>
          <div
            class="hidden md:inline-flex md:basis-2/3 lg:basis-3/5 flex-col gap-2 md:gap-4"
          >
            <p class="text-grokWhite-500 text-xs lg:text-base">Explore</p>
            <ul
              class="flex flex-col gap-1 md:gap-2 lg:gap-4 text-2xs lg:text-sm text-grokWhite-500 text-opacity-60"
            >
              <li class="hover:text-button-hover">
                <NuxtLink to="/explore/private">For Private Schools</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex md:flex-col gap-3 md:gap-6">
          <div class="basis-1/2 md:basis-1/4 flex flex-col gap-2 md:gap-4">
            <p class="text-grokWhite-500 text-xs lg:text-base">Help</p>
            <ul
              class="flex flex-col gap-1 md:gap-2 lg:gap-4 text-2xs lg:text-sm text-grokWhite-500 text-opacity-60"
            >
              <li class="hover:text-button-hover">
                <NuxtLink to="/help/documentation">Documentation</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
