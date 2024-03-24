import React from "react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="aboutUsSection" className="bg-white py-7 px-3">
      <div className="flex w-full items-center">
        <div className="md:w-1/2 ">
          <div className="w-full flex justify-center ">
            <h1 className="text-5xl text-[#0B0D81] font-bold mb-3 text-center ">
              Acerca de nosotros
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center text-xl text-[#0B0D81] px-5">
              En Webnova Solutions nos especializamos en la creación de páginas
              web que destacan. Nos hemos dedicado a proporcionar soluciones web
              de alta calidad que ayudan a nuestros clientes a establecer una
              presencia en línea impactante y efectiva.
            </p>
          </div>
        </div>
        <div className="hidden md:flex md:justify-center md:items-start md:w-1/2 ">
          <Image
            src="/assets/images/imagen2.jpg"
            width={400}
            height={100}
            alt="WebNova Logo"
          />
        </div>
      </div>

      <div className="flex w-full justify-end items-center">
        <div className="hidden md:flex md:justify-center md:items-start md:w-1/2 ">
          <Image
            src="/assets/images/imagen4.jpg"
            width={400}
            height={100}
            alt="WebNova Logo"
          />
        </div>
        <div className="md:w-1/2">
          <div className="w-full flex justify-center ">
            <h1 className="text-5xl text-[#0B0D81] font-bold mb-3 text-center mt-5">
              Únete a nuestro equipo
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center text-xl text-[#0B0D81] px-5">
              Si estás buscando un sitio web que destaque entre la multitud y te
              ayude a alcanzar tus objetivos en línea, has venido al lugar
              correcto. En Webnova Solutions, estamos listos para llevar tu
              presencia en línea al siguiente nivel y ayudarte a destacar en el
              mundo digital.
            </p>
          </div>
        </div>
      </div>
      <div id="skillsSection" className="block h-10"></div>
    </section>
  );
}
