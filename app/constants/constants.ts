import { Book } from "../interfaces/interfaces";

export const asideLinks = [
  { text: "Inicio", href: "/" },
  { text: "Libros", href: "/books" },
  { text: "Mis Alquileres", href: "/rentals" },
  { text: "Contacto", href: "/contact" },
];

export const exampleBook: Book = {
  id: 43333,
  title: "Cien años de soledad",
  author: "Gabriel García Márquez",
  publicationYear: 1967,
  isbn10: "1234567890",
  isbn13: "123-4567890123",
  coverImage:
    "https://m.media-amazon.com/images/I/71YoFJSz3LL._AC_UF1000,1000_QL80_.jpg",
  synopsis: "Esta es una sinopsis del libro.",
  reviews: "Reseñas del libro.",
};

export const appBooks: Book[] = [
  {
    id: 1,
    title: "El amor en los tiempos del cólera",
    author: "Gabriel García Márquez",
    publicationYear: 1985,
    isbn10: "1234567891",
    isbn13: "123-4567890124",
    coverImage: "https://m.media-amazon.com/images/I/81YPlYG-b9L._AC_UF894,1000_QL80_.jpg",
    synopsis: "Una historia de amor que perdura a lo largo de los años en un pequeño pueblo caribeño.",
    reviews: "Una obra maestra que explora los temas del amor y la perseverancia.",
  },
  {
    id: 2,
    title: "El psicoanalista",
    author: "John Katzenbach",
    publicationYear: 2002,
    isbn10: "1234567892",
    isbn13: "123-4567890125",
    coverImage: "https://m.media-amazon.com/images/I/91-ELvEEeIL._AC_UF894,1000_QL80_.jpg",
    synopsis: "Un thriller psicológico donde un psicoanalista debe descifrar una amenaza para salvar su vida.",
    reviews: "Un libro lleno de suspenso y giros inesperados que te mantendrá al borde del asiento.",
  },
  {
    id: 3,
    title: "Muchos vidas, muchos maestros",
    author: "Brian Weiss",
    publicationYear: 1988,
    isbn10: "1234567893",
    isbn13: "123-4567890126",
    coverImage: "https://m.media-amazon.com/images/I/71SAdFFD04L._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Un viaje espiritual a través de vidas pasadas que ofrece enseñanzas profundas sobre la existencia.",
    reviews: "Una lectura inspiradora que invita a la reflexión sobre el alma y su evolución.",
  },
  {
    id: 4,
    title: "Distancia de rescate",
    author: "Samanta Schweblin",
    publicationYear: 2014,
    isbn10: "1234567894",
    isbn13: "123-4567890127",
    coverImage: "https://m.media-amazon.com/images/I/918wQLTNgVL._AC_UF894,1000_QL80_.jpg",
    synopsis: "Una novela inquietante sobre la maternidad, el miedo y la fragilidad de la vida.",
    reviews: "Un relato perturbador y cautivador que explora los límites del amor y la protección.",
  },
  {
    id: 5,
    title: "El pez dorado",
    author: "J.M.G. Le Clézio",
    publicationYear: 1982,
    isbn10: "1234567895",
    isbn13: "123-4567890128",
    coverImage: "https://m.media-amazon.com/images/I/81xzGJK6RGL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "La travesía de una joven que busca su identidad y libertad a través de diferentes culturas.",
    reviews: "Una narrativa rica en detalles que destaca la resiliencia y el espíritu humano.",
  },
  {
    id: 6,
    title: "Perdimos en el fuego",
    author: "Mariana Enríquez",
    publicationYear: 2016,
    isbn10: "1234567896",
    isbn13: "123-4567890129",
    coverImage: "https://m.media-amazon.com/images/I/41Fk3o99nsL.jpg",
    synopsis: "Una colección de cuentos oscuros que exploran la violencia y el horror en la vida cotidiana.",
    reviews: "Historias intensas y perturbadoras que no dejarán indiferente al lector.",
  },
  {
    id: 7,
    title: "Papillon",
    author: "Henri Charrière",
    publicationYear: 1969,
    isbn10: "1234567897",
    isbn13: "123-4567890130",
    coverImage: "https://m.media-amazon.com/images/I/815FoLzxfvL._AC_UF894,1000_QL80_.jpg",
    synopsis: "La autobiografía de un hombre injustamente encarcelado que lucha por su libertad.",
    reviews: "Un relato de supervivencia y determinación que inspira y conmueve.",
  },
  {
    id: 8,
    title: "La Malinche",
    author: "Laura Esquivel",
    publicationYear: 2006,
    isbn10: "1234567898",
    isbn13: "123-4567890131",
    coverImage: "https://m.media-amazon.com/images/I/71UvewhRptL._AC_UF894,1000_QL80_.jpg",
    synopsis: "La vida de La Malinche, una mujer clave en la historia de México, contada con maestría.",
    reviews: "Una novela histórica fascinante que da voz a una figura controvertida y fundamental.",
  },
  {
    id: 9,
    title: "Como agua para chocolate",
    author: "Laura Esquivel",
    publicationYear: 1989,
    isbn10: "1234567899",
    isbn13: "123-4567890132",
    coverImage: "https://m.media-amazon.com/images/I/71vbGbBzlZL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "Una novela de amor y cocina donde las recetas culinarias se entrelazan con las emociones.",
    reviews: "Un clásico que combina magia, romance y gastronomía en una narrativa única.",
  },
  {
    id: 10,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    publicationYear: 1967,
    isbn10: "1234567800",
    isbn13: "123-4567890133",
    coverImage: "https://m.media-amazon.com/images/I/91TvVQS7loL._AC_UF894,1000_QL80_.jpg",
    synopsis: "La historia épica de la familia Buendía en el ficticio pueblo de Macondo.",
    reviews: "Una obra cumbre del realismo mágico que ha cautivado a generaciones de lectores.",
  },
  {
    id: 11,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    publicationYear: 1605,
    isbn10: "1234567801",
    isbn13: "123-4567890134",
    coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVezNVrkn--Jb58Aa5X4CCPbZLiziInniUA&s",
    synopsis: "Las aventuras del ingenioso hidalgo Don Quijote y su escudero Sancho Panza.",
    reviews: "Una de las mayores obras de la literatura universal que mezcla humor y crítica social.",
  },
  {
    id: 12,
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    publicationYear: 2001,
    isbn10: "1234567802",
    isbn13: "123-4567890135",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "Un joven encuentra un libro maldito que cambia su vida para siempre.",
    reviews: "Una novela de misterio y aventura ambientada en la Barcelona de posguerra.",
  },
  {
    id: 13,
    title: "Rayuela",
    author: "Julio Cortázar",
    publicationYear: 1963,
    isbn10: "1234567803",
    isbn13: "123-4567890136",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "Una novela experimental que se puede leer de diversas maneras.",
    reviews: "Una obra maestra que desafía las convenciones narrativas tradicionales.",
  },
  {
    id: 14,
    title: "El Aleph",
    author: "Jorge Luis Borges",
    publicationYear: 1949,
    isbn10: "1234567804",
    isbn13: "123-4567890137",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "Una colección de cuentos que exploran temas filosóficos y metafísicos.",
    reviews: "Relatos llenos de ingenio y profundidad que invitan a la reflexión.",
  },
  {
    id: 15,
    title: "Pedro Páramo",
    author: "Juan Rulfo",
    publicationYear: 1955,
    isbn10: "1234567805",
    isbn13: "123-4567890138",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La búsqueda de un hombre por su padre en un pueblo fantasma.",
    reviews: "Una novela corta pero intensa que es fundamental en la literatura latinoamericana.",
  },
  {
    id: 16,
    title: "La casa de los espíritus",
    author: "Isabel Allende",
    publicationYear: 1982,
    isbn10: "1234567806",
    isbn13: "123-4567890139",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La saga de una familia chilena marcada por el amor, la magia y la política.",
    reviews: "Una obra que combina realismo mágico y una fuerte crítica social.",
  },
  {
    id: 17,
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    publicationYear: 1981,
    isbn10: "1234567807",
    isbn13: "123-4567890140",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La reconstrucción de un asesinato anunciado en un pequeño pueblo.",
    reviews: "Una narrativa atrapante que mezcla reportaje y ficción.",
  },
  {
    id: 18,
    title: "Ficciones",
    author: "Jorge Luis Borges",
    publicationYear: 1944,
    isbn10: "1234567808",
    isbn13: "123-4567890141",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "Una colección de cuentos que desafían la lógica y la percepción de la realidad.",
    reviews: "Historias breves pero profundas que han influenciado a generaciones de escritores.",
  },
  {
    id: 19,
    title: "Aura",
    author: "Carlos Fuentes",
    publicationYear: 1962,
    isbn10: "1234567809",
    isbn13: "123-4567890142",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "Un joven historiador se ve envuelto en una misteriosa y sobrenatural historia de amor.",
    reviews: "Una novela corta pero intensa que combina elementos góticos y románticos.",
  },
  {
    id: 20,
    title: "La fiesta del Chivo",
    author: "Mario Vargas Llosa",
    publicationYear: 2000,
    isbn10: "1234567810",
    isbn13: "123-4567890143",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La caída del dictador Rafael Trujillo en la República Dominicana.",
    reviews: "Un retrato crudo y fascinante de la dictadura y sus efectos en la sociedad.",
  },
  {
    id: 21,
    title: "El túnel",
    author: "Ernesto Sabato",
    publicationYear: 1948,
    isbn10: "1234567811",
    isbn13: "123-4567890144",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La confesión de un pintor que ha cometido un asesinato por amor.",
    reviews: "Una novela psicológica que explora la obsesión y la soledad.",
  },
  {
    id: 22,
    title: "Sobre héroes y tumbas",
    author: "Ernesto Sabato",
    publicationYear: 1961,
    isbn10: "1234567812",
    isbn13: "123-4567890145",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "Una exploración de la historia y la identidad argentina a través de una familia.",
    reviews: "Una obra compleja y profunda que mezcla historia, política y psicología.",
  },
  {
    id: 23,
    title: "Los de abajo",
    author: "Mariano Azuela",
    publicationYear: 1915,
    isbn10: "1234567813",
    isbn13: "123-4567890146",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La vida de los campesinos durante la Revolución Mexicana.",
    reviews: "Un clásico de la literatura mexicana que muestra la crudeza de la guerra.",
  },
  {
    id: 24,
    title: "Santa Evita",
    author: "Tomás Eloy Martínez",
    publicationYear: 1995,
    isbn10: "1234567814",
    isbn13: "123-4567890147",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La historia novelada del cuerpo embalsamado de Eva Perón.",
    reviews: "Un relato fascinante que mezcla realidad y ficción sobre un ícono argentino.",
  },
  {
    id: 25,
    title: "La ciudad y los perros",
    author: "Mario Vargas Llosa",
    publicationYear: 1963,
    isbn10: "1234567815",
    isbn13: "123-4567890148",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La vida de los cadetes en una academia militar en Perú.",
    reviews: "Una crítica mordaz a la educación militar y la sociedad peruana.",
  },
  {
    id: 26,
    title: "Doña Bárbara",
    author: "Rómulo Gallegos",
    publicationYear: 1929,
    isbn10: "1234567816",
    isbn13: "123-4567890149",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La lucha entre la civilización y la barbarie en los llanos venezolanos.",
    reviews: "Una novela emblemática de la literatura latinoamericana.",
  },
  {
    id: 27,
    title: "La región más transparente",
    author: "Carlos Fuentes",
    publicationYear: 1958,
    isbn10: "1234567817",
    isbn13: "123-4567890150",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "Un retrato caleidoscópico de la Ciudad de México en el siglo XX.",
    reviews: "Una obra innovadora que ofrece múltiples perspectivas sobre la sociedad mexicana.",
  },
  {
    id: 28,
    title: "La tía Julia y el escribidor",
    author: "Mario Vargas Llosa",
    publicationYear: 1977,
    isbn10: "1234567818",
    isbn13: "123-4567890151",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "La historia de amor entre un joven y su tía política en el Perú de los años 50.",
    reviews: "Una novela divertida y autobiográfica que combina ficción y realidad.",
  },
  {
    id: 29,
    title: "El coronel no tiene quien le escriba",
    author: "Gabriel García Márquez",
    publicationYear: 1961,
    isbn10: "1234567819",
    isbn13: "123-4567890152",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "Un coronel retirado espera una pensión que nunca llega en un pueblo olvidado.",
    reviews: "Una historia conmovedora sobre la esperanza y la dignidad.",
  },
  {
    id: 30,
    title: "Los pasos perdidos",
    author: "Alejo Carpentier",
    publicationYear: 1953,
    isbn10: "1234567820",
    isbn13: "123-4567890153",
    coverImage: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    synopsis: "Un compositor busca sus raíces en la selva amazónica.",
    reviews: "Una novela que explora la identidad y la relación entre el hombre y la naturaleza.",
  },
];


