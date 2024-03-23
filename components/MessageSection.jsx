import React from "react";
import Form from "./Form";

export default function MessageSection() {
  return (
    <section id="messageSection" className="bg-[#fff] h-auto py-8">
      <div className="flex flex-col justify-center items-center mx-1 text-center">
        <h1 className="text-5xl text-[#0B0D81] font-semibold mb-3">
          ¡Hola! Dejanos tu mensaje
        </h1>
        <p className="text-xl text-[#0B0D81]">
          Si tienes alguna pregunta o propuesta dejala aquí abajo.
        </p>
      </div>

      <Form />
    </section>
  );
}
