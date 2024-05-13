<script setup lang="ts">
  import RefCommponent from '@/components/RefCommponent.vue'
  import ReactiveComponent from '@/components/ReactiveComponent.vue';
  import EventComponent from '@/components/EventComponent.vue';
  import ComputedComponent from '@/components/ComputedComponent.vue';
  import PropsComponent from '@/components/PropsComponent.vue';
  import PropTypeComponent from '@/components/PropTypeComponent.vue';

const propTypeTest = [
  {id: 1, name: '商品1'},
  {id: 2, name: '商品2'}
]
</script>

<template>
  <main>
    <RefCommponent />
    <ReactiveComponent />
    <EventComponent />
    <ComputedComponent />
    <PropsComponent :id=1 name="abc" />
    <!-- <PropTypeComponent :items="propTypeTest"/> -->
</main>
</template>
