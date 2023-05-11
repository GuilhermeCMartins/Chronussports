import Image from "next/image";
import {useState} from 'react'

import InfoClube from "../../organisms/InfoClube/InfoClube";
import styles from './styles.module.css'
import SelectCareer from "../../atoms/SelectCareer/SelectCareer";

interface Props {
    year: number;
    performance : {
        description: string;
        wins: number;
        losses: number;
        draws: number;
        games: number;
        scored_goals:number;
        goals_conceded:number;
        average_fans: number;
        awards: number;
        president: string;
        manage: string;
    }
}

interface CareerProps{
    career: Props[]
}


type Option = {
    id: number;
    year: number;
};

export default function Career({career}: CareerProps){
    const [selectedYear, setSelectedYear] = useState<Option>({id: 1, year: 2023});

  const options: Option[] = career.map((performance, index) => ({
    id: index,
    year: performance.year,
  }));

  const activeYear = selectedYear?.year || new Date().getFullYear();

  const activeHistory = career.find((p) => p.year === activeYear)?.performance;


  const info = {
        description: activeHistory?.description,
        wins: activeHistory?.wins,
        losses: activeHistory?.losses,
        draws: activeHistory?.draws,
        games: activeHistory?.games,
        scored_goals: activeHistory?.scored_goals,
        goals_conceded: activeHistory?.goals_conceded,
        average_fans: activeHistory?.average_fans,
        awards: activeHistory?.awards,
        president: activeHistory?.president,
        manage: activeHistory?.manage,
  };

    return (
        <section className={styles.section}>

            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Carreira</h1>
                    <div className={styles.selectCareer}>
                        <SelectCareer label="Ano" options={options} onChange={setSelectedYear} selectedValue={selectedYear} />
                    </div>
                </div>                

                <div className={styles.container_info}>
                    <div className={styles.container_image}><Image src='/assets/images/clubs/brasao_londrina.svg' width={400} height={400} alt=""  className={styles.image}></Image></div>
                    <div className={styles.text}><InfoClube info={info} ></InfoClube></div>
                </div>
            </div>
           
        </section>
    )
}