import Image from 'next/image';
import styles from './styles.module.css'
import Link from 'next/link';
import InfoJersey from '../../atoms/InfoJersey/InfoJersey';

interface Props {
    total_fans: number;
    members: number;
    average: number;
    jersey: string;
}

interface FansProps {
    fans: Props;
}
  
export default function Fans({fans} : FansProps){
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.container_left}>
                    <Image src={fans.jersey} fill={true} alt='' className={styles.img}></Image>
                    <div className={styles.hover_info}>
                        <InfoJersey info={
                            {master: 'Pado',
                            secondary: 'RPF',
                            arm: 'BET77.BET',
                            shoulder: 'AgroGalaxy'
                        }
                        } ></InfoJersey>
                    </div>
                </div>
                <div className={styles.container_right}>
                    <div className={styles.title}>
                        <h1>Nossa torcida</h1>
                        <p>Desde xxx nossa torcida cresce, são mais de xxxx fanáticos Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam augue, placerat sit amet consectetur in, imperdiet quis felis. Aliquam lobortis scelerisque lectus, a fringilla purus. Nulla blandit nisi quis convallis sollicitudin.</p>
                    </div>
                    
                    
                    <div className={styles.info}>
                        <div className={styles.fans}>
                            <h3>{fans.total_fans / 1000}K</h3>
                            <p>Torcida</p>
                        </div>
                        <div className={styles.fans}> 
                            <h3>{fans.members / 1000}K</h3>
                            <p>Sócio Torcedores</p>
                        </div>
                        <div className={styles.fans}>
                            <h3>{fans.average / 1000}K</h3>
                            <p>Público por jogo</p>
                        </div>
                    </div>
                                        
                    <div className={styles.footer}>
                        <h4>Faça parte da comunidade!</h4>
                        <div className={styles.links}>
                            <Link href='#'><Image src='/assets/images/clubs/face.svg' height={35} width={35} alt='Facebook'></Image></Link>
                            <Link href='#'> <Image src='/assets/images/clubs/insta.svg' height={35} width={35} alt='Instagram'></Image></Link>
                            <Link href='#'><Image src='/assets/images/clubs/twitter.svg' height={35} width={35} alt='Twitter'></Image></Link>
                        </div>
                        
                    </div>
                </div>                
            </div>
            <div className={styles.info_mobile}>
                        <div className={styles.fans}>
                            <h3>{fans.total_fans / 1000}K</h3>
                            <p>Torcida</p>
                        </div>
                        <div className={styles.fans}> 
                            <h3>{fans.members / 1000}K</h3>
                            <p>Sócio Torcedores</p>
                        </div>
                        <div className={styles.fans}>
                            <h3>{fans.average / 1000}K</h3>
                            <p>Público por jogo</p>
                        </div>
            </div>
                                        
            <div className={styles.footer_mobile}>
                        <h4>Faça parte da comunidade!</h4>
                        <div className={styles.links}>
                            <Link href='#'><Image src='/assets/images/clubs/face.svg' height={35} width={35} alt='Facebook'></Image></Link>
                            <Link href='#'> <Image src='/assets/images/clubs/insta.svg' height={35} width={35} alt='Instagram'></Image></Link>
                            <Link href='#'><Image src='/assets/images/clubs/twitter.svg' height={35} width={35} alt='Twitter'></Image></Link>
                        </div>
                        
            </div>

        </section>
    )
}