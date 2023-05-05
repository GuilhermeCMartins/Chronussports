import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
export default function InfoAdm(){
    return(
    <section className={styles.section_info}>
        <h1>ADMINISTRAÇÃO</h1>
        <div className={styles.container_info}>
            <div className={styles.container_info}>
                <div className={styles.info}>
                    <div>
                        <h2>SMSPORTS</h2>
                        <h3>Gestão</h3>
                    </div>
                    <div>
                        <h2>PADO</h2>
                        <h3>Patrocinador Master</h3>
                    </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <h2>ESTádio do café</h2>
                        <h3>Estádio</h3>
                    </div>
                    <div>
                        <h2>Karilu Sports</h2>
                        <h3>Patrocinador Master</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.footer}>
            <Link href='/Londrinaesporteclube.com.br' className={styles.link}>Londrinaesporteclube.com.br</Link>
            <p>Av. Jorge Casoni, 1900 - Centro, CEP: 86.026-720 - Londrina - PR - Brasil</p>
        </div>
        <div className={styles.links}>
            <Link href='#'><Image src='/assets/images/clubs/face.svg' height={24} width={24} alt='Facebook'></Image></Link>
            <Link href='#'> <Image src='/assets/images/clubs/insta.svg' height={24} width={24} alt='Instagram'></Image></Link>
            <Link href='#'><Image src='/assets/images/clubs/twitter.svg' height={24} width={24} alt='Twitter'></Image></Link>
        </div>
    </section>
)
}