import styles from './styles.module.css';
import { useState } from 'react';

import SelectYear from '../../atoms/SelectPerformance/SelectYear';
import GraphPerformance from '../../molecules/GraphicPerformance/GraphPerformance';
import SeasonProgress from '../../molecules/SeasonProgress/SeasonProgress';

interface Props {
  year: number,
  performance: {
    games: number;
    victories: number;
    draws: number;
    defeats: number;
    goals_scoreds: number;
    goals_conceded: number;
  }
}

interface PerformanceProps{
  performances: Props[]
}

type Option = {
  id: number;
  year: number;
};


export default function Performance({ performances }: PerformanceProps) {
  const [selectedYear, setSelectedYear] = useState<Option>({id: 1, year: 2023});

  const options: Option[] = performances.map((performance, index) => ({
    id: index,
    year: performance.year,
  }));

  const activeYear = selectedYear?.year || new Date().getFullYear();

  const activeHistory = performances.find((p) => p.year === activeYear)?.performance;

  const graph = {
    games: activeHistory?.games || 0,
    victories: activeHistory?.victories || 0,
    draws: activeHistory?.draws || 0,
    defeats: activeHistory?.defeats || 0,
  };

  const progress = {
    goals_scoreds: activeHistory?.goals_scoreds || 0,
    goals_conceded: activeHistory?.goals_conceded || 0,
  };

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Desempenho na temporada</h1>
        <SelectYear label="Ano" options={options} onChange={setSelectedYear} selectedValue={selectedYear}/>
      </div>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <GraphPerformance stats={graph} />
        </div>
        <div className={styles.container_right}>
          <SeasonProgress stats={progress} />
        </div>
      </div>
    </section>
  );
}
