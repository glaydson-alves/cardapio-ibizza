import { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { useCarrinho } from '@/context/carrinhoContextApi';

const InformacaoProduto = ({ produto, tamanho, preco }) => {
  const [quantidade, setQuantidade] = useState(1);
  const { addProdutoAoCarrinho } = useCarrinho();

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const precoTotal = preco ? (parseFloat(preco.replace('R$', '').trim()) * quantidade).toFixed(2) : 'Carregando...';

  const router = useRouter();

  const handleAddAoCarrinho = () => {

    toast.success(`${produto.Nome}`, {
      description: 'Adicionado ao carrinho!',
      action: { label: "Continuar comprando", onClick: () => router.push("/")},
      style: { 
          backgroundColor: '#ff9900',
          color: '#fff',
          border: '2px solid #ff9900',
          borderRadius: '8px',
      },
      autoClose: 100,
    })

    addProdutoAoCarrinho({ ...produto }, quantidade, preco, precoTotal, tamanho); 
  };

  return (
    <div className="p-5 space-y-4">
      <p className='text-primary text-lg'>{produto.Nome}</p>
      <div className='flex gap-4'>
        <span className='font-bold text-secondary text-xl'>R$ {precoTotal}</span>
        <span className='text-secondary-foreground-light'>{tamanho}</span>
      </div>
      <div className='flex gap-3'>
        <Button
          className="bg-transparent text-primary hover:text-primary border-primary"
          size="icon"
          variant="outline"
          onClick={diminuirQuantidade}
        >
          <ChevronLeft />
        </Button>
        <div className="text-primary w-[15] h-[15] flex justify-center items-center">
          <span className='text-xl'>{quantidade}</span>
        </div>
        <Button
          className="bg-transparent text-primary hover:text-primary border-primary"
          size="icon"
          variant="outline"
          onClick={aumentarQuantidade}
        >
          <ChevronRight />
        </Button>
      </div>
      <div className='flex-col space-y-2'>
        <h2 className='font-bold'>Ingredientes</h2>
        <p className='text-secondary-foreground-ligth'>{produto.Descricao}</p>
      </div>
      <div className='space-y-2'>
        <h2 className='text-primary text-lg'>Adicional</h2>
        <p>Deseja adicionar Borda?</p>
        <Switch />
      </div>
      <Button className="w-full rounded-[10px] text-card uppercase hover:bg-primary"
        onClick={handleAddAoCarrinho}>
        Adicionar ao carrinho
      </Button>
    </div>
  );
};

export default InformacaoProduto;
