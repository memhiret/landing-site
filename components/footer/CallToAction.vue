<template>
    <div
        id="get-started"
        class="md:w-full md:mb-8 responsive-px py-6 flex gap-6 md:gap-10 xl:gap-14 items-center font-body rounded-xl lg:scroll-mt-32"
    >
        <img
            src="~/assets/imgs/Showcase.png"
            class="w-1/2 basis-1/2 rounded-md"
        />
        <div
            class="basis-1/2 w-full flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-start md:items-start"
        >
            <div class="md:basis-1/2 flex flex-col md:gap-2 xl:gap-4">
                <p class="text-sm md:text-base lg:text-lg xl:text-2xl">
                    Level up
                </p>
                <p class="text-base md:text-3xl lg:text-4xl xl:text-6xl">
                    With <span class="font-bold text-grokBlue-500">GrokET</span>
                </p>
            </div>
            <div
                class="w-full flex justify-between md:justify-center md:gap-4 items-center"
            >
                <div class="basis-1/2 flex flex-col items-start gap-3 lg:gap-6">
                    <NuxtLink to="/grok/waiting-private"
                        ><SvgoAppStore
                            class="icon-rm-mg h-5 md:h-10 lg:h-12 xl:h-20 w-auto cursor-pointer"
                            filled
                            :fontControlled="false"
                    /></NuxtLink>
                    <NuxtLink to="/grok/waiting-private"
                        ><SvgoGooglePlay
                            class="icon-rm-mg h-5 md:h-10 lg:h-12 xl:h-20 w-auto cursor-pointer"
                            filled
                            :fontControlled="false"
                    /></NuxtLink>
                </div>
                <div class="basis-1/2">
                    <SvgoQR
                        class="icon-rm-mg h-auto w-auto cursor-pointer"
                        filled
                        :fontControlled="false"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
