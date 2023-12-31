import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="pt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex items-center justify-center min-h-screen container mx auto ">
        {/* GRID START */}

        <div className="grid grid-cols-1 md:grid-2 lg:grid-cols-3">
          {/* CARD */}

          <div className="rounded-xl shadow-lg card w-80">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  className=""
                  src="https://static-01.daraz.com.bd/p/1faa5a43ff96ee2594277ce80a5608e0.jpg_400x400q75-product.jpg_.webp"
                />
              </div>

              <div className="">
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3">
                  Unstitched Georgette Kameez 3 Pieces
                </h5>
                <h3 className="text-[#F90] text-3xl md:text-4xl mt-3">৳ 439</h3>
                <div className="mb-5">
                  <p className="flex">
                    <span className="strikethrough text-[#0000007a]">
                      ৳ 1,500
                    </span>{" "}
                    -70%
                    <img
                      className="ml-2 w-10"
                      src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                    />
                  </p>
                </div>

                {/* Button */}

                <div className="bg-[#F90] py-2 px-8 rounded-lg text-center">
                  <Link to="/Contract">
                    <a
                      href="#"
                      className="text-center  text-black font-semibold mt-5 mr-10 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                    >
                      Buy Now
                    </a>
                  </Link>
                  <span className="text-black font-semibold text-xl">/</span>
                  <a
                    href="#"
                    className="text-center  text-black font-semibold mt-5 ml-8 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Add Card
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl shadow-lg card w-80">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  className=""
                  src="https://static-01.daraz.com.bd/p/1faa5a43ff96ee2594277ce80a5608e0.jpg_400x400q75-product.jpg_.webp"
                />
              </div>

              <div className="">
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3">
                  Unstitched Georgette Kameez 3 Pieces
                </h5>
                <h3 className="text-[#F90] text-3xl md:text-4xl mt-3">৳ 439</h3>
                <div className="mb-5">
                  <p className="flex">
                    <span className="strikethrough text-[#0000007a]">
                      ৳ 1,500
                    </span>{" "}
                    -70%
                    <img
                      className="ml-2 w-10"
                      src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                    />
                  </p>
                </div>

                <div className="bg-[#F90] py-2 px-8 rounded-lg text-center">
                  <Link to="/Contract">
                    <a
                      href="#"
                      className="text-center  text-black font-semibold mt-5 mr-10 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                    >
                      Buy Now
                    </a>
                  </Link>
                  <span className="text-black font-semibold text-xl">/</span>
                  <a
                    href="#"
                    className="text-center  text-black font-semibold mt-5 ml-8 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Add Card
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl shadow-lg card w-80">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  className=""
                  src="https://static-01.daraz.com.bd/p/1faa5a43ff96ee2594277ce80a5608e0.jpg_400x400q75-product.jpg_.webp"
                />
              </div>

              <div className="">
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3">
                  Unstitched Georgette Kameez 3 Pieces
                </h5>
                <h3 className="text-[#F90] text-3xl md:text-4xl mt-3">৳ 439</h3>
                <div className="mb-5">
                  <p className="flex">
                    <span className="strikethrough text-[#0000007a]">
                      ৳ 1,500
                    </span>{" "}
                    -70%
                    <img
                      className="ml-2 w-10"
                      src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                    />
                  </p>
                </div>

                <div className="bg-[#F90] py-2 px-8 rounded-lg text-center">
                  <Link to="/Contract">
                    <a
                      href="#"
                      className="text-center  text-black font-semibold mt-5 mr-10 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                    >
                      Buy Now
                    </a>
                  </Link>
                  <span className="text-black font-semibold text-xl">/</span>
                  <a
                    href="#"
                    className="text-center  text-black font-semibold mt-5 ml-8 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Add Card
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="rounded-xl shadow-lg card w-80">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  className=""
                  src="https://static-01.daraz.com.bd/p/1faa5a43ff96ee2594277ce80a5608e0.jpg_400x400q75-product.jpg_.webp"
                />
              </div>

              <div className="">
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3">
                  Unstitched Georgette Kameez 3 Pieces
                </h5>
                <h3 className="text-[#F90] text-3xl md:text-4xl mt-3">৳ 439</h3>
                <div className="mb-5">
                  <p className="flex">
                    <span className="strikethrough text-[#0000007a]">
                      ৳ 1,500
                    </span>{" "}
                    -70%
                    <img
                      className="ml-2 w-10"
                      src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                    />
                  </p>
                </div>

                <div className="bg-[#F90] py-2 px-8 rounded-lg text-center">
                  <Link to="/Contract">
                    <a
                      href="#"
                      className="text-center  text-black font-semibold mt-5 mr-10 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                    >
                      Buy Now
                    </a>
                  </Link>
                  <span className="text-black font-semibold text-xl">/</span>
                  <a
                    href="#"
                    className="text-center  text-black font-semibold mt-5 ml-8 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Add Card
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="rounded-xl shadow-lg card w-80">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  className=""
                  src="https://static-01.daraz.com.bd/p/1faa5a43ff96ee2594277ce80a5608e0.jpg_400x400q75-product.jpg_.webp"
                />
              </div>

              <div className="">
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3">
                  Unstitched Georgette Kameez 3 Pieces
                </h5>
                <h3 className="text-[#F90] text-3xl md:text-4xl mt-3">৳ 439</h3>
                <div className="mb-5">
                  <p className="flex">
                    <span className="strikethrough text-[#0000007a]">
                      ৳ 1,500
                    </span>{" "}
                    -70%
                    <img
                      className="ml-2 w-10"
                      src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                    />
                  </p>
                </div>

                <div className="bg-[#F90] py-2 px-8 rounded-lg text-center">
                  <Link to="/Contract">
                    <a
                      href="#"
                      className="text-center  text-black font-semibold mt-5 mr-10 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                    >
                      Buy Now
                    </a>
                  </Link>
                  <span className="text-black font-semibold text-xl">/</span>
                  <a
                    href="#"
                    className="text-center  text-black font-semibold mt-5 ml-8 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Add Card
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="rounded-xl shadow-lg card w-80">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  className=""
                  src="https://static-01.daraz.com.bd/p/1faa5a43ff96ee2594277ce80a5608e0.jpg_400x400q75-product.jpg_.webp"
                />
              </div>

              <div className="">
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3">
                  Unstitched Georgette Kameez 3 Pieces
                </h5>
                <h3 className="text-[#F90] text-3xl md:text-4xl mt-3">৳ 439</h3>
                <div className="mb-5">
                  <p className="flex">
                    <span className="strikethrough text-[#0000007a]">
                      ৳ 1,500
                    </span>{" "}
                    -70%
                    <img
                      className="ml-2 w-10"
                      src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                    />
                  </p>
                </div>

                <div className="bg-[#F90] py-2 px-8 rounded-lg text-center">
                  <Link to="/Contract">
                    <a
                      href="#"
                      className="text-center  text-black font-semibold mt-5 mr-10 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                    >
                      Buy Now
                    </a>
                  </Link>
                  <span className="text-black font-semibold text-xl">/</span>
                  <a
                    href="#"
                    className="text-center  text-black font-semibold mt-5 ml-8 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Add Card
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 7 */}
          <div className="rounded-xl shadow-lg card w-80">
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img
                  className=""
                  src="https://static-01.daraz.com.bd/p/1faa5a43ff96ee2594277ce80a5608e0.jpg_400x400q75-product.jpg_.webp"
                />
              </div>

              <div className="">
                <h5 className="text-2xl text-black md:text-3xl font-medium mt-3">
                  Unstitched Georgette Kameez 3 Pieces
                </h5>
                <h3 className="text-[#F90] text-3xl md:text-4xl mt-3">৳ 439</h3>
                <div className="mb-5">
                  <p className="flex">
                    <span className="strikethrough text-[#0000007a]">
                      ৳ 1,500
                    </span>{" "}
                    -70%
                    <img
                      className="ml-2 w-10"
                      src="//laz-img-cdn.alicdn.com/tfs/TB1QTkMXG67gK0jSZFHXXa9jVXa-45-28.png"
                    />
                  </p>
                </div>

                <div className="bg-[#F90] py-2 px-8 rounded-lg text-center">
                  <Link to="/Contract">
                    <a
                      href="#"
                      className="text-center  text-black font-semibold mt-5 mr-10 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                    >
                      Buy Now
                    </a>
                  </Link>
                  <span className="text-black font-semibold text-xl">/</span>
                  <a
                    href="#"
                    className="text-center  text-black font-semibold mt-5 ml-8 hover:text-blue-900 focus:scale-95 transition-all duration-200 ease-out"
                  >
                    Add Card
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
