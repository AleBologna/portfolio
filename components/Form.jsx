import { useState } from "react";

export default function Form() {
  const [telefono, setTelefono] = useState("");

  const validarTelefono = (event) => {
    const input = event.target;
    const numero = input.value.replace(/\D/g, ""); // Remover caracteres no numéricos
    setTelefono(numero);
  };

  return (
    <>
      <form
        className="w-2/3 mx-auto pt-4 md:w-96"
        action="https://formspree.io/f/mqkrdlzq"
        method="POST"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-black border-[#100D28]  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-black border-[#100D28]  focus:outline-none focus:ring-0 focus:border-[#050DEB] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-black border-[#100D28] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]+"
              maxLength="20"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-black border-[#100D28] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={telefono}
              onChange={validarTelefono}
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Teléfono
            </label>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          target="_blank"
          className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}
