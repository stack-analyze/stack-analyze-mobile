<template>
  <p>{{name}} {{count}}</p>
</template>

<script setup lang="ts">
interface Props {
  name: string
  count?: number
}

// reactive destructure for defineProps()
// default value is compiled to equivalent runtime option
const { name, count = 100 } = defineProps<Props>()
</script>
