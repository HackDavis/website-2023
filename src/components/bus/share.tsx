import styles from '@/styles/bus/share.module.scss';
import { ShareBackground } from '@/assets/share';

const Share = () => (
  <div style={{ marginBottom: 105 }}>
    <div className={styles.container}>
      <ShareBackground />
    </div>
    <div
      style={{
        position: 'static',
        backgroundColor: 'var(--color-grey-1)',
        width: 'calc(100% + 16px)',
        height: 12,
        borderRadius: 10,
        marginLeft: -8,
        marginRight: -8,
      }}
    ></div>
    <div
      style={{
        position: 'static',
        width: '100%',
        height: 38,
        backgroundColor: '#BEBEBE',
        borderRadius: '0 0 24px 24px',
      }}
    ></div>
  </div>
);

export default Share;
