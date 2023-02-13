// Option 2.1: client-side fetching
import Title from '@/components/Title';
import { getProducts } from '@/lib/products';
import Head from 'next/head';
import { useState, useEffect } from 'react';

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  console.log('[HomePage] render:', products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className='py-4 px-6'>
        <Title>Next Shop</Title>
      </main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomePage;
