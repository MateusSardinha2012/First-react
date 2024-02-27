import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  //contador
  const [ useEffectCounter, SetUseEffectCounter] = useState(0);
  // estou logado ou nao ?
  const [logado, setLogado] = useState(false)

  useEffect(()=>{
    console.log("useeffect foi chamado");
    SetUseEffectCounter(useEffectCounter + 1) // mudando o valor da tela para outro

  },[logado]);

  const Logar = () =>{
    setLogado(true); // mudando o estado da variavel por debaixo dos panos
  }

  const Deslogar = () =>{
    setLogado(false);
  }

  return (
    <div className="App">
       <h1>O UseEffect foi chamado {useEffectCounter} vezes</h1>
       {logado ? <p>Estou logado</p> : <p>Estou Deslogado</p>}
       <button onClick={Logar}>Logar</button>
       <button onClick={Deslogar}>Deslogar</button>
    </div>
  ); 
}

export default App;