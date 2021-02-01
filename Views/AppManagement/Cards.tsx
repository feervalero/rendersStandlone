export class Card {
  name: string;
  value: number;
  img: string;
  url: string;
  constructor(name: string, value: number, img: string, url: string) {
    this.name = name;
    this.value = value;
    this.img = img;
    this.url = url;
  }
}

var Cards: Card[] = [
  { name: "Gallo", value: 1, url: "assets/Cards/1.jpg", img: require("../../assets/Cards/1.jpg") },
  { name: "Diablo", value: 2, url: "assets/Cards/2.jpg", img: require("../../assets/Cards/2.jpg") },
  { name: "Dama", value: 3, url: "assets/Cards/3.jpg", img: require("../../assets/Cards/3.jpg") },
  { name: "El catrín", value: 4, url: "assets/Cards/4.jpg", img: require("../../assets/Cards/4.jpg") },
  { name: "El paraguas", value: 5, url: "assets/Cards/5.jpg", img: require("../../assets/Cards/5.jpg") },
  { name: "La sirena", value: 6, url: "assets/Cards/6.jpg", img: require("../../assets/Cards/6.jpg") },
  { name: "La escalera", value: 7, url: "assets/Cards/7.jpg", img: require("../../assets/Cards/7.jpg") },
  { name: "La botella", value: 8, url: "assets/Cards/8.jpg", img: require("../../assets/Cards/8.jpg") },
  { name: "El barril", value: 9, url: "assets/Cards/9.jpg", img: require("../../assets/Cards/9.jpg") },
  { name: "El árbol", value: 10, url: "assets/Cards/10.jpg", img: require("../../assets/Cards/10.jpg") },
  { name: "El melón", value: 11, url: "assets/Cards/11.jpg", img: require("../../assets/Cards/11.jpg") },
  { name: "El valiente", value: 12, url: "assets/Cards/12.jpg", img: require("../../assets/Cards/12.jpg") },
  { name: "El gorrito", value: 13, url: "assets/Cards/13.jpg", img: require("../../assets/Cards/13.jpg") },
  { name: "La muerte", value: 14, url: "assets/Cards/14.jpg", img: require("../../assets/Cards/14.jpg") },
  { name: "La pera", value: 15, url: "assets/Cards/15.jpg", img: require("../../assets/Cards/15.jpg") },
  { name: "La bandera", value: 16, url: "assets/Cards/16.jpg", img: require("../../assets/Cards/16.jpg") },
  { name: "El bandolón", value: 17, url: "assets/Cards/17.jpg", img: require("../../assets/Cards/17.jpg") },
  {
    name: "El violoncello",
    value: 18,
    url: "assets/Cards/18.jpg", img: require("../../assets/Cards/18.jpg"),
  },
  { name: "La garza", value: 19, url: "assets/Cards/19.jpg", img: require("../../assets/Cards/19.jpg") },
  { name: "El pájaro", value: 20, url: "assets/Cards/20.jpg", img: require("../../assets/Cards/20.jpg") },
  { name: "La mano", value: 21, url: "assets/Cards/21.jpg", img: require("../../assets/Cards/21.jpg") },
  { name: "La bota", value: 22, url: "assets/Cards/22.jpg", img: require("../../assets/Cards/22.jpg") },
  { name: "La luna", value: 23, url: "assets/Cards/23.jpg", img: require("../../assets/Cards/23.jpg") },
  { name: "El cotorro", value: 24, url: "assets/Cards/24.jpg", img: require("../../assets/Cards/24.jpg") },
  { name: "El borracho", value: 25, url: "assets/Cards/25.jpg", img: require("../../assets/Cards/25.jpg") },
  { name: "El negrito", value: 26, url: "assets/Cards/26.jpg", img: require("../../assets/Cards/26.jpg") },
  { name: "El corazón", value: 27, url: "assets/Cards/27.jpg", img: require("../../assets/Cards/27.jpg") },
  { name: "La sandía", value: 28, url: "assets/Cards/28.jpg", img: require("../../assets/Cards/28.jpg") },
  { name: "El tambor", value: 29, url: "assets/Cards/29.jpg", img: require("../../assets/Cards/29.jpg") },
  { name: "El camarón", value: 30, url: "assets/Cards/30.jpg", img: require("../../assets/Cards/30.jpg") },
  { name: "Las jaras", value: 31, url: "assets/Cards/31.jpg", img: require("../../assets/Cards/31.jpg") },
  { name: "El músico", value: 32, url: "assets/Cards/32.jpg", img: require("../../assets/Cards/32.jpg") },
  { name: "La araña", value: 33, url: "assets/Cards/33.jpg", img: require("../../assets/Cards/33.jpg") },
  { name: "El soldado", value: 34, url: "assets/Cards/34.jpg", img: require("../../assets/Cards/34.jpg") },
  { name: "La estrella", value: 35, url: "assets/Cards/35.jpg", img: require("../../assets/Cards/35.jpg") },
  { name: "El cazo", value: 36, url: "assets/Cards/36.jpg", img: require("../../assets/Cards/36.jpg") },
  { name: "El mundo", value: 37, url: "assets/Cards/37.jpg", img: require("../../assets/Cards/37.jpg") },
  { name: "El apache", value: 38, url: "assets/Cards/38.jpg", img: require("../../assets/Cards/38.jpg") },
  { name: "El nopal", value: 39, url: "assets/Cards/39.jpg", img: require("../../assets/Cards/39.jpg") },
  { name: "El alacrán", value: 40, url: "assets/Cards/40.jpg", img: require("../../assets/Cards/40.jpg") },
  { name: "La rosa", value: 41, url: "assets/Cards/41.jpg", img: require("../../assets/Cards/41.jpg") },
  { name: "La calavera", value: 42, url: "assets/Cards/42.jpg", img: require("../../assets/Cards/42.jpg") },
  { name: "La campana", value: 43, url: "assets/Cards/43.jpg", img: require("../../assets/Cards/43.jpg") },
  {
    name: "El cantarito",
    value: 44,
    url: "assets/Cards/44.jpg", img: require("../../assets/Cards/44.jpg"),
  },
  { name: "El venado", value: 45, url: "assets/Cards/45.jpg", img: require("../../assets/Cards/45.jpg") },
  { name: "El sol", value: 46, url: "assets/Cards/46.jpg", img: require("../../assets/Cards/46.jpg") },
  { name: "La corona", value: 47, url: "assets/Cards/47.jpg", img: require("../../assets/Cards/47.jpg") },
  { name: "La chalupa", value: 48, url: "assets/Cards/48.jpg", img: require("../../assets/Cards/48.jpg") },
  { name: "El pino", value: 49, url: "assets/Cards/49.jpg", img: require("../../assets/Cards/49.jpg") },
  { name: "El pescado", value: 50, url: "assets/Cards/50.jpg", img: require("../../assets/Cards/50.jpg") },
  { name: "La palma", value: 51, url: "assets/Cards/51.jpg", img: require("../../assets/Cards/51.jpg") },
  { name: "La maceta", value: 52, url: "assets/Cards/52.jpg", img: require("../../assets/Cards/52.jpg") },
  { name: "El arpa", value: 53, url: "assets/Cards/53.jpg", img: require("../../assets/Cards/53.jpg") },
  { name: "La rana", value: 54, url: "assets/Cards/54.jpg", img: require("../../assets/Cards/54.jpg") },

];

export default Cards;
