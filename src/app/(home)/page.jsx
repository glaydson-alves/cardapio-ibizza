"use client"

import React, { useState } from "react";
import Image from "next/image";
import Categorias from "@/components/categorias";
import ProdutosPorCategoria from "@/components/produtos";
import SelecionarTamanhoProduto from "@/components/selecionarTamanhoProduto";

export default function Home() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("1_Pizza Tradicional");
    const [preco, setPreco] = useState(null);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

    const handleCategoriaSelecionada = (categoriaId) => {
        setCategoriaSelecionada(categoriaId);
    };

    return (
        <div className="p-5">
            <Image
                src="/banner.png"
                alt="banner uma explosão de sabores"
                width={0}
                height={0}
                className="h-auto w-full"
                sizes="100vw"
                priority
            />
            <Categorias onCategoriaSelecionada={handleCategoriaSelecionada} />

            <SelecionarTamanhoProduto
                categoriaSelecionada={categoriaSelecionada}
                setTamanhoSelecionado={setTamanhoSelecionado}
            />

            <ProdutosPorCategoria
                categoriaId={categoriaSelecionada}
                tamanhoSelecionado={tamanhoSelecionado}
            />
        </div>
    );
}