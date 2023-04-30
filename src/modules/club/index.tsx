import Header from "@/components/Header";
import Footer from "../portal/components/footer";
import CarouselClub from './components/CarouselClub'

export default function ClubPage(){
    const images = [
        {
          key: 1,
          src: '/assets/images/brasao_example.svg',
          caption: 'Sport',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Nacional'
        },
        {
          key: 2,
          src: '/assets/images/brasao_example.svg',
          caption: 'Náutico',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Nacional'
        },
        {
          key: 3,
          src: '/assets/images/brasao_example.svg',
          caption: 'Santa Cruz',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Nacional'
        },
        {
          key: 4,
          src: '/assets/images/brasao_example.svg',
          caption: 'Grêmio',
          width: 350,
          height: 350,
          alt: 'Brasão',
          nacionality: 'Nacional'
        },
        {
          key: 5,
          src: '/assets/images/londrina.svg',
          caption: 'Londrina Esporte Clube',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Nacional'
        },
        {
          key: 6,
          src: '/assets/images/brasao_example.svg',
          caption: 'Inter',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Internacional'
        },
        {
          key: 7,
          src: '/assets/images/brasao_example.svg',
          caption: 'Leiria',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Internacional'

        },
        {
          key: 8,
          src: '/assets/images/brasao_example.svg',
          caption: 'Lito',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Internacional'

        },
        {
          key: 9,
          src: '/assets/images/brasao_example.svg',
          caption: 'Episkopi',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Internacional'
        },
        {
          key: 10,
          src: '/assets/images/brasao_example.svg',
          caption: 'Barcelona',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Internacional'
        },
    ]
    return <>
        <div>
            <Header></Header>
            <CarouselClub items={images}></CarouselClub>
            <Footer></Footer>
        </div>
    </>
}