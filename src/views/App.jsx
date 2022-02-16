import './App.css'
import React, {useState} from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import Store from '../data/Store'

//importou o contexto no componente de mais alto nível, componente raiz
import DataContext, {data} from '../data/DataContext'

const App = props => {
const[state,setState] = useState(data)

    return (
<Store>

<DataContext.Provider value={{state,setState}}>
    <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
                </DataContext.Provider>
</Store>
        
    )
    
                
}

export default App