import React from "react";
import "tailwindcss/tailwind.css";
import pravat from "../assets/pravat.jpg";
import Kuenzang from "../assets/Kuenzang.jpg";
import Norbu from "../assets/Norbu.jpg";
import food from "../assets/aboutFood.png";

export const AboutUs = () => {
  return (
    <>
      <div class="about-section">
        <h1 className="text-black font-bold text-5xl text-center mb-[100px]">About Us </h1>

        <div className="w-[90%] ">
          <header className="bg-secondary text-white py-3 flex md:flex-row flex-col-reverse w-[100%]">
            <div className="w-[90%] md:w-[50%] py-[40px] pl-10">
              <h1 className=" text-white font-bold text-2xl lg:text-[30px] mb-3">
                Welcome to MunchCraft: Where Flavor Meets Craftsmanship
              </h1>
              <p className="text-[1.25rem] font-light">
                At MunchCraft, we believe that great food is an art form. It's
                not just about satisfying hunger; it's about creating a culinary
                experience that tantalizes your taste buds and leaves you
                craving for more. Established with a passion for crafting
                delectable dishes, MunchCraft is your ultimate destination for a
                gastronomic adventure.
              </p>

              <h2 className="text-white font-medium text-[25px] mb-3 mt-[20px]">
                Our Story
              </h2>
              <p className="text-[1.25rem] font-light">
                MunchCraft is not just a canteen; it's a celebration of flavors,
                a tribute to quality ingredients, and a testament to culinary
                expertise. Our journey began with a simple yet profound idea: to
                redefine the way people perceive canteen food. We envisioned a
                place where every meal is a masterpiece, prepared with love,
                care, and the finest ingredients available. Since our inception,
                we have been dedicated to this vision, constantly innovating and
                pushing culinary boundaries to bring you a delightful dining
                experience.
              </p>
            </div>
            <div className="w-[50%]">
              <img className="w-[100%] min-w-[300px] my-auto pl-[80px]" src={food} />
            </div>
          </header>
        </div>
      </div>
      <h1 className="text-6xl font-semibold font-secondary text-center mt-20 mb-10">Our Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 py-10 justify-items-center w-[80%]">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span class="sr-only">Open dropdown</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={pravat}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Pravat Chhetri
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Full-stack Developer
            </span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white btn btn-accent rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github
              </a>
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span class="sr-only">Open dropdown</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={Kuenzang}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Kuenzang Dema
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white btn btn-accent rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github
              </a>
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span class="sr-only">Open dropdown</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={Norbu}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Norbu Elma
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white btn btn-accent focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github
              </a>
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span class="sr-only">Open dropdown</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={Norbu}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Ugyen Thinley Dorji
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
               System Designer
            </span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white btn btn-accent focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github
              </a>
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span class="sr-only">Open dropdown</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={Norbu}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Tenzin Wangchuk
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              UX Designer
            </span>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white btn btn-accent focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Github
              </a>
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
