import type { SEOProps } from 'astro-seo'

const defaultSEO: SEOProps = {
  title: "Angelo's Mood Tracker",

  description: 'A simple mood tracker that tracks on my mood and energy levels.',

  openGraph: {
    basic: {
      type: 'website',
      title: "Angelo's Mood Tracker",
      image: '',
      url: 'https://mood.angelo.fyi'
    }
  },

  twitter: {}
}

export default defaultSEO
