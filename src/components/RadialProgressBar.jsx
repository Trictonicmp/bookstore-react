import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import styles from '../css/components/radialprogressbar.module.css';

const RadialProgressBar = (props) => {
  const { percentage } = props;
  const percentageBar = useRef();

  const calculateProgressOffset = () => ((1 - percentage) * 32);
  const calculatedOffset = calculateProgressOffset();

  useEffect(() => {
    percentageBar.current.animate([
      { strokeDashoffset: 32 },
      { strokeDashoffset: calculatedOffset },
    ], {
      duration: 1000,
      animationTimingFunction: 'ease-out',
    });
  }, []);

  return (
    <div className={styles.percent}>
      <svg className={styles.circlesContainer} width="100%" viewBox="-0.51 -0.5 10.9 11">
        <circle
          className={`${styles.circleSvg} ${styles.progressBackgorund}`}
          cx="5"
          cy="5"
          r="5"
        />
        <circle
          className={`${styles.circleSvg} ${styles.progressProgress}`}
          cx="5"
          cy="5"
          r="5"
          transform="rotate(-90 5 5)"
          ref={percentageBar}
          strokeDashoffset={calculatedOffset}
        />
      </svg>
    </div>
  );
};

RadialProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default RadialProgressBar;
