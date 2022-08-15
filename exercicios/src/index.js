import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
import {BoaTarde,  BoaNoite} from "./components/Multiplos"

ReactDOM.render(
    <div>
        <BoaTarde nome="Guilherme" idade={10}/>
        <BoaNoite nome="Bia" idade={10}/>
    </div>, document.getElementById('root'))
    