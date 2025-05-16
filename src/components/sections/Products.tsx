import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import {
  fashiotItems,
  gadgetStore,
  gamingAccesories,
  refreshItems,
} from "../../constant/products";
import ProductCard from "../cards/ProductCard";
import Slider from "../Slider";
import { getProductsByCategory } from "../../service";

const categoryMap = {
  phones: "smartphones",
  laptops: "laptops",
  mens: "mens-shirts",
  womens: "womens-dresses",
  beauty: "beauty",
  kitchen: "kitchen-accessories",
};

const Products = () => {
  const [products, setProducts] = useState<{
    phones: Product[];
    laptops: Product[];
    mens: Product[];
    womens: Product[];
    beauty: Product[];
    kitchen: Product[];
  }>({
    phones: [],
    laptops: [],
    mens: [],
    womens: [],
    beauty: [],
    kitchen: [],
  });
  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.all(
        Object.entries(categoryMap).map(async ([key, category]) => {
          const items = await getProductsByCategory(category);
          return [key, items];
        }),
      );
      setProducts(Object.fromEntries(results));
    };

    fetchAll();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col bg-white p-4">
          <h1 className="text-sm font-bold md:text-lg">Gaming Accessories</h1>
          <div className="grid grid-cols-2 gap-4 pb-12">
            {gamingAccesories.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
              />
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
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
              />
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
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
              />
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
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
              />
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
          {products.phones.map((item, index) => (
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
          {products.laptops.map((item, index) => (
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
          {products.womens.map((item, index) => (
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
          {products.mens.map((item, index) => (
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
          {products.beauty.map((item, index) => (
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
          {products.kitchen.map((item, index) => (
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
