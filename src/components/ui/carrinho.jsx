import React from 'react';
import CarrinhoItem from './carrinho-item';
import { useCarrinho } from '@/context/carrinhoContextApi';
import { ScrollArea } from './scroll-area';

const Carrinho = () => {
    const { produtos } = useCarrinho();

    return (
        
        // <ScrollArea className="w-full h-[200px] rounded-md border">
        <div className="flex flex-col gap-5">
            {produtos.map((produto) => {                
                return (
                    <CarrinhoItem key={produto.id} produto={produto} quantidade={produto.quantidade} />
                );
            })}
        </div>
        // </ScrollArea>
    );
};

export default Carrinho;







// import { useCarrinho } from "@/context/carrinhoContextApi";
// import CarrinhoItem from "./carrinho-item";

// const Carrinho = () => {
//     const { produtos } = useCarrinho();
    
//     return (
//         <div className="flex flex-col gap-5">
//             {produtos.map((produto) => (
//                 <CarrinhoItem key={produto.id} produto={produto} precoTotal={precoTotal}/>
//             ))}
//         </div>
//     );
// }

// export default Carrinho;
