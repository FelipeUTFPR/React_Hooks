import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const[value1, setValue1] = useState("")
    //retorna a referência de um objeto
    //count agora é um objeto
    //ou seja, o useRef retorna um objeto mutável 
    //no useRef a alteração no current não vai renderizar o componente
    const count = useRef(0)



    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"

                
            />
            <SectionTitle title="Exercício #01" />

            <div className='center'>
            <div>
                <span className='text'>valor: </span>
                <span className='text'>{value1} [</span>
                <span className='text red'>{count.current}</span>
                <span className='text'>]</span>
            </div>
            <input type="text" className='input' value={value1} onChange={e=>setValue1(e)}/>

            </div>

        </div>
    )
}

export default UseRef
