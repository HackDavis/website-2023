import styles from '@/styles/navbar.module.scss';
import NavbarMobile from './navbarMobile';
import NavbarDesktop from './navbarDesktop';

const Navbar = () => (
  <div className={styles.container}>
    {/* <div className={styles.mobile}>
                <NavbarMobile/>
            </div> */}
    <div className={styles.desktop}>
      <NavbarDesktop />
    </div>
  </div>
);

export default Navbar;
