import ProgressBar from '../../atoms/Progressbar/Progressbar'
import styles from './styles.module.css'

interface Props {
    goals_scoreds: number;
    goals_conceded: number;
}

interface SeasonProps{
    stats: Props
}

export default function SeasonProgress({stats}: SeasonProps){
    return (<>
     <div className={styles.progress}>
                <h2>Progresso da temporada</h2>
                <div className={styles.goals}>
                    <h3>{stats.goals_scoreds}</h3>
                    <p>Gols marcados</p>
                </div>
                <div className={styles.goals}> 
                    <h3>{stats.goals_conceded}</h3>
                    <p>Gols sofridos</p>
                </div>
                <div className={styles.goals}>
                    <h3>10%</h3>
                    <p>Melhor que a temporada anterior</p>
                </div>
                <ProgressBar initialValue={50} finalValue={100} />
        </div>
    </>)
}