"use client"
import React, { useEffect, useState } from 'react';
import CategoriaItem from "./categoria-item";
import { /*getDatabase,*/ ref, onValue, off } from "firebase/database";
import db from '@/lib/firebase';

const Categorias = ({ onCategoriaSelecionada }) => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('1_Pizza Tradicional');

    console.log(`aqui está o console ${db}`)

    useEffect(() => {
        /*const db = getDatabase(firebaseApp); */
        const categoriaRef = ref(db, 'categoria');

        const fetchCategorias = () => {
            onValue(categoriaRef, (capturarValor) => {
                const categoriasData = capturarValor.val();
                if (categoriasData) {
                    const categoriasArray = Object.entries(categoriasData).map(([key, value]) => ({
                        id: key,
                        ...value
                    }));
                    setCategorias(categoriasArray);
                }
            });
        };

        fetchCategorias();

        return () => {
            off(categoriaRef);
        };
    }, []);

    const handleClickCategoria = (categoriaId) => {
        onCategoriaSelecionada(categoriaId);
        setCategoriaSelecionada(categoriaId);
    };

    return (
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-5">
            {categorias.map((categoria) => (
                <CategoriaItem 
                    key={categoria.id} 
                    categoria={categoria} 
                    onClickCategoria={handleClickCategoria} 
                    categoriaSelecionada={categoriaSelecionada} 
                />
            ))}
        </div>
    );
}

export default Categorias;
