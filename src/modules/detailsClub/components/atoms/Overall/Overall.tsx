import { useRef, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Chart } from "chart.js";

interface Props {
  overall: number;
}

export default function Overall({ overall }: Props) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chart = useRef<Chart<"doughnut"> | null>(null);
  const [showChart, setShowChart] = useState(false);

  const maxScale = 110;
  const scaledValue = (overall / maxScale) * 100;

  useEffect(() => {
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
            datasets: [
              {
                data: [scaledValue, 100 - scaledValue ],
                backgroundColor: ["#00E4FF", "rgba(0, 240, 255, 0.24)"],
              },
            ],
          },
          options: {
            cutout: "97%",
            rotation: 90,
            elements: {
              arc: {
                borderWidth: 0,
                borderRadius: 20,
                borderAlign: "center",
                spacing: -25,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
    }
  }, [scaledValue]);

  return (
    <div className={styles.container}>
        <canvas ref={chartRef}/>
        <div className={styles.inner_donut}>
          <h3>OVR</h3>
          <h1>{overall}</h1>
        </div>
    </div>
  );
}
