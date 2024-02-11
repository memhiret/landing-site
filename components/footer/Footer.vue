<template>
    <div class="divider"></div>
    <div class="relative">
        <FooterCTAMobile />
        <FooterCTA />
        <div class="flex py-4 px-4 bg-grokBlack-500">
            <div class="w-1/2 mr-8">
                <div class="gap-2 md:gap-3 flex items-center">
                    <SvgoLogo class="icon-rm-mg text-6xl md:text-7xl lg:text-8xl  text-grokWhite-500" />
                    <div class="">
                        <div class="text-white font-display text-sm">iLearn ET</div>
                        <p class="text-grokWhite-500 font-body text-3xs">Moving the Needle</p>
                    </div>
                </div>
                <div class="flex justify-between mt-4 text-grokWhite-500">
                    <SvgoFacebook class="icon-rm-mg text-lg" />
                    <SvgoInstagram class="icon-rm-mg text-lg" />
                    <SvgoLinkedin class="icon-rm-mg text-lg" />
                    <SvgoTwitter class="icon-rm-mg text-lg" />
                    <SvgoYoutube class="icon-rm-mg text-lg" />
                </div>
                <div class="flex flex-col mt-5 gap-2">
                    <div class="flex gap-2 items-center">
                        <SvgoLocation class="icon-rm-mg text-md text-grokWhite-500 text-opacity-50" />
                        <p class="text-grokWhite-500 text-3xs">Addis Ababa, Ethiopia</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <SvgoEmail class="icon-rm-mg text-md text-grokWhite-500 text-opacity-50" />
                        <p class="text-grokWhite-500 text-3xs">support@ilearn.et</p>

                    </div>
                    <div class="flex gap-2 items-center">
                        <SvgoCall class="icon-rm-mg text-md text-grokWhite-500 text-opacity-50" />
                        <p class="text-grokWhite-500 text-3xs">+251 - 912 - 345678</p>

                    </div>
                </div>
            </div>
            <div class="w-1/2 mt-2 flex flex-col gap-4">
                <div class="flex gap-2">
                    <div class="basis-1/2 flex flex-col gap-2">
                        <p class="text-grokWhite-500 text-xs">Download</p>
                        <div class="flex flex-col items-start gap-2">
                            <SvgoAppStore class="icon-rm-mg h-5 w-auto" filled :fontControlled="false" />
                            <SvgoGooglePlay class="icon-rm-mg h-5 w-auto" filled :fontControlled="false" />
                        </div>
                    </div>
                    <div class="basis-1/2 flex flex-col gap-2">
                        <p class="text-grokWhite-500 text-xs">About Us</p>
                        <ul class="flex flex-col gap-1 text-2xs text-grokWhite-500 text-opacity-60">
                            <li>Who & Why</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                <div class="flex gap-2">
                    <div class="basis-1/2 flex flex-col gap-2">
                        <p class="text-grokWhite-500 text-xs">Help</p>
                        <ul class="flex flex-col gap-1 text-2xs text-grokWhite-500 text-opacity-60">
                            <li>Live Chat</li>
                            <li>Documentation</li>
                        </ul>
                    </div>
                    <div class="basis-1/2 flex flex-col gap-2 text-3xs text-grokWhite-500 text-opacity-60">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>

                </div>
                <div class="flex gap-1 text-3xs text-grokWhite-500 text-opacity-60">
                    <p class="basis-1/2">iLearn ET P.L.C.</p>
                </div>

            </div>

        </div>
    </div>
</template>

<script>

</script>