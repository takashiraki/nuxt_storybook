<script setup lang="ts">
defineProps<{
    icon?: Function
}>();
</script>

<template>
    <Button>
        <component :is="icon" class="w-4 h-4 mr-2"></component> Login with Email
    </Button>
</template>