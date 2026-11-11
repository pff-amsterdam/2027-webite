<script setup lang="ts">
import { RouterLink } from 'vue-router'

function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <nav class="footer-links" aria-label="Footer">
        <RouterLink to="/about_us" class="footer-link">About P*FFA</RouterLink>
      </nav>
      <p class="footer-text">© P*FFA · Porn Film Festival Amsterdam</p>
      <p class="footer-text">Independent cinema. Shared curiosity.</p>
      <button type="button" class="footer-link back-to-top" @click="backToTop">Back to top ↑</button>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1.5px solid var(--line);
  background-color: var(--cream);
}

.site-footer-inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr auto;
  align-items: center;
  gap: 1rem 2rem;
  padding: 18px var(--page-gutter) 22px;
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 12px;
  line-height: 15.6px;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  font: inherit;
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.footer-text {
  margin: 0;
  color: var(--ink);
}

.back-to-top {
  justify-self: end;
}

@media (max-width: 900px) {
  .site-footer-inner {
    grid-template-columns: 1fr;
    font-size: 14px;
  }

  .back-to-top {
    justify-self: start;
  }
}
</style>
