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
        className="w-2/3 mx-auto pt-4 md:w-[550px]"
        action="https://formspree.io/f/mqkrdlzq"
        method="POST"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-black border-[#0B0D81]  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm  text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-black border-[#0B0D81]  focus:outline-none focus:ring-0 focus:border-[#050DEB] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm  text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]+"
              maxLength="20"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-black border-[#0B0D81] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={telefono}
              onChange={validarTelefono}
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm  text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Teléfono
            </label>
          </div>
        </div>

        <div className="flex flex-col items-end gap-6 w-full">
          <div className="relative w-full min-w-[200px]">
            <textarea
              className="peer h-full min-h-[100px] w-full resize-none border-b-2 pb-1 border-[#0B0D81] bg-transparent pt-4 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border-[#0B0D81] focus:border-blue-600 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-gray-50"
              placeholder=" "
              name="floating_message"
              id="floating_message"
            ></textarea>
            <label
              htmlFor="floating_message"
              className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal duration-300 leading-tight text-gray-700 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2  after:transition-transform after:duration-400 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-700 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500  peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500"
            >
              Mensaje
            </label>
          </div>
        </div>

        <div className="flex justify-center my-4">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#0B0D81] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#0B0D81] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#0B0D81] transition-all duration-300 transform group-hover:translate-x-full ease">
              Enviar
            </span>
            <span className="relative invisible">Button Text</span>
          </button>
        </div>
      </form>
    </>
  );
}
