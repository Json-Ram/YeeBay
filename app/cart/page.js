"use client";
import MainLayout from "../layouts/MainLayout";
import SimilarProducts from "../components/SimilarProducts";
import CartItem from "../components/CartItem";

const Cart = () => {

  const product = {
    id: 1,
    title: "Test",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla massa lacus, eu eleifend eros consequat vel. Maecenas ornare fermentum lacus, sed pretium nisi hendrerit id. Etiam id leo sit amet ante dapibus tempor. Etiam id sapien sit amet sem mattis eleifend dignissim ut dolor. Pellentesque eu eros sed justo.",
    url: "https://picsum.photos/id/7",
    price: 2500
  }

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
          <div className="text-2xl font-bold my-4">
            Shopping Cart
          </div>
          <div className="relative flex items-baseline justify-between gap-2">
            <div className="w-[65%]">
              <CartItem key={product.id} product={product} />
            </div>
          </div>
        </div>
        <SimilarProducts />
      </MainLayout>
    </>
  )
}

export default Cart