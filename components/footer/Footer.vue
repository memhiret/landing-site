<template>
    <div class="divider md:my-8"></div>
    <div class="flex flex-col items-center">
        <FooterCTAMobile />
        <div class="w-full flex py-4 responsive-px bg-grokBlack-500">
            <div class="basis-1/3 mr-8">
                <div class="gap-2 md:gap-3 flex items-center">
                    <SvgoLogo class="icon-rm-mg text-6xl md:text-7xl lg:text-8xl  text-grokWhite-500" />
                    <div>
                        <div class="text-white font-display text-sm md:text-base">iLearn ET</div>
                        <p class="text-grokWhite-500 font-body text-3xs md:text-sm">Moving the Needle</p>
                    </div>
                </div>
                <div class="md:w-10/12 flex justify-between mt-4 text-grokWhite-500">
                    <SvgoFacebook class="icon-rm-mg text-lg md:text-2xl" />
                    <SvgoInstagram class="icon-rm-mg text-lg md:text-2xl" />
                    <SvgoLinkedin class="icon-rm-mg text-lg md:text-2xl" />
                    <SvgoTwitter class="icon-rm-mg text-lg md:text-2xl" />
                    <SvgoYoutube class="icon-rm-mg text-lg md:text-2xl" />
                </div>
                <div class="flex flex-col mt-5 gap-2 md:gap-4">
                    <div class="flex gap-2 items-center">
                        <SvgoLocation class="icon-rm-mg text-base md:text-xl text-grokWhite-500 text-opacity-50" />
                        <p class="text-grokWhite-500 text-3xs md:text-xs">Addis Ababa, Ethiopia</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <SvgoEmail class="icon-rm-mg text-base md:text-xl text-grokWhite-500 text-opacity-50" />
                        <p class="text-grokWhite-500 text-3xs md:text-xs">support@ilearn.et</p>

                    </div>
                    <div class="flex gap-2 items-center">
                        <SvgoCall class="icon-rm-mg text-base md:text-xl text-grokWhite-500 text-opacity-50" />
                        <p class="text-grokWhite-500 text-3xs md:text-xs">+251 - 912 - 345678</p>

                    </div>
                </div>
            </div>
            <div class="basis-2/3 mt-2 flex flex-col md:flex-row gap-4 md:gap-8">
                <div class="flex gap-2 md:gap-8">
                    <div class="flex flex-col gap-2 md:gap-4">
                        <p class="text-grokWhite-500 text-xs">Download</p>
                        <div class="flex flex-col items-start gap-2">
                            <SvgoAppStore class="icon-rm-mg h-5 md:h-7 w-auto" filled :fontControlled="false" />
                            <SvgoGooglePlay class="icon-rm-mg h-5 md:h-7 w-auto" filled :fontControlled="false" />
                        </div>
                    </div>
                    <div class="hidden md:inline-flex md:basis-1/2 flex-col gap-2 md:gap-4">
                        <p class="text-grokWhite-500 text-xs">Explore</p>
                        <ul class="flex flex-col gap-1 md:gap-2 text-2xs text-grokWhite-500 text-opacity-60">
                            <li>How GrokET Works</li>
                            <li>iLearn for Private Schools</li>
                            <li>iLearn for Government Schools</li>
                        </ul>
                    </div>
                    <div class="md:basis-1/2 flex flex-col gap-2 md:gap-4">
                        <p class="text-grokWhite-500 text-xs">About Us</p>
                        <ul class="flex flex-col gap-1 md:gap-2 text-2xs text-grokWhite-500 text-opacity-60">
                            <li>Who & Why</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                <div class="flex md:flex-col gap-2 md:gap-6">
                    <div class="flex flex-col gap-2 md:gap-4">
                        <p class="text-grokWhite-500 text-xs">Help</p>
                        <ul class="flex flex-col gap-1 md:gap-2 text-2xs text-grokWhite-500 text-opacity-60">
                            <li>Live Chat</li>
                            <li>Documentation</li>
                        </ul>
                    </div>
                    <div class="basis-1/2 flex flex-col gap-2 text-3xs text-grokWhite-500 text-opacity-60">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>

                </div>
                <div class="md:hidden flex gap-1 text-3xs text-grokWhite-500 text-opacity-60">
                    <p class="basis-1/2">iLearn ET P.L.C.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>