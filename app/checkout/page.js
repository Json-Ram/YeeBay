"use client"
import MainLayout from "../layouts/MainLayout"
import CheckoutItem from "../components/CheckoutItem"

const Checkout = () => {

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
        <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
          <div className="text-2xl font-bold mt-4 mb-4">
            Checkout
          </div>
          <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
            <div className="w-[65%]">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-xl font-semibold mb-2">
                  Shipping Address
                </div>
                <div>
                  <ul className="text-sm mt-2">
                    <li>Name: test</li>
                    <li>Address: test</li>
                    <li>City: test</li>
                    <li>Country: Canada</li>
                    <li>Postal Code: test</li>
                  </ul>
                </div>
              </div>
              <div id="Items" className="bg-white rounded-lg mt-4">
                <CheckoutItem key={product.id} product={product} />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Checkout