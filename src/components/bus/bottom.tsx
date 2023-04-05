import styles from '@/styles/bus/bottom.module.scss';
import {
  TruckBottomPiece,
  TruckBottomPieceLarge,
  TruckBottomWheel,
} from '@/assets/truckBottom';

const Bottom = () => (
  <div className={styles.container}>
    <TruckBottomPiece />
    <TruckBottomPieceLarge />
    <TruckBottomWheel />
    <TruckBottomWheel />
  </div>
);

export default Bottom;
