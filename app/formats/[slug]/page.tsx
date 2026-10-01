import PlaceholderPage from '@/components/PlaceholderPage';
import { notFound } from 'next/navigation';

const FORMATS_MAP: Record<string, string> = {
  square: 'Square',
  bazaar: 'Bazaar',
  mini: 'Mini',
};

export function generateStaticParams() {
  return Object.keys(FORMATS_MAP).map((slug) => ({ slug }));
}

export default async function FormatSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = FORMATS_MAP[slug];
  if (!name) return notFound();
  return <PlaceholderPage title={`BOGO ${name}`} />;
}
