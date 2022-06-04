import styles from '../css/components/progress.module.css';

import RadialProgressBar from './RadialProgressBar';

const Progress = () => (
  <>
    <RadialProgressBar percentage="0.64" />
    <div className={styles.percentageDetails}>
      <h3 className={styles.percentageTitle}>64%</h3>
      <span className={styles.percentageSubtitle}>Completed</span>
    </div>
  </>
);

export default Progress;
