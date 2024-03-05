<template>
    <div class="mt-28 md:mt-32 lg:mt-40 xl:mt-44 responsive-px py-4 col-flex">
        <div class="flex flex-col items-start gap-2">
            <p
                class="font-body font-semibold text-4xl lg:text-5xl xl:text-6xl leading-normal"
            >
                <span class="text-grokBlue-500">Simple</span> and
                <span class="text-grokBlue-500">Straighforward</span> Pricing
            </p>
            <p
                class="md:w-3/4 lg:w-7/12 xl:w-1/2 desc-text text-sm lg:text-base xl:text-xl leading-loose"
            >
                Join students and educators.
            </p>
        </div>
        <div
            class="w-full md:w-11/12 xl:w-9/12 mt-10 lg:mt-12 xl:mt-16 divider"
        ></div>
        <div class="col-flex mt-4 gap-6">
            <div
                class="px-6 py-4 flex flex-col gap-2 items-start bg-grokBlack-300 bg-opacity-5 rounded-md"
            >
                <p class="font-body font-medium text-base">Personal</p>
                <p class="font-body font-semibold text-2xl">
                    ETB 250.00 / month
                </p>
                <p class="desc-text text-xs leading-normal">
                    For those who maybe skeptical of GrokET and want to take a
                    test-drive.
                </p>
                <div class="mt-2 flex flex-col items-start gap-2">
                    <div class="flex gap-4">
                        <SvgoCheck class="icon-rm-mg" filled />
                        <p class="desc-text text-3xs leading-normal">
                            Includes test preparation guides upto 2 subjects of
                            your choosing.
                        </p>
                    </div>
                    <div class="flex gap-4">
                        <SvgoCheck class="icon-rm-mg" filled />
                        <p class="desc-text text-3xs leading-normal">
                            Includes pre-made study guides for upto 2 subjects
                            of your choosing.
                        </p>
                    </div>
                </div>
                <MainButton
                    :buttonClass="buttonClass1"
                    :buttonText="buttonText1"
                    :buttonLink="buttonLink1"
                />
            </div>
            <div
                class="px-6 py-4 flex flex-col gap-2 items-start bg-grokBlack-300 bg-opacity-5 rounded-md"
            >
                <p class="font-body font-medium text-base">Personal Pro</p>
                <p class="font-body font-semibold text-2xl">
                    ETB 325.00 / month
                </p>
                <p class="desc-text text-xs leading-normal">
                    For those who see the value and are commited to excelling in
                    their education.
                </p>
                <div class="mt-2 flex flex-col items-start gap-2">
                    <div class="flex gap-4">
                        <SvgoCheck class="icon-rm-mg" filled />
                        <p class="desc-text text-3xs leading-normal">
                            Unlimited personalized and engaging test preparation
                            guides.
                        </p>
                    </div>
                    <div class="flex gap-4">
                        <SvgoCheck class="icon-rm-mg" filled />
                        <p class="desc-text text-3xs leading-normal">
                            Unlimited tailored study-guides.
                        </p>
                    </div>
                </div>
                <MainButton
                    :buttonClass="buttonClass1"
                    :buttonText="buttonText2"
                    :buttonLink="buttonLink1"
                />
            </div>
            <div
                class="px-6 py-4 flex flex-col gap-2 items-start bg-grokBlack-300 bg-opacity-5 rounded-md"
            >
                <p class="font-body font-medium text-base">Educators</p>
                <p class="font-body font-semibold text-2xl">Let's Talk</p>
                <p class="desc-text text-xs leading-normal">
                    For organizations that want to integrate with GrokET
                </p>
                <div class="mt-2 flex flex-col items-start gap-2">
                    <div class="flex gap-4">
                        <SvgoCheck class="icon-rm-mg" filled />
                        <p class="desc-text text-3xs leading-normal">
                            Unlimited test-preps and study guides for your
                            students.
                        </p>
                    </div>
                    <div class="flex gap-4">
                        <SvgoCheck class="icon-rm-mg" filled />
                        <p class="desc-text text-3xs leading-normal">
                            Host your own study guides and plans.
                        </p>
                    </div>
                    <div class="flex gap-4">
                        <SvgoCheck class="icon-rm-mg" filled />
                        <p class="desc-text text-3xs leading-normal">
                            Comes with its own learning management system.
                        </p>
                    </div>
                </div>
                <MainButton
                    :buttonClass="buttonClass1"
                    :buttonText="buttonText3"
                    :buttonLink="buttonLink3"
                />
            </div>
        </div>
    </div>
</template>

<script>
import MainButton from "~/components/buttons/MainButton.vue";

export default {
    components: {
        MainButton,
    },
    data() {
        return {
            buttonClass1:
                "w-full mt-4 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
            buttonText1: "Let me try",
            buttonText2: "I'm ready",
            buttonText3: "Contact us",
            buttonLink1: "/grok/waiting-private",
            buttonLink3: "/grok/waiting-educator",
        };
    },
};
</script>
