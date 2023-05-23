import { ReactElement } from 'react';
import Header from './components/header/Header';
import Sobre from './components/Sobre/Sobre';

function App(): ReactElement {
  return (
    <div>
      <Header />
      <Sobre/>
    </div>
  );
}

export default App;
