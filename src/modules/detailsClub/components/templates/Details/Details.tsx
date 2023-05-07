import Image from 'next/image';
import styles from './styles.module.css'
import Overall from '../../atoms/Overall/Overall';

interface Props{
    name: string,
    sufixo: string, 
    description: string, 
    valuation:number,
    ranking: number,
    overall: number,
    internacional: number | null,
    points_cbf: number,
    src: string
}

interface DetailsProps {
    clube: Props;
}

export default function Details(clube: DetailsProps){
    return (
        <section className={styles.section}>
            <span className={styles.hero_1}></span>
            <span className={styles.hero_2}></span>
            <span className={styles.hero_3}></span>
        
            <div className={styles.container_left}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.name}>{clube.clube.name}</h1>
                        <h3 className={styles.sufixo}>{clube.clube.sufixo}</h3>
                    </div>
                
                    <p className={styles.description}>{clube.clube.description}</p>
                </div>
                
                <div className={styles.valuation}>
                    <h3 className={styles.value_number}>
                        ${clube.clube.valuation}.000
                    <span className={styles.value_text}>
                        Valuation
                        <Image src='/assets/images/clubs/ic-information.svg' width={11} height={11} alt='Info'></Image>
                    </span>    
                    </h3>
                </div>
                
                <div className={styles.stats}>
                    <div className={styles.container_rankings}>
                        <div className={styles.national}>
                            <div className={styles.ranking}>
                                <h4>{clube.clube.ranking}º</h4>
                                <Image src='/assets/images/clubs/ic-national.svg' width={32} height={32} alt='Troféu Nacional'></Image>
                            </div>
                            <p>Ranking Nacional</p>
                        </div>
                        <div className={styles.mundial}>
                            <div className={styles.ranking_mundial}>
                                <h4>{clube.clube.internacional ? <div className={styles.null}>{clube.clube.internacional}º</div> : <div className={styles.null}>--</div>}</h4>
                                <Image src='/assets/images/clubs/ic-international.svg' width={32} height={32} alt='Troféu Mundial'></Image>
                            </div>
                            <p>Ranking Internacional</p>
                        </div>
                    </div>
                    <div className={styles.points}>
                        <h3>{clube.clube.points_cbf / 1000 + 'K'}</h3>
                        <p>Pontos CBF</p>
                    </div>
                </div>
            </div>

            <div className={styles.container_right}>
                <div className={styles.brason_container}>
                    <div  className={styles.overall}>
                        <Overall overall={clube.clube.overall}></Overall>    
                    </div>             
                    <Image src={clube.clube.src} alt='Brasão' width={408} height={408} className={styles.brason}></Image>
                    <span className={styles.elipses01}></span>
                    <span className={styles.elipses02}></span>
                    <span className={styles.elipses03}></span>
                </div>        
            </div>
            
            

        </section>
    )  
}