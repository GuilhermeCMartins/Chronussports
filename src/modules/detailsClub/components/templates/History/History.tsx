import Image from "next/image";
import InfoClube from "../../organisms/InfoClube/InfoClube";
import styles from './styles.module.css'

export default function History(){
    return (
        <section className={styles.section}>
            <h1>Nossa história</h1>

            <div className={styles.container_info}>
                <div className={styles.image}><Image src='/assets/images/clubs/brasao_londrina.svg' width={300} height={300} alt=""></Image></div>
                <div className={styles.text}><InfoClube></InfoClube></div>
            </div>
        </section>
    )
}