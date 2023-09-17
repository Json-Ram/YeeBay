"use client";
import ProductComp from "./Product";
import { BiLoader } from "react-icons/bi";

const SimilarProducts = () => {

  const products = [
    {
      id: 1,
      title: "Test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla massa lacus, eu eleifend eros consequat vel. Maecenas ornare fermentum lacus, sed pretium nisi hendrerit id. Etiam id leo sit amet ante dapibus tempor. Etiam id sapien sit amet sem mattis eleifend dignissim ut dolor. Pellentesque eu eros sed justo.",
      url: "https://picsum.photos/id/7",
      price: 2500
    },
    {
      id: 2,
      title: "Test2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla massa lacus, eu eleifend eros consequat vel. Maecenas ornare fermentum lacus, sed pretium nisi hendrerit id. Etiam id leo sit amet ante dapibus tempor. Etiam id sapien sit amet sem mattis eleifend dignissim ut dolor. Pellentesque eu eros sed justo.",
      url: "https://picsum.photos/id/20",
      price: 1900
    }
  ]

  return (
    <>
      <div>
        <div className="border-b py-1 max-w-[1200px] mx-auto" />

        <div className="max-w-[1200px] mx-auto">
          <div className="font-bold text-2xl py-2 mt-4">
            Similar sponsored items
          </div>
          {products.length > 0 ? 
            <div className="grid grid-cols-5 gap-4">
              {products.map(product => (
                <ProductComp key={product.id} product={product} />
              ))}
            </div>
          : <div className="flex items-center justify-center">
              <div className="flex items-center justify-center gap-4 font-semibold">
                <BiLoader size={30} className="text-blue-400 antimate-spin" />
                Loading Products...
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default SimilarProducts