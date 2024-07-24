import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { getProducts } from "../service";
import { ProductDetails } from "../types/product";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
const Deals = () => {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setTimeout(() => {
          setIsLoading(false);
          setProducts(response.filter((product: any) => product.rating >= 4.0));
        }, 1000);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <Layout>
      <div className="min-h-screen w-full bg-white px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold">Today's Deals</h1>
          {isLoading && (
            <div className="flex min-h-screen items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-dotted border-blue-500"></div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-2 text-black md:grid-cols-4 lg:grid-cols-6">
            {products.map((product, index) => (
              <Link
                to={`/amazon-clone/product/${product.id}`}
                key={index}
                className="mx-auto"
              >
                <div className="py-4">
                  <div className="h-24 w-40">
                    <LazyLoadImage
                      src={product.images[0]}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-2 pt-4">
                    <p className="text-[#CC0C39]">
                      <span className="bg-[#CC0C39] px-2 text-white">
                        {product.discountPercentage}
                      </span>{" "}
                      <span className="text-xs font-semibold">
                        Limited time deal
                      </span>
                    </p>
                    <p className="text-sm">{product.title}</p>
                    <span className="text-xs text-yellow-500">
                      Rating: {product.rating.toFixed(1)} ★
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deals;
