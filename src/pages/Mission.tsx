import styles from "../styles/pages/Mission.module.css";

export default function Mission() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.header}>Our Mission</h1>
            <p className={styles.subheader}>
                Bridging healthcare gaps via preparation, monitoring, and communication.
            </p>

            {/* Key stats */}
            <section className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statNumber}>30.1</div>
                    <div className={styles.statLabel}>
                        Maternal deaths per 100,000 in Oklahoma (4th highest in U.S.)
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statNumber}>237K</div>
                    <div className={styles.statLabel}>
                        Pilot program cost (Year 1)
                    </div>
                </div>
            </section>

            {/* Mission statement call-out */}
            <section className={styles.missionStatement}>
                <strong>“Bridge healthcare gaps via preparation, monitoring, and communication.”</strong>
            </section>

            {/* Why it matters */}
            <ul className={styles.bulletList}>
                <li>Reduce maternal complications in underserved areas.</li>
                <li>Equip community health workers with actionable data.</li>
                <li>Empower patients with low-literacy support tools.</li>
            </ul>
        </div>
    );
}
