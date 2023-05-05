import Card from '../../atoms/CardTrophies/Card'
import CarouselTrophies from '../../organisms/CarouselTrophies/Carousel';
import styles from './styles.module.css'

interface Props {
    key: number,
    quantity_trophies: number;
    name_trophies: string;
    trophies_photo: string;
}
  
interface CardsProps {
    cards: Props[];
}
  


export default function Trophies({cards}: CardsProps){ 
    
    return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h1>Conquistas do Clube</h1>
            <CarouselTrophies cards={cards}></CarouselTrophies>
        </div>    
    </section>
    ) 
    
}