import React, {Component } from 'react'
import SelectoresAtributo from './SelectoresAtributo.js'
import Trabajoformularios from './Trabajoformularios.js'

class Aplicacion extends Component {
    render(){
        return(
        <div>
            <SelectoresAtributo />
            <Trabajoformularios />
        </div>
            )
        }
    }

export default Aplicacion 