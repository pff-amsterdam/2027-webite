<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteNavbar from './components/SiteNavbar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteNavbar />
  <RouterView />
  <SiteFooter />
</template>
