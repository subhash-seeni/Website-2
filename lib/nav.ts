export interface SitemapItem {
  id: string;
  label: string;
  route: string;
  group: string;
  built: boolean;
  logo?: string;
}

export interface NavGroup {
  id: string;
  num: string;
  title: string;
  indexRoute?: string;
  links: SitemapItem[];
  subColumns?: {
    col1: SitemapItem[];
    col2: SitemapItem[];
  };
}

export const SITEMAP: SitemapItem[] = [
  // Home
  { id: 'home', label: 'Home', route: '/', group: 'Core', built: true },

  // Company
  { id: 'about', label: 'About BOGO', route: '/about', group: 'Company', built: false },
  { id: 'vision', label: 'Vision & Mindset', route: '/vision', group: 'Company', built: false },
  { id: 'ecosystem', label: 'The Ecosystem', route: '/ecosystem', group: 'Company', built: false },
  { id: 'roadmap', label: 'Growth Roadmap', route: '/roadmap', group: 'Company', built: false },

  // Brands
  { id: 'brands-all', label: 'All Brands', route: '/brands', group: 'Brands', built: false },
  { id: 'brand-essentials', label: 'Essentials', route: '/brands/essentials', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Essentials.png' },
  { id: 'brand-daily', label: 'Daily', route: '/brands/daily', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Daily.png' },
  { id: 'brand-farms', label: 'Farms', route: '/brands/farms', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Farms.png' },
  { id: 'brand-superfoods', label: 'Superfoods', route: '/brands/superfoods', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Superfoods.png' },
  { id: 'brand-health', label: 'Health', route: '/brands/health', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Health.png' },
  { id: 'brand-beauty', label: 'Beauty', route: '/brands/beauty', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Beauty.png' },
  { id: 'brand-luxe', label: 'Luxe', route: '/brands/luxe', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Luxe.png' },
  { id: 'brand-divine', label: 'Divine', route: '/brands/divine', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Divine.png' },
  { id: 'brand-paws', label: 'Paws', route: '/brands/paws', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Paws.png' },
  { id: 'brand-play', label: 'Play', route: '/brands/play', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Play.png' },
  { id: 'brand-classroom', label: 'Classroom', route: '/brands/classroom', group: 'Brands', built: false, logo: '/Images/Logos/normalized/Classroom.png' },

  // Formats
  { id: 'formats-all', label: 'All Formats', route: '/formats', group: 'Formats', built: false },
  { id: 'format-square', label: 'Square', route: '/formats/square', group: 'Formats', built: false, logo: '/Images/Logos/normalized/Square.png' },
  { id: 'format-bazaar', label: 'Bazaar', route: '/formats/bazaar', group: 'Formats', built: false, logo: '/Images/Logos/normalized/Bazaar.png' },
  { id: 'format-mini', label: 'Mini', route: '/formats/mini', group: 'Formats', built: false, logo: '/Images/Logos/normalized/Mini.png' },

  // Technology
  { id: 'technology', label: 'Technology', route: '/technology', group: 'Technology', built: false },

  // Distribution
  { id: 'go', label: 'BOGO Go', route: '/go', group: 'Distribution', built: false, logo: '/Images/Logos/normalized/Go.png' },

  // Programs
  { id: 'prog-life', label: 'Life', route: '/programs/life', group: 'Programs', built: false, logo: '/Images/Logos/normalized/Life.png' },
  { id: 'prog-companion', label: 'Companion', route: '/programs/companion', group: 'Programs', built: false, logo: '/Images/Logos/normalized/Companion.png' },
  { id: 'prog-affairs', label: 'Affairs', route: '/programs/affairs', group: 'Programs', built: false, logo: '/Images/Logos/normalized/Affairs.png' },
  { id: 'prog-partner', label: 'Partner', route: '/programs/partner', group: 'Programs', built: false, logo: '/Images/Logos/normalized/Partner.png' },

  // Connect
  { id: 'contact', label: 'Contact', route: '/contact', group: 'Connect', built: false },
  { id: 'investors', label: 'Investors', route: '/investors', group: 'Connect', built: false },
  { id: 'careers', label: 'Careers', route: '/careers', group: 'Connect', built: false },
  { id: 'locations', label: 'Locations', route: '/locations', group: 'Connect', built: false },

  // Legal
  { id: 'privacy', label: 'Privacy Policy', route: '/privacy', group: 'Legal', built: false },
  { id: 'terms', label: 'Terms of Use', route: '/terms', group: 'Legal', built: false },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'company',
    num: '01',
    title: 'Company',
    links: SITEMAP.filter((item) => item.group === 'Company'),
  },
  {
    id: 'brands',
    num: '02',
    title: 'Brands',
    indexRoute: '/brands',
    links: SITEMAP.filter((item) => item.group === 'Brands'),
    subColumns: {
      col1: SITEMAP.filter(
        (item) =>
          item.group === 'Brands' &&
          ['All Brands', 'Essentials', 'Daily', 'Farms', 'Superfoods', 'Health'].includes(item.label)
      ),
      col2: SITEMAP.filter(
        (item) =>
          item.group === 'Brands' &&
          ['Beauty', 'Luxe', 'Divine', 'Paws', 'Play', 'Classroom'].includes(item.label)
      ),
    },
  },
  {
    id: 'formats',
    num: '03',
    title: 'Formats',
    indexRoute: '/formats',
    links: SITEMAP.filter((item) => item.group === 'Formats'),
  },
  {
    id: 'technology',
    num: '04',
    title: 'Technology',
    indexRoute: '/technology',
    links: SITEMAP.filter((item) => item.group === 'Technology'),
  },
  {
    id: 'distribution',
    num: '05',
    title: 'Distribution',
    links: SITEMAP.filter((item) => item.group === 'Distribution'),
  },
  {
    id: 'programs',
    num: '06',
    title: 'Programs',
    links: SITEMAP.filter((item) => item.group === 'Programs'),
  },
  {
    id: 'connect',
    num: '07',
    title: 'Connect',
    links: SITEMAP.filter((item) => item.group === 'Connect'),
  },
];

export const LEGAL_LINKS = SITEMAP.filter((item) => item.group === 'Legal');

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'TODO', external: true },
  { label: 'Instagram', href: 'TODO', external: true },
  { label: 'YouTube', href: 'TODO', external: true },
  { label: 'X', href: 'TODO', external: true },
];

export const COMPANY_DETAILS = {
  entityName: 'TODO',
  address: 'TODO',
  email: 'TODO',
  phone: 'TODO',
  cin: 'TODO',
};
