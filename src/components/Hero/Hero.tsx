import { HeroBackground } from '../HeroBackground/HeroBackground';
import styles from './hero.module.css';

export function Hero() {
    return (
        <div className={styles.heroWrap}>
            <HeroBackground />
            <h1 className={styles.heroTitle}>
                {`Do you want to Learn more About `}
                <span className={styles.heroTitle__spacing}>{`cryptocurrencies `}</span>
                <span className={styles.heroTitle__gradient}>quickly and easily ?</span>
            </h1>
            <p className={styles.heroDescr}>
                Subscribe to our channel to learn more
            </p>
            <div className={styles.heroStatsWrap}>
                <ul className={`${styles.statList} list-reset`}>
                    <li className={styles.statList__item}>
                        <p className={styles.statList__item_title}>
                            20k+
                        </p>
                        <span className={styles.statList__item_descr}>
                            subscribers
                        </span>
                    </li>
                    <li className={styles.statList__item}>
                        <p className={styles.statList__item_title}>
                            19,5K
                        </p>
                        <span className={styles.statList__item_descr}>
                            successful cases
                        </span>
                    </li>
                    <li className={styles.statList__item}>
                        <p className={styles.statList__item_title}>
                            4.8/5
                        </p>
                        <span className={styles.statList__item_descr}>
                            rating
                        </span>
                    </li>
                </ul>
            </div>
            <button className={`${styles.heroBtn} btn-reset`}>
                <span className={styles.heroBtn__text}>
                    Join Whatsapp
                </span>
            </button>
            <div className={styles.heroAppsWrap}>
                <a className={styles.appLink} href="#">
                    <svg className={styles.appLink__icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.9315 21.6597L15.1307 16.4673L13.1555 14.2797L5.9315 21.6597ZM2.5715 2.5473C2.4647 2.7369 2.3999 2.9553 2.3999 3.1977V21.3477C2.3999 21.6837 2.5259 21.9717 2.7155 22.1997L11.8679 12.8517L2.5715 2.5473ZM20.9759 11.3781L17.7683 9.5673L14.5019 12.9045L16.8431 15.5001L20.9759 13.1685C21.1467 13.0837 21.2935 12.9573 21.4025 12.8008C21.5116 12.6443 21.5795 12.4629 21.5999 12.2733C21.5795 12.0837 21.5116 11.9023 21.4025 11.7458C21.2935 11.5893 21.1467 11.4629 20.9759 11.3781ZM16.0379 8.5905L4.9739 2.3457L13.2131 11.4777L16.0379 8.5905Z" fill="#F2F2F2" fill-opacity="1" />
                    </svg>
                    <div className={styles.appLink__textWrap}>
                        <p className={styles.appLink__textWrap_title}>
                            get it on
                        </p>
                        <span className={styles.appLink__textWrap_descr}>
                            Google play
                        </span>
                    </div>
                </a>
                <a className={styles.appLink} href="#">
                    <svg className={styles.appLink__icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0768 16.634C20.5812 17.7332 20.3424 18.224 19.704 19.196C18.8136 20.552 17.556 22.2416 15.9996 22.256C14.6172 22.268 14.262 21.356 12.384 21.3668C10.5072 21.3764 10.116 22.2728 8.73238 22.2596C7.17598 22.2452 5.98438 20.72 5.09278 19.3628C2.60038 15.5708 2.33998 11.1188 3.87718 8.75125C4.96918 7.07005 6.69358 6.08605 8.31358 6.08605C9.96358 6.08605 11.0016 6.99085 12.3648 6.99085C13.6884 6.99085 14.4948 6.08365 16.4028 6.08365C17.8428 6.08365 19.3716 6.86965 20.46 8.22565C16.8936 10.1804 17.472 15.2732 21.0768 16.634ZM14.9556 4.56925C15.648 3.67885 16.1748 2.42365 15.984 1.13965C14.8512 1.21765 13.5276 1.93765 12.7536 2.87725C12.0528 3.72925 11.4732 4.99285 11.6976 6.22165C12.9336 6.25885 14.2128 5.52085 14.9556 4.56925Z" fill="#F2F2F2" fill-opacity="1" />
                    </svg>

                    <div className={styles.appLink__textWrap}>
                        <p className={styles.appLink__textWrap_title}>
                            Available on the
                        </p>
                        <span className={styles.appLink__textWrap_descr}>
                            App Store
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
}