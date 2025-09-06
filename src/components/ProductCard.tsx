
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  imageSrc: string;
  category: string;
}

export default function ProductCard({ name, price, originalPrice, imageSrc, }: ProductCardProps) {

  const formatearARS = (valor: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(valor);
  }

  return (
    <article className="relative overflow-hidden bg-white rounded-xl shadow-md p-4 max-w-sm w-60 h-90">
      {/* Etiqueta SALE */}
      <span className="absolute left-0 top-0  bg-red-500 text-white text-2xl font-bold px-2 py-1 rounded-br-lg">
        {-((price / originalPrice) * 100).toFixed(0)}%
      </span>

      {/* Imagen del producto */}
      <div className="flex justify-center p-5">
        <img src={imageSrc} alt={name} className="w-30 h-30 object-contain" />
      </div>

      {/* Nombre */}
      <h2 className="text-1xl font-semibold text-gray-800 line-clamp-2 overflow-hidden text-ellipsis w-[90%]">{name}</h2>

      <div className="flex items-center gap-2 my-[8%] ">

        {/* Precio */}

        <span className="text-green-600 font-bold text-4xl ">
          {formatearARS(price)}
        </span>

        {/* Precio Anterior */}
        <span className="line-through text-gray-400 text-1xl">
          ${originalPrice}
        </span>

      </div>

      <div>
        <p className=' text-gray-400 text-sm'>Ahorrás {formatearARS(originalPrice - price)} pesos</p>
      </div>

    </article>
  );
}
