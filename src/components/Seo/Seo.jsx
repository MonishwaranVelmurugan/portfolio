import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../data/site'

export default function Seo() {
  const { seo } = siteConfig
  const canonicalUrl = seo.canonicalUrl

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.designation,
    description: seo.description,
    url: canonicalUrl,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location,
    },
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout: seo.keywords,
  }

  return (
    <Helmet>
      <html lang="en" />

      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:image:secure_url" content={seo.ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="634" />
      <meta property="og:site_name" content="Monishwaran Velmurugan Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  )
}