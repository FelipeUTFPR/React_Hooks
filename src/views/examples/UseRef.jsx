import React, { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const merge = function(s1,s2){
    //return [...s1].map((e,i) => `${e}${s2[i] || ""}`).join("")
    return [...s1].map(function(e,i){
        return `${e}${s2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {

    const[value1, setValue1] = useState("")
    const[value2, setValue2] = useState("")
    
    const count = useRef(0)
    const myImput1 = useRef(null)
    const myImput2 = useRef(null)

    useEffect(function(){
        count.current = count.current + 1
        myImput2.current.focus()
    }, [value1])

    useEffect(function(){
        count.current = count.current + 1
        myImput1.current.focus()
    }, [value2])

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
                <span className='text'>{merge(value1,value2)} [</span>
                <span className='text red'>{count.current}</span>
                <span className='text'>]</span>
            </div>
            {/* ref apontando para nosso código jsx */}
            <input type="text" className='input' ref={myImput1} value={value1} onChange={e=>setValue1(e)}/>

            </div>

            <SectionTitle title="Exercício #02"/>
            <div className='center'>
                    <input type="text" className='input' ref={myImput2} value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>

        </div>
    )
}

export default UseRef
