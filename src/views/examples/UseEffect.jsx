import React, { useEffect,useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

//função que calcula fatorial
function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n-1) * n
}



//Efeito colateral é quando a alteração de um estado afeta, ao mesmo tempo,
//outra variável do componente ou até mesmo outro estado.
const UseEffect = (props) => {

    //Ex #01

    const [number, setNumber] = useState(1)
    const [fatorial,setFatorial] = useState(1)

    //Primeiro efeito colateral do componente:
    //Se o numero alterar o valor do cálculo do fatorial também vai alterar
    useEffect(function(){
        setFatorial(calcFatorial(number))
    },[number])

    
    //Segundo efeito colateral do componente:
    //Se o numero do fatorial alterar e passar de 1000000 o nome do site alterará para "Eita!!!"
    useEffect(function(){
        if(fatorial > 1000000){
            document.title = "Eita!!!"
        }
    },[fatorial])

 //Ex #02

 const [status,setStatus] = useState("Ímpar")

 useEffect(function(){
     setStatus(number % 0 ? "Par" : "Impar")
 }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"/>

                <SectionTitle title="Exercício #01"/>

                <div className='center'>
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>

                <input type="number" className='input'
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />


                </div>
                <SectionTitle title="Exercício #02"/>
                <div className='center'>

                <div>

                <span className='text'>Status:</span>
                <span className='text red'>{status}</span>


                </div>
                

                </div>


            
        </div>
    )
}

export default UseEffect
