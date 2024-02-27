<template>
    <div class="mt-24 md:mt-32 responsive-px py-4 col-flex">
        <div class="w-full md:w-11/12 flex flex-col md:flex-row-reverse md:gap-6 items-start">
            <SvgoPrivate class="icon-rm-mg text-14xl md:basis-1/2" filled />
            <div class="md:basis-1/2 flex flex-col items-start gap-4 md:gap-8">
                <p class="font-body font-semibold text-3xl leading-10 tracking-wider"><span
                        class="text-grokBlue-500">GrokET</span> for <br>Private Educators</p>
                <p class="font-body font-normal text-sm leading-6">Level up your teaching game in the classroom and beyond
                    by
                    integrating GrokET and getting access to personalized teaching guides.</p>
                <MainButton :buttonClass="buttonClass1" :buttonText="buttonText1" :buttonLink="buttonLink1" />
            </div>
        </div>
        <div class="w-full md:w-11/12 mt-10 divider"></div>
        <div class="md:w-11/12 mt-4 md:mt-8 col-flex md:gap-6">
            <p class="font-body font-semibold text-center text-xl md:text-3xl leading-10 tracking-wider">Leverage
                personalized &
                interactive learning.</p>
            <div class="flex flex-col items-center md:flex-row md:gap-10">
                <SvgoInteractive class="md:basis-1/2 icon-rm-mg text-14xl" filled />
                <div class="md:basis-1/2 flex flex-col items-start gap-2 md:gap-6">
                    <p class="font-body font-semibold text-lg md:text-xl">Tailored and Engaging</p>
                    <p class="font-body font-normal text-sm leading-6">Creating an environment that's tailored to individual
                        students' needs, incorporating active and engaging learning techniques is the way towards knowledge
                        retention. </p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-11/12 mt-10 divider"></div>
        <div class="md:w-11/12 mt-4 md:mt-8 col-flex md:gap-6">
            <p class="font-body font-semibold text-center text-xl md:text-3xl leading-10 tracking-wider">Made for active
                learning</p>
            <div class="flex flex-col items-center md:flex-row-reverse md:gap-10">
                <SvgoInteractive class="md:basis-1/2 icon-rm-mg text-14xl" filled />
                <div class="md:basis-1/2 flex flex-col items-start gap-2 md:gap-6">
                    <p class="font-body font-semibold text-lg md:text-xl">Active Recall and Spaced Repititions</p>
                    <p class="font-body font-normal text-sm leading-6">Integrate science-based teaching and testing methods
                        into
                        your lesson plan, leveling up student's cognitive abilities both in the classroom and outside.</p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-11/12 mt-10 divider"></div>
        <div class="md:w-11/12 mt-4 md:mt-8 col-flex md:gap-6">
            <p class="font-body font-semibold text-center text-xl md:text-3xl leading-10 tracking-wider">With it's own
                management</p>
            <div class="flex flex-col items-center md:flex-row md:gap-10">
                <SvgoInteractive class="md:basis-1/2 icon-rm-mg text-14xl" filled />
                <div class="md:basis-1/2 flex flex-col items-start gap-2 md:gap-6">
                    <p class="font-body font-semibold text-lg md:text-xl">GrokET's personal management system</p>
                    <p class="font-body font-normal text-sm leading-6">Comes with it's own learning management system,
                        helping
                        teachers and schools couple their own content along side GrokET and provide a seamless and
                        integrated
                        learning experience.</p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-11/12 mt-10 divider"></div>
        <div class="md:w-11/12 mt-4 col-flex md:gap-6">
            <p class="font-body font-semibold text-center text-2xl md:text-3xl leading-10 tracking-wider">Get your classroom up and
                running with GrokET</p>
            <div class="col-flex md:flex-row md:gap-10">
                <SvgoInteractive class="basis-1/2 icon-rm-mg text-14xl" filled />
                <div class="basis-1/2 flex flex-col items-center md:items-start gap-6">
                    <p class="font-body font-normal text-sm text-center md:text-start leading-6">Get Started today. Integrate GrokET
                        within
                        your
                        classroom, and level up your teaching.</p>
                    <MainButton :buttonClass="buttonClass2" :buttonText="buttonText2" :buttonLink="buttonLink2" />
                </div>
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
            buttonClass1: 'mt-4 w-36 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover',
            buttonText1: 'Get a Quote',
            buttonLink1: '/',
            buttonClass2: 'w-full md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover',
            buttonText2: 'Get a Quote',
            buttonLink2: '/',
        };
    },
};
</script>