"use client";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { Questrial } from "next/font/google";
import Form from "@/components/form";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [burguer, setBurguer] = useState(true);
  const handleBurguer = () => setBurguer(!burguer);

  return (
    <main className={questrial.className}>
      <nav className="fixed z-10 w-full bg-[#100D28]">
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 transition-colors duration-300 ease-in-out"
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
                  href="#"
                  className="block py-1 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="flex flex-col sm:flex-row">
        <div className="h-full bg-gradient-to-b from-25% from-[#100d28] via-61% via-[#0c0d6b] to-[#0b0d81] px-12 sm:w-7/12 sm:px-26 md:px-28">
          <div className="h-full flex flex-col justify-between items-center ">
            <div className="w-full  mt-32 sm:mt-36">
              <span className="block text-[#FF80F1] text-5xl text-start font-bold tracking-wide sm:text-6xl">
                Desarrollo Full Stack.
              </span>
              <p className="text-white mt-3 sm:mt-8 text-lg">
                Nuestro equipo de desarrollo construye sitios web fluidos y
                adaptables que potencian el crecimiento de tu empresa en línea.
              </p>
            </div>
            <div className="w-full my-11 flex flex-row items-end justify-between gap-4">
              <div className="h-full flex grow shrink">
                <p className="text-sm">
                  Nuestra experiencia técnica y creativa impulsa tu éxito
                  online.
                </p>
              </div>
              <div className="h-full flex grow shrink ">
                <p className="text-sm">
                  Equipo altamente capacitado en sistemas de diseño
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-auto w-full bg-gradient-to-b from-[#0b0d81] to-[#050DEB] sm:from-25% sm:from-[#100d28] sm:via-61% sm:via-[#0c0d6b] sm:to-[#0b0d81] sm:h-auto sm:w-5/12">
          <Image
            src="/assets/images/logoSection.png"
            alt="Logo WebNova Solutions"
            width={180}
            height={180}
            className="mt-0 md:mt-20"
          ></Image>
          <p className="pb-3 text-2xl">WebNova</p>
        </div>
      </section>
      <section className="bg-[#a1a89b]">
        <p>Acerca de nosotros</p>
      </section>

      <section className="bg-white h-screen py-6">
        <div className="flex justify-center">
          <h1 className="text-xl ">¡Hola! Dejanos tu mensaje</h1>
        </div>

        <Form />
      </section>
    </main>
  );
}
