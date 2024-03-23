import Image from "next/image";

export default function InitialSection() {
  return (
    <section id="initialSection" className="flex flex-col sm:flex-row">
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
                Nuestra experiencia técnica y creativa impulsa tu éxito online.
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
  );
}
