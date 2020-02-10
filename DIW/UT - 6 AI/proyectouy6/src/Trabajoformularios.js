import React, {Component } from 'react'
// import Imagen from 'react-image'


class Trabajoformularios extends Component{
    render(){
        return(
            <div>
                <form name="formulario1" id="formularioid" action="">
                    <fieldset>
                        <legend>Formulario con React</legend>
                        <label form="campotextoid">Nombre:</label>
                        <input type="text" name="campotexto1" id="campotextoid" placeholder="Introduce tu nombre"></input>
                        <label form="campotextoid2">Campo de busqueda</label>
                        <input type="text" className="claseinput1" name="campotexto2" id="campotextoid2" placeholder="Busqueda"></input>
                    </fieldset>
                </form>
               
                   
                
            </div>
        )
    }
}

export default Trabajoformularios

