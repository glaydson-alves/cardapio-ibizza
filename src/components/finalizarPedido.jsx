import { Button } from "./ui/button";
import { Banknote, CreditCard, Diamond } from 'lucide-react';

const FinalizarPedido = () => {
    return (
        <div>
            <h1>tipo de entrega</h1>
            <div class="grid grid-cols-2 gap-4">
                <Button className="w-full text-foreground">Entrega</Button>
                <Button className="w-full text-foreground">Retirar</Button>
            </div>

            <div>
                <h1>Formas de pagamento</h1>
                <div class="grid grid-cols-3 gap-4">
                    <Button className="text-foreground">
                        <Banknote /> Dinheiro
                    </Button>
                    <Button className="text-foreground">
                        <CreditCard/> Cartão
                    </Button>
                    <Button className="text-foreground">
                        <Diamond /> Pix
                    </Button>
                </div>
            </div>

            <Button>
                Finalizar Pedido
            </Button>

            
        </div>
    );
}
 
export default FinalizarPedido;