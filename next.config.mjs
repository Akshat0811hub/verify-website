/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Legacy Wix 301 Redirects to preserve SEO equity
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/employee-bgv',
        permanent: true,
      },
      {
        source: '/employee-background-verification',
        destination: '/employee-bgv',
        permanent: true,
      },
      {
        source: '/business-background-verification',
        destination: '/business-bgv',
        permanent: true,
      },
      {
        source: '/industries-1',
        destination: '/industries',
        permanent: true,
      },
      {
        source: '/sustainability-risk',
        destination: '/sustainibility-risk',
        permanent: true,
      },
      {
        source: '/drug-and-medical-screening',
        destination: '/drug-medical-screening',
        permanent: true,
      },
      {
        source: '/global-and-compliance-checks',
        destination: '/global-compliance-checks',
        permanent: true,
      },
      {
        source: '/digital-background-screening',
        destination: '/digital-background',
        permanent: true,
      },
      {
        source: '/vendor-verification',
        destination: '/vendor-verification-services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
