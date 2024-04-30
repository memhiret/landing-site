<template>
    <head>
        <title>GrokET | Careers</title>
    </head>
    <div class="mt-28 md:mt-32 lg:mt-40 xl:mt-44 responsive-px py-4 col-flex">
        <div class="md:w-11/12 col-flex gap-6 md:gap-10 xl:gap-14">
            <p class="font-body font-semibold text-4xl lg:text-5xl xl:text-6xl">
                Work at Memhir ET
            </p>
            <p class="md:w-3/4 lg:w-7/12 xl:w-1/2 desc-text text-sm lg:text-base xl:text-xl text-center leading-loose">
                If changing how learning and education are navigated in Ethiopia
                intriguies you, checkout some of our open positions and join our
                team.
            </p>
            <MainButton :buttonClass="buttonClass1" :buttonText="buttonText1" :buttonLink="buttonLink1" />
        </div>
        <div class="w-full md:w-11/12 xl:w-9/12 mt-10 lg:mt-12 xl:mt-16 divider"></div>
        <div class="col-flex mt-4 md:mt-8 xl:mt-16 md:w-11/12 xl:w-9/12 gap-6 md:gap-10 xl:gap-14">
            <div class="flex flex-col gap-4 md:gap-8 lg:gap-12 items-start md:items-center">
                <p
                    class="md:w-5/6 xl:w-3/4 font-body font-bold text-grokBlue-500 text-4xl md:text-5xl xl:text-6xl xl:leading-relaxed md:text-center">
                    Join the Team and Work for a Bigger Impact.
                </p>
                <p class="desc-text text-base md:text-lg lg:text-xl xl:text-2xl text-center leading-loose">
                    What Working at MemhirET means...
                </p>
            </div>
            <div class="col-flex gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                <div
                    class="px-4 py-2 md:px-8 md:py-6 lg:px-12 lg:py-10 xl:px-16 xl:py-16 rounded-md col-flex md:flex-row-reverse md:gap-8 xl:gap-12 bg-grokBlack-300 bg-opacity-5">
                    <SvgoInnovation class="md:basis-1/2 icon-rm-mg text-12xl xl:text-14xl" filled />
                    <div class="md:basis-1/2 flex flex-col items-start gap-4 md:gap-8">
                        <p class="font-body font-semibold text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                            Innovation
                        </p>
                        <p
                            class="font-body font-normal text-sm md:text-base lg:text-lg xl:text-xl leading-10 lg:leading-loose xl:leading-loose">
                            We encourage creative thinking and bold ideas to
                            develop cutting-edge solutions that transform
                            learning experiences.
                        </p>
                    </div>
                </div>
                <div
                    class="px-4 py-2 md:px-8 md:py-6 lg:px-12 lg:py-10 xl:px-16 xl:py-16 col-flex md:flex-row md:gap-8 xl:gap-12">
                    <SvgoImpact class="md:basis-1/2 icon-rm-mg text-14xl" filled />
                    <div class="md:basis-1/2 flex flex-col items-start gap-4 md:gap-8">
                        <p class="font-body font-semibold text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                            Impact
                        </p>
                        <p
                            class="font-body font-normal text-sm md:text-base lg:text-lg xl:text-xl leading-10 lg:leading-loose xl:leading-loose">
                            Make a real difference in the lives of others. At
                            MemhirET, your work directly contributes to
                            empowering learners and educators around the world.
                        </p>
                    </div>
                </div>
                <div
                    class="px-4 py-2 md:px-8 md:py-6 lg:px-12 lg:py-10 xl:px-16 xl:py-16 rounded-md col-flex md:flex-row-reverse md:gap-8 xl:gap-12 bg-grokBlack-300 bg-opacity-5">
                    <SvgoCollaboration class="md:basis-1/2 icon-rm-mg text-14xl" filled />
                    <div class="md:basis-1/2 flex flex-col items-start gap-4 md:gap-8">
                        <p class="font-body font-semibold text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                            Collaboration
                        </p>
                        <p
                            class="font-body font-normal text-sm md:text-base lg:text-lg xl:text-xl leading-10 lg:leading-loose xl:leading-loose">
                            We foster a collaborative environment where diverse
                            perspectives come together to achieve remarkable
                            things.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-11/12 xl:w-9/12 mt-10 lg:mt-12 xl:mt-16 divider"></div>
        <div id="open-positions"
            class="w-full md:w-11/12 xl:w-9/12 mt-4 lg:mt-8 xl:mt-16 xl:mb-8 flex flex-col gap-6 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-36">
            <p class="font-body font-semibold text-4xl lg:text-5xl xl:text-6xl">
                Open Positions
            </p>
            <p class="desc-text text-base xl:text-lg">
                Ooops. We don't have any openings at the moment. If you'd like
                to get notified of future openings, fill out the form below.
            </p>
            <div class="flex flex-col items-start gap-4">
                <div class="w-full flex flex-col items-start gap-6 xl:gap-10">
                    <div class="w-full flex flex-col md:flex-row items-start gap-6">
                        <div class="w-full md:basis-1/2">
                            <label for="firstname" class="block font-body font-medium text-sm xl:text-lg">First Name
                            </label>
                            <div class="mt-2 xl:mt-3">
                                <input type="text" name="firstname" id="firstname" placeholder="Abebe"
                                    class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                                    required />
                            </div>
                        </div>
                        <div class="w-full md:basis-1/2">
                            <label for="lastname" class="block font-body font-medium text-sm xl:text-lg">Last Name
                            </label>
                            <div class="mt-2 xl:mt-3">
                                <input type="text" name="lastname" id="lastname" placeholder="Kebede"
                                    class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                                    required />
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col md:flex-row items-start gap-6">
                        <div class="w-full md:basis-1/2">
                            <label for="email" class="block font-body font-medium text-sm xl:text-lg">Email
                            </label>
                            <div class="mt-2 xl:mt-3">
                                <input type="text" name="email" id="email" placeholder="something@email.com"
                                    class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500"
                                    required />
                            </div>
                        </div>
                        <div class="w-full md:basis-1/2">
                            <label for="phonenumber" class="block font-body font-medium text-sm xl:text-lg">Phone Number
                            </label>
                            <div class="mt-2 xl:mt-3">
                                <input type="text" name="phonenumber" id="phonenumber" placeholder="09xxxxxxxx"
                                    class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grokBlue-500" />
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex flex-col md:flex-row items-start gap-6">
                        <div class="w-full md:basis-1/2">
                            <label for="jobcategory" class="block font-body font-medium text-sm xl:text-lg">Job Category
                            </label>
                            <div class="mt-2 xl:mt-3">
                                <select id="jobcategory" name="jobcategory" autocomplete="job-name"
                                    class="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-grokBlue-700 sm:text-sm sm:leading-6">
                                    <option>Business Team</option>
                                    <option>Technical Team</option>
                                    <option>Content Team</option>
                                </select>
                            </div>
                        </div>
                        <div class="hidden md:inline-block md:basis-1/2"></div>
                    </div>

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
            buttonClass1:
                "w-36 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg alt-button hover:button-hover",
            buttonText1: "Open Positions",
            buttonLink1: "#open-positions",
            buttonClass2:
                "mt-4 w-36 md:w-44 py-3 px-2 sm:py-4 sm:px-3 font-body sm:text-sm md:text-base lg:text-lg main-button hover:main-hover",
            buttonText2: "Notify me",
            buttonLink2: "/",
        };
    },
};
</script>
