import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [burguer, setBurguer] = useState(true);
  const handleBurguer = () => setBurguer(!burguer);
  return (
    <nav className="fixed z-10 w-full bg-[#100D28] ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/assets/images/logoSinFondo.png"
            width={60}
            height={60}
            alt="WebNova Logo"
          />
          <p className="text-white text-lg">WebNova</p>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={handleBurguer}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none  text-gray-400 hover:bg-gray-700 transition-colors duration-300 ease-in-out"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full text-2xl md:w-auto transition-all duration-300 ease-in-out md:text-lg ${
            burguer
              ? "transform translate-y-[-1000px] h-[0px] md:translate-y-0"
              : " h-[calc(100vh-60px)] md:translate-y-0 md:h-[0px]"
          }`}
          id="navbar-default"
        >
          <ul className="h-full font-medium flex flex-col justify-center items-center gap-4 p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:gap-0">
            <li>
              <a
                onClick={handleBurguer}
                href="#initialSection"
                className="block py-1 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                onClick={handleBurguer}
                href="#aboutUsSection"
                className="block py-1 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                onClick={handleBurguer}
                href="#skillsSection"
                className="block py-1 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                onClick={handleBurguer}
                href="#messageSection"
                className="block py-1 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
