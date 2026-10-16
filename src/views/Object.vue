<script setup>
import { ref } from 'vue';

let cars = ref([
    {name: "Porsche", capacity: 2, color:"silver"},
    {name: "Kijang", capacity: 6, color:"black"},
    {name: "Audi", capacity: 4, color:"white"},
    {name: "Brio", capacity: 4, color:"red"},
])
</script>

<template>
  <div class="container">
    Mobil
    <ul v-for="car in cars" :key="car.name"> 
        <li>{{ car.name }}</li>
        <li>{{ car.capacity }}</li>
        <li>{{ car.color }}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>