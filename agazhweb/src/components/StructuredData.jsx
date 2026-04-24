import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  const location = useLocation();
  const baseUrl = "https://arundhathi27.github.io/agazhproject";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agazh Avaiyam",
    "url": `${baseUrl}/`,
    "logo": `${baseUrl}/og-image.jpg`,
    "description": "A Centre for Archaeological Excellence in Tamil Nadu",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-93618-61147",
      "contactType": "Customer Service",
      "email": "agazhavaiyam.org@gmail.com"
    },
    "sameAs": ["https://www.instagram.com/agazhavaiyam/"]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Agazh Avaiyam",
    "url": `${baseUrl}/`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // ── LocalBusiness / EducationalOrganization schema ──
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Agazh Avaiyam",
    "description": "A Centre for Archaeological Excellence in Tamil Nadu offering heritage education, field-based learning, workshops, and cultural tours for schools and colleges.",
    "url": `${baseUrl}/`,
    "logo": `${baseUrl}/og-image.jpg`,
    "image": `${baseUrl}/og-image.jpg`,
    "telephone": "+91-93618-61147",
    "email": "agazhavaiyam.org@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    "sameAs": ["https://www.instagram.com/agazhavaiyam/"]
  };

  // ── FAQ schema ──
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Agazh Avaiyam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agazh Avaiyam is an MCA-registered organization specializing in education, heritage tourism, and research. Backed by a multidisciplinary team of scholars and humanities practitioners, we partner with schools to promote academically grounded, experiential heritage education in Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        "name": "What programs does Agazh Avaiyam offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer heritage education and cultural programs including field-based learning at archaeological sites, hands-on workshops with pottery making, seal design, and simulated excavations, plus expert-led heritage tours through historical monuments across Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        "name": "Who can participate in Agazh Avaiyam programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our programs are designed for three audiences: Schools (curated heritage walks and interactive workshops for young minds), Colleges (in-depth field explorations and career guidance in archaeology), and Lay Audience (engaging community events and heritage tourism for enthusiasts)."
        }
      }
    ]
  };

  // ── Breadcrumb schema — route-aware ──
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/` }
  ];

  if (location.pathname.includes("aboutus")) {
    breadcrumbItems.push({ name: "About Us", url: `${baseUrl}/aboutus` });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
