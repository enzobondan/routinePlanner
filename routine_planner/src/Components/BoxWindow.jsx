import React from "react"


export const BoxWindow = ({data}) => {
    /*Data será um objeto que trará todos os itens a serem listados no slot deste armazém, eu posso trazer um slot com bloquinhos
    mas eu acredito ser mais intuitivo e menos estilizado utilizar um popUp draggable que tem um botão de fechar com 
    uma listagem horizontal de itens com ícone, título e quantidade */
    return (
        <div>
            {data.map(item => (
                <div style={{display: 'flex',justifyContent: 'center'}}>
                    <p>{item.itemName}</p>
                </div>
            ))}
            <div>
                <p>a</p>
            </div>
        </div>
    )
}