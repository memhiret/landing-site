<template>
    <div class="md:w-10/12 flex flex-col gap-4 md:gap-10">
        <ul
            class="tab flex items-center gap-4 px-1 py-1 text-grokBlack-500 text-3xs md:text-xs lg:text-base font-body bg-grokBlack-500 bg-opacity-5 rounded-lg">
            <li :class="[activeTab === index ? activeTabClass : defTabClass]" v-for="(tab, index) in tabs" :key="index"
                @click="activeTab = index">
                {{ tab }}</li>
        </ul>
        <component v-bind:is="currentTab" :imgSrc="imgSrc" :offerHeading="offerHeading"
            :offerDesc="offerDesc" />
    </div>
</template>

<script>
import OfferContent from "~/components/grok/OfferContent.vue"
import Taking from '~/assets/imgs/Taking.jpg';
import Study from '~/assets/imgs/Study.jpg';
import Techniques from '~/assets/imgs/Techniques.jpeg';

export default {
    component: {
        OfferContent,
    },
    data() {
        return {
            activeTab: 0,
            tabs: ['Test-Prep', 'Study-Guide', 'Exam-Techniques'],
            defTabClass: 'def-tab',
            activeTabClass: 'def-tab active-tab',
            imgSrc: '',
            offerHeading: '',
            offerDesc: '',
        }
    },
    computed: {
        currentTab() {
            switch (this.activeTab) {
                case 0:
                    this.imgSrc = Taking;
                    this.offerHeading = 'Test Preparation Material';
                    this.offerDesc = 'Bite-sized content, gamified experiences, and powerful recall techniques ensure you master challenging concepts and conquer those standardized exams with confidence.'
                    return OfferContent;
                case 1:
                    this.imgSrc = Study;
                    this.offerHeading = 'Guided Study Paths';
                    this.offerDesc = "Stuck on a subject? We get you test - ready with personalized study paths tailored to YOU. Forget generic guides; dive into bite - sized lessons, quizzes, and reminders that fit your learning style.";

                    return OfferContent;
                case 2:
                    this.imgSrc = Techniques;
                    this.offerHeading = 'Exam & Test Taking Techniques';
                    this.offerDesc = "Got exam stress? Don't sweat it! Master tricky question types, manage time like a champ, and ace that exam."
                    return OfferContent;
            }
        }
    }
}
</script>