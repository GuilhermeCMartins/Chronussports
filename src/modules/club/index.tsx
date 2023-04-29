import Header from "@/components/Header";
import Footer from "../portal/components/footer";
import CarouselClub from './components/CarouselClub'

export default function ClubPage(){
    const images = [
        {
          key: 1,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 200,
          height: 215,
          alt: 'Brasão',
        },
        {
          key: 2,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 200,
          height: 215,
          alt: 'Brasão',
        },
        {
          key: 3,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 200,
          height: 215,
          alt: 'Brasão',
        },
        {
          key: 4,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 200,
          height: 215,
          alt: 'Brasão',
        },
        {
          key: 5,
          src: '/assets/images/londrina.svg',
          caption: 'Brasão',
          width: 200,
          height: 215,
          alt: 'Brasão',
        },
        {
          key: 6,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 200,
          height: 215,
          alt: 'Brasão',
        },
        {
          key: 7,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 200,
          height: 215,
          alt: 'Brasão',
        },
        {
          key: 8,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 200,
          height: 215,
          alt: 'Brasão',
        },
        {
          key: 9,
          src: '/assets/images/brasao_example.svg',
          caption: 'Brasão',
          width: 200,
          height: 215,
          alt: 'Brasão',
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