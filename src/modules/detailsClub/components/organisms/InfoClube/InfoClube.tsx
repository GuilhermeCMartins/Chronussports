import styles from './styles.module.css'

interface Props {
    year: number;
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


export default function InfoClube(){
    return (
        <section className={styles.section}>
            <div className={styles.text}>
                <h3 className={styles.title}>A Ascensão</h3>
                <p className={styles.description}>História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.</p>
            </div>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p>Vitória: --</p>
                    <p>Derrotas: --</p>
                    <p>Empates: --</p>
                    <p>Jogos: --</p>
                    <p>Gols Marcados: --</p>
                    <p>Gols sofridos: --</p>
                </div>
                <div className={styles.info}>
                    <p>Média de público: --</p>
                    <p>Premiação: --</p>
                    <p>Presidente: --</p>
                    <p>Gestão: --</p>
                </div>
            </div>
           
        </section>
    )
}