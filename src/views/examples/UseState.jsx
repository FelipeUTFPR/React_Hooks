import React, {useState} from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
//Primeira variavel do array recebe o valor atual do estado
//Segunda variável guarda a função que ira alterar o valor do estado
//useState recebe no parâmetro o valor inicial do estado, que é  zero '0'
//não consigo alterar o valor de count diretamente, preciso usar a função setCount
    const [count, setCount] = useState(0)
    const[name,setName] = useState("")

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />

      <SectionTitle title="#Exercício #01" />

      <div className="center">
        <span className="text">{count}</span>
      </div>
{/* pode passar o valor direto de count, ou umas função callback de um valor que deseja alterar */}
      <div>
        <button className="btn" onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button className="btn" onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button className="btn" onClick={() => setCount(current => current + 1000)}>
          1000
        </button>
      </div>

      
{/* não é possível alterar o estado a partir da interface,
a unica forma de fazer isso é capturando um evento */}

{/* O Evento é gerado, o Estado é alterado, o estado alterando é feito uma atualização na interface gráfica */}
      <SectionTitle title="Exercício #02" />
      <input type="text" className="input"
        value={name} onChange={ e => setName(e.target.value)}
      />

      <span className="text">{name}</span>

    </div>
  );
};

export default UseState;
