<script setup lang="ts">
const marqueeWords = [
  'Art',
  'Plurality',
  'Pleasure',
  'Community',
  'Films',
  'Workshops',
  'Performances',
  'Cinema'
]

// Programme pages aren't live yet, so the "Explore" lines are shown muted and not linked.
const programmeCards = [
  {
    label: '01 / On screen',
    title: 'Films',
    text: 'Discover films that open minds, hearts and conversations.',
    cta: 'Explore films',
    image: '/images/card-films.png',
    color: '#85b8ef'
  },
  {
    label: '02 / Get involved',
    title: 'Workshops',
    text: 'Make space for new ideas and shared discovery in hands-on, intimate workshops.',
    cta: 'Explore workshops',
    image: '/images/card-workshops.png',
    color: '#a5cf76'
  },
  {
    label: '03 / Parties',
    title: 'Parties',
    text: 'Dress up, dress down and come shake your booty with us all in some iconic Amsterdam spaces.',
    cta: 'Explore parties',
    image: '/images/card-parties.png',
    color: '#ff783f'
  },
  {
    label: '04 / Connect & exchange',
    title: 'Industry day',
    text: 'A space for filmmakers, practitioners and anyone curious to connect and exchange ideas.',
    cta: 'Explore industry day',
    image: '/images/card-industry.png',
    color: '#c5b4f4'
  },
  {
    label: '05 / On stage',
    title: 'Performances',
    text: 'Come through and enjoy soft, wild, debaucherous performances throughout the festival.',
    cta: 'Explore performances',
    image: '/images/card-performances.png',
    color: '#f59fbd'
  }
]
</script>

<template>
  <main class="home">
    <section class="hero">
      <div class="hero-top">
        <p class="eyebrow">Porn Film Festival<br />Amsterdam</p>
        <p class="hero-dates">25 - 28 FEB<br />2027 · AMSTERDAM</p>
      </div>

      <h1 class="hero-title">
        <img src="/images/hero-title.png" alt="Porn Film Festival Amsterdam" width="532" height="304" />
      </h1>
      <p class="hero-announcement">Programme will be live in January 2027.</p>

      <div class="stickers" aria-hidden="true">
        <img class="sticker sticker--plug" src="/images/sticker-plug.png" alt="" />
        <img class="sticker sticker--cherries" src="/images/sticker-cherries.png" alt="" />
        <img class="sticker sticker--camera" src="/images/sticker-camera.png" alt="" />
      </div>
    </section>

    <div class="ribbon" role="img" aria-label="Art, plurality, pleasure, community, films, workshops, performances, cinema">
      <div class="ribbon-track" aria-hidden="true">
        <template v-for="copy in 2" :key="copy">
          <span v-for="word in marqueeWords" :key="`${copy}-${word}`" class="ribbon-item">
            {{ word }}<span class="ribbon-dot" />
          </span>
        </template>
      </div>
    </div>

    <section class="cards" aria-label="What's on">
      <article v-for="card in programmeCards" :key="card.title" class="card">
        <div class="card-image" :style="{ backgroundColor: card.color }">
          <img :src="card.image" alt="" />
        </div>
        <div class="card-body">
          <p class="eyebrow">{{ card.label }}</p>
          <h2 class="card-title">{{ card.title }}</h2>
          <p class="card-text">{{ card.text }}</p>
          <p class="card-cta">{{ card.cta }} <span aria-hidden="true">↗</span></p>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.home {
  overflow-x: hidden;
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  padding: 50px var(--page-gutter) 56px;
}

.hero-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.hero-dates {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 19px;
  line-height: 1.35;
  text-align: right;
}

.hero-title {
  position: relative;
  z-index: 1;
  margin: 28px 0 0 -6px;
  line-height: 0;
}

.hero-title img {
  width: clamp(280px, 38.6vw, 532px);
  height: auto;
}

.hero-announcement {
  position: relative;
  z-index: 1;
  margin: -14px 0 0;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
}

.stickers {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.sticker {
  position: absolute;
  height: auto;
}

.sticker--plug {
  left: 48%;
  top: 64px;
  width: clamp(72px, 10.3vw, 142px);
}

.sticker--cherries {
  left: calc(60% - 31px);
  top: 250px;
  width: clamp(140px, 20.1vw, 277px);
}

.sticker--camera {
  right: calc(var(--page-gutter) - 22px);
  top: 98px;
  width: clamp(150px, 20.2vw, 278px);
}

/* ---------- Ribbon ---------- */
.ribbon {
  position: relative;
  width: 104%;
  margin-left: -2%;
  transform: rotate(-1deg);
  background-color: var(--pink);
  border-top: 1.5px solid var(--line);
  border-bottom: 1.5px solid var(--line);
  overflow: hidden;
  padding: 9px 0;
}

.ribbon-track {
  display: flex;
  width: max-content;
  animation: ribbon-scroll 40s linear infinite;
}

.ribbon-item {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 23px;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  white-space: nowrap;
}

.ribbon-dot {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 22px 0 14px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #6a6a6a 0%, #111 45%, #000 100%);
}

@keyframes ribbon-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ribbon-track {
    animation: none;
  }
}

/* ---------- Cards ---------- */
.cards {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px;
  padding: 120px var(--page-gutter) 140px;
}

.card {
  display: flex;
  flex-direction: column;
  border: 1.5px solid var(--line);
  border-radius: 2px;
  background-color: var(--cream);
  overflow: hidden;
}

.card-image {
  aspect-ratio: 229 / 215;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--line);
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 28px 20px 40px;
}

.card-title {
  margin: 22px 0 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.7px;
  color: var(--muted);
}

.card-body .eyebrow {
  font-size: 11px;
  letter-spacing: 1px;
}

.card-text {
  margin: 18px 0 0;
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 25.5px;
  color: var(--muted);
}

.card-cta {
  margin: 22px 0 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: var(--muted);
}

/* ---------- Responsive ---------- */
@media (max-width: 1100px) {
  .cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .hero {
    min-height: 0;
    padding-top: 32px;
    padding-bottom: 210px;
  }

  .hero-dates {
    font-size: 15px;
  }

  .hero-title {
    margin: 20px 0 0 -10px;
  }

  .hero-title img {
    width: calc(100% + 20px);
    max-width: 450px;
  }

  .hero-announcement {
    font-size: 16px;
    margin-top: 0;
  }

  .sticker--plug {
    left: auto;
    right: 44%;
    top: auto;
    bottom: 58px;
    width: 74px;
  }

  .sticker--cherries {
    left: calc(var(--page-gutter) - 14px);
    top: auto;
    bottom: 30px;
    width: 140px;
  }

  .sticker--camera {
    right: calc(var(--page-gutter) - 12px);
    top: auto;
    bottom: 40px;
    width: 160px;
  }

  .ribbon-item {
    font-size: 17px;
    letter-spacing: 3px;
  }

  .ribbon-dot {
    width: 15px;
    height: 15px;
    margin: 0 14px 0 10px;
  }

  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    padding-top: 60px;
    padding-bottom: 80px;
  }

  .card-body {
    padding: 20px 16px 28px;
  }
}

@media (max-width: 480px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
