import styles from '../Header/styles.modules.scss';

import Image from 'next/image';

export function Header () {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
        </header>
    );
}