import PlaceholderPage from '@/components/PlaceholderPage';
import { notFound } from 'next/navigation';

import { BRANDS_DATA } from '@/lib/brands';

export function generateStaticParams() {
  return BRANDS_DATA.map((brand) => ({ slug: brand.slug }));
}

export default async function BrandSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = BRANDS_DATA.find((b) => b.slug === slug);
  if (!brand) return notFound();
  return <PlaceholderPage title={`BOGO ${brand.name}`} />;
}
