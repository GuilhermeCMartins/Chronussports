import { Chart } from 'chart.js';
import { useRef, useEffect } from 'react'
import styles from './styles.module.css'

interface Props {
  value: number;
}

const CircularProgress: React.FC<Props> = ({ value }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chart = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
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
              data: [value , 100 - value],
              backgroundColor: ["#00E4FF","#164092" ],
            }]
          },
          options: {
            cutout: "90%",
            elements:{
                arc:{
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
  }, [value]);

  return (
    <div className={styles.container}>
      <canvas ref={chartRef} />
      <div className={styles.inner_donut}>
        <h3>
          {value}%
        </h3> 
      </div>
    </div>
  );
}

export default CircularProgress;
