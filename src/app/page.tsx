
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />

     
      <section
        id="inicio"
        className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-6 py-24"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Bienvenido a mi portafolio
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          Hola, soy {" "}
          <span className="text-violet-400">
            Diego Quintanilla
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Estudiante de bachillerato y del Centro ¡Supérate! Fundación Frech que se interesa
          en áreas como la informática y el inglés, constantemente busca ampliar sus conocimientos y fortalecer
          sus habilidades al  desarrollar soluciones tecnológicas innovadoras.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contactarme
          </a>
        </div>
      </section>

     
      <section
        id="about"
        className="border-t border-white/10 bg-[#101426] px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Conóceme
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Sobre mí
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Soy estudiante de segundo año de bachillerato con interés
              en el mundo de la tecnología y la informática. Durante
              mi formación he desarrollado habilidades en programación,
              resolución de problemas y trabajo con herramientas
              tecnológicas.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Me interesa el desarrollo de software, la informática y
              la inteligencia artificial. Mi objetivo es continuar
              aprendiendo, ampliar mis conocimientos y prepararme
              para estudiar la carrera universitaria de Ingeniería
              en Ciencias de la Computación Integradas.
            </p>
          </div>

          <div className="rounded-2xl border border-violet-400/20 bg-[#0b1020] p-8">
            <h3 className="text-xl font-semibold text-white">
              Mi enfoque
            </h3>

            <ul className="mt-6 space-y-5 text-slate-300">
              <li>
                <span className="font-semibold text-violet-400">
                  01.
                </span>{" "}
                Aprendizaje continuo y crecimiento profesional.
              </li>

              <li>
                <span className="font-semibold text-violet-400">
                  02.
                </span>{" "}
                Desarrollo de soluciones mediante programación.
              </li>

              <li>
                <span className="font-semibold text-violet-400">
                  03.
                </span>{" "}
                Exploración de la inteligencia artificial.
              </li>
            </ul>
          </div>
        </div>
      </section>

     
      <section
        id="experience"
        className="border-t border-white/10 bg-[#0b1020] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Mi trayectoria
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Experiencia y formación
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              Mi camino de aprendizaje, formación académica y
              acercamiento al mundo de la tecnología.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
           
            <div>
              <h3 className="mb-8 text-2xl font-semibold text-white">
                Formación académica
              </h3>

              <div className="space-y-8 border-l border-violet-400/30 pl-8">
                <div className="relative">
                  <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#0b1020] bg-violet-400" />

                  <p className="text-sm font-medium text-violet-400">
                    Formación académica
                  </p>

                  <h4 className="mt-2 text-xl font-semibold text-white">
                    Instituto Nacional General Jesús María Bran
                  </h4>

                  <p className="mt-2 leading-7 text-slate-300">
                    Actualmente he finalizado mi segundo año de
                    bachillerato y continúo fortaleciendo mis
                    conocimientos y preparándome para la universidad.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#0b1020] bg-violet-400" />

                  <p className="text-sm font-medium text-violet-400">
                    Formación complementaria
                  </p>

                  <h4 className="mt-2 text-xl font-semibold text-white">
                    Centro ¡Supérate! Fundación Frech
                  </h4>

                  <p className="mt-2 leading-7 text-slate-300">
                    Formación complementaria orientada al desarrollo
                    integral en las áreas de inglés, informática y
                    valores durante tres años.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-8 text-2xl font-semibold text-white">
                Certificaciones
              </h3>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-[#101426] p-5 transition hover:border-violet-400/50">
                  <p className="text-sm font-medium text-violet-400">
                    Idioma inglés
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    Certificaciones TOEIC
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    TOEIC Listening & Reading
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    TOEIC Speaking & Writing
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#101426] p-5 transition hover:border-violet-400/50">
                  <p className="text-sm font-medium text-violet-400">
                    Herramientas digitales
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    Microsoft Office Specialist: Excel
                  </h4>

                  <h4 className="mt-4 text-lg font-semibold text-white">
                    Microsoft Office Specialist: Excel Expert
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
