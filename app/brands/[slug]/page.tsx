import PlaceholderPage from '@/components/PlaceholderPage';
import { notFound } from 'next/navigation';

const BRANDS_MAP: Record<string, string> = {
  essentials: 'Essentials',
  daily: 'Daily',
  farms: 'Farms',
  superfoods: 'Superfoods',
  health: 'Health',
  beauty: 'Beauty',
  luxe: 'Luxe',
  divine: 'Divine',
  paws: 'Paws',
  play: 'Play',
  classroom: 'Classroom',
};

export function generateStaticParams() {
  return Object.keys(BRANDS_MAP).map((slug) => ({ slug }));
}

export default async function BrandSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = BRANDS_MAP[slug];
  if (!name) return notFound();
  return <PlaceholderPage title={`BOGO ${name}`} />;
}
