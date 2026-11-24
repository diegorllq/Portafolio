import Image from "next/image";
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

      {/* PROYECTOS */}

 
      {/* PROYECTOS */}
      <section
        id="projects"
        className="border-t border-white/10 bg-[#101426] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Mi trabajo
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Proyectos destacados
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              Proyectos en los que he aplicado mis conocimientos
              de informática y tecnología para desarrollar
              soluciones a diferentes necesidades.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* DEAFCOMM */}
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] transition duration-300 hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10">

              <div className="grid h-64 grid-cols-2 gap-2 overflow-hidden bg-[#071629] p-3">
                <img
                  src="/deafcomm-inicio-recortada.png"
                  alt="Pantalla principal de DEAFCOMM"
                  className="h-full w-full rounded-lg object-contain transition duration-500 group-hover:scale-105"
                />

                <img
                  src="/deafcomm-formulario-recortada.png"
                  alt="Formulario de registro de síntomas de DEAFCOMM"
                  className="h-full w-full rounded-lg object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-violet-400">
                  Salud y accesibilidad
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  DEAFCOMM
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Proyecto desarrollado para facilitar la comunicación
                  entre personas sordas y el personal médico,
                  contribuyendo a una mejor comprensión de los síntomas
                  y a la obtención de diagnósticos más acertados.
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Tecnologías utilizadas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Power Apps", "SharePoint", "Power Automate"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm text-slate-400">
                    Presentado en la Hackathon 2024 del Centro
                    ¡Supérate! Fundación Frech.
                  </p>
                </div>
              </div>
            </article>

            {/* SUNERGY */}
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] transition duration-300 hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10">

              <div className="flex h-64 items-center justify-center overflow-hidden bg-white p-3">
                <img
                  src="/sunergy-preview.jpg"
                  alt="Opciones principales de la aplicación Sunergy"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-violet-400">
                  Energía y tecnología
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Sunergy
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Aplicación desarrollada para supervisar y gestionar
                  el consumo de energía eléctrica proporcionada por
                  paneles solares en una casa a escala, integrando
                  tecnología para un aprovechamiento más eficiente
                  e inteligente de la energía.
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Tecnologías utilizadas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Kodular", "Firebase", "Arduino", "Paneles solares"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm text-slate-400">
                    Proyecto de aplicación móvil y gestión energética
                    presentada en Expo de logros 2025 del Centro ¡Supérate!
                    Fundación Frech.
                  </p>
                </div>
              </div>
            </article>

            {/* SAFEN */}
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] transition duration-300 hover:-translate-y-2 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10">

              <div className="flex h-64 items-center justify-center overflow-hidden bg-white">
                <img
                  src="/safen.png"
                  alt="Página de bienvenida de la plataforma SAFEN"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-violet-400">
                  Desarrollo web
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  SAFEN
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Plataforma web orientada a coordinar y organizar
                  la ayuda destinada a comunidades afectadas por
                  desastres naturales, conectando a las personas
                  con profesionales especializados y facilitando
                  la gestión de asistencia, presentada en la 
                  Expo Tech 2026 del programa ¡Supérate!
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Tecnologías utilizadas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://github.com/diegorllq/ProyectoSafen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-400/40 px-5 py-2.5 text-sm font-semibold text-violet-300 transition hover:bg-violet-500 hover:text-white"
                >
                  Ver más en GitHub ↗
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>


      

    </main>
  );
}
