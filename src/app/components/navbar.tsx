
import Link from "next/link";

const links = [
  { name: "Home", href: "#inicio", icon: "home" },
  { name: "About", href: "#about", icon: "user" },
  { name: "Skills", href: "#skills", icon: "code" },
  { name: "Experience", href: "#experience", icon: "briefcase" },
  { name: "Projects", href: "#projects", icon: "folder" },
  { name: "Contact", href: "#contact", icon: "mail" },
];

function NavIcon({ name }: { name: string }) {
  const common = {
    width: 15,
    height: 15,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "home":
      return <svg {...common}><path d="m3 10 9-7 9 7" /><path d="M5 9v12h14V9" /><path d="M9 21v-7h6v7" /></svg>;
    case "user":
      return <svg {...common}><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></svg>;
    case "code":
      return <svg {...common}><path d="m8 17-5-5 5-5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></svg>;
    case "briefcase":
      return <svg {...common}><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></svg>;
    case "folder":
      return <svg {...common}><path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "settings":
      return <svg {...common}><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.5.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.5-.9l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.8l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.5-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.5.9l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.8Z" /></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>;
    default:
      return null;
  }
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b1020]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">

        {/* Logotipo */}
        <Link
          href="#inicio"
          className="shrink-0 font-mono text-xl font-bold text-violet-400"
        >
          {"< DQ />"}
        </Link>

        {/* Enlaces con iconos */}
        <div className="flex items-center gap-6 font-mono text-xs text-gray-300">
          {links.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-2 border-b-2 py-2 transition-colors duration-200 hover:border-violet-400 hover:text-violet-400 ${
                index === 0
                  ? "border-violet-500 text-violet-400"
                  : "border-transparent"
              }`}
            >
              <NavIcon name={link.icon} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Controles de la derecha */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="flex items-center gap-2 rounded-md border border-white/10 bg-[#151d32] px-3 py-2 font-mono text-xs text-gray-300">
            <NavIcon name="globe" />
            EN
          </span>

          <span className="rounded-md border border-white/10 bg-[#151d32] p-2 text-gray-300">
            <NavIcon name="settings" />
          </span>
        </div>

      </div>
    </nav>
  );
}
