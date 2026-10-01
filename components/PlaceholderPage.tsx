import Link from 'next/link';

interface PlaceholderPageProps {
  title: string;
  category?: string;
  statusNote?: string;
}

export default function PlaceholderPage({
  title,
  category = 'Institutional Documentation',
  statusNote = 'Documentation to be supplied by legal counsel. This route is an authoritative structural placeholder for the BOGO retail ecosystem.',
}: PlaceholderPageProps) {
  return (
    <main id="main-content" style={{ minHeight: '60vh', padding: '8rem 0 6rem', backgroundColor: '#FAF8F5' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <Link
            href="/"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#0B192C',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            &larr; Back to Overview
          </Link>
        </div>

        <div style={{ borderTop: '2px solid #0B192C', paddingTop: '2rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#EB6A3B',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            {category}
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 500,
              color: '#0B192C',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              color: '#4A5568',
              lineHeight: 1.6,
              maxWidth: '620px',
              marginBottom: '2rem',
            }}
          >
            {statusNote}
          </p>

          <div
            style={{
              padding: '1.25rem 1.5rem',
              background: 'rgba(11, 25, 44, 0.04)',
              borderLeft: '3px solid #0B192C',
              borderRadius: '2px',
            }}
          >
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#0B192C',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              Status: Authoritative Placeholder
            </span>
            <span style={{ fontSize: '0.875rem', color: '#555555' }}>
              Official content pending formal release. All navigation links and bookmarks resolve without error.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
