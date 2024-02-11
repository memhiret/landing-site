<template>
    <div class="col-flex gap-6 bg-grokBlack-500 py-6 px-4 mobm:px-6 bg-opacity-5">
        <div class="flex flex-col gap-2 items-center">
            <p class="font-display font-medium text-xl mobm:text-2xl">Meet GrokET</p>
            <p class="desc-text text-3xs mobm:text-2xs">Leveraging data-driven insights and proven learning science,
                GrokET personalizes your path to standardized exam mastery.</p>
        </div>
        <div class="col-flex gap-12">
            <GrokFeat :featureHead="featureHead1" :featureDesc="featureDesc1">
                <template #svg-picture>
                    <SvgoTest class="icon-rm-mg text-9xl" filled/>
                </template>
            </GrokFeat>
            <GrokFeat :featureHead="featureHead2" :featureDesc="featureDesc2">
                <template #svg-picture>
                    <SvgoExams class="icon-rm-mg text-9xl" filled/>
                </template>
            </GrokFeat>
            <GrokFeat :featureHead="featureHead3" :featureDesc="featureDesc3">
                <template #svg-picture>
                    <SvgoSorting class="icon-rm-mg text-9xl" filled/>
                </template>
            </GrokFeat>
        </div>
    </div>
</template>

<script>
import GrokFeat from "~/components/grok/GrokFeat.vue";

export default {
    components: {
        GrokFeat
    },
    data() {
        return {
            featureHead1: 'Personalized and Tailored Paths',
            featureHead2: 'Engaging and Interactive',
            featureHead3: 'Science-Based Methods',
            featureDesc1: 'Say goodbye to one-size-fits-all: GrokET analyzes your strengths and weaknesses, building a personalized blueprint for exam success.',
            featureDesc2: 'GrokET keeps you glued with interactive tools, bite-sized content, and interactive methods that fire up your brain and make learning stick.',
            featureDesc3: 'Remember more, with less effort. GrokET leverages cognitive science to build lasting memory bridges for effortless recall.',
        };
    }
};
</script>