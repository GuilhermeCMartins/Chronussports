import styles from './style.module.css'


interface Sponsors {
    master: string;
    secondary: string;
    arm: string;
    shoulder: string;
}

interface InfoProps{
    info: Sponsors
}

export default function InfoJersey({info}: InfoProps){
    return <>
        <section className={styles.section}>
            <h1>Patrocinadores</h1>
            <div className={styles.container}>
                <div className={styles.sponsors}>
                    <h3>{info.master}</h3>
                    <h4>Master</h4>
                </div>
                <div className={styles.sponsors}>
                    <h3>{info.secondary}</h3>
                    <h4>Secundário</h4>
                </div>
                <div className={styles.sponsors}>
                    <h3>{info.arm}</h3>
                    <h4>Manga</h4>
                </div>
                <div className={styles.sponsors}>
                    <h3>{info.shoulder}</h3>
                    <h4>Ombro</h4>
                </div>
            </div>
           
        </section>
    </>
}