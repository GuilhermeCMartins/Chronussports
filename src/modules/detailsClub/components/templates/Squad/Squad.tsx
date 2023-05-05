import CarouselSquad from '../../organisms/CarouselSquad/CarouselSquad'
import styles from './styles.module.css'

interface Props {
    id: number;
    name: string;
    position: string; 
    drible: number;
    pace: number;
    shoot: number;
    defence: number;
    banner_img: string;
    carousel_img: string;
}

interface AthleteProps {
    athlete: Props[];
}

export default function Squad({athlete}: AthleteProps){
    return (
        <div className={styles.container}>   
            <div className={styles.title}>
               <h1>Elenco temporada 23</h1>
            </div>         

            <section className={styles.squad}>
                <CarouselSquad athlete={athlete}></CarouselSquad> 
            </section>
        </div>
    )
}