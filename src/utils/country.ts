const paises = [
    "Qual o país?",
    "Todos",
    "Afeganistão",
    "África do Sul",
    "Albânia",
    "Alemanha",
    "Andorra",
    "Angola",
    "Antiga e Barbuda",
    "Arábia Saudita",
    "Argélia",
    "Argentina",
    "Armênia",
    "Austrália",
    "Áustria",
    "Azerbaijão",
    "Bahamas",
    "Bahrein",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Bélgica",
    "Belize",
    "Benin",
    "Butão",
    "Bolívia",
    "Bósnia e Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunei",
    "Bulgária",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Camboja",
    "Camarões",
    "Canadá",
    "Catar",
    "Cazaquistão",
    "Chade",
    "Chile",
    "China",
    "Chipre",
    "Colômbia",
    "Comores",
    "Coreia do Norte",
    "Coreia do Sul",
    "Costa do Marfim",
    "Costa Rica",
    "Croácia",
    "Cuba",
    "Dinamarca",
    "Djibouti",
    "Dominica",
    "Egito",
    "El Salvador",
    "Emirados Árabes Unidos",
    "Equador",
    "Eritreia",
    "Eslováquia",
    "Eslovênia",
    "Espanha",
    "Estados Unidos",
    "Estônia",
    "Etiópia",
    "Fiji",
    "Filipinas",
    "Finlândia",
    "França",
    "Gabão",
    "Gâmbia",
    "Geórgia",
    "Gana",
    "Grécia",
    "Granada",
    "Guatemala",
    "Guiné",
    "Guiné Equatorial",
    "Guiné-Bissau",
    "Haiti",
    "Honduras",
    "Hungria",
    "Iêmen",
    "Ilhas Marshall",
    "Ilhas Salomão",
    "Índia",
    "Indonésia",
    "Irã",
    "Iraque",
    "Irlanda",
    "Islândia",
    "Israel",
    "Itália",
    "Jamaica",
    "Japão",
    "Jordânia",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letônia",
    "Líbano",
    "Libéria",
    "Líbia",
    "Liechtenstein",
    "Lituânia",
    "Luxemburgo",
    "Macedônia do Norte",
    "Madagascar",
    "Malásia",
    "Malawi",
    "Maldivas",
    "Mali",
    "Malta",
    "Marrocos",
    "Maurício",
    "Mauritânia",
    "México",
    "Micronésia",
    "Moçambique",
    "Moldávia",
    "Mônaco",
    "Mongólia",
    "Montenegro",
    "Montserrat",
    "Myanmar",
    "Namíbia",
    "Nauru",
    "Nepal",
    "Nicarágua",
    "Níger",
    "Nigéria",
    "Niue",
    "Noruega",
    "Nova Caledônia",
    "Nova Zelândia",
    "Omã",
    "Países Baixos",
    "Palau",
    "Panamá",
    "Papua-Nova Guiné",
    "Paquistão",
    "Paraguai",
    "Peru",
    "Polinésia Francesa",
    "Polônia",
    "Porto Rico",
    "Portugal",
    "Quênia",
    "Quirguistão",
    "Reino Unido",
    "República Centro-Africana",
    "República Dominicana",
    "República Tcheca",
    "Romênia",
    "Ruanda",
    "Rússia",
    "Saara Ocidental",
    "Saint Kitts e Nevis",
    "Saint Martin",
    "Saint-Barthélemy",
    "Saint-Pierre e Miquelon",
    "Samoa",
    "Samoa Americana",
    "San Marino",
    "Santa Lúcia",
    "São Cristóvão e Névis",
    "São Tomé e Príncipe",
    "São Vicente e Granadinas",
    "Senegal",
    "Serra Leoa",
    "Sérvia",
    "Síria",
    "Somália",
    "Sri Lanka",
    "Suazilândia",
    "Sudão",
    "Sudão do Sul",
    "Suécia",
    "Suíça",
    "Suriname",
    "Tadjiquistão",
    "Tailândia",
    "Taiwan",
    "Tanzânia",
    "Terras Austrais e Antárticas Francesas",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad e Tobago",
    "Tunísia",
    "Turcomenistão",
    "Turquia",
    "Tuvalu",
    "Ucrânia",
    "Uganda",
    "Uruguai",
    "Uzbequistão",
    "Vanuatu",
    "Vaticano",
    "Venezuela",
    "Vietnã",
    "Wallis e Futuna",
    "Zâmbia",
    "Zimbábue",
]; 


const paisesComId = paises.map((pais, index) => {
    return {
      id: index + 1, name: pais, unavailable: false
    };
});

paisesComId.forEach((pais, index) => {
  if (index === 0) {
    pais.unavailable = true;
  } else {
    pais.unavailable = false;
  }
});
  
export default paisesComId;