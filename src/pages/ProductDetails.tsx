import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { getProductId } from "../service";
import { ProductDetails as ProductInfo } from "../types/product";

const ProductDetails = () => {
  window.scrollTo(0, 0);
  const { id } = useParams<{ id: string }>();
  const [productDetails, setProductDetails] = useState<ProductInfo | null>(
    null,
  );
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await getProductId(id);
        setProductDetails(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, []);
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto min-h-screen w-full max-w-7xl px-4">
          <div className="mx-auto max-w-7xl p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={productDetails?.thumbnail}
                  alt={productDetails?.title}
                  className="h-auto w-full rounded-lg object-cover"
                />
                <div className="mt-4 flex space-x-2">
                  {productDetails?.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      className="h-24 w-24 cursor-pointer rounded-md object-cover"
                    />
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 md:pl-6">
                <h1 className="mb-2 text-2xl font-bold">
                  {productDetails?.title}
                </h1>
                <p className="mb-2 text-lg text-gray-600">
                  Brand: {productDetails?.brand}
                </p>
                <p className="mb-2 text-xl font-semibold">
                  ${productDetails?.price.toFixed(2)}
                </p>
                <p className="mb-2 text-lg">{productDetails?.description}</p>
                <p className="mb-2 text-sm text-gray-500">
                  Stock: {productDetails?.stock}
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  Category: {productDetails?.category}
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  SKU: {productDetails?.sku}
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  Warranty: {productDetails?.warrantyInformation}
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  Shipping: {productDetails?.shippingInformation}
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  Return Policy: {productDetails?.returnPolicy}
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  Minimum Order Quantity: {productDetails?.minimumOrderQuantity}
                </p>
                <div className="mb-4 flex items-center space-x-2">
                  <span className="text-yellow-500">
                    Rating: {productDetails?.rating.toFixed(1)} ★
                  </span>
                  <span className="text-gray-500">
                    ({productDetails?.reviews.length} reviews)
                  </span>
                </div>
                <button className="btn btn-warning mr-2 rounded-lg px-4 py-2 text-white">
                  Add to Cart
                </button>
                <button className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-bold">Customer Reviews</h2>
              {productDetails?.reviews.map((review, index) => (
                <div key={index} className="mt-4 border-t pt-4">
                  <p className="text-sm text-gray-700">
                    <strong>{review.reviewerName}</strong> ({review.date})
                  </p>
                  <p className="text-sm text-yellow-500">
                    Rating: {review.rating} ★
                  </p>
                  <p className="mt-2 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
