<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const timeout = setTimeout(() => console.log('Hello playwright'), 1000)

let result: number = timeout + 15

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>
