import { Chart } from 'chart.js';
import { useRef, useEffect, useState } from 'react';
import styles from './styles.module.css';

interface Props {
  value: number;
}

const CircularProgress: React.FC<Props> = ({ value }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chart = useRef<Chart<"doughnut"> | null>(null);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChart(true);

      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");

        if (ctx) {
          if (chart.current) {
            chart.current.destroy();
          }

          chart.current = new Chart(ctx, {
            type: "doughnut",
            data: {
              datasets: [{
                data: [value, 100 - value],
                backgroundColor: ["#00E4FF", "#164092"],
              }]
            },
            options: {
              cutout: "90%",
              elements: {
                arc: {
                  borderWidth: 0,
                  borderRadius: 20,
                  borderAlign: "center",
                  spacing: -25
                },
              },
              plugins: {
                legend: {
                  display: false
                },
              }
            }
          });

        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer + (showChart ? ` ${styles.visible}` : '')}>
        <canvas ref={chartRef}  className={styles.chartCanvas}/>
          <div className={styles.inner_donut}>
            <h3>
              {value}%
            </h3>
          </div>
      </div>
    </div>
  );
}

export default CircularProgress;
