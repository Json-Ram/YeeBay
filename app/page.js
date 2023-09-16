'use client';
import MainLayout from './layouts/MainLayout';
import CarouselComp from './components/CarouselComp';
import Product from './components/Product';

export default function Home() {

  const products = [
    {
      id: 1,
      title: 'Test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla massa lacus, eu eleifend eros consequat vel. Maecenas ornare fermentum lacus, sed pretium nisi hendrerit id. Etiam id leo sit amet ante dapibus tempor. Etiam id sapien sit amet sem mattis eleifend dignissim ut dolor. Pellentesque eu eros sed justo.',
      url: 'https://picsum.photos/id/7',
      price: 2500
    },
    {
      id: 1,
      title: 'Test2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla massa lacus, eu eleifend eros consequat vel. Maecenas ornare fermentum lacus, sed pretium nisi hendrerit id. Etiam id leo sit amet ante dapibus tempor. Etiam id sapien sit amet sem mattis eleifend dignissim ut dolor. Pellentesque eu eros sed justo.',
      url: 'https://picsum.photos/id/20',
      price: 1900
    }
  ]

  return (
    <MainLayout>
      <CarouselComp />

      <div className='max-w-[1200px] mx-auto'>
        <div className='text-2xl font-bold mt-4 mb-6 px-4'>
          Products
        </div>
        <div className='grid grid-cols-5 gap-4'>
          {products.map(product => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
