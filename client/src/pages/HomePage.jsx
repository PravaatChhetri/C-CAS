import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Food from "../assets/Food.png";
import FoodCard from "../components/FoodCard";
import Chowmein from "../assets/ChickenChowmein.jpg";
import BFood from "../assets/food1.jpeg";

const HomePage = () => {
  const Navigate = useNavigate();
  const foodStyle = {
    backgroundImage: `url(${Food})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [imageHeight, setImageHeight] = useState(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = BFood;
    img.onload = () => {
      setImageHeight(img.height);

      // Set the height of the text container
      if (textContainerRef.current) {
        textContainerRef.current.style.height = `${img.height}px`;
      }
    };
  }, []);

  return (
    <div>
      <div className="hero h-screen w-[100vw] bg-base-200 flex md:flex-row flex-col justify-evenly">
        <div className="w-[50vw] h-screen flex flex-col justify-center">
          <h1 className="text-7xl lg:text-[6rem] text-secondary font-bold text-center">
            Munch
          </h1>
          <h1 className="text-7xl lg:text-[6rem] text-primary font-bold text-center">
            Craft
          </h1>
          <p className="text-2xl text-center">A new way to order food</p>
          <button onClick={()=>{Navigate("/menu")}} className="btn btn-primary w-[150px] mt-[50px] mx-auto ">
            Order Now
          </button>
        </div>
        <div className="w-[100%] lg-w-[50%] lg-h-[100%] flex justify-center align-middle">
          <img src={Food} alt="Food Image" className="w-[60%] mt-[5%]" />
        </div>
      </div>

      <div className="bg-primary flex flex-col md:flex-col justify-evenly pt-[20px] pb-[90px]">
        <h1 className="text-secondary font-semibold text-[3rem] text-center my-5">
          Top's Specials{" "}
        </h1>
        <div className="flex justify-evenly mx-auto mb-5 flex-col md:flex-row md:flex-wrap gap-6">
          <FoodCard
            image={Chowmein}
            data="Lunch"
            price="100"
            title="Chicken Chowmein"
          />

          <FoodCard
            image={Chowmein}
            data="Lunch"
            price="100"
            title="Chicken Chowmein"
          />

          <FoodCard
            image={Chowmein}
            data="Lunch"
            price="100"
            title="Chicken Chowmein"
          />
        </div>
      </div>

      <div className="relative">
        {/* Image */}
        <img
          src={Chowmein}
          alt="Canteen Image"
          className="w-full lg:w-1/2 h-auto"
        />

        {/* Text */}
        <div className="absolute flex flex-col justify-center items-center top-0 left lg:left-1/2 w-full lg:w-1/2 h-full p-4 bg-black lg:bg-accent opacity-70 lg:opacity-100">
          <h1 className="text-5xl text-white font-bold mb-4">
            Nutritious and Delicious Meals
          </h1>
          <p className="text-white font-sans text-2xl text-center px-[50px]">
            Meals with balance of nutrition and taste to keep you healthy and
            happy.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Image */}
        <img
          src={BFood}
          alt="Canteen Image"
          className="w-full lg:w-1/2 h-auto lg:absolute top-0 right-0"
        />

        {/* Text */}
        <div
          ref={textContainerRef}
          className="flex flex-grow flex-col justify-center items-center absolute top-0 lg:relative w-full lg:w-1/2 p-8 bg-black lg:bg-accent opacity-70 lg:opacity-100"
        >
          <h1 className="text-5xl text-white font-bold mb-4">
            Desserts and Drinks
          </h1>
          <p className="text-white text-2xl text-center">
            Exquisite and delicious desserts and drinks to satisfy your sweet
            tooth.
          </p>
        </div>
      </div>
      <div id="ContactUs" className="hero min-h-[500px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-[70vw]">
            <h1 className="text-5xl lg:text-7xl font-bold text-center lg:text-left">
              Contact Us
            </h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="textarea"
                  placeholder="Message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
