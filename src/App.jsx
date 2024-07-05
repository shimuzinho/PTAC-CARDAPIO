import { useState } from "react";
import "./globals.css"

export default function App() {

    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            item: "Hambúrguer",
            imagem: "https://www.assai.com.br/sites/default/files/shutterstock_1806472312.jpg",
            preco: "R$ 25,99"
        },
        {
            id: 2,
            item: "Coca-cola 350ml",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4S15squn95k7qtrVOpMX1MOJGe48y4B7FQ&s",
            preco: "R$ 5,99"
        },
        {
            id: 3,
            item: "Batatas fritas",
            imagem: "https://gastronomiacarioca.zonasul.com.br/wp-content/uploads/2023/05/batata_frita_destaque_ilustrativo_zona_sul.jpg",
            preco: "R$ 8,99"
        },
        {
            id: 4,
            item: "Suco de Frutas",
            imagem: "https://helenalunardelli.com.br/wp-content/uploads/2013/02/sucos.jpg",
            preco: "R$ 8,99"
        },
    ]);

    const [listaPedidos, setPedidos] = useState([]);

    const adicionarPedido = (item) => {       
        setPedidos([...listaPedidos, item])
        console.log(0)
    };

    const removerPedido = (id) => {
        let controlador = false
        let listaAux = listaPedidos.filter((produto) => {
            if (controlador == false) {
                if (produto.id == id) {
                    controlador = true
                    return false
                } else {
                    return true
                }
            } else {
                return true
            }
        })
        setPedidos(listaAux)
    };

    return (
        <div className="bloco-principal">
        <div className="bloco-produtos">
            {listaProdutos.map((p) => (
                <div key={p.id}>
                    <img src={p.imagem} alt={p.item} />
                    <p>{p.item}</p>
                    <p>{p.preco}</p>
                    <button onClick={() => adicionarPedido(p)}>ADD</button>
                </div>
            ))}
        </div>
        <div className="bloco-pedidos">
            {listaPedidos.map((p) => (
                <div key={p.id}>
                    <img src={p.imagem} alt={p.item} />
                    <p>{p.item}</p>
                    <p>{p.preco}</p>
                    <button onClick={() => removerPedido(p.id)}>Remover</button>
                </div>
            ))}
        </div>
    </div>
    );
}