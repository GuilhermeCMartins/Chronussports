import styles from './styles.module.css'

interface Props {
    name: string;
    position: string;
    initial_year: number;
    final_year: number;
}

interface AdministratorsProps{
    adm: Props;
}


export default function Administrators({adm}: AdministratorsProps){
    return (
        <section className={styles.section}>
            <h1>{adm?.name}</h1>
            <h3>{adm?.position} ({adm?.initial_year}-{adm?.final_year})</h3>
        </section>
    )
}