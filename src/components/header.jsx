"use client";
import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ChevronLeft, ShoppingCart } from "lucide-react"
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Carrinho from "./ui/carrinho";
import { Badge } from "./ui/badge";
import { useRouter, usePathname } from "next/navigation";
import { useCarrinho } from "@/context/carrinhoContextApi";
import FinalizarPedido from './finalizarPedido';

const Header = () => {
    const [quantidadeNoCarrinho, setQuantidadeNoCarrinho] = useState(0);
    const { produtos } = useCarrinho();
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        router.back();
    }; 
    const isHomePage = pathname === '/';

    useEffect(() => {
        const quantidade = produtos.length;
        setQuantidadeNoCarrinho(quantidade);
    }, [produtos]);
    
    return (  
        <Card className="bg-primary flex justify-between align-items-center p-[30px] rounded-none">
            {!isHomePage && (
                <Button
                    className="bg-primary text-white hover:text-white"
                    size="icon"
                    variant="outline"
                    onClick={handleClick}
                >
                    <ChevronLeft />
                </Button>
            )}

            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={78.66} height={39} />
            </Link>          
            
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="bg-transparent border border-white relative" size="icon" variant="outline">
                        {quantidadeNoCarrinho > 0 && (
                                <Badge
                                    className="absolute -top-3 -right-3 bg-white text-primary text-xs rounded-full p-3 w-4 h-4 border border-primary hover:bg-white hover:text-primary"
                                >
                                    <span className="w-full flex items-center justify-center">{quantidadeNoCarrinho}</span>
                                </Badge>
                            )}
                        <ShoppingCart className="text-white"/>
                    </Button>
                </SheetTrigger>

                <SheetContent className='max-h-screen overflow-auto'>
                    <div className="flex flex-col gap-8">
                        <Badge 
                            variant="outline"
                            className="text-foreground border-foreground rounded-[130px] flex justify-center gap-2 w-36 h-8 py-2 px-3 text-[16px]"
                        >
                            <ShoppingCart 
                                size={24}
                                className="bg-transparent"
                            />
                            <span className="uppercase font-bold">Carrinho</span>                       
                        </Badge>

                        <Carrinho/>
                        <FinalizarPedido/>

                    </div>
                    
                </SheetContent>
            </Sheet>
        </Card>         
)}
 
export default Header;