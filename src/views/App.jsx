import './App.css'
import React, {useState} from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

//importou o contexto no componente de mais alto nível, componente raiz
import DataContext, {data} from '../data/DataContext'

const App = props => {
const[state,setState] = useState(data)

    return (
        //quando o contexto for inicializado aqui, é este valor que será passado para todos os componentes " value={{state,setState}}"

        <DataContext.Provider value={{state,setState}}>
    <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
                </DataContext.Provider>
    )
    
                
}

export default App