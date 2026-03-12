import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function TechArticleStructuredData() {
  const { siteConfig } = useDocusaurusContext();
  const { frontMatter, metadata } = useDoc();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": frontMatter.title,
    "description": frontMatter.description,
    "dateModified": new Date(metadata.lastUpdatedAt * 1000).toISOString().split('T')[0],
    "url": siteConfig.url + metadata.permalink,
    "author": { "@type": "Organization", "name": "TagSpaces GmbH", "url": "https://www.tagspaces.org" },
    "publisher": { "@type": "Organization", "name": "TagSpaces GmbH" },
    "about": { "@type": "SoftwareApplication", "name": "TagSpaces", "url": "https://www.tagspaces.org" },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".theme-doc-markdown h1", ".theme-doc-markdown > p:first-of-type"]
    }
  };
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Head>
  );
}
