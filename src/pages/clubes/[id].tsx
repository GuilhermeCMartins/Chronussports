import { GetStaticPaths, GetStaticProps } from 'next';
import { Clube, getClubeById } from '@/utils/clubes';
import DetailsClub from '@/modules/detailsClub';
import Header from '@/components/Header';
import FooterClub from '@/modules/portal/components/footer';



interface Props {
  clube: Clube;
}

import { getAllClubes } from '@/utils/clubes';

export default function ClubePage({ clube }: Props) {
  return <>
      <Header></Header>
        <DetailsClub clube={clube}></DetailsClub>
      <FooterClub></FooterClub>
  </>
}


export const getStaticPaths: GetStaticPaths = async () => {
  const clubes = getAllClubes();

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
