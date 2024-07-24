import Layout from "../layout/Layout";

const CustomerService = () => {
  const items = [
    {
      image: "/amazon-clone/images/service1.png",
      title: "A delivery, order or return",
    },
    {
      image: "/amazon-clone/images/service2.png",
      title: "Prime",
    },
    {
      image: "/amazon-clone/images/service3.png",
      title: "Payment, charges or gift cards",
    },

    {
      image: "/amazon-clone/images/service4.png",
      title: "Address, security & privacy",
    },
    {
      image: "/amazon-clone/images/service5.png",
      title: "Memberships, subscriptions or communications",
    },
    {
      image: "/amazon-clone/images/service6.png",
      title: "Kindle, Fire, Alexa or other Amazon devices",
    },
    {
      image: "/amazon-clone/images/service7.png",
      title: "eBooks, Prime Vides, Music or Games",
    },

    {
      image: "/amazon-clone/images/service8.png",
      title: "Accessibility",
    },
    {
      image: "/amazon-clone/images/service9.png",
      title: "Something else",
    },
    {
      image: "/amazon-clone/images/service10.png",
      title: "Login & password",
    },
    {
      image: "/amazon-clone/images/service11.png",
      title: "Report Something Suspicious",
    },
  ];
  return (
    <Layout>
      <div className="bg-[#007185]">
        <nav>
          <ul className="flex items-center gap-3 p-4 font-semibold text-white">
            <li className="link-hover cursor-pointer">CustomerService</li>
            <span>|</span>
            <li className="link-hover cursor-pointer">Home</li>
            <li className="link-hover cursor-pointer">
              Digital Services and Device Support
            </li>
          </ul>
        </nav>

        <div className="mx-auto max-w-7xl py-12">
          <div className="px-4 text-white">
            <h1 className="text-xl font-semibold md:text-2xl">
              Welcome to Amazon Customer Service
            </h1>
            <h3 className="mb-4 font-semibold">
              What would you like help with today? You can quickly take care of
              most things here, or connect with us when needed.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 rounded bg-white p-2"
              >
                <div className="h-16 w-16">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white px-4 py-8">
          <div className="mx-auto max-w-7xl">
            <div>
              <h1 className="text-lg font-semibold">Search our help library</h1>

              <input
                type="text"
                placeholder="Type something like, question about a charge"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerService;
