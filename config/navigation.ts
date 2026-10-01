export interface NavItem {
  label: string;
  href: string;
  targetId?: string;
  external?: boolean;
}

export interface HeaderMenuItem {
  id: string;
  num: string;
  label: string;
  href: string;
}

export interface BrandsColumnData {
  allBrands: NavItem;
  subCol1: NavItem[];
  subCol2: NavItem[];
}

export interface NavigationConfig {
  header: HeaderMenuItem[];
  footer: {
    company: {
      title: string;
      links: NavItem[];
    };
    brands: {
      title: string;
      allBrands: NavItem;
      subCol1: NavItem[];
      subCol2: NavItem[];
    };
    formats: {
      title: string;
      links: NavItem[];
    };
    programs: {
      title: string;
      links: NavItem[];
    };
    connect: {
      title: string;
      links: NavItem[];
    };
  };
  companyDetails: {
    entityName: string;
    address: string;
    email: string;
    phone: string;
    cin: string;
  };
  socialLinks: NavItem[];
  bottomBar: {
    privacyPolicy: NavItem;
    termsOfUse: NavItem;
    website: NavItem;
  };
}

export const navigationConfig: NavigationConfig = {
  header: [
    { id: 'ecosystem', num: '01', label: 'Ecosystem', href: '#ecosystem' },
    { id: 'brands', num: '02', label: 'Brands', href: '#brands' },
    { id: 'formats', num: '03', label: 'Formats', href: '#formats' },
    { id: 'technology', num: '04', label: 'Technology', href: '#technology' },
    { id: 'contact', num: '', label: 'Contact', href: '#closing' },
  ],
  footer: {
    company: {
      title: 'Company',
      links: [
        { label: 'About BOGO', href: '#hero', targetId: 'hero' },
        { label: 'Vision & Mindset', href: '#hero', targetId: 'hero' },
        { label: 'The Ecosystem', href: '#ecosystem', targetId: 'ecosystem' },
        { label: 'Growth Roadmap', href: '#ecosystem', targetId: 'ecosystem' },
        { label: 'Technology', href: '#technology', targetId: 'technology' },
        { label: 'BOGO Go', href: '#ecosystem', targetId: 'ecosystem' },
      ],
    },
    brands: {
      title: 'Brands',
      allBrands: { label: 'All Brands', href: '#brands', targetId: 'brands' },
      subCol1: [
        { label: 'Essentials', href: '#brands', targetId: 'brands' },
        { label: 'Daily', href: '#brands', targetId: 'brands' },
        { label: 'Farms', href: '#brands', targetId: 'brands' },
        { label: 'Superfoods', href: '#brands', targetId: 'brands' },
        { label: 'Health', href: '#brands', targetId: 'brands' },
        { label: 'Beauty', href: '#brands', targetId: 'brands' },
      ],
      subCol2: [
        { label: 'Luxe', href: '#brands', targetId: 'brands' },
        { label: 'Divine', href: '#brands', targetId: 'brands' },
        { label: 'Paws', href: '#brands', targetId: 'brands' },
        { label: 'Play', href: '#brands', targetId: 'brands' },
        { label: 'Classroom', href: '#brands', targetId: 'brands' },
      ],
    },
    formats: {
      title: 'Formats',
      links: [
        { label: 'All Formats', href: '#formats', targetId: 'formats' },
        { label: 'Square', href: '#formats', targetId: 'formats' },
        { label: 'Bazaar', href: '#formats', targetId: 'formats' },
        { label: 'Mini', href: '#formats', targetId: 'formats' },
      ],
    },
    programs: {
      title: 'Programs',
      links: [
        { label: 'Life', href: '#ecosystem', targetId: 'ecosystem' },
        { label: 'Companion', href: '#ecosystem', targetId: 'ecosystem' },
        { label: 'Affairs', href: '#ecosystem', targetId: 'ecosystem' },
        { label: 'Partner', href: '#ecosystem', targetId: 'ecosystem' },
      ],
    },
    connect: {
      title: 'Connect',
      links: [
        { label: 'Contact', href: '#closing', targetId: 'closing' },
        { label: 'Investors', href: '#closing', targetId: 'closing' },
        { label: 'Careers', href: '#closing', targetId: 'closing' },
        { label: 'Locations', href: '#formats', targetId: 'formats' },
      ],
    },
  },
  companyDetails: {
    entityName: 'TODO',
    address: 'TODO',
    email: 'TODO',
    phone: 'TODO',
    cin: 'TODO',
  },
  socialLinks: [
    { label: 'LinkedIn', href: 'TODO', external: true },
    { label: 'Instagram', href: 'TODO', external: true },
    { label: 'YouTube', href: 'TODO', external: true },
    { label: 'X', href: 'TODO', external: true },
  ],
  bottomBar: {
    privacyPolicy: { label: 'Privacy Policy', href: '/privacy' },
    termsOfUse: { label: 'Terms of Use', href: '/terms' },
    website: { label: 'www.bogo.com', href: 'https://www.bogo.com', external: true },
  },
};
