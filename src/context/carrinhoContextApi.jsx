"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CarrinhoContext = createContext();

export function useCarrinho() {
  return useContext(CarrinhoContext);
}

export const CarrinhoProvider = ({ children }) => {
  const [produtosCarregados, setProdutosCarregados] = useState(false);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const storedProdutos = JSON.parse(localStorage.getItem("@cardapio-online/carrinho-produtos") || "[]");
    setProdutos(storedProdutos);
    setProdutosCarregados(true);
  }, []);
  
  useEffect(() => {
    if (produtosCarregados) {
      localStorage.setItem("@cardapio-online/carrinho-produtos", JSON.stringify(produtos));
    }
  }, [produtos, produtosCarregados]);

  const addProdutoAoCarrinho = (produto, quantidade, preco, precoTotal, tamanho) => {
    const produtoComUUID = { ...produto, id: uuidv4(), quantidade, preco, precoTotal, tamanho };

    const updatedProdutos = [...produtos, produtoComUUID];
    setProdutos(updatedProdutos);
  };

  const aumentarQuantidadeCarrinho = (produtoId) => {
    const updatedProdutos = produtos.map((produto) => {
      if (produto.id === produtoId) {
        const novaQuantidade = produto.quantidade + 1;
        const novoPrecoTotal = (produto.preco * novaQuantidade).toFixed(2);
        return {
          ...produto,
          quantidade: novaQuantidade,
          precoTotal: novoPrecoTotal
        };
      }
      return produto;
    });
    setProdutos(updatedProdutos);
  };

  const diminuirQuantidadeCarrinho = (produtoId) => {
    const updatedProdutos = produtos.map((produto) => {
      if (produto.id === produtoId && produto.quantidade > 1) {
        const novaQuantidade = produto.quantidade - 1;
        const novoPrecoTotal = (produto.preco * novaQuantidade).toFixed(2);
        return {
          ...produto,
          quantidade: novaQuantidade,
          precoTotal: novoPrecoTotal
        };
      }
      return produto;
    });
    setProdutos(updatedProdutos);
  };


  const removeProdutoDoCarrinho = (produtoId) => {
    const updatedProdutos = produtos.filter((produto) => produto.id !== produtoId);
    setProdutos(updatedProdutos);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        produtos,
        addProdutoAoCarrinho,
        aumentarQuantidadeCarrinho,
        diminuirQuantidadeCarrinho,
        removeProdutoDoCarrinho
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoProvider;
