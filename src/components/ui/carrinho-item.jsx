import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";
import { useCarrinho } from '@/context/carrinhoContextApi';

const CarrinhoItem = ({ produto }) => {
    const { removeProdutoDoCarrinho, aumentarQuantidadeCarrinho, diminuirQuantidadeCarrinho } = useCarrinho();

    const handleRemoverProduto = () => {
        removeProdutoDoCarrinho(produto.id);
    };
    const handleAumentarQuantidade = () => {
        aumentarQuantidadeCarrinho(produto.id);
    };

    const handleDiminuirQuantidade = () => {
        diminuirQuantidadeCarrinho(produto.id);
    };
    
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex justify-center items-center rounded-lg bg-white h-[80px] w-[80px]">
                    <Image 
                        src={produto.imgUrl}
                        alt={produto.Nome}
                        height={77}
                        width={77}
                        objectFit="cover"
                        className="object-cover"
                        sizes="100vw" 
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <p>{produto.Nome}</p>
                    <div className="flex items-center text-sm gap-3 mb-1">
                    <p className="font-bold">R$ {produto.precoTotal}</p>
                    <p>{produto.tamanho}</p>
                    </div>
                    
                    <div className='flex items-center gap-2'>
                        <Button
                            className="bg-transparent text-foreground hover:text-foreground border-foreground h-8 w-8"
                            size="icon"
                            variant="outline"
                            onClick={handleDiminuirQuantidade}
                        >
                        <ChevronLeft />
                        </Button>
                        <div className="text-foreground w-[15] h-[15] flex justify-center items-center">
                        <span className='text-xl'>{produto.quantidade}</span>
                        </div>
                        <Button
                            className="bg-transparent text-foreground hover:text-foreground border-foreground h-8 w-8"
                            size="icon"
                            variant="outline"
                            onClick={handleAumentarQuantidade}
                        >
                        <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
            <Button 
                className="bg-transparent text-foreground hover:text-foreground border-foreground"
                size="icon"
                variant="outline"
                onClick={handleRemoverProduto}
            >
                <Trash size={16}/>
            </Button>                   
        </div>
    );
}
 
export default CarrinhoItem;
