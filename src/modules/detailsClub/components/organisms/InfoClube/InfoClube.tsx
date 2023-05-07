import styles from './styles.module.css'

interface Props {
    description?: string;
    wins?: number;
    losses?: number;
    draws?: number;
    games?: number;
    scored_goals?: number;
    goals_conceded?: number;
    average_fans?: number;
    awards?: number;
    president?: string;
    manage?: string;
}

interface InfoProps{
    info: Props
}


export default function InfoClube({info}: InfoProps){
    return (
        <section className={styles.section}>
            <div className={styles.text}>
                <h3 className={styles.title}>A Ascensão</h3>
                <p className={styles.description}>{info.description}</p>
            </div>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p>Vitória: {info.wins ? info.wins : "--"} </p>
                    <p>Derrotas:{info.losses ? info.losses : "--"}</p>
                    <p>Empates: {info.draws ? info.draws : "--"}</p>
                    <p>Jogos: {info.games ? info.games : "--"}</p>
                    <p>Gols Marcados:  {info.scored_goals ? info.scored_goals : "--"}</p>
                    <p>Gols sofridos: {info.goals_conceded ? info.goals_conceded : "--"}</p>
                </div>
                <div className={styles.info}>
                    <p>Média de público: {info.average_fans ? info.average_fans : "--"}</p>
                    <p>Premiação: {info.awards ? info.awards : "--"} </p>
                    <p>Presidente: {info.president ? info.president : "--"} </p>
                    <p>Gestão: {info.manage ? info.manage : "--"}</p>
                </div>
            </div>
           
        </section>
    )
}