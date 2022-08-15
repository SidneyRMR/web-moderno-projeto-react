import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
import {BoaTarde,  BoaNoite} from "./components/Multiplos"
import Saudacao from './components/Saudacao'

ReactDOM.render(
    <div>
        <BoaTarde nome="Guilherme" idade={10}/>
        <Saudacao tipo="Bom Dia" nome="João"/>
    </div>, document.getElementById('root'))
    