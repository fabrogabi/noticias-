import React,{Fragment} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario'

function App() {

  const titulo="holas"
  return (
    <Fragment>
      
      <Header titulo="Buscador de Noticias"/>
      <div className="container white">
        <Formulario />
      </div>
    
    </Fragment>
  );
}

export default App;
