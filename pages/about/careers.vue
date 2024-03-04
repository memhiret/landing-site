<template>
    <div class="mt-28 xl:mt-32 responsive-px py-4 col-flex">
        <div class="col-flex gap-6">
            <p class="font-body font-semibold text-4xl lg:text-5xl xl:text-6xl">
                Work at iLearn ET
            </p>
            <p class="desc-text text-sm xl:text-lg text-center leading-loose">
                If changing how learning and education are navigated in Ethiopia
                intriguies you, checkout some of our open positions and join our
                team.
            </p>
            <MainButton
                :buttonClass="buttonClass1"
                :buttonText="buttonText1"
                :buttonLink="buttonLink1"
            />
        </div>
        <div class="w-full md:w-11/12 mt-10 lg:mt-12 divider"></div>
        <div class="col-flex mt-4 gap-6">
            <div class="flex flex-col gap-4 items-start">
                <p class="font-body font-bold text-grokBlue-500 text-4xl">
                    Join the Team and Work for a Bigger Impact.
                </p>
                <p
                    class="desc-text text-base xl:text-lg text-center leading-loose"
                >
                    What Working at iLearnET means...
                </p>
            </div>
            <div class="col-flex gap-8">
                <div
                    class="px-4 py-2 rounded-md col-flex bg-grokBlack-300 bg-opacity-5"
                >
                    <SvgoInnovation class="icon-rm-mg text-12xl" filled />
                    <div class="flex flex-col items-start gap-4">
                        <p
                            class="font-body font-semibold text-lg md:text-xl lg:text-2xl"
                        >
                            Innovation
                        </p>
                        <p
                            class="font-body font-normal text-sm lg:text-base leading-6"
                        >
                            Be a part of shaping the future of education. We
                            encourage creative thinking and bold ideas to
                            develop cutting-edge solutions that transform
                            learning experiences.
                        </p>
                    </div>
                </div>
                <div class="px-4 py-2 col-flex">
                    <SvgoImpact class="icon-rm-mg text-12xl" filled />
                    <div class="flex flex-col items-start gap-4">
                        <p
                            class="font-body font-semibold text-lg md:text-xl lg:text-2xl"
                        >
                            Impact
                        </p>
                        <p
                            class="font-body font-normal text-sm lg:text-base leading-6"
                        >
                            Make a real difference in the lives of others. At
                            iLearnET, your work directly contributes to
                            empowering learners and educators around the world.
                        </p>
                    </div>
                </div>
                <div
                    class="px-4 py-2 rounded-md col-flex bg-grokBlack-300 bg-opacity-5"
                >
                    <SvgoCollaboration class="icon-rm-mg text-12xl" filled />
                    <div class="flex flex-col items-start gap-4">
                        <p
                            class="font-body font-semibold text-lg md:text-xl lg:text-2xl"
                        >
                            Collaboration
                        </p>
                        <p
                            class="font-body font-normal text-sm lg:text-base leading-6"
                        >
                            Join a dynamic team of passionate individuals. We
                            foster a collaborative environment where diverse
                            perspectives come together to achieve remarkable
                            things.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-11/12 mt-10 lg:mt-12 divider"></div>
        <div
            id="open-positions"
            class="w-full md:w-11/12 mt-4 flex flex-col gap-6 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-36"
        >
            <p class="font-body font-semibold text-4xl lg:text-5xl xl:text-6xl">
                Open Positions
            </p>
            <p class="desc-text text-base xl:text-lg">
                Ooops. We don't have any openings at the moment. If you'd like
                to get notified of openings, fill out the form below.
            </p>
            <div class="flex flex-col items-start gap-4">
                <div class="w-full flex flex-col items-start gap-4">
                    <div class="w-full">
                        <label
                            for="firstname"
                            class="block font-body font-medium text-sm"
                            >First Name
                        </label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                                required
                            />
                        </div>
                    </div>
                    <div class="w-full">
                        <label
                            for="lastname"
                            class="block font-body font-medium text-sm"
                            >Last Name
                        </label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                                required
                            />
                        </div>
                    </div>
                    <div class="w-full">
                        <label
                            for="email"
                            class="block font-body font-medium text-sm"
                            >Email
                        </label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                                required
                            />
                        </div>
                    </div>
                    <div class="w-full">
                        <label
                            for="jobcategory"
                            class="block font-body font-medium text-sm"
                            >Job Category
                        </label>
                        <div class="mt-2">
                            <select
                                id="jobcategory"
                                name="jobcategory"
                                autocomplete="job-name"
                                class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-grokBlue-700 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option>Business Team</option>
                                <option>Technical Team</option>
                                <option>Content Team</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-full">
                        <label
                            for="phonenumber"
                            class="block font-body font-medium text-sm"
                            >Phone Number
                        </label>
                        <div class="mt-2">
                            <input
                                type="text"
                                name="phonenumber"
                                id="phonenumber"
                                class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                            />
                        </div>
                    </div>
                    <MainButton
                        :buttonClass="buttonClass2"
                        :buttonText="buttonText2"
                        :buttonLink="buttonLink2"
                    />
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
            buttonClass1:
                "w-36 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover",
            buttonText1: "Open Positions",
            buttonLink1: "/about/careers/#open-positions",
            buttonClass2:
                "mt-4 w-36 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
            buttonText2: "Notify me",
            buttonLink2: "/",
        };
    },
};
</script>
