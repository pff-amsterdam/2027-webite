<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About P*FFA', to: '/about_us' }
]
</script>

<template>
  <header class="site-navbar">
    <div class="site-navbar-inner">
      <RouterLink to="/" class="brand" aria-label="Porn Film Festival Amsterdam — home">
        <img src="/images/logo.png" alt="Porn Film Festival Amsterdam" width="122" height="62" />
      </RouterLink>

      <nav class="nav-links">
        <RouterLink v-for="item in navItems" :key="item.label" :to="item.to" class="nav-link">
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: var(--cream);
  border-bottom: 1.5px solid var(--line);
}

.site-navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 110px;
  padding: 0 var(--page-gutter);
}

.brand {
  display: block;
  line-height: 0;
}

.brand img {
  width: 122px;
  height: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  text-decoration: none;
  text-underline-offset: 4px;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  text-decoration: underline;
}

@media (max-width: 720px) {
  .site-navbar-inner {
    min-height: 76px;
  }

  .brand img {
    width: 96px;
  }

  .nav-links {
    gap: 1.25rem;
  }

  .nav-link {
    font-size: 16px;
  }
}
</style>
