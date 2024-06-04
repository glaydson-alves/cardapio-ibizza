import React, { useState } from "react";
import { Button } from "./ui/button";

const ButtonTipoBebida = ({ handleClick }) => {

    const [selectedTamanho, setSelectedTamanho] = useState("1 litro");
    
    const handleButtonClick = (tamanho) => {
        setSelectedTamanho(tamanho);
        handleClick(tamanho, `Preco${tamanho.charAt(0).toUpperCase()}${tamanho.slice(1)}`);
    };

    return (
        <div className="flex gap-3">
            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-md bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground ${selectedTamanho === '1 litro' ? 'bg-primary-foreground text-secondary-foreground' : ''}`}
                onClick={() => handleButtonClick('1 litro')}
            >
                1 Litro
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground ${selectedTamanho === '2 litros' ? 'bg-primary-foreground text-secondary-foreground' : ''}`}
                onClick={() => handleButtonClick('2 litros')}
            >
                2 Litros
            </Button>

            <Button
                variant="outline"
                size="sm"
                className={`border-primary flex items-center justify-center gap-2 rounded-lg bg-secondary-foreground text-primary active:bg-primary-foreground active:text-secondary-foreground hover:bg-primary-foreground hover:text-secondary-foreground ${selectedTamanho === 'latinha' ? 'bg-primary-foreground text-secondary-foreground' : ''}`}
                onClick={() => handleButtonClick('latinha')}
            >
                Latinha
            </Button>
        </div>
    );
}

export default ButtonTipoBebida;