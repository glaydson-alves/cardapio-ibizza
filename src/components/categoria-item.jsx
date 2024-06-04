import React from "react";
import { CATEGORIA_ICON } from "@/constants/categoria-icon";
import { Button } from "./ui/button";

const CategoriaItem = ({ categoria, onClickCategoria, categoriaSelecionada }) => {
    const handleClick = () => {
        onClickCategoria(categoria.id);
    };

    return (
        <Button
            variant="outline"
            className={`border-primary flex items-center justify-center gap-2 rounded-lg py-3 text-primary hover:bg-primary-foreground hover:text-secondary-foreground ${
                categoria.id === categoriaSelecionada ? 'bg-primary-foreground text-secondary-foreground' : 'bg-secondary-foreground'
            }`}
            onClick={handleClick}
        >
            {CATEGORIA_ICON[categoria.slug]}
            <span className="text-xs font-bold">{categoria.nome}</span>
        </Button>
    );
};

export default CategoriaItem;
