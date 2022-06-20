import styles from './Header.module.css';
import Logo from '../assets/logo.svg';
export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={Logo} alt='logotipo do ignite feed' />
            </div>
        </div>
    )
}