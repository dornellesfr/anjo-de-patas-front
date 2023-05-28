import INewsMock from "../../@types/INewsMockHome";
import text1 from "./textNews1";
import text2 from "./textNews2";

const newsMockHome: INewsMock[] = [
  {
    image: 'https://caesegatos24h.com.br/wp-content/uploads/2019/03/escovar-cachorro-1-scaled.jpg',
    title: 'Banhos em dogs',
    content: text1,
  },
  {
    image: 'https://img.freepik.com/fotos-gratis/beagles-filhotes-procurando-algo_1150-18193.jpg',
    title: 'Vacinação de dogs',
    content: text2,
  },

];

export default newsMockHome;
