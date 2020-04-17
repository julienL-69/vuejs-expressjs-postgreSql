// composant de base de vuejs: il est appelée par main.js , le point d'entrée de l'appli
// Ce composant va s'intégrer dans le code html de index.html
<template>
  <div id="app">
    <page-header/>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components:{
    PageHeader
  }
}
</script>

<style>

</style>
