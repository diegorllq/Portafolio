
"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      nombre: formData.get("nombre"),
      correo: formData.get("correo"),
      mensaje: formData.get("mensaje"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "No se pudo enviar el mensaje.");
      }

      setFeedback(result.message);
      form.reset();
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#0b1020] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Contactame
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Contacto
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            ¿Tienes alguna pregunta o propuesta? Puedes
            comunicarte conmigo a través de mis medios de contacto
            o enviarme un mensaje mediante el formulario.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#101426] p-6">
              <p className="text-sm font-medium text-violet-400">
                Correo electrónico
              </p>

              <a
                href="mailto:diegoalejandroquintanillarosal@gmail.com"
                className="mt-3 block break-all text-lg font-semibold text-white transition hover:text-violet-400"
              >
                diegoalejandroquintanillarosal@gmail.com
              </a>

              <p className="mt-2 text-sm text-slate-400">
                Escríbeme directamente por correo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101426] p-6">
              <p className="text-sm font-medium text-violet-400">
                GitHub
              </p>

              <a
                href="https://github.com/diegorllq"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-lg font-semibold text-white transition hover:text-violet-400"
              >
                github.com/diegorllq ↗
              </a>

              <p className="mt-2 text-sm text-slate-400">
                Conoce mis proyectos y trabajos de programación.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-[#101426] p-6"
          >
            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Nombre
              </label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                maxLength={80}
                placeholder="Escribe tu nombre"
                className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
              />
            </div>

            <div>
              <label
                htmlFor="correo"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Correo electrónico
              </label>

              <input
                id="correo"
                name="correo"
                type="email"
                required
                maxLength={254}
                placeholder="ejemplo@correo.com"
                className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                required
                minLength={10}
                maxLength={2000}
                rows={5}
                placeholder="Escribe tu mensaje..."
                className="w-full resize-y rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>

            {feedback && (
              <p
                role="status"
                aria-live="polite"
                className="text-sm leading-6 text-violet-300"
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
