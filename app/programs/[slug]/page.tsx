import PlaceholderPage from '@/components/PlaceholderPage';
import { notFound } from 'next/navigation';

const PROGRAMS_MAP: Record<string, string> = {
  life: 'Life',
  companion: 'Companion',
  affairs: 'Affairs',
  partner: 'Partner',
};

export function generateStaticParams() {
  return Object.keys(PROGRAMS_MAP).map((slug) => ({ slug }));
}

export default async function ProgramSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = PROGRAMS_MAP[slug];
  if (!name) return notFound();
  return <PlaceholderPage title={`BOGO ${name}`} />;
}
