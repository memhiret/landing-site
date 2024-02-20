<template>
    <div class="mt-24 lg:mt-28 xl:mt-32 responsive-px py-4 col-flex">
        <div class="lg:w-5/6 w-full flex flex-col md:flex-row items-start md:items-center md:gap-8 lg:gap-12">
            <div class="md:basis-1/2 flex flex-col items-start gap-6 md:gap-12 lg:gap-16 md:justify-between">
                <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">Our Story</p>
                <div class="flex flex-col gap-4 lg:gap-10 font-body font-normal text-sm xl:text-lg xl:leading-10">
                    <p>iLearn ET's mission is making quality education accessible to
                        everyone.</p>
                    <p>We are committed to providing world-class and easily accessible education, creating a
                        learning environment where students are challenged but manage to flourish and grow.</p>
                    <p>We believe that education is the key to a better future, and we are committed to playing our role in
                        creating a more equitable landscape.</p>
                </div>
            </div>
            <SvgoGraduation class="md:basis-1/2 icon-rm-mg text-13xl mobm:text-14xl md:text-16xl" filled />
        </div>
        <div class="lg:w-5/6 w-full xl:mt-20 flex flex-col item-start gap-6 md:gap-12 lg:gap-16">
            <p class="font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">Vision</p>
            <div class="flex flex-col gap-4 font-body font-normal text-sm xl:text-lg">
                <p>To be the lead of quality education, equipping students with the skills, knowledge and values required to
                    thrive in real-word scenarios.</p>
                <p> We envision a world where everyone has easy access to impact-driven, world-class education.</p>
            </div>
        </div>
        <div class="lg:w-5/6 w-full mt-10 lg:mt-16 divider"></div>
        <div class="lg:w-5/6 w-full mt-4 lg:mt-8 flex flex-col items-center gap-6">
            <p class="w-full font-display font-semibold text-3xl lg:text-4xl xl:text-6xl">People</p>
            <div class="w-full flex justify-between">
                <div class="basis-1/2 col-flex gap-2">
                    <img class="h-24 md:h-36 lg:h-44 w-24 md:w-36 lg:w-44 rounded-full ring-2 ring-grokWhite-500"
                        src="../../assets/imgs/Surafel.png" alt="Surafel Kebede">
                    <div class="col-flex text-center gap-1">
                        <p class="font-body font-normal text-sm md:text-base xl:texl-lg">Surafel Kebede</p>
                        <p class="font-body font-light text-xs md:text-sm xl:text-base">Business Lead</p>
                    </div>
                </div>
                <div class="basis-1/2 col-flex gap-2">
                    <img class="h-24 md:h-36 lg:h-44 w-24 md:w-36 lg:w-44 rounded-full ring-2 ring-grokWhite-500"
                        src="../../assets/imgs/Yonathan.png" alt="Yonathan Anosie">
                    <div class="col-flex text-center gap-1">
                        <p class="font-body font-normal text-sm md:text-base xl:texl-lg">Yonathan Anosie</p>
                        <p class="font-body font-light text-xs md:text-sm xl:text-base">Technical Lead</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:w-5/6 w-full mt-10 lg:mt-16 xl:mt-20 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div class="basis-1/2 w-full flex flex-col gap-6 md:gap-10 lg:gap-12 xl:gap-16 items-center">
                <p class="w-full font-display font-semibold text-left text-3xl lg:text-4xl xl:text-6xl">Careers</p>
                <SvgoCareers class="icon-rm-mg text-14xl md:text-12xl xl:text-16xl" filled />
            </div>
            <div class="basis-1/2 flex flex-col gap-8 md:gap-10">
                <p class="font-body font-normal text-sm xl:text-lg xl:leading-10 text-left">We're always on the lookout for passionate
                    individuals to join our
                    ever-growing team, whether you're an
                    experienced
                    professional or just starting your career journey.<span class="hidden md:inline-block">We foster a
                        dynamic
                        and collaborative environment where you can learn, grow, and make a real impact.</span></p>
                <div class="flex gap-8 lg:gap-12 xl:gap-32 font-body text-sm">
                    <MainButton :buttonClass="buttonClass1" :buttonText="buttonText1" :buttonLink="buttonLink1" />
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
            buttonClass1: 'w-28 md:w-44 py-3 px-2 sm:py-4 sm:px-3 sm:text-sm md:text-base lg:text-lg bg-grokBlack-500 main-button hover:main-hover',
            buttonText1: 'Careers',
            buttonLink1: '/about/careers',
            buttonClass2: 'w-28 md:w-44 py-3 px-2 sm:py-4 sm:px-3 sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover',
            buttonText2: 'YoungMinds',
            buttonLink2: '/about/youngmind',
        };
    },
};
</script>