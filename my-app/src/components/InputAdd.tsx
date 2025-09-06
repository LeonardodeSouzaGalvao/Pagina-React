import { useState } from "react";

interface IinputAddProps{
    onAdd(value: string): void;
}
export const InputAdd = ( props: IinputAddProps) =>{
  const [value, setValue] = useState('');

  const handleAdd = () => {
    props.onAdd(value);
     setValue('');
  }
    return (

    <div>
      <input type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
    );
}