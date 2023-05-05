import styles from './styles.module.css'
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react'
import ProgressBar from '../../atoms/Progressbar/Progressbar';
import SelectYear from '../../atoms/Select/SelectYear';

interface Props {
  games: number,
  victories: number,
  draws: number,
  defeats: number,
  goals_scoreds: number,
  goals_conceded: number,
}

interface PerformanceProps {
  performance: Props;
}



export default function Performance({ performance }: PerformanceProps) {
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
              data: [performance.victories, performance.draws, performance.defeats],
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
  }, [performance]);
  

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Desempenho na temporada</h1>
        <SelectYear label='Ano'  ></SelectYear>
      </div>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.mychart}>
            <canvas ref={chartRef}  />
            <div className={styles.inner_donut}>
              <h3>
                {performance.games}
                <p className={styles.jogos}>Jogos</p>
  
              </h3> 
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.victories} > <h3>{performance.victories}</h3> <p>Vitórias</p></div>
            <div className={styles.draws}> <h3>{performance.draws}</h3><p>Empates</p></div>
            <div className={styles.defeats}> <h3>{performance.defeats}</h3><p>Derrotas</p></div>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.progress}>
                <h2>Progresso da temporada</h2>
                <div className={styles.goals}>
                    <h3>{performance.goals_scoreds}</h3>
                    <p>Gols marcados</p>
                </div>
                <div className={styles.goals}> 
                    <h3>{performance.goals_conceded}</h3>
                    <p>Gols sofridos</p>
                </div>
                <div className={styles.goals}>
                    <h3>10%</h3>
                    <p>Melhor que a temporada anterior</p>
                </div>
                <ProgressBar initialValue={50} finalValue={100} />
          </div>
        </div>
      </div>
    </section>
  )
}
