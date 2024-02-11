<template>
    <div class="flex flex-col gap-6">
        <ul
            class="tab flex items-center gap-4 px-1 py-1 text-grokBlack-500 text-3xs font-body bg-grokBlack-500 bg-opacity-5 rounded-lg">
            <li :class="[activeTab === index ? activeTabClass : defTabClass]" v-for="(tab, index) in tabs" :key="index"
                @click="activeTab = index">
                {{ tab }}</li>
        </ul>
        <component v-bind:is="currentTab" />
    </div>
</template>

<script>

import TestPrep from "~/components/grok/offers/TestPrep.vue"
import StudyGuide from "~/components/grok/offers/StudyGuide.vue"
import ExamTech from "~/components/grok/offers/ExamTech.vue"

export default {
    component: {
        TestPrep,
        StudyGuide,
        ExamTech,
    },
    data() {
        return {
            activeTab: 0,
            tabs: ['Test-Prep', 'Study-Guide', 'Exam-Techniques'],
            defTabClass: 'def-tab',
            activeTabClass: 'def-tab active-tab'
        }
    },
    computed: {
        currentTab() {
            switch (this.activeTab) {
                case 0:
                    return TestPrep;
                case 1:
                    return StudyGuide;
                case 2:
                    return ExamTech;
            }
        }
    }
}
</script>