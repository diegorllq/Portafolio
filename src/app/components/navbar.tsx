
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-[#101426]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Nombre y marca personal */}
        <Link href="/" className="text-xl font-bold text-white">
          DQ<span className="text-violet-400">.</span>
        </Link>

        {/* Enlaces de navegación */}
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <Link href="#inicio" className="transition hover:text-violet-400">
            Inicio
          </Link>

          <Link href="#about" className="transition hover:text-violet-400">
            Sobre mí
          </Link>

          <Link href="#projects" className="transition hover:text-violet-400">
            Proyectos
          </Link>

          <Link href="#contact" className="transition hover:text-violet-400">
            Contacto
          </Link>
        </div>

      </div>
    </nav>
  );
}
