<template>
  <component :is="xmasIcons[iconName]" class="bg-gray-100" />
</template>

<script setup>
import { xmasIcons } from '@/icons'

const props = defineProps({
  iconName: String,
})
</script>
