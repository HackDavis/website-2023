import Logo from './logo';
import styles from '@/styles/sponsors/sponsors2.module.scss';
import pepsi from '@/images/sponsors/pepsi.png';
import yakult from '@/images/sponsors/yakult.png';
import pocky from '@/images/sponsors/pocky.svg';
import cfc from '@/images/sponsors/cfc.jpg';
const Row3 = () => {
    return(
        <div className={`${styles.sponsorsRow} ${styles.row2}`}>
        <div className={`${styles.horizontalScroll} ${styles.primary}`}>
            <Logo imgSrc={cfc}/>
            <Logo imgSrc={pepsi}/>
            <Logo imgSrc={yakult}/>
            <Logo imgSrc={pocky}/>
        </div>
        <div className={`${styles.horizontalScroll} ${styles.secondary}`}>
            <Logo imgSrc={cfc}/>
            <Logo imgSrc={pepsi}/>
            <Logo imgSrc={yakult}/>
            <Logo imgSrc={pocky}/>
        </div>
      </div>
    )
}
export default Row3;