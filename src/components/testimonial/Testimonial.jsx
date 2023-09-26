import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

const Testimonial = () => {
  const { mode } = useContext(myContext);
  return (
    <div>
      <section className="text-gray-600 font-roboto mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-emerald-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <TestimonialChild />
            <TestimonialChild />
            <TestimonialChild />
          </div>
        </div>
      </section>
    </div>
  );
};
const TestimonialChild = () => {
  const { mode } = useContext(myContext);
  return (
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
        <img
          alt="testimonial"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src="/male.png"
        />
        <p
          style={{ color: mode === "dark" ? "white" : "" }}
          className="leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>
        <span className="inline-block h-1 w-10 rounded bg-emerald-600 mt-6 mb-4" />
        <h2
          style={{ color: mode === "dark" ? "#ff4162" : "" }}
          className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
        >
          Neeti Kumar
        </h2>
        <p
          style={{ color: mode === "dark" ? "white" : "" }}
          className="text-gray-500"
        >
          Frontend Develeoper
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
