import { SITEMAP, COMPANY_DETAILS, SOCIAL_LINKS } from '@/lib/nav';

export const navigationConfig = {
  header: [
    { id: 'ecosystem', num: '01', label: 'Ecosystem', href: '/#ecosystem' },
    { id: 'brands', num: '02', label: 'Brands', href: '/#brands' },
    { id: 'formats', num: '03', label: 'Formats', href: '/#formats' },
    { id: 'technology', num: '04', label: 'Technology', href: '/#technology' },
    { id: 'contact', num: '', label: 'Contact', href: '/contact' },
  ],
  footer: {
    company: {
      title: 'Company',
      links: SITEMAP.filter((item) => item.group === 'Company').map((item) => ({
        label: item.label,
        href: item.route,
      })),
    },
    brands: {
      title: 'Brands',
      allBrands: { label: 'All Brands', href: '/brands' },
      subCol1: SITEMAP.filter(
        (item) =>
          item.group === 'Brands' &&
          ['Essentials', 'Daily', 'Farms', 'Superfoods', 'Health', 'Beauty'].includes(item.label)
      ).map((item) => ({ label: item.label, href: item.route })),
      subCol2: SITEMAP.filter(
        (item) =>
          item.group === 'Brands' &&
          ['Luxe', 'Divine', 'Paws', 'Play', 'Classroom'].includes(item.label)
      ).map((item) => ({ label: item.label, href: item.route })),
    },
    formats: {
      title: 'Formats',
      links: SITEMAP.filter((item) => item.group === 'Formats').map((item) => ({
        label: item.label,
        href: item.route,
      })),
    },
    programs: {
      title: 'Programs',
      links: SITEMAP.filter((item) => item.group === 'Programs').map((item) => ({
        label: item.label,
        href: item.route,
      })),
    },
    connect: {
      title: 'Connect',
      links: SITEMAP.filter((item) => item.group === 'Connect').map((item) => ({
        label: item.label,
        href: item.route,
      })),
    },
  },
  companyDetails: COMPANY_DETAILS,
  socialLinks: SOCIAL_LINKS,
  bottomBar: {
    privacyPolicy: { label: 'Privacy Policy', href: '/privacy' },
    termsOfUse: { label: 'Terms of Use', href: '/terms' },
    website: { label: 'www.bogo.com', href: 'https://www.bogo.com', external: true },
  },
};
