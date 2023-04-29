import Header from "@/components/Header";
import Footer from "../portal/components/footer";
import CarouselClub from './components/CarouselClub'

export default function ClubPage(){
    const images = [
        {
          key: 1,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Nacional'
        },
        {
          key: 2,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Nacional'
        },
        {
          key: 3,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Nacional'
        },
        {
          key: 4,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
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
          caption: 'Brasão',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Internacional'
        },
        {
          key: 7,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Internacional'

        },
        {
          key: 8,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 330,
          height: 330,
          alt: 'Brasão',
          nacionality: 'Internacional'

        },
        {
          key: 9,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
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