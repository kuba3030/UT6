import React, {Component } from 'react'
import Imagen from 'react-image'

class SelectoresAtributo extends Component {
    render(){
        return(
           <div>
            <a href="https://www.google.es/" target="_blank" rel="noopener noreferrer"  >Enlace a google que cumple un selector de atributos</a>
            <br/><br/>
            <a href="https://www.google.es/" target="_self">Enlace a google que cumple un selector de atributos con el valor self</a>
            <br/><br/>
            <Imagen alt="Foto del K2" src={require('./img/k2.jpg')}/>
            <br/><br/>
            <p class="claseparrafo-1">Este parrafo va a cumplir un slector de atrivutos para elementos con el atributo class y cuyo valor comience por classeparrafo</p>
            <br/><br/>
            <p className="claseselector1">Este parrafo va a cumplir un selector de atrributo para elemento con el atributo class y cuyo valor comience por una palabra que puede ir seguida de cualquiera de caracteres</p>
           </div>
        )
    }
}

export default SelectoresAtributo 