import Image from "next/image";
import InfoClube from "../../organisms/InfoClube/InfoClube";
import styles from './styles.module.css'
import SelectCareer from "../../atoms/SelectCareer/SelectCareer";

export default function History(){
    return (
        <section className={styles.section}>

            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Carreira</h1>
                    <div className={styles.selectCareer}>
                        <SelectCareer label="2016"/>
                    </div>
                </div>
                

                

                <div className={styles.container_info}>
                    <div className={styles.image}><Image src='/assets/images/clubs/brasao_londrina.svg' width={300} height={300} alt=""></Image></div>
                    <div className={styles.text}><InfoClube></InfoClube></div>
                </div>
            </div>
           
        </section>
    )
}