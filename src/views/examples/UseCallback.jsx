import React,{useCallback, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {




    const [count, setCount] = useState(0)
    //técnica utilizada para não renderizar um componente mais de uma vez
    //quando a função é passada para um elemento filho
    //é necessário o retorno do React.memo no componente filho,
    //caso contrário, o componente irá renderizar mais de uma vez.
    //retorna uma função cacheada
    const inc = useCallback(function(delta){
        setCount(curr => curr + delta)
    }, [setCount])

    //function inc(delta){
    //    setCount(count + delta)
   // }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memorizada!"
            />

            <div className='center'>
            <span className='text'>{count}</span>

            <UseCallbackButtons inc={inc}/>

            </div>
        </div>
    )
}

export default UseCallback
