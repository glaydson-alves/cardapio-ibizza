import React, { useEffect } from 'react';
import { getDatabase, ref, onValue, off } from "firebase/database";
import db from '@/lib/firebase';

import firebaseApp from "@/lib/firebase";
import ButtonTamanhoPizza from './buttonPizza';
import ButtonTipoBebida from './buttonBebida';

const SelecionarTamanhoProduto = ({ setPreco, categoriaSelecionada, setTamanhoSelecionado }) => {
    const handleClick = (selectedOption, preco) => {
        setTamanhoSelecionado(selectedOption);
        fetchPrecoFromDatabase(preco);
    };

    const fetchPrecoFromDatabase = (categoriaId) => {
        // const db = getDatabase(firebaseApp);
        const categoriaRef = ref(db, `categoria/${categoriaId}/produtos`);

        onValue(categoriaRef, (snapshot) => {
            const categoriaData = snapshot.val();
            if (categoriaData) {
                setPreco(categoriaData.preco);
            }
        });
    };

    useEffect(() => {
        // const db = getDatabase(firebaseApp);
        const categoriaRef = ref(db, 'categoria');

        const fetchCategorias = () => {
            onValue(categoriaRef, (capturarValor) => {
                const categoriasData = capturarValor.val();
                if (categoriasData) {
                    const categoriasArray = Object.entries(categoriasData).map(([key, value]) => ({
                        id: key,
                        ...value
                    }));
                    const categoriaSelecionadaData = categoriasArray.find(categoria => categoria.id === categoriaSelecionada);
                    if (categoriaSelecionadaData && categoriaSelecionadaData.tipo === '3_Lanches') {
                        setPreco(null);
                    }
                }
            });
        };

        fetchCategorias();

        return () => {
            off(categoriaRef);
        };
    }, [categoriaSelecionada, setPreco]);

    return (
        <div className={`my-4 ${categoriaSelecionada === '3_Lanches' ? 'hidden' : ''}`}>
            {categoriaSelecionada !== '4_Bebidas' && (
                <div>
                    <h2 className="font-bold mb-1">Escolha o tamanho</h2>
                    <ButtonTamanhoPizza handleClick={handleClick} />
                </div>
            )}
            {categoriaSelecionada === '4_Bebidas' && (
                <div>
                    <h2 className="font-bold mb-1">Escolha o tipo de bebida</h2>
                    <ButtonTipoBebida handleClick={handleClick} />
                </div>
            )}
        </div>
    );
};

export default SelecionarTamanhoProduto;