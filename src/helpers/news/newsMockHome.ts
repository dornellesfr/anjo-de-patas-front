import INewsMock from "../../@types/INewsMockHome";
import text1 from "./textNews1";
import text2 from "./textNews2";

const newsMockHome: INewsMock[] = [
  {
    id: 1,
    title: 'Banhos em dogs',
    subtitle: 'Veja x motivos para dar banho no seu cachorro',
    image: 'https://caesegatos24h.com.br/wp-content/uploads/2019/03/escovar-cachorro-1-scaled.jpg',
    content: text1,
  },
  {
    id: 2,
    title: 'Vacinação de dogs',
    subtitle: 'Veja x motivos para vacinar seu pet',
    image: 'https://img.freepik.com/fotos-gratis/beagles-filhotes-procurando-algo_1150-18193.jpg',
    content: text2,
  },
  {
    id: 3,
    title: 'Vacinação de dogs',
    subtitle: 'Veja x motivos para vacinar seu pet',
    image: 'https://img.freepik.com/fotos-gratis/beagles-filhotes-procurando-algo_1150-18193.jpg',
    content: text2,
  },
];

export default newsMockHome;
