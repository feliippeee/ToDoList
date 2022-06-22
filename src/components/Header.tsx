import styles from './Header.module.css';
import { Logo } from './Logo';
export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Logo />
            </div>
        </div>
    )
}