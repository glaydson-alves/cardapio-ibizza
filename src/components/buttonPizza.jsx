import React, { useState } from "react";
import { Button } from "./ui/button";

const ButtonTamanhoPizza = ({ handleClick }) => {
    
    const [selectedTamanho, setSelectedTamanho] = useState("familia");

    const handleButtonClick = (tamanho) => {
        setSelectedTamanho(tamanho);
        handleClick(tamanho, `Preco${tamanho.charAt(0).toUpperCase()}${tamanho.slice(1)}`);
    };

    return (
        <div className="flex gap-3">
            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-md bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground ${selectedTamanho === 'familia' ? 'bg-primary-foreground text-secondary-foreground' : 'hover:bg-primary-foreground hover:text-secondary-foreground'}`}
                onClick={() => handleButtonClick('familia')}
            >
                Família
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground ${selectedTamanho === 'media' ? 'bg-primary-foreground text-secondary-foreground' : 'hover:bg-primary-foreground hover:text-secondary-foreground'}`}
                onClick={() => handleButtonClick('media')}
            >
                Média
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground ${selectedTamanho === 'pequena' ? 'bg-primary-foreground text-secondary-foreground' : 'hover:bg-primary-foreground hover:text-secondary-foreground'}`}
                onClick={() => handleButtonClick('pequena')}
            >
                Pequena
            </Button>
        </div>
    );
}

export default ButtonTamanhoPizza;