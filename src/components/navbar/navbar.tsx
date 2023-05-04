import styles from '@/styles/navbar/navbar.module.scss';
import NavbarMobile from './navbarMobile';
import NavbarDesktop from './navbarDesktop';

const Navbar = () => (
  <div className={styles.container}>
    <nav className={styles.mobile}>
      <NavbarMobile />
    </nav>
    <nav className={styles.desktop}>
      <NavbarDesktop />
    </nav>
  </div>
);

export default Navbar;
