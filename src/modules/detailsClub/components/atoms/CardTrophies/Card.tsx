import Image from 'next/image';
import styles from './styles.module.css'

interface Props{
    key: number,
    quantity_trophies: number;
    name_trophies: string;
    trophies_photo: string;
}

export default function Card(card: Props){
    return (
    <section className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={card.trophies_photo} fill={true} alt='Troféu'></Image>
                </div>
                <div className={styles.info}>
                    <h3>{card.quantity_trophies}</h3>
                    <p>{card.name_trophies}</p>
                </div>
            </div>
    </section>
       
    )
}