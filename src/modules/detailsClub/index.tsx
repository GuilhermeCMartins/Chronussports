import { Clube } from "@/utils/clubes";
import Details from "./components/templates/Details/Details";
import Performance from "./components/templates/Performance/Performance";
import Fans from "./components/templates/Fans/Fans";
import Stadium from "./components/templates/Stadium/Stadium";
import Trophies from "./components/templates/Trophies/Trophies";
import Squad from "./components/templates/Squad/Squad";
import Adm from "./components/templates/Adm/Adm";
import History from "./components/templates/Career/Career";
import Career from "./components/templates/Career/Career";

interface Props {
    clube: Clube;
}


export default function DetailsClub({ clube }: Props){
    const details = {
        name: clube.nome,
        sufixo: clube.sufixo,
        overall: clube.overall,
        description: clube.descricao,
        valuation: clube.valuation,
        ranking: clube.ranking,
        internacional: clube.internacional,
        points_cbf: clube.points_cbf,
        src: clube.src    
    }
    

    const fans = {
        total_fans: clube.total_fans,
        members: clube.members,
        average: clube.average,
        jersey: clube.jersey
    }

 


    return <>
        <Details clube={details}></Details>
        <Performance performances={clube.history} ></Performance>
        <Fans fans={fans}></Fans>
        <Stadium stadium={clube.stadium}></Stadium>
        <Trophies cards={clube.trophies}></Trophies>
        <Squad athlete={clube.roster}></Squad>
        <Career career={clube.career}></Career>
        <Adm adms={clube.administrators}></Adm>
    </>
}