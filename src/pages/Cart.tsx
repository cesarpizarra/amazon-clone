import Layout from "../layout/Layout";

const Cart = () => {
  return (
    <Layout>
      <div className="mx-auto min-h-screen w-full max-w-7xl px-4 pt-24">
        <div className="items-center gap-5 bg-white px-5 py-16 md:flex">
          <div>
            <img src="/cart-image.svg" alt="" className="w-60" />
          </div>

          <div>
            <h1 className="text-2xl font-bold">Your Amazon Cart is empty</h1>
            <a
              href="#"
              className="link-hover cursor-pointer text-sm text-[#007185] hover:text-orange-500"
            >
              Shop today's deals
            </a>

            <div className="mt-4 flex items-center gap-4">
              <button className="btn btn-warning">
                Sign in to your account
              </button>
              <button className="btn">Sign up now</button>
            </div>
          </div>
        </div>

        <p className="mt-4 max-w-6xl text-justify text-xs">
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Shopping Cart{" "}
          <span className="text-[#007185]">
            <a href="#" className="link-hover">
              Learn more
            </a>
          </span>{" "}
          Do you have a gift card or promotional code? We'll ask you to enter
          your claim code when it's time to pay.
        </p>
      </div>
    </Layout>
  );
};

export default Cart;
