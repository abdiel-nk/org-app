import './App.css';
import Header from  './components/Header/header.js';
import Formulario from './components/Formulario/Formulario.js';
import MyOrg from './components/MyOrg/myOrg.js';

console.log(Header);
function App() {
  return (
    <div >
      
      <Header></Header>
      <Formulario/>
      <MyOrg/>
    </div>
  );
}

export default App;
