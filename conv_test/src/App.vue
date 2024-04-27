<script setup>
import Obj from './components/Obj.vue'
</script>

<template>
  <header>
    

    
  </header>

  <main>
    <!-- <Obj></Obj> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
