import styles from './styles.module.css'

interface ProgressBarProps {
  initialValue: number;
  finalValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ initialValue, finalValue }) => {
  const percentage = (initialValue / finalValue) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        <div
          className={styles.bar}
          style={{
            width: `${percentage}%`,
            height: "100%",
            borderRadius: "16px"
          }}
        />
      </div>
      <div className={styles.percentageContainer}>
        <p className={styles.percentage}>{percentage}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
