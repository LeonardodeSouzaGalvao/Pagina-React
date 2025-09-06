import { useState } from "react"
import { InputAdd } from "./components/InputAdd";

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
 export function App() {
  const [List, setList] = useState([
    {id: '1', label: 'Fazer café', complete: false},
    {id: '2', label: 'Fazer café', complete: false},
    {id: '3', label: 'Fazer almoço', complete: false},
    {id: '4', label: 'Fazer jantar', complete: false}
  ]);

   const handleAdd = (value: string) => {

    setList([
        ...List,
        { id: (List.length + 1).toString(), complete: false, label: value }
      ]);

  }

  return (
    <div>

      <InputAdd onAdd={handleAdd} />

      <ol>
        {List.map((listItem)=>(
          <li key={listItem.id}>{listItem.label}
          
          {listItem.complete ? ' concluido ' : ''}
          <button onClick={() => setList([
        ...List.map(item =>({...item, complete: item.id === listItem.id ? true : item.complete}) )])}>
            Concluido
          </button>

          <button onClick={() => setList([
        ...List.filter(item => item.id !== listItem.id)])}>
            Remove
          </button>
          </li>
        ))}
      </ol>

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
