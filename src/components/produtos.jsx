import React, { useEffect, useState } from 'react';
import ProdutoItem from "./produto-item";
import { ref, onValue, off } from "firebase/database";
import { Carousel, CarouselContent } from './ui/carousel';
import db from '@/lib/firebase';

const ProdutosPorCategoria = ({ categoriaId, tamanhoSelecionado }) => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // const db = getDatabase(firebaseApp);
        const produtosRef = ref(db, `categoria/${categoriaId}/produtos`);

        const fetchProdutos = () => {
            onValue(produtosRef, (capturarValor) => {
                const produtosData = capturarValor.val();
                if (produtosData) {
                    const produtosArray = Object.entries(produtosData).map(([key, value]) => ({
                        id: key,
                        ...value
                    }));
                    setProdutos(produtosArray);
                }
            });
        };

        fetchProdutos();

        return () => {
            off(produtosRef);
        };
    }, [categoriaId]);

    return (
        <Carousel className="my-5">
            <h1 className='font-bold uppercase px-1 my-5'>cardápio</h1>
            <CarouselContent className="px-5 flex gap-4">
                
                {produtos.map((produto) => (
                    <ProdutoItem
                        key={produto.id}
                        produto={produto}
                        categoriaSelecionada={categoriaId}
                        tamanhoSelecionado={tamanhoSelecionado}
                    />
                ))} 
            </CarouselContent>
        </Carousel>
    );
}

export default ProdutosPorCategoria;