import Image from 'next/image';
import styles from './Roadmap.module.css';

const STRATEGIC_PHASES = [
  {
    num: 'Phase 01',
    title: 'Brand & Infrastructure Foundation',
    timeline: 'Foundation',
    desc: 'Establish category brand standards, core supply relationships, and flagship architecture.',
    status: 'Active',
  },
  {
    num: 'Phase 02',
    title: 'Format Rollout & Direct Supply',
    timeline: 'Expansion',
    desc: 'Deploy Square, Bazaar, and Mini footprint with farm-to-shelf distribution hubs.',
    status: 'Scheduled',
  },
  {
    num: 'Phase 03',
    title: 'Connected Technology Integration',
    timeline: 'Omnichannel',
    desc: 'Roll out proprietary retail intelligence, assisted checkout, and unified loyalty programs.',
    status: 'Scheduled',
  },
  {
    num: 'Phase 04',
    title: 'Full Ecosystem Scale',
    timeline: 'Maturity',
    desc: 'Comprehensive multi-city density, extended partner services, and national network synergy.',
    status: 'Vision',
  },
];

const TECH_PHASES = [
  { step: '01', name: 'Know', desc: 'Customer data intelligence & preference mapping', img: '/Images/Technology section/1 Know .webp' },
  { step: '02', name: 'Unify', desc: 'Unified inventory & single view of customer', img: null },
  { step: '03', name: 'Assist', desc: 'Assisted operations & smart floor navigation', img: '/Images/Technology section/2 Assist .webp' },
  { step: '04', name: 'Optimize', desc: 'Automated replenishment & shelf analytics', img: null },
  { step: '05', name: 'Discover', desc: 'Interactive digital discovery & localized curation', img: '/Images/Technology section/3 Discover .webp' },
  { step: '06', name: 'Scale', desc: 'Autonomous logistics & ecosystem data flywheel', img: null },
];

export default function Roadmap() {
  return (
    <section className={`band-navy ${styles.sectionRoadmap}`} id="roadmap" aria-labelledby="roadmap-title">
      <div className="container">
        
        <div className="section-meta">
          <span className="section-num">05</span>
          <span>Strategic Roadmap</span>
        </div>

        <div className={styles.roadmapHeader}>
          <h2 id="roadmap-title" className={styles.roadmapTitle}>
            Phased Ecosystem Rollout
          </h2>
          <p className={styles.roadmapSubtitle}>
            A disciplined development timeline aligning physical expansion with proprietary technology maturity.
          </p>
        </div>

        {/* Primary Timeline: Four Strategic Phases */}
        <div className={styles.strategicTimeline} id="strategic-timeline-track">
          <div className={`${styles.timelineTrackLine} hairline-dark`} aria-hidden="true" />
          
          <div className={styles.phasesGrid}>
            {STRATEGIC_PHASES.map((phase) => (
              <div key={phase.num} className={styles.phaseCard}>
                <div className={styles.phaseNodeMarker}>
                  <span className={styles.nodeDot} />
                  <span className={styles.phaseBadge}>{phase.status}</span>
                </div>
                <span className={styles.phaseStep}>{phase.num}</span>
                <h3 className={styles.phaseHeading}>{phase.title}</h3>
                <p className={styles.phaseBody}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className={`hairline-dark ${styles.roadmapDivider}`} aria-hidden="true" />

        {/* Secondary Progress Row: Six Technology Phases */}
        <div className={styles.techPhasesBlock}>
          <div className={styles.techHeader}>
            <h3 className={styles.techSectionTitle}>Technology Maturity Framework</h3>
            <span className={styles.techSectionSub}>Proprietary Retail Intelligence Systems</span>
          </div>

          <div className={styles.techGrid}>
            {TECH_PHASES.map((tp) => (
              <div key={tp.step} className={styles.techCard}>
                <span className={styles.techStepNum}>{tp.step}</span>
                <h4 className={styles.techStepName}>{tp.name}</h4>
                <p className={styles.techStepDesc}>{tp.desc}</p>
                {tp.img && (
                  <div className={styles.techImgBox}>
                    <Image
                      src={tp.img}
                      alt={`Technology concept: ${tp.name}`}
                      width={300}
                      height={180}
                      className={styles.techImg}
                      loading="lazy"
                    />
                    <span className="concept-caption">Concept visualisation</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
