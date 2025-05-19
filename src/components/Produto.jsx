import sapato from "../assets/produto-imagem.png";

const Produto = () => {
    return (
        <div title="K-Swiss v8 - Masculino">
            <div className="h-[320px] bg-white rounded shadow-xl relative flex justify-center items-center">
                <span className="absolute top-5 left-5 leading-[32px] bg-verde text-[14px] uppercase font-bold px-4 rounded-3xl">30% off</span>
                <img src={sapato} alt="" className="w-full" />
            </div>
            <div className="mt-[18px]">
                <h6 className="text-[12px] font-bold text-cinza">Tênis</h6>
                <h4 className="text-grafite text-[24px] line-clamp-1">K-Swiss v8 - Masculino</h4>
                <h4 className="text-[24px] font-bold">
                    <del className="text-cinza font-light">$200</del>
                    $100
                </h4>
            </div>
        </div>
    );
}

export default Produto;