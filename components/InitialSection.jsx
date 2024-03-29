import Image from "next/image";

export default function InitialSection() {
  return (
    <section id="initialSection" className="flex flex-col sm:flex-row">
      <div className="h-full bg-gradient-to-b from-25% from-[#100d28] via-61% via-[#0c0d6b] to-[#0b0d81] px-12 sm:w-7/12 sm:px-26 md:px-28">
        <div className="h-full flex flex-col justify-between items-center ">
          <div className="w-full mt-32 sm:mt-36">
            <span className="block text-[#FF80F1] text-5xl text-start font-bold tracking-wide sm:text-6xl">
              Desarrollo Full Stack.
            </span>
            <p className="text-white mt-3 sm:mt-8 text-xl md:text-2xl">
              Nuestro equipo de desarrollo construye sitios web fluidos y
              adaptables que potencian el crecimiento de tu empresa en línea.
            </p>
          </div>

          <div className="w-full my-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:my-11">
            <div className="h-full flex grow shrink">
              <p className="text-lg md:text-xl">
                Nuestra experiencia técnica y creativa impulsa tu éxito online.
              </p>
            </div>
            <div className="h-full flex grow shrink ">
              <p
                id="aboutUsSection"
                className="text-lg md:text-xl mb-10 md:mb-0"
              >
                Equipo altamente capacitado en sistemas de diseño.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden flex-col md:flex justify-center items-center h-auto w-full bg-gradient-to-b from-[#0b0d81] to-[#050DEB] sm:from-25% sm:from-[#100d28] sm:via-61% sm:via-[#0c0d6b] sm:to-[#0b0d81] sm:h-auto sm:w-5/12">
        <Image
          src="/assets/images/logoSection.png"
          alt="Logo WebNova Solutions"
          width={220}
          height={220}
          className="mt-0 md:mt-20"
        ></Image>
        <p className="pb-7 mt-5 text-4xl md:text-5xl font-bold">
          Web<span className="text-[#FF80F1]">Nova</span>
        </p>
      </div>
    </section>
  );
}
