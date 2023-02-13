// Option 2.2: client-side fetching
// with api route
import Title from '@/components/Title';
import { getProducts } from '@/lib/products';
import Head from 'next/head';
import { useState, useEffect } from 'react';

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/products');
      const products = await response.json();
      setProducts(products);
    })();
    
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
