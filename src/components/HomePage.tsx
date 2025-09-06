import React from 'react'
import ProductsSection from './ProductsSection'
import TitleSection from './ui/TitleSection'
import GoogleMap from './GoogleMap'
import { useEffect, useState } from 'react';

type Producto = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  imageSrc: string;
  category: string;
}

const HomePage = () => {

  function getEnvVar(name: string): string {
    const value = process.env[name];
    if (!value) throw new Error(`La variable de entorno ${name} no está definida.`);
    return value;
  }

  const url = getEnvVar("NEXT_PUBLIC_DATABASE_URL");

  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarProductos() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        console.error("Error cargando productos:", err);
      } finally {
        setLoading(false);
      }
    }

    cargarProductos();
  }, []);

  const AllCategories = [...new Set(productos.map(p => p.category))];

  if (loading) return <p className="text-center mt-8">Cargando productos...</p>;

  return (
    <main className={`w-[100%] mx-auto xl:w-[80%] flex flex-col items-center justify-center`}>

      <img src='/primeras-marcas.jpg' alt='Primeras marcas'></img>

      {AllCategories.map((productCategory) => {

        const productosFiltrados = productos.filter(
          p => p.category === productCategory
        );

        return (
          <ProductsSection
            key={productCategory}
            category={productCategory}
            productos={productosFiltrados}
          />
        )
      })}

      <TitleSection title="Nuestro local" />

      <GoogleMap />

      <p>web design by IsaiasDev</p>

    </main>
  )
}

export default HomePage
