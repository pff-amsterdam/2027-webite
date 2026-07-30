<script setup lang="ts">
// Drop the hero photo into /public/hero-background.jpg (see public/README-hero-image.txt).
// Referenced from the public folder (not imported) so the build never breaks while it's missing.
const heroBackground = '/hero-background.jpg'

const submissionLinks = [
  {
    label: 'Submit films',
    href: 'https://forms.gle/NEowHj9o3WcKCBs38',
    variant: 'navy'
  },
  {
    label: 'Submit performances',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfIwOTV5B5QFOtPzaLOBC-1YlKSFKbJTPpxxDCEGXMughuucA/viewform?usp=sharing&ouid=112398555283612625022',
    variant: 'lavender'
  },
  {
    label: 'Submit workshops',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdSmG1Loyk85pMbh4aeWDxQ0QHe6aOgVEiGAt3eABqXPfzD7w/viewform?usp=sharing&ouid=112398555283612625022',
    variant: 'white'
  }
]
</script>

<template>
  <main class="hero" :style="{ backgroundImage: `url(${heroBackground})` }">
    <div class="hero-overlay">
      <div class="hero-buttons">
        <a
          v-for="link in submissionLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="pill-button"
          :class="`pill-button--${link.variant}`"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  width: 100%;
  background-color: #0d1b3d; /* fallback until hero-background.jpg is added */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}

.hero-overlay {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6vh 6vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 4rem;
}

.hero-title {
  font-family: 'Playfair Display', 'DM Sans', serif;
  font-style: italic;
  font-weight: 500;
  color: #ffffff;
  font-size: clamp(2.75rem, 6vw, 5rem);
  line-height: 1.05;
  margin: 0;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 320px;
}

.pill-button {
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 999px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.pill-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.pill-button--navy {
  background-color: #132a52;
  color: #d9f2c4;
}

.pill-button--lavender {
  background-color: #cdbdf0;
  color: #ffffff;
}

.pill-button--white {
  background-color: #ffffff;
  color: #132a52;
}

@media (max-width: 720px) {
  .hero-overlay {
    flex-direction: column;
    align-items: flex-start;
    padding: 8vh 6vw;
    gap: 2.5rem;
  }

  .hero-buttons {
    width: 100%;
    min-width: 0;
  }

  .pill-button {
    font-size: 1.2rem;
  }
}
</style>
