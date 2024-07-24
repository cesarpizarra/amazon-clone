import { useEffect, useState } from "react";
import { getProducts } from "../../service";
import { Product } from "../../types/product";
import {
  fashiotItems,
  gadgetStore,
  gamingAccesories,
  refreshItems,
} from "../../constant/products";
import Card1 from "../cards/Card1";
import Card2 from "../cards/Card2";
import Slider from "../Slider";

const Products = () => {
  const [laptops, setLaptops] = useState<Product[]>([]);
  const [phones, setPhones] = useState<Product[]>([]);
  const [mens, setMens] = useState<Product[]>([]);
  const [womens, setWomens] = useState<Product[]>([]);
  const [beauty, setBeauty] = useState<Product[]>([]);
  const [kitchen, setKetchen] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setLaptops(
          response.filter((product: any) => product.category === "laptops"),
        );
        setPhones(
          response.filter((product: any) => product.category === "smartphones"),
        );
        setMens(
          response.filter((product: any) => product.category === "mens-shirts"),
        );
        setWomens(
          response.filter(
            (product: any) => product.category === "womens-dresses",
          ),
        );
        setBeauty(
          response.filter((product: any) => product.category === "beauty"),
        );
        setKetchen(
          response.filter(
            (product: any) => product.category === "kitchen-accessories",
          ),
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col bg-white p-4">
          <h1 className="text-sm font-bold md:text-lg">Gaming Accessories</h1>
          <div className="grid grid-cols-2 gap-4 pb-12">
            {gamingAccesories.map((product, index) => (
              <Card1 key={index} name={product.name} image={product.image} />
            ))}
          </div>
          <div className="mt-auto w-full cursor-pointer text-sm font-semibold text-[#007185] hover:text-orange-500">
            See More
          </div>
        </div>

        <div className="flex flex-col bg-white p-4">
          <h1 className="whitespace-pre-wrap text-sm font-bold md:text-lg">
            FREE Shipping to Philippines
          </h1>
          <img
            src="/amazon-clone/images/image1.jpg"
            alt=""
            className="object-cover"
          />
          <div className="mt-auto w-full cursor-pointer text-sm font-semibold text-[#007185] hover:text-orange-500">
            Learn More
          </div>
        </div>

        <div className="flex flex-col bg-white p-4">
          <h1 className="text-sm font-bold md:text-lg">
            Shop Deals in Fashion
          </h1>
          <div className="grid grid-cols-2 gap-4 pb-12">
            {fashiotItems.map((product, index) => (
              <Card1 key={index} name={product.name} image={product.image} />
            ))}
          </div>
          <div className="mt-auto w-full cursor-pointer text-sm font-semibold text-[#007185] hover:text-orange-500">
            See all Details
          </div>
        </div>

        <div className="flex flex-col bg-white p-4">
          <h1 className="text-sm font-bold md:text-lg">Refresh your space</h1>
          <div className="grid grid-cols-2 gap-4 pb-12">
            {refreshItems.map((product, index) => (
              <Card1 key={index} name={product.name} image={product.image} />
            ))}
          </div>
          <div className="mt-auto w-full cursor-pointer text-sm font-semibold text-[#007185] hover:text-orange-500">
            See More
          </div>
        </div>

        <div className="flex flex-col bg-white p-4">
          <h1 className="text-sm font-bold md:text-lg">Deals in PCs</h1>
          <img src="/amazon-clone/images/image2.jpg" alt="" className="" />
          <div className="mt-auto w-full cursor-pointer text-sm font-semibold text-[#007185] hover:text-orange-500">
            Learn More
          </div>
        </div>

        <div className="flex flex-col bg-white p-4">
          <h1 className="text-sm font-bold md:text-lg">Amazon Gadget Store</h1>
          <img
            src="https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY160_.jpg"
            alt=""
            className="h-40 object-cover"
          />
          <div className="mt-2 grid grid-cols-3 gap-2 pb-12">
            {gadgetStore.map((product, index) => (
              <Card2 key={index} name={product.name} image={product.image} />
            ))}
          </div>
          <div className="mt-auto w-full cursor-pointer text-sm font-semibold text-[#007185] hover:text-orange-500">
            See More
          </div>
        </div>

        <div className="flex flex-col bg-white p-4">
          <h1 className="text-sm font-bold md:text-lg">Toys under $25</h1>
          <img src="/amazon-clone/images/image3.jpg" alt="" className="" />
          <div className="mt-auto w-full cursor-pointer text-sm font-semibold text-[#007185] hover:text-orange-500">
            Shop Now
          </div>
        </div>

        <div className="flex flex-col bg-white p-4">
          <h1 className="text-sm font-bold md:text-lg">Home décor under $50</h1>
          <img src="/amazon-clone/images/image4.jpg" alt="" className="" />
          <div className="mt-auto w-full cursor-pointer text-sm font-semibold text-[#007185] hover:text-orange-500">
            Shop Now
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white p-4">
        <h1 className="text-xl font-bold">Smart Phones</h1>
        <div className="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto">
          {phones.map((item, index) => (
            <Slider
              key={index}
              image={item.images[0]}
              id={item.id.toString()}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white p-4">
        <h1 className="text-xl font-bold">Laptops</h1>
        <div className="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto">
          {laptops.map((item, index) => (
            <Slider
              key={index}
              image={item.images[0]}
              id={item.id.toString()}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 bg-white p-4">
        <h1 className="text-xl font-bold">Women's Clothing</h1>
        <div className="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto">
          {womens.map((item, index) => (
            <Slider
              key={index}
              image={item.images[0]}
              id={item.id.toString()}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 bg-white p-4">
        <h1 className="text-xl font-bold">Men's Clothing</h1>
        <div className="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto">
          {mens.map((item, index) => (
            <Slider
              key={index}
              image={item.images[0]}
              id={item.id.toString()}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white p-4">
        <h1 className="text-xl font-bold">Women's Clothing</h1>
        <div className="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto">
          {beauty.map((item, index) => (
            <Slider
              key={index}
              image={item.images[0]}
              id={item.id.toString()}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 bg-white p-4">
        <h1 className="text-xl font-bold">Kitchen Accessories</h1>
        <div className="flex w-full snap-x snap-mandatory items-center gap-4 overflow-x-auto">
          {kitchen.map((item, index) => (
            <Slider
              key={index}
              image={item.images[0]}
              id={item.id.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
