<script setup lang="ts">
const principles = [
  {
    title: 'Plurality.',
    text: 'Many have been made invisible by the leading culture. Many others have been objectified by it. Here they take the lead and bring their own desires and legacy to the fore.',
    color: 'var(--blue)'
  },
  {
    title: 'Art.',
    text: 'Porn is a film genre and as such it demands artistic value. Cinema illuminates, expands and defies reality with its endless stream of perceptions.',
    color: 'var(--yellow)'
  },
  {
    title: 'Pleasure.',
    text: 'Porn enriches our sex life and helps us explore fantasies. Desire is extremely layered and ambiguous and we need others to know ourselves better.',
    color: 'var(--pink)'
  },
  {
    title: 'Community.',
    text: 'We live in a city which, while calling itself tolerant, makes it increasingly hard for many to feel welcome. We believe in the potential of real-life encounters.',
    color: 'var(--lavender)'
  }
]

const curationText = [
  'Porn Film Festival Amsterdam rejects classic porn categories. We do not curate porn based on the physical appearance of actions of the performers, we curate based on the content and message. We treat porn as cinema. We do not aim to please and to narrow expectations. Instead, our curatorial approach brings together films that offer different perspectives on sex and sexuality. Some pieces confront. Some delight. Some provoke. Some seduce. Some unsettle.',
  'What matters is the content and the meaning, not the category.',
  'By doing so, we situate porn within a meaningful artistic context and recognise filmmakers and performers as cultural producers with something to say, not just bodies on screen.',
  'Because sex, porn and sex work still carry heavy taboos, those who create erotic films often face censorship and misconceptions. Porn Film Festival Amsterdam offers a rare platform where their work can be seen, discussed, celebrated and brought to a wider public.',
  'Q&As, workshops, performances, installations, debates and community events invite visitors to explore further, engage critically and build connections across experiences and identities.'
]

// `link: null` = no URL found yet; rendered as plain text until one is added.
const press: { outlet: string; title: string; link: string | null }[] = [
  {
    outlet: 'Le Monde',
    title: 'A Amsterdam, voyage au pays du porno alternatif',
    link: 'https://www.lemonde.fr/intimites/article/2025/04/12/a-amsterdam-voyage-au-pays-du-porno-alternatif_6594856_6190330.html'
  },
  {
    outlet: 'NRC',
    title:
      'Perverse pracht en seksvampiers: het eerste Amsterdamse pornofestival wil de kijker uitdagen, laten schrikken, veranderen',
    link: 'https://www.nrc.nl/nieuws/2024/02/09/perverse-pracht-en-seksvampiers-het-eerste-amsterdamse-pornofestival-wil-de-kijker-uitdagen-laten-schrikken-veranderen-a4189698'
  },
  {
    outlet: 'Filmkrant',
    title: 'Why We Need Porn Film Festivals',
    link: 'https://filmkrant.nl/festivals/porn-film-festival-amsterdam-2026-2/'
  },
  {
    outlet: 'Filmkrant',
    title: 'Focus: Porn Film Festival Amsterdam 2026 – Alternatieve porno',
    link: 'https://filmkrant.nl/agenda/porn-film-festival-amsterdam-2026/'
  },
  {
    outlet: 'Trouw',
    title: 'Pornofestival wil mensen laten nadenken over wat ze normaal en geil vinden',
    link: 'https://www.trouw.nl/tijdgeest/pornofestival-wil-mensen-laten-nadenken-over-wat-ze-normaal-en-geil-vinden~b0b4abd4/'
  }
]

const team = [
  {
    name: 'Bear Silver (They/He)',
    bio: 'Bear is an educator, activist and performer who has been involved in various grassroots initiatives in Amsterdam since 1999. Since 2016, Bear has been busy with ethical pornography. They are turned on by hot footwear, archaeology and special events in nighttime skies.'
  },
  {
    name: 'Erik ter Veld (He/Him)',
    bio: "Erik is a filmmaker and photographer from Groningen. He has also worked as a volunteer coördinator for the TranScreen Amsterdam Transgender Filmfestival and the Queer.Red Sex Workers Film and Arts Festival. In 2026 he co-founded the 'Common Tongue' collective, a collective aiming to make more beautiful Porn in the Netherlands. He is turned on by challenging screenings, classic cinema, good title cards, deep conversations, and darkrooms at a kinky rave."
  },
  {
    name: 'Franka Bauwens (She/They)',
    bio: 'Franka is a film programmer from Amsterdam with a background in philosophy. She translates, teaches and works at a small publishing company for theatre plays.'
  },
  {
    name: 'hyeisoos (She/Her)',
    bio: 'hyeisoos is an artist and film programmer based in NL and South Korea. She is turned on by Asia, diaspora, and scat.'
  },
  {
    name: 'Jessica van der Berg (She/Her)',
    bio: 'Jessica has been behind P*FFA’s socials since 2024. A marketer and copywriter, she works across sexual wellness and adult culture. She is turned on by creating pornie bridges to South Africa, humour and booty shaking.'
  },
  {
    name: 'Luisa González (She/They)',
    bio: 'Luisa is a film programmer with over fourteen years of experience. She is Colombian and lives in Amsterdam. Currently, she is completing her PhD research.'
  },
  {
    name: 'Samuel Witteveen Gómez (He/They)',
    bio: 'Samuel has been part of the programming team at Filmhuis Cavia for over seven years. He is a writer and journalist and currently works as researcher at VPRO/HUMAN.'
  }
]
</script>

<template>
  <main class="about">
    <section class="section about-hero">
      <p class="eyebrow">Porn Film Festival Amsterdam</p>
      <h1 class="about-heading">
        <img class="about-heading-blob" src="/images/about-blob.png" alt="" width="635" height="129" />
        <span class="about-heading-text">About P*FFA.</span>
      </h1>
    </section>

    <section class="section">
      <div class="prose">
        <p>
          Porn Film Festival Amsterdam was created to fill a striking gap. For a city internationally known
          for its Red Light District, sexual freedom and LGBTQIA+ vibrancy, Amsterdam had no annual film
          festival dedicated to sex, gender and sexuality in a broad sense until 2024. P*FFA stepped into
          that space with a simple but radical belief: Porn doesn’t have to be disposable. It can be
          artistic, political, moving, thought-provoking and a catalyst for self-discovery.
        </p>
        <p>
          Porn Film Festival Amsterdam doesn’t narrow itself to one community. Instead, we aim to widen and
          to connect, creating a space where many experiences of sexuality can coexist, be seen and be
          discussed.
        </p>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Our guiding principles.</h2>
      <div class="box-grid">
        <div
          v-for="principle in principles"
          :key="principle.title"
          class="box"
          :style="{ backgroundColor: principle.color }"
        >
          <h3 class="box-title">{{ principle.title }}</h3>
          <p class="box-text">{{ principle.text }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">How we curate Porn Film Festival Amsterdam.</h2>
      <div class="prose">
        <p v-for="(paragraph, index) in curationText" :key="index">{{ paragraph }}</p>
      </div>
    </section>

    <section class="section section--green">
      <h2 class="section-title">Critical reception.</h2>
      <ul class="press-list">
        <li v-for="item in press" :key="item.title" class="press-row">
          <span class="press-outlet">{{ item.outlet }}</span>
          <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer" class="press-link">
            {{ item.title }}
          </a>
          <span v-else class="press-link">{{ item.title }}</span>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2 class="section-title">Who are we and how did we get here?</h2>
      <div class="prose">
        <p>
          We are a group of debauchees, cinephiles, activists, filmmakers, media scholars and sex workers.
          Most of us met some years ago at Filmhuis Cavia in Amsterdam, a community-run cinema founded by
          the squatters’ movement of the 80s.
        </p>
        <p>
          In 2024, our festival came to life with the tremendous support of the local and global porn
          community, as well as the trust of local funds, grassroots venues and lots of friends and allies.
        </p>
      </div>
    </section>

    <section class="section section--last">
      <h2 class="section-title">Who are we really?</h2>
      <div class="box-grid">
        <div v-for="member in team" :key="member.name" class="box box--paper">
          <h3 class="team-name">{{ member.name }}</h3>
          <p class="box-text">{{ member.bio }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.section {
  padding: 64px clamp(16px, 6vw, 82px) 72px;
  border-bottom: 1.5px solid var(--line);
}

.section--green {
  background-color: var(--green);
}

.section--last {
  border-bottom: none;
  padding-bottom: 110px;
}

.about-hero {
  padding-top: 78px;
  padding-bottom: 76px;
}

/* Live text over the pink chenille blob; sizes are in em so the pair scales together. */
.about-heading {
  position: relative;
  height: 1.13em;
  margin: 28px 0 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(56px, 7.6vw, 104.95px);
  line-height: 0.87;
  letter-spacing: -0.075em;
}

.about-heading-blob {
  position: absolute;
  left: -0.12em;
  top: -0.1em;
  width: 6.05em;
  max-width: none;
  height: auto;
}

.about-heading-text {
  position: relative;
  display: block;
  padding: 0.03em 0 0 0.183em;
}

.section-title {
  margin: 0 0 28px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(34px, 3.7vw, 50.4px);
  letter-spacing: -0.055em;
  line-height: 1;
}

.prose {
  max-width: 1090px;
}

.prose p {
  margin: 0 0 1.6em;
  font-size: 21px;
  line-height: 1.6;
}

.prose p:last-child {
  margin-bottom: 0;
}

/* Two-column grid of bordered boxes (principles + team). */
.box-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 18px;
  max-width: 1212px;
}

.box {
  border: 1.5px solid var(--line);
  padding: 36px 28px 44px;
}

.box--paper {
  background-color: var(--paper);
  min-height: 190px;
}

.box-title {
  margin: 0 0 16px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22.4px;
  line-height: 1;
}

.team-name {
  margin: 0 0 20px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 14.7px;
  line-height: 1;
}

.box-text {
  margin: 0;
  font-size: 18px;
  line-height: 1.55;
}

.press-list {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 1200px;
}

.press-row {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1rem;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-display);
  font-size: 20px;
  line-height: 28px;
}

.press-outlet {
  font-weight: 700;
}

.press-link {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  color: var(--ink);
}

@media (max-width: 720px) {
  .section {
    padding: 44px var(--page-gutter) 48px;
  }

  .about-hero {
    padding-top: 40px;
    padding-bottom: 44px;
  }

  .about-heading {
    margin-top: 20px;
  }

  .prose p {
    font-size: 17px;
    line-height: 1.7;
  }

  .box-text {
    font-size: 16px;
  }

  .press-row {
    font-size: 18px;
    line-height: 24px;
  }

  .box-grid {
    grid-template-columns: 1fr;
  }

  .box--paper {
    min-height: 0;
  }

  .press-row {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 16px 0;
  }
}
</style>
