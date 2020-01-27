import React,{ Component } from "react"
import Tabla from './Tabla'
import TablaComponentesSimples from './TablaComplementosSimples'

class AplicacionPrincipal extends Component {
    render(){
        return(
           <div className="App">
             <h2>Tabla que no utiliza complementos simples</h2>
             <Tabla />
             <br></br>
             <h2>Tabla creada con un componente de clase que utiliza complementos simples</h2>
             <TablaComponentesSimples />
           </div>
        )
    }
}

export default AplicacionPrincipal