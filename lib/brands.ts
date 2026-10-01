export interface BrandData {
  slug: string;
  name: string;
  oneLiner: string;
  description: string;
  offerings: string[];
  logo: string;
  image: string;
  indexStr: string;
}

export const BRANDS_DATA: BrandData[] = [
  {
    slug: 'essentials',
    name: 'Essentials',
    oneLiner: 'Everyday essentials for every home.',
    description:
      'BOGO Essentials brings together the household and personal care products that families use every day. From home care to personal hygiene, the brand focuses on quality, convenience, and value, making it easy to find trusted essentials under one roof.',
    offerings: [
      'Bath and body care',
      'Hair care products',
      'Oral care essentials',
      'Household cleaning products',
      'Laundry and fabric care',
      'Home and hygiene essentials',
    ],
    logo: '/Images/Logos/normalized/Essentials.png',
    image: '/Images/Outlet images/Essentials.png',
    indexStr: '01 / 11',
  },
  {
    slug: 'daily',
    name: 'Daily',
    oneLiner: 'Your destination for everyday food essentials.',
    description:
      'BOGO Daily brings together a comprehensive range of packaged food products that households rely on every day. From pantry staples to dairy and beverages, the brand offers trusted food brands that make everyday shopping convenient, reliable, and affordable.',
    offerings: [
      'Packaged grocery products',
      'Rice, grains, and pulses',
      'Dairy products',
      'Snacks and confectionery',
      'Beverages and packaged drinks',
      'Frozen and packaged food products',
    ],
    logo: '/Images/Logos/normalized/Daily.png',
    image: '/Images/Outlet images/Daily.png',
    indexStr: '02 / 11',
  },
  {
    slug: 'farms',
    name: 'Farms',
    oneLiner: 'Pure. Organic. Naturally better.',
    description:
      'BOGO Farms is dedicated to bringing organically grown food products to customers who value healthy and sustainable living. By working with trusted farmers and responsible producers, the brand delivers fresh, natural, and chemical-conscious products from farm to shelf.',
    offerings: [
      'Organic fruits',
      'Organic vegetables',
      'Organic food products',
      'Organic powders',
      'Natural health ingredients',
      'Farm-fresh seasonal produce',
    ],
    logo: '/Images/Logos/normalized/Farms.png',
    image: '/Images/Outlet images/Farms.png',
    indexStr: '03 / 11',
  },
  {
    slug: 'superfoods',
    name: 'Superfoods',
    oneLiner: 'Nutrition for a healthier tomorrow.',
    description:
      'BOGO Superfoods offers a curated range of nutrition-focused products that support healthier lifestyles. From everyday wellness to active living, the brand provides trusted products that help customers make informed choices for their health and wellbeing.',
    offerings: [
      'Protein supplements',
      'Functional foods',
      'Nutritional supplements',
      'Health snacks',
      'Vitamins and minerals',
      'Wellness products',
    ],
    logo: '/Images/Logos/normalized/Superfoods.png',
    image: '/Images/Outlet images/Superfoods.png',
    indexStr: '04 / 11',
  },
  {
    slug: 'health',
    name: 'Health',
    oneLiner: 'Wellness you can trust.',
    description:
      'BOGO Health is dedicated to supporting everyday wellbeing by bringing together trusted healthcare products, wellness essentials, and over-the-counter solutions in one convenient destination. The brand makes everyday healthcare more accessible through carefully selected products and reliable guidance.',
    offerings: [
      'Over-the-counter medicines',
      'Ayurvedic products',
      'Vitamins and supplements',
      'Personal healthcare essentials',
      'First aid products',
      'Wellness & preventive care solutions',
    ],
    logo: '/Images/Logos/normalized/Health.png',
    image: '/Images/Outlet images/Health.png',
    indexStr: '05 / 11',
  },
  {
    slug: 'beauty',
    name: 'Beauty',
    oneLiner: 'Beauty that inspires confidence.',
    description:
      'BOGO Beauty offers a curated collection of skincare, cosmetics, haircare, and personal care products from trusted brands. Designed for customers of all ages, it brings together beauty, self-care, and everyday essentials in one welcoming destination.',
    offerings: [
      'Skincare products',
      'Cosmetics and makeup',
      'Haircare products',
      'Fragrances',
      'Personal care essentials',
      'Beauty accessories',
    ],
    logo: '/Images/Logos/normalized/Beauty.png',
    image: '/Images/Outlet images/Beauty.png',
    indexStr: '06 / 11',
  },
  {
    slug: 'luxe',
    name: 'Luxe',
    oneLiner: 'Premium products. Curated experiences.',
    description:
      'BOGO Luxe offers an exclusive collection of imported, premium, and collaborative products for customers seeking something beyond the ordinary. From international gourmet selections to thoughtfully curated gift collections, BOGO Luxe delivers a refined shopping experience built around quality and exclusivity.',
    offerings: [
      'Imported food and beverages',
      'Premium gift collections',
      'International lifestyle products',
      'Collaborative brand collections',
      'Luxury personal care',
      'Exclusive seasonal products',
    ],
    logo: '/Images/Logos/normalized/Luxe.png',
    image: '/Images/Outlet images/Luxe.png',
    indexStr: '07 / 11',
  },
  {
    slug: 'divine',
    name: 'Divine',
    oneLiner: 'Faith. Tradition. Devotion.',
    description:
      'BOGO Divine offers a thoughtfully curated range of spiritual and devotional products that support everyday worship and meaningful celebrations. The brand combines tradition with convenience, making faith an accessible part of daily life.',
    offerings: [
      'Pooja essentials',
      'Incense and fragrances',
      'Flowers and offerings',
      'Idols and devotional items',
      'Festival collections',
      'Spiritual gifting products',
    ],
    logo: '/Images/Logos/normalized/Divine.png',
    image: '/Images/Outlet images/Divine.png',
    indexStr: '08 / 11',
  },
  {
    slug: 'paws',
    name: 'Paws',
    oneLiner: 'Everything your pets deserve.',
    description:
      'BOGO Paws is a complete destination for pet owners, bringing together quality products and professional services that support every stage of a pet’s life. From nutrition to grooming and veterinary care, every offering is designed with the wellbeing of pets in mind.',
    offerings: [
      'Pet food and treats',
      'Grooming products',
      'Pet accessories and toys',
      'Veterinary services',
      'Grooming and spa services',
      'Training and wellness solutions',
    ],
    logo: '/Images/Logos/normalized/Paws.png',
    image: '/Images/Outlet images/Paws.png',
    indexStr: '09 / 11',
  },
  {
    slug: 'play',
    name: 'Play',
    oneLiner: 'Where imagination comes to life.',
    description:
      'BOGO Play is an interactive destination where children and families can discover toys, games, learning experiences, and creative activities. Designed to encourage curiosity and imagination, it transforms shopping into an experience that children look forward to.',
    offerings: [
      'Educational toys',
      'Creative play products',
      'Games and puzzles',
      'Outdoor play equipment',
      'Collectibles and hobbies',
      'Family activity zones',
    ],
    logo: '/Images/Logos/normalized/Play.png',
    image: '/Images/Outlet images/Play.png',
    indexStr: '10 / 11',
  },
  {
    slug: 'classroom',
    name: 'Classroom',
    oneLiner: 'Learning beyond the classroom.',
    description:
      'BOGO Classroom is dedicated to supporting learners of every age through educational products, creative resources, and skill development opportunities. It brings together everything students, educators, and lifelong learners need in one inspiring destination.',
    offerings: [
      'Books and learning resources',
      'School and office stationery',
      'Educational kits',
      'Arts and craft supplies',
      'Skill development programmes',
      'Learning workshops and events',
    ],
    logo: '/Images/Logos/normalized/Classroom.png',
    image: '/Images/Outlet images/Classroom.png',
    indexStr: '11 / 11',
  },
];
