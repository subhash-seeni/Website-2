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

export default function Roadmap() {
  return (
    <section className={`band-light ${styles.sectionRoadmap}`} id="roadmap" aria-labelledby="roadmap-title">
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
            A disciplined development timeline aligning physical expansion with long-term infrastructure maturity.
          </p>
        </div>

        {/* Primary Timeline: Four Strategic Growth Phases */}
        <div className={styles.strategicTimeline} id="strategic-timeline-track">
          <div className={`${styles.timelineTrackLine} hairline-light`} aria-hidden="true" />
          
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

      </div>
    </section>
  );
}
