import React from 'react'
import ProductCard from './ProductCard'
import TitleSection from './ui/TitleSection'

interface Producto {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  imageSrc: string;
  category: string;
}

interface ProductsSectionProps {
  category: string;
  productos: Producto[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ category, productos }) => {

  const titulo = category.replaceAll("-", " ");

  return (

    <>
      <section className="w-full overflow-x-auto scrollbar-hide px-[2%]">

        <TitleSection title={titulo} />
        <div className='w-full overflow-x-auto scrollbar-hide'>

          <div className='flex gap-4 w-max py-[5%]'>
            {productos.map((product) => <ProductCard key={product.id} {...product} />)}
          </div>

        </div>

      </section>
    </>
  )
}

export default ProductsSection
