import styles from './hero-background.module.css';
import imageOne from '../../assets/client1.jpg';
import imageTwo from '../../assets/client2.jpg';
import imageThree from '../../assets/client3.jpg';
import imageFour from '../../assets/client4.jpg';

export function HeroBackground() {
    return (
        <div className={styles.heroBackgroundWrap}>
            <div className={`${styles.client} ${styles.client_one}`}>
                <div className={styles.clientTitleWrap}>
                    <img className={styles.clientImage} src={imageOne} alt="happy client" />
                    <div className={styles.clientTitleTextWrap}>
                        <p className={styles.clientName}>
                            Lorenzo
                        </p>
                        <span className={styles.clientTelegram}>
                            @lorenzoo
                        </span>
                    </div>
                </div>
                <p className={styles.clientDescr}>
                    Amazing Telegram bot! Provides real-time crypto prices and news
                </p>
            </div>
            <div className={`${styles.client} ${styles.client_two}`}>
                <div className={styles.clientTitleWrap}>
                    <img className={styles.clientImage} src={imageTwo} alt="happy client" />
                    <div className={styles.clientTitleTextWrap}>
                        <p className={styles.clientName}>
                            Adalina
                        </p>
                        <span className={styles.clientTelegram}>
                            @ada
                        </span>
                    </div>
                </div>
                <p className={styles.clientDescr}>
                    Must-have bot for crypto traders. Accurate signals and analysis
                </p>
            </div>
            <div className={`${styles.client} ${styles.client_three}`}>
                <div className={styles.clientTitleWrap}>
                    <img className={styles.clientImage} src={imageThree} alt="happy client" />
                    <div className={styles.clientTitleTextWrap}>
                        <p className={styles.clientName}>
                            Alexander
                        </p>
                        <span className={styles.clientTelegram}>
                            @alex_x
                        </span>
                    </div>
                </div>
                <p className={styles.clientDescr}>
                    Superb cryptocurrency bot! Quick updates and reliable data
                </p>
            </div>
            <div className={`${styles.client} ${styles.client_four}`}>
                <div className={styles.clientTitleWrap}>
                    <img className={styles.clientImage} src={imageFour} alt="happy client" />
                    <div className={styles.clientTitleTextWrap}>
                        <p className={styles.clientName}>
                            Rushana
                        </p>
                        <span className={styles.clientTelegram}>
                            @Hana
                        </span>
                    </div>
                </div>
                <p className={styles.clientDescr}>
                    Efficient and user-friendly bot. Simplifies crypto trading tasks
                </p>
            </div>
        </div>
    );
}