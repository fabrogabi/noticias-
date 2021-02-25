import React,{Fragment,useState,useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario'
import Noticia from './Components/ListadoNoticias'
import axios from 'axios';
import ListadoNoticias from './Components/ListadoNoticias';
//h

function App() {

  //definir categoria y noticias
  const [categoria,guardarCategoria]=useState('');
  const [noticias,guardarNoticias]=useState([])

  //llamado a la api

  useEffect(()=>{
    const consultarApi= async ()=>
    {
      const url=`http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=8d41418175fa4f36beab2694ddc40a74`;
      const noticias = await axios.get(url);
      guardarNoticias(noticias.data.articles);
     
    }
    consultarApi();
  } ,[categoria])

  
  return (
    <Fragment>
      
      <Header titulo="Buscador de Noticias"/>
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}/>
        <ListadoNoticias noticias={noticias}/>
      </div>
     
    
    </Fragment>
  );
}

export default App;
