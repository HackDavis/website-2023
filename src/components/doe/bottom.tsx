import styles from '@/styles/doe/bottom.module.scss';
import {
  TruckBottomPiece,
  TruckBottomPieceLarge,
  TruckBottomWheel,
} from '@/assets/truck/truckBottom';

const Bottom = () => (
  <div className={styles.container}>
    <TruckBottomPiece />
    <TruckBottomPieceLarge />
    <TruckBottomWheel />
    <TruckBottomWheel />
  </div>
);

export default Bottom;
