import logo from './logo.svg';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        </section>
        <section>
          <Componente msg="Componente" msg1="Componente 1" msg2="Componente 2"/>
          <hr/>
          <Propiedades
            cadena="Esto es una de texto"
            numero={19}
            booleano={true}
            arreglo={[1,2,3,4]}
            funcion={(num) => num*num}
            objeto={{nombre: 'Hendri', usuario:'Hnavas'}}
            elementReact={<i>Esto es un elemento de React</i>}
            componentReact={<Componente msg2='componente como props'/>}
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <RenderizadoElementos/>
        </section>
      </header>
    </div>
  );
}

export default App;
