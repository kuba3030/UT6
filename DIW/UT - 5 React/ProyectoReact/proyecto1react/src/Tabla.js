import React,{ Component } from "react"


class Tabla extends Component{
    render(){
        return(
            <table>
               <thead>
                   <tr>
                       <th>Nombre</th>
                       <th>Apellidos</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>Jakub</td>
                       <td>Cieslik</td>
                   </tr>
                   <tr>
                       <td>Jesus</td>
                       <td>Piquero</td>
                   </tr>
                   <tr>
                       <td>Cristian</td>
                       <td>Piquero</td>
                   </tr>
                   <tr>
                       <td>Gabriel</td>
                       <td>Sastre</td>
                   </tr>
               </tbody>
            </table>
        )
    }
}

export default Tabla