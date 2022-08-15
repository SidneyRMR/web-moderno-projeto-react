import React, { Fragment } from 'react'

export default props => 
    //Posso usar div quando tiver 2 componentes ou abrir chave, mas ai preciso dar nome key para nao dar warning
    <Fragment> 
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>

