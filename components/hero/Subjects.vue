<template>
    <div class="flex gap-2">
        <img class="h-4 w-auto" :src="src">
        <p class="font-body text-xs">{{ subjectName }}</p>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        subjectName: {
            type: String,
            required: true,
        }
    }
}
</script>