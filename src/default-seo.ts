import type { SEOProps } from 'astro-seo'

const defaultSEO: SEOProps = {
  title: "Zestful · Angelo's Mood Tracker",
  description: 'A simple mood tracker that tracks on my mood and energy levels.',

  openGraph: {
    basic: {
      type: 'website',
      title: "Zestful · Angelo's Mood Tracker",
      image: 'https://mood.angelo.fyi/og.png',
      url: 'https://mood.angelo.fyi'
    }
  }
}

export default defaultSEO
