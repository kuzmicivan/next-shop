// chose incremental static regeneration
// all users see the same data but data can change
import Title from '@/components/Title';
import { getProducts } from '@/lib/products';
import Head from 'next/head';

export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
  const products = await getProducts();
  return { 
    props: { products },
    revalidate: 30,
  }
}

function HomePage({ products }) {
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
