<script setup lang="ts">
import type { PropType } from 'vue' 
type Items = {
    id: number,
    name: string
}[]

const props = defineProps({
    items: Array as PropType<Items>
})

</script>
<template>
    <h2>proptype</h2>
    <ul>
        <li v-for="item in props.items" :key="item.id">

 id: {{ item.id }} name: {{ item.name }} 
    </li>
    </ul>

</template>