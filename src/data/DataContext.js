import React from "react";

export const data = {
    number:123,
    text: 'Context API...'
}
//criação de um objeto de contexto
//poderia inicializar com o data, sem problemas
const DataContext = React.createContext(null)

export default DataContext