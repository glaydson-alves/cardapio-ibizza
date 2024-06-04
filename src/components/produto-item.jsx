import React, { useEffect } from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCarrinho } from "@/context/carrinhoContextApi"; 

const ProdutoItem = ({ produto, categoriaSelecionada, tamanhoSelecionado }) => {

  let precoFinal;

  if (categoriaSelecionada === '1_Pizza Tradicional' || categoriaSelecionada === '2_Pizza Especial') {
      precoFinal = produto.PrecoF;
  } else if (categoriaSelecionada === '4_Bebidas') {
      precoFinal = produto.Preco1L;
  } else {
      precoFinal = produto.Preco;
  }


    
    if (categoriaSelecionada === '1_Pizza Tradicional' || categoriaSelecionada === '2_Pizza Especial') {
        tamanhoSelecionado = tamanhoSelecionado || 'familia'; 

        switch (tamanhoSelecionado) {
            case 'familia':
                precoFinal = produto.PrecoF;
                break;
            case 'media':
                precoFinal = produto.PrecoM;
                break;
            case 'pequena':
                precoFinal = produto.PrecoP;
                break;
            default:
                break;
        }
    } else if (categoriaSelecionada === '4_Bebidas') {
        tamanhoSelecionado = tamanhoSelecionado || '1 litro';

        switch (tamanhoSelecionado) {
            case '1 litro':
                precoFinal = produto.Preco1L;
                break;
            case '2 litros':
                precoFinal = produto.Preco2L;
                break;
            case 'latinha':
                precoFinal = produto.PrecoLatinha;
                break;
            default:
                break;
        }
    } else if (categoriaSelecionada === '3_Lanches') {
        precoFinal = produto.Preco;
    }

    const precoFormatado = typeof precoFinal === 'number' ? `R$ ${precoFinal.toFixed(2)}` : '';
    
    
    
      return (
        <Link href={{
          pathname:`/produto/${produto.Slug}`,
          query: {
              tamanho: `${tamanhoSelecionado}`,
              preco: `${precoFinal}`,
          }
        }}>
          <Card className="flex flex-col border-hidden p-[2px]">
            <div className="w-[167px] h-[228px] rounded-lg">
              <div className="flex align-items-center  justify-center rounded-lg gap-3 bg-secondary-foreground w-[167px] h-[170px]">
                <Image
                  src={produto.imgUrl}
                  alt={produto.Nome}
                  width={120}
                  height={120}
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="rounded-lg bg-accent flex flex-col align-items-center justify-center h-[58px]">
                <p className="text-left px-3 text-sm font-semibold truncate">{produto.Nome}</p>
                <div className="flex justify-between items-baseline pl-2">
                  <p className="text-left font-bold text-secondary">{precoFormatado}</p>
                  <Button className="bg-accent border-primary" size="icon" variant="outline">
                    <ShoppingCart className="text-primary" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      );
    }
    
    export default ProdutoItem;
