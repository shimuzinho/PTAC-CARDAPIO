import React from 'react';

export default function ListarProdutos({props}) {
    return (
        <div>
            {
                props.map(prod => 
                    <div>
                        <img src={prod.imagem}></img>
                        <h4>{prod.preco}</h4>
                        <h3>{prod.nome}</h3>
                        <p>{prod.descricao}</p>
                        <button>Comprar</button>
                    </div>
                )
            }
        </div>
    )
}
