import CircularProgress from '../../atoms/CircularProgress/CircularProgress'
import styles from './styles.module.css'

interface Props {
    name: string;
    position: string; 
    drible: number;
    pace: number;
    shoot: number;
    defence: number;
}

interface StatsProps{
    ath: Props;
}


export default function StatsPlayer(athlete: StatsProps){
    return(
    <>
        <section className={styles.section}>
            <h3>Atributos Técnicos</h3>
            <div className={styles.circular_progress}>
                <div className={styles.legend}>
                    <CircularProgress value={athlete.ath.pace}></CircularProgress>
                    <h3>Pace</h3>
                </div>
                
                <div className={styles.legend}>
                    <CircularProgress value={athlete.ath.defence}></CircularProgress>
                    <h3>Defence</h3>
                </div>
                
                <div className={styles.legend}>
                    <CircularProgress value={athlete.ath.drible}></CircularProgress>
                    <h3>Drible</h3>
                </div>

                <div className={styles.legend}>
                    <CircularProgress value={athlete.ath.shoot}></CircularProgress>
                    <h3>Shoot</h3>
                </div>
                
            </div>
        </section>
    </>
        
    )
    
}