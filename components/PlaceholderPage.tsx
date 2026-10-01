import Link from 'next/link';

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <main id="main-content" style={{ minHeight: '65vh', padding: '9rem 0 7rem', backgroundColor: '#FAF8F5' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Link
            href="/"
            style={{
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: '#0B192C',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            &larr; Back to Home
          </Link>
        </div>

        <div style={{ borderTop: '2px solid #0B192C', paddingTop: '2.5rem' }}>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              fontWeight: 500,
              color: '#0B192C',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#4A5568',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            This page is coming soon.
          </p>
        </div>
      </div>
    </main>
  );
}
