import Image from 'next/image';
import styles from './styles.module.css'

interface Props {
    maximum_capacity: number;
    field_size: number;
    lawn_type: number;
    own_stadium: boolean;
    stadium_description: string;
    stadium_image: string;
}
  
interface StadiumProps {
    stadium: Props;
}
  

export default function Stadium({stadium}: StadiumProps){
    return (
        <section className={styles.section}>
            <h1>Nossa casa</h1>
            <div className={styles.container}>
                <div className={styles.container_image}>
                    <div className={styles.image}>
                        <Image src={stadium.stadium_image} height={500} width={500} alt='Estádio'></Image>
                    </div>  
                    {stadium.stadium_description}
                    <div className={styles.container_sub}> 
                        <table className={styles.info}>
                            <thead>
                                <tr>
                                    <th>Capacidade do estágio</th>
                                    <th>Tamanho do Campo</th>
                                    <th>Tipo do Gramado</th>
                                    <th>Estádio Próprio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{stadium.maximum_capacity}</td>
                                    <td>{stadium.field_size}</td>
                                    <td>{stadium.lawn_type}</td>
                                    <td>{stadium.own_stadium ? "Sim" : "Não"}</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                </div>
            </div>

            
               
        </section>
    )
}