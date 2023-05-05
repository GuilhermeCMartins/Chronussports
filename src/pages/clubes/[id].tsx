import { GetStaticPaths, GetStaticProps } from 'next';
import { Clube, getClubeById } from '@/utils/clubes';
import DetailsClub from '@/modules/detailsClub';
import Header from '@/components/Header';
import FooterClub from '@/modules/portal/components/footer';

interface Props {
  clube: Clube;
}

export default function ClubePage({ clube }: Props) {
  return <>
      <Header></Header>
      <DetailsClub clube={clube}></DetailsClub>
      <FooterClub></FooterClub>
  </>
}


export const getStaticPaths: GetStaticPaths = async () => {
  const clubes: Clube[] = [
    { id: 1 , nome: 'Sport',sufixo: 'Esporte Clube' , descricao: 'Descrição do Clube A', endereco: 'Endereço do Clube A', src: '/assets/images/brasao_example.svg', valuation: 450.000, ranking: 32, internacional: null, points_cbf: 10},
    { id: 2 , nome: 'Náutico',sufixo: 'Esporte Clube' , descricao: 'Descrição do Clube A', endereco: 'Endereço do Clube A', src: '/assets/images/brasao_example.svg', valuation: 450.000, ranking: 32, internacional: null, points_cbf: 10 },
    { id: 3 , nome: 'Santa Cruz', sufixo: 'Esporte Clube', descricao: 'Descrição do Clube A', endereco: 'Endereço do Clube A', src: '/assets/images/brasao_example.svg', valuation: 450.000, ranking: 32, internacional: null, points_cbf: 10 },
    { id: 4 , nome: 'Grêmio', sufixo: 'Esporte Clube' ,descricao: 'Descrição do Clube A', endereco: 'Endereço do Clube A', src: '/assets/images/brasao_example.svg', valuation: 450.000, ranking: 32, internacional: null, points_cbf: 10 },
    { id: 5 , nome: 'Londrina', sufixo: 'Esporte Clube', descricao: 'O Londrina Esporte Clube é um clube de futebol localizado na cidade de Londrina, no norte do estado brasileiro do Paraná. É um dos principais clubes do estado, tendo sido fundado em 5 de abril de 1956.', endereco: 'Endereço do Clube A', src: '/assets/images/londrina.svg', valuation: 450.000, ranking: 36, internacional: null, points_cbf: 3700 },
    { id: 6 , nome: 'Inter',sufixo: 'Esporte Clube' ,descricao: 'Descrição do Clube A', endereco: 'Endereço do Clube A', src: '/assets/images/brasao_example.svg', valuation: 450.000, ranking: 32, internacional: null, points_cbf: 10 },
    { id: 7 , nome: 'Leiria',sufixo: 'Esporte Clube' ,descricao: 'Descrição do Clube A', endereco: 'Endereço do Clube A', src: '/assets/images/brasao_example.svg', valuation: 450.000, ranking: 32, internacional: null, points_cbf: 10 },
    { id: 8 , nome: 'Litio',sufixo: 'Esporte Clube' ,descricao: 'Descrição do Clube A', endereco: 'Endereço do Clube A', src: '/assets/images/brasao_example.svg', valuation: 450.000, ranking: 32, internacional: null, points_cbf: 10 },
    { id: 9 , nome: 'Episkopi',sufixo: 'Esporte Clube' ,descricao: 'Descrição do Clube A', endereco: 'Endereço do Clube A', src: '/assets/images/brasao_example.svg', valuation: 450.000, ranking: 32, internacional: null, points_cbf: 10 },
    { id: 10 , nome: 'Barcelona',sufixo: 'Esporte Clube' ,descricao: 'Descrição do Clube A', endereco: 'Endereço do Clube A', src: '/assets/images/brasao_example.svg', valuation: 450.000, ranking: 32, internacional: null, points_cbf: 10 },
  ];

  const paths = clubes.map((clube) => ({
    params: { id: clube.id.toString() },
  }));

  return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);

  const clube = getClubeById(id);

  return {
    props: {
      clube,
    },
    revalidate: 1,
  };
};
