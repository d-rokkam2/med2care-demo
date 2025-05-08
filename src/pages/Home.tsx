import styles from "../styles/pages/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>
                    Empowering Maternal Care Anywhere
                </h1>
                <p className={styles.heroSubtitle}>
                    Med2Care brings clinic-quality monitoring and support to pregnant
                    individuals in underserved areas.
                </p>
                <button className={styles.heroButton}>Request Demo</button>
            </section>

            {/* Features Preview */}
            <section>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <h2 className={styles.featureTitle}>Preparation Kits</h2>
                        <p className={styles.featureDesc}>
                            Enrollment packages with BP cuffs, thermometers, and more to
                            get started.
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <h2 className={styles.featureTitle}>Remote Monitoring</h2>
                        <p className={styles.featureDesc}>
                            Track vitals via basic or advanced home-monitoring kits.
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <h2 className={styles.featureTitle}>AI Chat Support</h2>
                        <p className={styles.featureDesc}>
                            SMS-based chatbot offering low-literacy guidance and alerts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <Link to="/mission" className={styles.ctaLink}>
                Learn More About Our Mission →
            </Link>
        </div>
    );
}

