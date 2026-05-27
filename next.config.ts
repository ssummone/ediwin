import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // 301 redirects from old .html URLs to new clean routes
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/trade.html', destination: '/trade', permanent: true },
      { source: '/commercial.html', destination: '/commercial', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/sash-windows.html', destination: '/sash-windows', permanent: true },
      { source: '/accoya-doors.html', destination: '/accoya-doors', permanent: true },
      { source: '/secondary-glazing.html', destination: '/secondary-glazing', permanent: true },
      { source: '/repairs.html', destination: '/repairs', permanent: true },
      { source: '/projects.html', destination: '/projects', permanent: true },
      { source: '/listed-building-windows-survey.html', destination: '/listed-buildings', permanent: true },
      { source: '/news.html', destination: '/news', permanent: true },
      { source: '/scottish-grants.html', destination: '/news/scottish-grants', permanent: true },
      { source: '/planning-permission-tips.html', destination: '/news/planning-permission-tips', permanent: true },
      { source: '/news-secondary-glazing-heritage.html', destination: '/news/secondary-glazing-heritage', permanent: true },
    ];
  },
  images: {
    // Allow all local images
    unoptimized: false,
  },
};

export default nextConfig;
