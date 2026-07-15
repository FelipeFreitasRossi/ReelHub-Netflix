// src/lib/mock-data.ts
import { LucideIcon } from "lucide-react";

export interface Movie {
  id: number;
  title: string;
  type: "Filme" | "Série";
  backdrop: string;
  poster: string;
  year: number;
  genre: string;
  rating: number;
  maturity: "L" | "10" | "12" | "14" | "16" | "18";
  description: string;
  seasons?: number;
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  items: Movie[];
}

// ==========================================
// 1. AÇÃO (10 filmes)
// ==========================================
const actionMovies: Movie[] = [
  {
    id: 1,
    title: "Fúria nas Ruas",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Ação / Suspense",
    rating: 8.2,
    maturity: "16",
    description: "Um ex-agente especial volta à ativa para salvar a cidade de uma ameaça terrorista."
  },
  {
    id: 2,
    title: "Velozes & Perigosos",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Ação / Corrida",
    rating: 7.9,
    maturity: "14",
    description: "Corridas ilegais e roubos ousados movem a vida de pilotos lendários."
  },
  {
    id: 3,
    title: "Resgate em Alto Mar",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Ação / Aventura",
    rating: 8.7,
    maturity: "12",
    description: "Mergulhadores enfrentam tubarões e traficantes em uma missão de resgate."
  },
  {
    id: 4,
    title: "Operação Invasão",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Ação / Guerra",
    rating: 8.0,
    maturity: "16",
    description: "Forças especiais precisam impedir um ataque cibernético."
  },
  {
    id: 5,
    title: "O Último Comando",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Ação / Militar",
    rating: 8.5,
    maturity: "18",
    description: "Um comandante de elite lidera sua equipe em uma missão suicida atrás das linhas inimigas."
  },
  {
    id: 6,
    title: "Caçador de Recompensas",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Ação / Faroeste",
    rating: 7.8,
    maturity: "14",
    description: "Um caçador de recompensas implacável rastreia um foragido perigoso pelo velho oeste."
  },
  {
    id: 7,
    title: "Ataque ao Banco Central",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2c?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2c?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Ação / Crime",
    rating: 7.5,
    maturity: "16",
    description: "Um grupo de ladrões planeja o maior assalto a banco da história."
  },
  {
    id: 8,
    title: "Guerra nas Estrelas: O Despertar",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop",
    year: 2026,
    genre: "Ação / Ficção",
    rating: 9.0,
    maturity: "12",
    description: "Uma nova ameaça surge na galáxia, e uma jovem heroína deve liderar a resistência."
  },
  {
    id: 9,
    title: "O Protetor",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Ação / Drama",
    rating: 8.1,
    maturity: "14",
    description: "Um guarda-costas se vê obrigado a proteger a filha de um magnata, alvo de um complô."
  },
  {
    id: 10,
    title: "Velozes 2",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Ação / Corrida",
    rating: 8.3,
    maturity: "16",
    description: "A rivalidade entre dois pilotos atinge o auge em uma competição internacional de rua."
  }
];

// ==========================================
// 2. SÉRIES DRAMÁTICAS (10 séries)
// ==========================================
const dramaSeries: Movie[] = [
  {
    id: 11,
    title: "O Último Reino",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Drama / Guerra",
    rating: 9.1,
    maturity: "16",
    description: "Em um mundo devastado, irmãos rivais lutam pelo controle do último reino habitável.",
    seasons: 3
  },
  {
    id: 12,
    title: "Herdeiros do Poder",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1573167243872-0c1293f6e707?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1573167243872-0c1293f6e707?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Drama / Política",
    rating: 8.8,
    maturity: "14",
    description: "A disputa pelo trono de uma família bilionária expõe segredos chocantes.",
    seasons: 2
  },
  {
    id: 13,
    title: "Corações Partidos",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Drama / Romance",
    rating: 8.0,
    maturity: "12",
    description: "História emocionante sobre amor, perda e recomeço em uma cidade litorânea.",
    seasons: 1
  },
  {
    id: 14,
    title: "Sombras do Passado",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Drama / Suspense",
    rating: 8.5,
    maturity: "14",
    description: "Um detetive aposentado volta para resolver um caso que assombra a cidade há 20 anos.",
    seasons: 1
  },
  {
    id: 15,
    title: "Família em Foco",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Drama / Família",
    rating: 8.3,
    maturity: "10",
    description: "Uma família disfuncional tenta se reconectar após um trauma que os afastou.",
    seasons: 2
  },
  {
    id: 16,
    title: "Vidas Cruzadas",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1526095179110-4b74569f05c9?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1526095179110-4b74569f05c9?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Drama / Cotidiano",
    rating: 8.7,
    maturity: "14",
    description: "Os destinos de cinco pessoas se cruzam em uma metrópole, revelando segredos e conexões inesperadas.",
    seasons: 1
  },
  {
    id: 17,
    title: "A Escolha",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Drama / Psicológico",
    rating: 8.9,
    maturity: "16",
    description: "Uma mulher enfrenta a escolha mais difícil de sua vida entre salvar seu casamento ou sua carreira.",
    seasons: 2
  },
  {
    id: 18,
    title: "Impérios",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=600&fit=crop",
    year: 2026,
    genre: "Drama / Histórico",
    rating: 9.3,
    maturity: "16",
    description: "A ascensão e queda de um império antigo, contada pelos olhos de seus governantes e súditos.",
    seasons: 3
  },
  {
    id: 19,
    title: "Terapia",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Drama / Médico",
    rating: 8.4,
    maturity: "14",
    description: "Dentro de uma clínica psiquiátrica, pacientes e terapeutas navegam em suas próprias batalhas internas.",
    seasons: 1
  },
  {
    id: 20,
    title: "Laços de Sangue",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Drama / Crime",
    rating: 8.6,
    maturity: "18",
    description: "Dois irmãos criminosos dividem o domínio de um império do crime, mas um deles quer sair.",
    seasons: 2
  }
];

// ==========================================
// 3. COMÉDIAS (10 filmes)
// ==========================================
const comedyMovies: Movie[] = [
  {
    id: 21,
    title: "Tá Dando Onda",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1526095179110-4b74569f05c9?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1526095179110-4b74569f05c9?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Comédia / Família",
    rating: 7.5,
    maturity: "L",
    description: "Um menino e seu avô embarcam em uma viagem maluca para salvar a sorveteria da família."
  },
  {
    id: 22,
    title: "Casamento em Apuros",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Comédia / Romance",
    rating: 7.2,
    maturity: "10",
    description: "Dois amigos fingem um noivado para enganar a família, mas o plano sai do controle."
  },
  {
    id: 23,
    title: "Agentes Atrapalhados",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Comédia / Ação",
    rating: 7.8,
    maturity: "12",
    description: "Dois agentes do FBI totalmente desastrados precisam salvar o presidente de um atentado."
  },
  {
    id: 24,
    title: "Férias em Las Vegas",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2c?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2c?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Comédia / Aventura",
    rating: 6.9,
    maturity: "14",
    description: "Um grupo de amigos perde todas as economias em Vegas e precisa dar um golpe para se recuperar."
  },
  {
    id: 25,
    title: "Mamãe Saiu de Férias",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Comédia / Família",
    rating: 7.1,
    maturity: "L",
    description: "Uma mãe resolve tirar férias e a família precisa aprender a sobreviver sem ela."
  },
  {
    id: 26,
    title: "Universidade do Absurdo",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Comédia / Faculdade",
    rating: 7.6,
    maturity: "16",
    description: "Um grupo de estudantes resolve criar a própria universidade em um galpão abandonado."
  },
  {
    id: 27,
    title: "O Rei da Festa",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Comédia / Musical",
    rating: 7.9,
    maturity: "12",
    description: "Um jovem tenta se tornar o maior organizador de festas da cidade, mas tudo dá errado."
  },
  {
    id: 28,
    title: "Viagem em Família",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Comédia / Aventura",
    rating: 7.3,
    maturity: "10",
    description: "Uma família embarca em uma viagem de carro repleta de perrengues e situações hilárias."
  },
  {
    id: 29,
    title: "Trocando os Pés",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Comédia / Fantasia",
    rating: 8.0,
    maturity: "12",
    description: "Dois irmãos gêmeos trocam de corpos e precisam lidar com as consequências."
  },
  {
    id: 30,
    title: "O Chef Desastrado",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1558618666-fcd25c85fafb?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85fafb?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Comédia / Gastronomia",
    rating: 7.4,
    maturity: "L",
    description: "Um chef famoso perde o paladar e precisa aprender a cozinhar de novo com a ajuda de uma iniciante."
  }
];

// ==========================================
// 4. FICÇÃO CIENTÍFICA (10 filmes/séries)
// ==========================================
const sciFiMovies: Movie[] = [
  {
    id: 31,
    title: "Expedição Marte",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Ficção / Aventura",
    rating: 9.0,
    maturity: "14",
    description: "A primeira colônia em Marte descobre uma forma de vida alienígena adormecida."
  },
  {
    id: 32,
    title: "Cidade dos Sonhos",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Ficção / Cyberpunk",
    rating: 8.6,
    maturity: "16",
    description: "Em uma realidade virtual, uma IA ameaça escravizar a humanidade.",
    seasons: 2
  },
  {
    id: 33,
    title: "Portal do Tempo",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Ficção / Suspense",
    rating: 8.4,
    maturity: "12",
    description: "Cientistas abrem um portal para o passado e precisam corrigir os danos à linha do tempo."
  },
  {
    id: 34,
    title: "A Última Fronteira",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop",
    year: 2026,
    genre: "Ficção / Espacial",
    rating: 8.9,
    maturity: "10",
    description: "Uma nave perdida no espaço encontra um fenômeno que desafia as leis da física."
  },
  {
    id: 35,
    title: "O Clone Perfeito",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Ficção / Bioétic",
    rating: 8.7,
    maturity: "16",
    description: "A criação de um clone humano desencadeia questões éticas e uma corrida contra o tempo.",
    seasons: 1
  },
  {
    id: 36,
    title: "Mundos Paralelos",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Ficção / Multiverso",
    rating: 8.2,
    maturity: "14",
    description: "Uma cientista descobre como viajar entre dimensões, mas cada salto a aproxima de um perigo desconhecido."
  },
  {
    id: 37,
    title: "Inteligência Artificial",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Ficção / IA",
    rating: 9.1,
    maturity: "12",
    description: "Um androide com consciência própria se rebela contra seus criadores em uma luta pela liberdade.",
    seasons: 3
  },
  {
    id: 38,
    title: "Apocalipse Zumbi",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Ficção / Terror",
    rating: 7.8,
    maturity: "18",
    description: "Em um mundo pós-apocalíptico, um grupo de sobreviventes busca uma cura para a epidemia zumbi."
  },
  {
    id: 39,
    title: "Naves do Amanhã",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Ficção / Navegação",
    rating: 8.0,
    maturity: "10",
    description: "A humanidade desenvolve naves capazes de viajar na velocidade da luz, mas um império alienígena quer impedi-los."
  },
  {
    id: 40,
    title: "O Enigma de Ômega",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2c?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2c?w=400&h=600&fit=crop",
    year: 2026,
    genre: "Ficção / Mistério",
    rating: 8.8,
    maturity: "14",
    description: "Um código alienígena é descoberto na Lua e uma equipe internacional corre para decifrá-lo antes que seja tarde.",
    seasons: 2
  }
];

// ==========================================
// 5. DOCUMENTÁRIOS (6 documentários)
// ==========================================
const documentaries: Movie[] = [
  {
    id: 41,
    title: "Planeta Azul: Profundezas",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Documentário / Natureza",
    rating: 9.4,
    maturity: "L",
    description: "Uma jornada épica pelos oceanos, revelando criaturas nunca antes filmadas.",
    seasons: 1
  },
  {
    id: 42,
    title: "Mentes Brilhantes",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Documentário / Biografia",
    rating: 8.9,
    maturity: "10",
    description: "A história inspiradora de cientistas que mudaram o mundo com suas descobertas."
  },
  {
    id: 43,
    title: "Cosmos: O Início",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Documentário / Espaço",
    rating: 9.2,
    maturity: "L",
    description: "Uma viagem no tempo desde o Big Bang até a formação dos planetas."
  },
  {
    id: 44,
    title: "O Poder da Música",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Documentário / Cultural",
    rating: 8.7,
    maturity: "L",
    description: "Como a música molda culturas e une pessoas ao redor do mundo."
  },
  {
    id: 45,
    title: "Segredos da Selva",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Documentário / Natureza",
    rating: 9.0,
    maturity: "L",
    description: "Exploração da vida selvagem nas florestas tropicais da Amazônia.",
    seasons: 1
  },
  {
    id: 46,
    title: "Invenções que Mudaram o Mundo",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Documentário / História",
    rating: 8.6,
    maturity: "10",
    description: "As invenções mais revolucionárias da história da humanidade."
  }
];

// ==========================================
// 6. ORIGINAIS REELHUB (8 originais)
// ==========================================
const originals: Movie[] = [
  {
    id: 47,
    title: "O Último Reino (A Saga)",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    year: 2026,
    genre: "Ação / Épico",
    rating: 9.2,
    maturity: "16",
    description: "O desfecho épico da guerra que definiu o destino do mundo conhecido.",
    seasons: 4
  },
  {
    id: 48,
    title: "Amor em Paris",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Comédia / Romance",
    rating: 8.1,
    maturity: "L",
    description: "Uma noite mágica em Paris transforma a vida de dois desconhecidos para sempre."
  },
  {
    id: 49,
    title: "Invasão Silenciosa",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Terror / Suspense",
    rating: 8.3,
    maturity: "18",
    description: "Uma criatura que usa o som como arma aterroriza uma pacata cidade do interior."
  },
  {
    id: 50,
    title: "Riders: Mundo Aberto",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Ação / Aventura",
    rating: 8.7,
    maturity: "14",
    description: "Skate, amizade e desafios em uma competição que pode mudar suas vidas.",
    seasons: 2
  },
  {
    id: 51,
    title: "O Último Comando: Nova Fronteira",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=600&fit=crop",
    year: 2026,
    genre: "Ação / Ficção",
    rating: 8.5,
    maturity: "16",
    description: "Em um futuro distópico, um soldado desertor luta contra um sistema opressor."
  },
  {
    id: 52,
    title: "Mistério no Lago",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Mistério / Suspense",
    rating: 8.9,
    maturity: "14",
    description: "Uma série de desaparecimentos em um lago turístico revela segredos enterrados há décadas.",
    seasons: 1
  },
  {
    id: 53,
    title: "Café com Canela",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1558618666-fcd25c85fafb?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85fafb?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Romance / Drama",
    rating: 8.0,
    maturity: "12",
    description: "Uma história de amor inesperada entre um barista e uma cliente que visita seu café todas as manhãs."
  },
  {
    id: 54,
    title: "Despertar Digital",
    type: "Série",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    year: 2026,
    genre: "Ficção / Cyberpunk",
    rating: 8.8,
    maturity: "16",
    description: "Um grupo de hackers descobre que a realidade que vivemos é uma simulação controlada por uma IA.",
    seasons: 2
  }
];

// ==========================================
// 7. TERROR (6 filmes)
// ==========================================
const horrorMovies: Movie[] = [
  {
    id: 55,
    title: "A Casa do Lago",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Terror / Sobrenatural",
    rating: 7.9,
    maturity: "18",
    description: "Uma família se muda para uma casa antiga à beira de um lago e descobre que não estão sozinhos."
  },
  {
    id: 56,
    title: "O Ritual",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Terror / Suspense",
    rating: 8.2,
    maturity: "18",
    description: "Um grupo de amigos se perde em uma floresta e acaba encontrando uma seita que pratica rituais macabros."
  },
  {
    id: 57,
    title: "A Noite dos Mortos",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2c?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2c?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Terror / Zumbi",
    rating: 7.6,
    maturity: "18",
    description: "Uma epidemia zumbi se espalha rapidamente e um grupo de sobreviventes se refugia em um shopping center."
  },
  {
    id: 58,
    title: "A Entidade",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=600&fit=crop",
    year: 2024,
    genre: "Terror / Psicológico",
    rating: 8.4,
    maturity: "16",
    description: "Uma escritora é atormentada por uma presença que parece surgir de seus próprios pesadelos."
  },
  {
    id: 59,
    title: "O Bosque",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=600&fit=crop",
    year: 2025,
    genre: "Terror / Folclore",
    rating: 7.8,
    maturity: "16",
    description: "Uma lenda local sobre uma criatura que habita o bosque se torna realidade para um grupo de amigos."
  },
  {
    id: 60,
    title: "Visita Noturna",
    type: "Filme",
    backdrop: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&h=720&fit=crop",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop",
    year: 2023,
    genre: "Terror / Sobrenatural",
    rating: 7.4,
    maturity: "14",
    description: "Um casal é visitado por entidades sobrenaturais todas as noites à meia-noite."
  }
];

// ==========================================
// EXPORTAÇÃO COM ÍCONES (Lucide)
// ==========================================
import {
  Flame,
  Trophy,
  Swords,
  Theater,
  Smile,
  Rocket,
  BookOpen,
  Skull,
} from "lucide-react";

export const categories: Category[] = [
  {
    id: "trending",
    title: "Em Alta",
    icon: Flame,
    items: [...actionMovies.slice(0, 3), ...sciFiMovies.slice(0, 3), ...dramaSeries.slice(0, 2)]
  },
  {
    id: "originals",
    title: "Originais ReelHub",
    icon: Trophy,
    items: originals
  },
  {
    id: "action",
    title: "Filmes de Ação",
    icon: Swords,
    items: actionMovies
  },
  {
    id: "drama",
    title: "Séries Dramáticas",
    icon: Theater,
    items: dramaSeries
  },
  {
    id: "comedy",
    title: "Comédias",
    icon: Smile,
    items: comedyMovies
  },
  {
    id: "scifi",
    title: "Ficção Científica",
    icon: Rocket,
    items: sciFiMovies
  },
  {
    id: "horror",
    title: "Terror & Suspense",
    icon: Skull,
    items: horrorMovies
  },
  {
    id: "docs",
    title: "Documentários",
    icon: BookOpen,
    items: documentaries
  }
];

// Mantém a exportação antiga para compatibilidade
export const movies = categories[0].items;