import Image from "next/image";

const ImagemProduto = ({ produto }) => {
    return (
        <div className='w-[390] h-[303] flex justify-center items-center p-4'>
            <Image 
                src={produto.imgUrl}
                alt={produto.Nome}
                height={240}
                width={260}
                className=""
                sizes="100vw" 
            />
        </div>
    );
}
 
export default ImagemProduto;