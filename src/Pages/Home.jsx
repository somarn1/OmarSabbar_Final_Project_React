import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { images } from "../constant";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const carouselImages = [
    images.Carousels.Carousel1,
    images.Carousels.Carousel2,
    images.Carousels.Carousel3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const animation = {
    initial: { backgroundSize: "100% 100%" },
    animate: { backgroundSize: "100% 100%" },
    whileHover: { backgroundSize: "110% 110%" },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const blog1 = {
    backgroundImage: `url(${images.Blogs.Blog1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }

  const blog2 = {
    backgroundImage: `url(${images.Blogs.Blog2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }

  const blog3 = {
    backgroundImage: `url(${images.Blogs.Blog3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }


  const products = [
    {
      name: 'Boxy3 T-Shirt with Roll Sleeve',
      price: 20.00,
      oldPrice: 30.00,
      image: images.Gallerys.Gallery13,
      badge: 'Sale'
    },
    {
      name: 'Boxy2 T-Shirt with Roll Sleeve',
      price: 20.00,
      image: images.Gallerys.Gallery15,
    },
    {
      name: 'Boxy1 T-Shirt with Roll Sleeve',
      price: 20.00,
      image: images.Gallerys.Gallery3,
    },
    {
      name: 'Boxy T-Shirt with Roll Sleeve Detail',
      price: 20.00,
      image: images.Gallerys.Gallery7,
    },
    {
      name: 'Classic White Tee',
      price: 20.00,
      image: images.Gallerys.Gallery9,
    },
    {
      name: 'Denim Jacket',
      price: 20.00,
      image: images.Carousels.Carousel1,
    },
    {
      name: 'Casual Cotton Dress',
      price: 20.00,
      image: images.Carousels.Carousel2,
    },
    {
      name: 'Summer Floral Top',
      price: 20.00,
      image: images.Carousels.Carousel3,
    }
  ];

  const itemsPerPage = 4;
  const maxIndex = Math.ceil(products.length / itemsPerPage) - 1;

  const nextProductSlide = () => {
    setProductIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevProductSlide = () => {
    setProductIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleProducts = products.slice(
    productIndex * itemsPerPage,
    productIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div>
      <NavBar />

      <section className="relative w-full">
        <div className="relative h-56 md:h-96 overflow-hidden">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            ❯
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-4 h-[520px]">
          <div className="flex-1 group relative overflow-hidden cursor-pointer">
            <img
              src={images.ItemsCarts.ItemCart1}
              alt="DRESSES"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0  group-hover:bg-opacity-10 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
              <div className="bg-white px-8 py-3 group-hover:bg-orange-500 transition-colors duration-300">
                <Link to={'/Shop'}><span className="text-sm font-semibold tracking-wider group-hover:text-white transition-colors duration-300">
                  DRESSES
                </span></Link>

              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 group relative overflow-hidden cursor-pointer">
              <img
                src={images.ItemsCarts.ItemCart2}
                alt="WATCHES"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
                <div className="bg-white px-8 py-3 group-hover:bg-orange-500 transition-colors duration-300">
                  <Link to={'/Shop'}><span className="text-sm font-semibold tracking-wider group-hover:text-white transition-colors duration-300">
                    WATCHES
                  </span></Link>
                </div>
              </div>
            </div>

            <div className="flex-1 h-full group relative overflow-hidden cursor-pointer ">
              <img
                src={images.Blogs.Blog1}
                alt="FOOTWEAR"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute h-full inset-0 group-hover:bg-opacity-10 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
                <div className="bg-white px-8 py-3 group-hover:bg-orange-500 transition-colors duration-300">
                  <Link to={'/Shop'}><span className="text-sm font-semibold tracking-wider group-hover:text-white transition-colors duration-300">
                    FOOTWEAR
                  </span></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 group relative overflow-hidden cursor-pointer">
            <img
              src={images.Items.Item7}
              alt="BAGS"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0  group-hover:bg-opacity-10 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
              <div className="bg-white px-8 py-3 group-hover:bg-orange-500 transition-colors duration-300">
                <Link to={'/Shop'}><span className="text-sm font-semibold tracking-wider group-hover:text-white transition-colors duration-300">
                  BAGS
                </span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="flex-1 h-64 group relative overflow-hidden cursor-pointer">
            <img
              src={images.Items.Item5}
              alt="SUNGLASSES"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0  group-hover:bg-opacity-10 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
              <div className="bg-white px-8 py-3 group-hover:bg-orange-500 transition-colors duration-300">
                <Link to={'/Shop'}><span className="text-sm font-semibold tracking-wider group-hover:text-white transition-colors duration-300">
                  SUNGLASSES
                </span></Link>
              </div>
            </div>
          </div>

          <div className="flex-1"></div>

          <div className="flex-1 h-64 group relative overflow-hidden cursor-pointer">
            <img
              src={images.Items.Item3}
              alt="ACCESSORIES"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0  group-hover:bg-opacity-10 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
              <div className="bg-white px-8 py-3 group-hover:bg-orange-500 transition-colors duration-300">
                <Link to={'/Shop'}><span className="text-sm font-semibold tracking-wider group-hover:text-white transition-colors duration-300">
                  ACCESSORIES
                </span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide">
          Featured Products
        </h2>

        <div className="relative">
          <button
            onClick={prevProductSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 group"
          >
            <FiChevronLeft size={24} className="text-gray-600 group-hover:text-white" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4 bg-gray-100">
                  <img src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-all duration-500 group-hover:opacity-90"
                  />

                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                <div className="text-center">
                  <h3 className="text-sm mb-3 text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-center gap-2">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className={`font-semibold ${product.oldPrice ? 'text-orange-500' : 'text-gray-800'}`}>
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextProductSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 group"
          >
            <FiChevronRight size={24} className="text-gray-600 group-hover:text-white" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setProductIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === productIndex
                  ? 'w-8 bg-orange-500'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

      </section>


      <section className="flex flex-col items-center gap-y-20 p-10">
        <h1 className="text-3xl font-bold">Our Blog</h1>
        <div className="w-full grid grid-cols-3 gap-10  pl-32 pr-32 ">
          <div className="flex flex-col gap-y-10  h-130  ">
            <motion.div {...animation} className="h-60" style={{ ...blog1 }}></motion.div>
            <div className="flex flex-col gap-y-5">
              <Link><h1 className="text-2xl font-bold hover:text-[#e65540]">Black Friday Guide: Best Sales & Discount Codes</h1></Link>
              <span>by fashe-theme Admin on Dec 28,2017</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10  h-130 ">
            <motion.div {...animation} className="h-60" style={{ ...blog2 }}></motion.div>
            <div className="flex flex-col gap-y-5">
              <Link><h1 className="text-2xl font-bold hover:text-[#e65540]">Black Friday Guide: Best Sales & Discount Codes</h1></Link>
              <span>by fashe-theme Admin on Dec 28,2017</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10  h-130 ">
            <motion.div {...animation} className="h-60" style={{ ...blog3 }}></motion.div>
            <div className="flex flex-col gap-y-5">
              <Link><h1 className="text-2xl font-bold hover:text-[#e65540]">Black Friday Guide: Best Sales & Discount Codes</h1></Link>
              <span>by fashe-theme Admin on Dec 28,2017</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
            </div>
          </div>
        </div>

      </section>





      {/* section6 */}
      <section className="flex flex-col items-center gap-y-25 p-10">
        <h1 className="text-4xl font-bold">@ FOLLOW US ON INSTAGRAM</h1>
        <div className="w-full h-30 flex gap-5">
          <div className="w-full h-30 flex flex-col justify-center items-center border-r-2">
            <h3>Free Delivery Worldwide</h3>
            <p>Mirum est notare quam littera gothica</p>
          </div>
          <div className="w-full h-30 flex flex-col justify-center items-center border-r-2 ">
            <h3>Free Delivery Worldwide</h3>
            <p>Mirum est notare quam littera gothica</p>
          </div>
          <div className="w-full h-30 flex flex-col justify-center items-center ">
            <h3>Free Delivery Worldwide</h3>
            <p>Mirum est notare quam littera gothica</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;