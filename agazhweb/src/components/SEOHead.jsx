import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ title, description, keywords, ogImage, ogUrl }) => {
  const siteName = "Agazh Avaiyam";
  const defaultImage = "/agazhproject/og-image.jpg";
  const baseUrl = "https://arundhathi27.github.io/agazhproject";
  
  const finalImage = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}${defaultImage}`;
  const finalUrl = ogUrl ? `${baseUrl}${ogUrl}` : baseUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={finalImage} />
    </Helmet>
  );
};

export default SEOHead;
