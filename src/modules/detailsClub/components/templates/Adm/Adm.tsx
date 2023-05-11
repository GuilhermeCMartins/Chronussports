import CarouselAdm from "../../organisms/CarouselAdm/CarouselAdm";
import InfoAdm from "../../organisms/InfoAdm/InfoAdm";
import styles from './styles.module.css'

interface Props {
    name: string;
    position: string;
    initial_year: number;
    final_year: number;
    image: string;
}

interface AdmProps{
    adms: Props[];
}

export default function Adm({adms}: AdmProps){
    return(
        <section className={styles.information_adm}>
            <h1 className={styles.title_mobile}>ADMINISTRAÇÃO</h1>
            <div className={styles.sectionAdm}>
            <div className={styles.container_left}>
                <CarouselAdm administrators={adms}></CarouselAdm>
            </div>
            <div className={styles.container_right}>
                <h1 className={styles.title}>ADMINISTRAÇÃO</h1>

                <InfoAdm></InfoAdm>
            </div>
            </div>
        </section>
        
    )
}