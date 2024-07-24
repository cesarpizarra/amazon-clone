import Layout from "../layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Products from "../components/sections/Products";

const Home = () => {
  const carouselItems = [
    "/amazon-clone/home-bg.jpg",
    "/amazon-clone/home-bg-2.jpg",
    "/amazon-clone/home-bg-3.jpg",
    "/amazon-clone/home-bg-4.jpg",
  ];
  return (
    <Layout>
      <section className="min-h-screen w-full whitespace-nowrap bg-lightWhite">
        <div className="mx-auto max-w-7xl">
          <Swiper
            navigation={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
          >
            {carouselItems.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item}
                  alt="pic"
                  className="w-full cursor-pointer object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative top-[-3rem] z-30 px-5 lg:top-[-10rem]">
            <Products />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
