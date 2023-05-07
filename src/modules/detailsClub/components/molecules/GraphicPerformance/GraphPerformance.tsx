import {useRef, useEffect} from 'react'
import Chart from 'chart.js/auto';

import styles from './styles.module.css'

interface Props {
      games: number,
      victories: number,
      draws: number,
      defeats: number,    
}

interface GraphProps{
    stats: Props
}

export default function GraphPerformance({stats}: GraphProps){
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
              labels: ["Vitórias", "Empates", "Derrotas"],
              datasets: [{
                data: [stats.victories, stats.draws, stats.defeats],
                backgroundColor: ["#00E4FF", "#164092", "#CF2D2D"],
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
    }, [stats]);

    return (
        <>
        <div className={styles.mychart}>
            <canvas ref={chartRef}  />
            <div className={styles.inner_donut}>
              <h3>
                {stats.games}
                <p className={styles.jogos}>Jogos</p>
  
              </h3> 
            </div>
        </div>
        <div className={styles.stats}>
            <div className={styles.victories} > <h3>{stats.victories}</h3> <p>Vitórias</p></div>
            <div className={styles.draws}> <h3>{stats.draws}</h3><p>Empates</p></div>
            <div className={styles.defeats}> <h3>{stats.defeats}</h3><p>Derrotas</p></div>
          </div>
        </>
    )
}