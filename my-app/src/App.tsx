/*
interface ICardProps{
  title: String
  children: React.ReactNode
}

const Card = (props: ICardProps) => {
  return (
    <div style ={{ border: '1px solid black'}}>
      <span>Title: {props.title}</span>

      <div>
        {props.children}
      </div>

      <div>
        Footer
      </div>
    </div>
  );
}
*/

import { useState } from "react";

 export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  )
}



/*
//Isso é uma função JS
const teste = () => {
  return 1 + 1;
}

//Isso é uma função JS
const useTeste = () => {
  return 1 + 1;
}

//React hook
//Sempre que há um hook (useState(1 + 1) e outros)
const useTest = () => {
  const[value] = useState(1 + 1);

  return value;
}

//Componente funcional react
//Primeira letra deve ser maiuscula
//Componentes nativos do react começam com letras minusculas
const Test = () => {
  return (
    <div>Teste</div>
  )
}

//Função Js que retorna HTML react
const test = () => {
  return (
    <div>Teste</div>
  )
}
  */
