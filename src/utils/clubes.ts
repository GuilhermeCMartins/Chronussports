export interface Trophies {
  key: number;
  quantity_trophies: number;
  name_trophies: string;
  trophies_photo: string;
}
export interface Athlete{
  id: number;
  name: string;
  position: string;
  drible: number;
  pace: number;
  shoot: number;
  defence: number;
  banner_img: string;
  carousel_img: string;
}
export interface Administrators{
    name: string;
    position: string;
    initial_year: number;
    final_year: number;
    image: string;
}
export interface Stadium{
  maximum_capacity: number;
  field_size: number;
  lawn_type: number;
  own_stadium: boolean;
  stadium_description: string;
  stadium_image: string;
}
export interface History{
    year: number,
    performance: {
      games: number;
      victories: number;
      draws: number;
      defeats: number;
      goals_scoreds: number;
      goals_conceded: number;
    }
}
export interface Career{
  year: number,
    performance: {
      description: string;
      wins: number;
      losses: number;
      draws: number;
      games: number;
      scored_goals:number;
      goals_conceded:number;
      average_fans: number;
      awards: number;
      president: string;
      manage: string;
    }
}


export interface Clube {
    id: number;
    nome: string;
    sufixo: string;
    descricao: string;
    endereco: string;
    src: string;
    valuation: number;
    ranking: number;
    internacional: number | null;
    points_cbf: number;
    games: number;
    victories: number;
    overall: number;
    draws: number;
    defeats: number;
    goals_scoreds: number;
    goals_conceded: number;
    total_fans: number,
    members: number,
    average: number,
    jersey : string,
    history: History[],
    stadium: Stadium,
    trophies: Trophies[],
    roster : Athlete[],
    administrators: Administrators[],
    career: Career[]
}
  
const clubes: Clube[] = [
  {
    id: 1 , 
    nome: 'Sport',
    sufixo: 'Esporte Clube' , 
    descricao: 'Descrição do Clube A', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_mock.svg', 
    valuation: 450.000, 
    ranking: 32, 
    internacional: null, 
    overall: 60,
    points_cbf: 10,
    games: 30,
    victories: 15,
    draws: 6,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/brasao_example.svg', 
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue nisl, eget fringilla erat. Duis posuere semper leo sed dapibus. Suspendisse massa urna, laoreet suscipit risus id, malesuada pulvinar justo. In mattis rhoncus cursus. Ut porta pharetra commodo. Sed maximus eros at aliquam luctus.",
      stadium_image: '/assets/images/clubs/stadium_mock.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id:1,
      name: "" ,
      position: "",
      banner_img: "",
      carousel_img: "",
      defence: 0,
      drible: 0,
      pace: 0,
      shoot:0 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    }],
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    career:[
      {
      year: 2023,
      performance: {
      description: 'Another great season!',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
    },
  {
    id: 2 , 
    nome: 'Náutico',
    sufixo: 'Esporte Clube' , 
    descricao: 'Descrição do Clube A', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_mock.svg', 
    valuation: 450.000, 
    overall: 60,
    ranking: 32, 
    internacional: null, 
    points_cbf: 10,
    games: 30,
    victories: 15,
    draws: 6,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/brasao_example.svg', 
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue nisl, eget fringilla erat. Duis posuere semper leo sed dapibus. Suspendisse massa urna, laoreet suscipit risus id, malesuada pulvinar justo. In mattis rhoncus cursus. Ut porta pharetra commodo. Sed maximus eros at aliquam luctus.",
      stadium_image: '/assets/images/clubs/stadium_mock.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id:1,
      name: "" ,
      position: "",
      banner_img: "",
      carousel_img: "",
      defence: 0,
      drible: 0,
      pace: 0,
      shoot:0 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    }],
    career:[
      {
      year: 2023,
      performance: {
      description: 'Another great season!',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
  },
  {
    id: 3 , 
    nome: 'Santa Cruz',
    sufixo: 'Esporte Clube' , 
    descricao: 'Descrição do Clube A', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_mock.svg', 
    valuation: 450.000, 
    ranking: 32, 
    overall: 60,
    internacional: null, 
    points_cbf: 10,
    games: 30,
    victories: 15,
    draws: 6,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/brasao_example.svg', 
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue nisl, eget fringilla erat. Duis posuere semper leo sed dapibus. Suspendisse massa urna, laoreet suscipit risus id, malesuada pulvinar justo. In mattis rhoncus cursus. Ut porta pharetra commodo. Sed maximus eros at aliquam luctus.",
      stadium_image: '/assets/images/clubs/stadium_mock.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id:1,
      name: "" ,
      position: "",
      banner_img: "",
      carousel_img: "",
      defence: 0,
      drible: 0,
      pace: 0,
      shoot:0 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    }],
    career:[
      {
      year: 2023,
      performance: {
      description: 'Another great season!',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
  },
  {
    id: 4 , 
    nome: 'Grêmio',
    sufixo: 'Esporte Clube' , 
    descricao: 'Descrição do Clube A', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_mock.svg', 
    valuation: 450.000, 
    ranking: 32, 
    overall: 60,
    internacional: null, 
    points_cbf: 10,
    games: 30,
    victories: 15,
    draws: 6,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/brasao_example.svg', 
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue nisl, eget fringilla erat. Duis posuere semper leo sed dapibus. Suspendisse massa urna, laoreet suscipit risus id, malesuada pulvinar justo. In mattis rhoncus cursus. Ut porta pharetra commodo. Sed maximus eros at aliquam luctus.",
      stadium_image: '/assets/images/clubs/stadium_mock.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id:1,
      name: "" ,
      position: "",
      banner_img: "",
      carousel_img: "",
      defence: 0,
      drible: 0,
      pace: 0,
      shoot:0 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    }],
    career:[
      {
      year: 2023,
      performance: {
      description: 'Another great season!',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
  },
  {
    id: 5 , 
    nome: 'Londrina',
    sufixo: 'Esporte Clube' , 
    descricao: 'O Londrina Esporte Clube é um clube de futebol localizado na cidade de Londrina, no norte do estado brasileiro do Paraná. É um dos principais clubes do estado, tendo sido fundado em 5 de abril de 1956.', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_londrina.svg', 
    valuation: 450.000, 
    ranking: 32, 
    internacional: null, 
    points_cbf: 3700,
    games: 30,
    overall: 77,
    victories: 15,
    draws: 6,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/clubs/camisa_londrina.svg', 
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "O Londrina Esporte Clube é um clube de futebol localizado na cidade de Londrina, no norte do estado brasileiro do Paraná. É um dos principais clubes do estado, tendo sido fundado em 5 de abril de 1956.",
      stadium_image: '/assets/images/clubs/etihad-9.jpg.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    },
    {
      key: 2,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    },
    {
      key: 2,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    },
    {
      key: 2,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id: 1,
      name: "Halland" ,
      position: "Atacante",
      banner_img: "/assets/images/clubs/Squad/carinha_bg.svg",
      carousel_img: "/assets/images/clubs/Squad/banner_carousel2.svg",
      defence: 60,
      drible: 50,
      pace: 80,
      shoot: 90 
    },
    {
      id: 2,
      name: "Alisson" ,
      position: "Goleiro",
      banner_img: "/assets/images/clubs/Squad/carinha_bg.svg",
      carousel_img: "/assets/images/clubs/Squad/banner_carousel2.svg",
      defence: 90,
      drible: 40,
      pace: 40,
      shoot: 40 
    },
    {
      id: 3,
      name: "Neymar" ,
      position: "Atacante",
      banner_img: "/assets/images/clubs/Squad/jogador_shape.svg",
      carousel_img: "/assets/images/clubs/Squad/banner_carousel2.svg",
      defence: 90,
      drible: 90,
      pace: 90,
      shoot: 90 
    },
    {
      id: 4,
      name: "Lucas" ,
      position: "Goleiro",
      banner_img: "/assets/images/clubs/Squad/jogador_shape.svg",
      carousel_img: "/assets/images/clubs/Squad/banner_carousel2.svg",
      defence: 20,
      drible: 20,
      pace: 30,
      shoot: 30 
    },
    {
      id: 5,
      name: "Vinicius Jr" ,
      position: "Atacante",
      banner_img: "/assets/images/clubs/Squad/jogador_shape.svg",
      carousel_img: "/assets/images/clubs/Squad/banner_carousel2.svg",
      defence: 20,
      drible: 20,
      pace: 30,
      shoot: 30 
    },
    {
      id: 6,
      name: "Rodrygo" ,
      position: "Atacante",
      banner_img: "/assets/images/clubs/Squad/jogador_shape.svg",
      carousel_img: "/assets/images/clubs/Squad/banner_carousel2.svg",
      defence: 20,
      drible: 20,
      pace: 30,
      shoot: 30 
    },
    {
      id: 7,
      name: "Casemiro" ,
      position: "Volante",
      banner_img: "/assets/images/clubs/Squad/jogador_shape.svg",
      carousel_img: "/assets/images/clubs/Squad/banner_carousel2.svg",
      defence: 20,
      drible: 20,
      pace: 30,
      shoot: 30 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    },
    {
      name: "FELIPE BERGER PROCHET",
      position: "Vice Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    },
    {
      name: "DENILSON ROBERTO DE PAULA",
      position: "Presidente do Conselho",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    },
    ],
    career:[
      {
      year: 2023,
      performance: {
      description: 'História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.História do título e descrição do elenco.',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
    
  },
  {
    id: 6 , 
    nome: 'Inter',
    sufixo: 'Esporte Clube' , 
    descricao: 'Descrição do Clube A', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_mock.svg', 
    valuation: 450.000, 
    ranking: 32, 
    internacional: null, 
    points_cbf: 10,
    games: 30,
    overall: 60,
    victories: 15,
    draws: 6,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/clubs/camisa_londrina.svg', 
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue nisl, eget fringilla erat. Duis posuere semper leo sed dapibus. Suspendisse massa urna, laoreet suscipit risus id, malesuada pulvinar justo. In mattis rhoncus cursus. Ut porta pharetra commodo. Sed maximus eros at aliquam luctus.",
      stadium_image: '/assets/images/clubs/stadium_mock.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id: 2,
      name: "" ,
      position: "",
      banner_img: "",
      carousel_img: "",
      defence: 0,
      drible: 0,
      pace: 0,
      shoot:0 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    }],
    career:[
      {
      year: 2023,
      performance: {
      description: 'Another great season!',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
  },
  {
    id: 7 , 
    nome: 'Leiria',
    sufixo: 'Esporte Clube' , 
    descricao: 'Descrição do Clube A', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_mock.svg', 
    valuation: 450.000, 
    ranking: 32, 
    internacional: null, 
    points_cbf: 10,
    games: 30,
    overall: 60,
    victories: 15,
    draws: 6,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/clubs/camisa_londrina.svg', 
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue nisl, eget fringilla erat. Duis posuere semper leo sed dapibus. Suspendisse massa urna, laoreet suscipit risus id, malesuada pulvinar justo. In mattis rhoncus cursus. Ut porta pharetra commodo. Sed maximus eros at aliquam luctus.",
      stadium_image: '/assets/images/clubs/stadium_mock.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id: 2,
      name: "" ,
      position: "",
      banner_img: "",
      carousel_img: "",
      defence: 0,
      drible: 0,
      pace: 0,
      shoot:0 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    }],
    career:[
      {
      year: 2023,
      performance: {
      description: 'Another great season!',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
  },
  {
    id: 8 , 
    nome: 'Litio',
    sufixo: 'Esporte Clube' , 
    descricao: 'Descrição do Clube A', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_mock.svg', 
    valuation: 450.000, 
    ranking: 32, 
    internacional: null, 
    points_cbf: 10,
    games: 30,
    victories: 15,
    draws: 6,
    overall: 60,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/clubs/camisa_londrina.svg', 
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue nisl, eget fringilla erat. Duis posuere semper leo sed dapibus. Suspendisse massa urna, laoreet suscipit risus id, malesuada pulvinar justo. In mattis rhoncus cursus. Ut porta pharetra commodo. Sed maximus eros at aliquam luctus.",
      stadium_image: '/assets/images/clubs/stadium_mock.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id: 2,
      name: "" ,
      position: "",
      banner_img: "",
      carousel_img: "",
      defence: 0,
      drible: 0,
      pace: 0,
      shoot:0 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    }],
    career:[
      {
      year: 2023,
      performance: {
      description: 'Another great season!',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
  },
  {
    id: 9 , 
    nome: 'Episkopi',
    sufixo: 'Esporte Clube' , 
    descricao: 'Descrição do Clube A', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_mock.svg', 
    valuation: 450.000, 
    ranking: 32, 
    internacional: null, 
    points_cbf: 10,
    games: 30,
    overall: 60,
    victories: 15,
    draws: 6,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/clubs/camisa_londrina.svg', 
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue nisl, eget fringilla erat. Duis posuere semper leo sed dapibus. Suspendisse massa urna, laoreet suscipit risus id, malesuada pulvinar justo. In mattis rhoncus cursus. Ut porta pharetra commodo. Sed maximus eros at aliquam luctus.",
      stadium_image: '/assets/images/clubs/stadium_mock.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id: 2,
      name: "" ,
      position: "",
      banner_img: "",
      carousel_img: "",
      defence: 0,
      drible: 0,
      pace: 0,
      shoot:0 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    }],
    career:[
      {
      year: 2023,
      performance: {
      description: 'Another great season!',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
  },
  {
    id: 10 , 
    nome: 'Barcelona',
    sufixo: 'Esporte Clube' , 
    descricao: 'Descrição do Clube A', 
    endereco: 'Endereço do Clube A', 
    src: '/assets/images/clubs/brasao_mock.svg', 
    valuation: 450.000, 
    ranking: 32, 
    internacional: null, 
    points_cbf: 10,
    overall: 60,
    games: 30,
    victories: 15,
    draws: 6,
    defeats: 9,
    goals_scoreds: 33,
    goals_conceded: 20,
    total_fans: 3500,
    members: 1400,
    average: 2300,
    jersey: '/assets/images/clubs/camisa_londrina.svg', 
    history: [
      {
        year: 2023,
        performance: {
          games: 1200,
          victories: 500,
          draws: 500,
          defeats: 200,
          goals_scoreds: 250,
          goals_conceded: 200,
        },
      },
      {
        year: 2022,
        performance: {
          games: 1000,
          victories: 400,
          draws: 300,
          defeats: 300,
          goals_scoreds: 200,
          goals_conceded: 250,
        },
      },
      {
        year: 2021,
        performance: {
          games: 800,
          victories: 300,
          draws: 250,
          defeats: 250,
          goals_scoreds: 150,
          goals_conceded: 180,
        },
      },
      {
        year: 2020,
        performance: {
          games: 700,
          victories: 250,
          draws: 200,
          defeats: 250,
          goals_scoreds: 120,
          goals_conceded: 150,
        },
      },
    ],
    stadium: {
      maximum_capacity: 35000,
      field_size: 100,
      lawn_type: 100,
      own_stadium: true,
      stadium_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue nisl, eget fringilla erat. Duis posuere semper leo sed dapibus. Suspendisse massa urna, laoreet suscipit risus id, malesuada pulvinar justo. In mattis rhoncus cursus. Ut porta pharetra commodo. Sed maximus eros at aliquam luctus.",
      stadium_image: '/assets/images/clubs/stadium_mock.svg',
    },
    trophies: [{
      key: 1,
      quantity_trophies: 38,
      name_trophies: "CAMPEONATOS REGIONAIS E ESTADUAIS",
      trophies_photo: '/assets/images/clubs/uefa.svg',
    }],
    roster: [{
      id: 2,
      name: "" ,
      position: "",
      banner_img: "",
      carousel_img: "",
      defence: 0,
      drible: 0,
      pace: 0,
      shoot:0 
    }],
    administrators: [{
      name: "Getúlio Castilho",
      position: "Presidente",
      initial_year: 2023,
      final_year: 2024,
      image: '/assets/images/clubs/rec.svg',
    }],
    career:[
      {
      year: 2023,
      performance: {
      description: 'Another great season!',
      wins: 27,
      losses: 1,
      draws: 2,
      games: 30,
      scored_goals: 80,
      goals_conceded: 15,
      average_fans: 5500,
      awards: 7,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2022,
      performance: {
      description: 'Amazing season with great results',
      wins: 25,
      losses: 3,
      draws: 2,
      games: 30,
      scored_goals: 70,
      goals_conceded: 20,
      average_fans: 5000,
      awards: 5,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2021,
      performance: {
      description: 'A solid season',
      wins: 20,
      losses: 5,
      draws: 5,
      games: 30,
      scored_goals: 60,
      goals_conceded: 30,
      average_fans: 4500,
      awards: 3,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2020,
      performance: {
      description: 'A season with mixed results',
      wins: 15,
      losses: 10,
      draws: 5,
      games: 30,
      scored_goals: 50,
      goals_conceded: 40,
      average_fans: 4000,
      awards: 2,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2019,
      performance: {
      description: 'A challenging season',
      wins: 10,
      losses: 15,
      draws: 5,
      games: 30,
      scored_goals: 40,
      goals_conceded: 50,
      average_fans: 3500,
      awards: 1,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
      },
      {
      year: 2018,
      performance: {
      description: 'A tough season',
      wins: 5,
      losses: 20,
      draws: 5,
      games: 30,
      scored_goals: 30,
      goals_conceded: 60,
      average_fans: 3000,
      awards: 0,
      president: 'John Doe',
      manage: 'Jane Smith'
      }
    }]
  }  
];
  
    

export function getAllClubes() {
  return clubes;
}
  
export function getClubeById(id: number) {
  return clubes.find((clube) => clube.id === id);
}
  