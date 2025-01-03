// Define the Question interface
export interface Question {
  answer: string;
  points: number;
  id: number;
  name: string;
  flag: string;
  alternative1: string;
  alternative2: string;
  alternative3: string;
}

// Export the questions array
export const questions: Question[] = [
  {
    id: 1,
    name: "Argentina",
    flag: "public/flags-images/Argentina.jpg",
    alternative1: "Argentina",
    alternative2: "Brazil",
    alternative3: "Canada",
    answer: "",
    points: 0
  },
  {
    id: 2,
    name: "Austria",
    flag: "public/flags-images/Austria.jpg",
    alternative1: "France",
    alternative2: "Austria",
    alternative3: "Japan",
    answer: "",
    points: 0
  },
  {
    id: 3,
    name: "Chile",
    flag: "public/flags-images/Chile.jpg",
    alternative1: "Mexico",
    alternative2: "Chile",
    alternative3: "Australia",
    answer: "",
    points: 0
  },
  {
    id: 4,
    name: "Czech Republic",
    flag: "public/flags-images/Czech_Republic.jpg",
    alternative1: "Italy",
    alternative2: "India",
    alternative3: "Czech Republic",
    answer: "",
    points: 0
  },
  {
    id: 5,
    name: "Egypt",
    flag: "public/flags-images/Egypt.jpg",
    alternative1: "Saudi Arabia",
    alternative2: "Morocco",
    alternative3: "Egypt",
    answer: "",
    points: 0
  },
  {
    id: 6,
    name: "Estonia",
    flag: "public/flags-images/Estonia.jpg",
    alternative1: "Estonia",
    alternative2: "Latvia",
    alternative3: "Lithuania",
    answer: "",
    points: 0
  },
  {
    id: 7,
    name: "Finland",
    flag: "public/flags-images/Finland.jpg",
    alternative1: "Switzerland",
    alternative2: "Finland",
    alternative3: "Norway",
    answer: "",
    points: 0
  },
  {
    id: 8,
    name: "Germany",
    flag: "public/flags-images/Germany.jpg",
    alternative1: "United States",
    alternative2: "Germany",
    alternative3: "Poland",
    answer: "",
    points: 0
  },
  {
    id: 9,
    name: "Ghana",
    flag: "public/flags-images/Ghana.jpg",
    alternative1: "Nigeria",
    alternative2: "Ghana",
    alternative3: "Kenya",
    answer: "",
    points: 0
  },
  {
    id: 10,
    name: "Morocco",
    flag: "public/flags-images/Morocco.jpg",
    alternative1: "Tunisia",
    alternative2: "Morocco",
    alternative3: "Algeria",
    answer: "",
    points: 0
  },
  {
    id: 11,
    name: "Norway",
    flag: "public/flags-images/Norway.jpg",
    alternative1: "Sweden",
    alternative2: "Denmark",
    alternative3: "Norway",
    answer: "",
    points: 0
  },
  {
    id: 12,
    name: "Portugal",
    flag: "public/flags-images/Portugal.jpg",
    alternative1: "Portugal",
    alternative2: "Brazil",
    alternative3: "Spain",
    answer: "",
    points: 0
  },
  {
    id: 13,
    name: "South Africa",
    flag: "public/flags-images/South_Africa.jpg",
    alternative1: "South Africa",
    alternative2: "Zambia",
    alternative3: "Zimbabwe",
    answer: "",
    points: 0
  },
  {
    id: 14,
    name: "Spain",
    flag: "public/flags-images/Spain.jpg",
    alternative1: "Portugal",
    alternative2: "Spain",
    alternative3: "Italy",
    answer: "",
    points: 0
  },
  {
    id: 15,
    name: "Sweden",
    flag: "public/flags-images/Sweden.jpg",
    alternative1: "Sweden",
    alternative2: "Norway",
    alternative3: "Finland",
    answer: "",
    points: 0
  },
  {
    id: 16,
    name: "Thailand",
    flag: "public/flags-images/Thailand.jpg",
    alternative1: "Vietnam",
    alternative2: "Cambodia",
    alternative3: "Thailand",
    answer: "",
    points: 0
  },
  {
    id: 17,
    name: "Ukraine",
    flag: "public/flags-images/Ukraine.jpg",
    alternative1: "Ukraine",
    alternative2: "Belarus",
    alternative3: "Russia",
    answer: "",
    points: 0
  },
  {
    id: 18,
    name: "United Kingdom",
    flag: "public/flags-images/United_Kingdom.jpg",
    alternative1: "United States",
    alternative2: "Canada",
    alternative3: "United Kingdom",
    answer: "",
    points: 0
  },
  {
    id: 19,
    name: "United States",
    flag: "public/flags-images/United_States.jpg",
    alternative1: "United States",
    alternative2: "Mexico",
    alternative3: "Australia",
    answer: "",
    points: 0
  },
  {
    id: 20,
    name: "Uruguay",
    flag: "public/flags-images/Uruguay.jpg",
    alternative1: "Paraguay",
    alternative2: "Uruguay",
    alternative3: "Argentina",
    answer: "",
    points: 0
  },
  {
    id: 21,
    name: "Armenia",
    flag: "public/flags-images/Armenia.jpg",
    alternative1: "Romania",
    alternative2: "Azerbaijan",
    alternative3: "Armenia",
    answer: "",
    points: 0
  },
  {
    id: 22,
    name: "Hong Kong",
    flag: "public/flags-images/Hong_Kong.jpg",
    alternative1: "Vetnam",
    alternative2: "Hong Kong",
    alternative3: "Taiwan",
    answer: "",
    points: 0
  },
  {
    id: 23,
    name: "Indonesia",
    flag: "public/flags-images/Indonesia.jpg",
    alternative1: "Malaysia",
    alternative2: "Indonesia",
    alternative3: "Philippines",
    answer: "",
    points: 0
  },
  {
    id: 24,
    name: "Jamaica",
    flag: "public/flags-images/Jamaica.jpg",
    alternative1: "Jamaica",
    alternative2: "Bahamas",
    alternative3: "Cuba",
    answer: "",
    points: 0
  },
  {
    id: 25,
    name: "Kazakhstan",
    flag: "public/flags-images/Kazakhstan.jpg",
    alternative1: "Kazakhstan",
    alternative2: "Uzbekistan",
    alternative3: "Turkmenistan",
    answer: "",
    points: 0
  },
  {
    id: 26,
    name: "Kuwait",
    flag: "public/flags-images/Kuwait.jpg",
    alternative1: "Bahrein",
    alternative2: "Kuwait",
    alternative3: "Qatar",
    answer: "",
    points: 0
  },
  {
    id: 27,
    name: "Lebanon",
    flag: "public/flags-images/Lebanon.jpg",
    alternative1: "Malta",
    alternative2: "Lebanon",
    alternative3: "Jordan",
    answer: "",
    points: 0
  },
  {
    id: 28,
    name: "Tunisia",
    flag: "public/flags-images/Tunisia.jpg",
    alternative1: "Turkey",
    alternative2: "Algeria",
    alternative3: "Tunisia",
    answer: "",
    points: 0
  },
  {
    id: 29,
    name: "Mexico",
    flag: "public/flags-images/Mexico.jpg",
    alternative1: "Mexico",
    alternative2: "Guatemala",
    alternative3: "Cuba",
    answer: "",
    points: 0
  },
  {
    id: 30,
    name: "Nigeria",
    flag: "public/flags-images/Nigeria.jpg",
    alternative1: "Nigeria",
    alternative2: "Ghana",
    alternative3: "Cameroon",
    answer: "",
    points: 0
  },
  {
    id: 31,
    name: "Romania",
    flag: "public/flags-images/Romania.jpg",
    alternative1: "Romania",
    alternative2: "Austria",
    alternative3: "Bulgaria",
    answer: "",
    points: 0
  },
  {
    id: 32,
    name: "Rwanda",
    flag: "public/flags-images/Rwanda.jpg",
    alternative1: "Rwanda",
    alternative2: "Uganda",
    alternative3: "Burundi",
    answer: "",
    points: 0
  },
  {
    id: 33,
    name: "Senegal",
    flag: "public/flags-images/Senegal.jpg",
    alternative1: "Mali",
    alternative2: "Senegal",
    alternative3: "Guinea",
    answer: "",
    points: 0
  },
];
