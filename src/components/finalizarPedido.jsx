import { Button } from "./ui/button";
import { Banknote, CreditCard, Diamond } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Image from "next/image";
import { Separator } from "./ui/separator";

const FinalizarPedido = () => {
    return (
        <div>
            <h1 className="font-bold mb-4">Entrega</h1>
            <div class="grid grid-cols-2 gap-4">
                
                <Button 
                    variant="outline"
                    className={`border-primary flex items-center justify-center gap-2 rounded-lg py-3 text-primary hover:bg-primary-foreground hover:text-secondary-foreground
                   `}>Entregar</Button>
                <Button variant="outline"
                    className={`border-primary flex items-center justify-center gap-2 rounded-lg py-3 text-primary hover:bg-primary-foreground hover:text-secondary-foreground
                   `}>Retirar</Button>
            </div>

            <div className="mt-4">
                <h1 className="mb-4 font-bold">Pagamento</h1>
                <Select>
                    <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Opções de Pagamento'/>
                    </SelectTrigger>
                    <SelectContent className="bg-background">
                        <SelectItem value='pix'>
                            <div className='flex gap-2'>
                                <Image src="/pix.svg" alt="pix" width={0} height={0} className='w-5 h-auto'/>
                                <span>Pix</span>
                            </div>
                        </SelectItem>
                        <SelectItem value='cartao'>
                            <div className='flex gap-2'>
                                <Image src="/cartao.svg" alt="cartao" width={0} height={0} className='w-5 h-auto'/>
                                <span>Cartão</span>
                            </div>
                        </SelectItem>
                        <SelectItem value='dinheiro'>
                            <div className='flex gap-2'>
                                <Image src="/dinheiro.svg" alt="dinheiro" width={0} height={0} className='w-5 h-auto'/>
                                <span>Dinheiro</span>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="my-4">
                <Separator className="my-4 bg-foreground"/>
                <div className="flex justify-between">
                    <span>sub-total</span>
                    <span>R$ {0.00}</span>
                </div>
                <Separator className="my-4 bg-foreground"/>
                <div className="flex justify-between">
                    <span>entrega</span>
                    <span>entrega</span>
                </div>
                <Separator className="my-4 bg-foreground"/>
                <div className="flex justify-between">
                    <span>pagamento</span>
                    <span>pagamento</span>
                </div>
                <Separator className="my-4 bg-foreground"/>
                <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">R${0.00}</span>
                </div>

            </div>

            <Button className="w-full text-secondary-foreground hover:bg-primary-foreground my-4">
                Finalizar Pedido
            </Button>

            
        </div>
    );
}
 
export default FinalizarPedido;