
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Recibir los datos enviados por el formulario
    const body: unknown = await request.json();

    // 2. Comprobar que los datos tengan una estructura válida
    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        { error: "Los datos enviados no son válidos." },
        { status: 400 }
      );
    }

    // 3. Obtener los campos del formulario
    const { nombre, correo, mensaje } =
      body as Record<string, unknown>;

    // 4. Comprobar que todos los campos sean textos
    const nombreLimpio =
      typeof nombre === "string" ? nombre.trim() : "";

    const correoLimpio =
      typeof correo === "string" ? correo.trim() : "";

    const mensajeLimpio =
      typeof mensaje === "string" ? mensaje.trim() : "";

    // 5. Validar que ningún campo esté vacío
    if (!nombreLimpio || !correoLimpio || !mensajeLimpio) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // 6. Validar la longitud de los campos
    if (
      nombreLimpio.length > 80 ||
      correoLimpio.length > 254 ||
      mensajeLimpio.length < 10 ||
      mensajeLimpio.length > 2000
    ) {
      return NextResponse.json(
        { error: "Revisa la longitud de los campos." },
        { status: 400 }
      );
    }

    // 7. Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correoLimpio)) {
      return NextResponse.json(
        { error: "Ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    // 8. Devolver una respuesta exitosa
    return NextResponse.json(
      {
        message: "¡Mensaje recibido correctamente! Gracias por contactarme.",
      },
      { status: 200 }
    );

  } catch (error) {
    // 9. Controlar errores inesperados
    console.error("Error en el endpoint de contacto:", error);

    return NextResponse.json(
      { error: "No se pudo procesar la solicitud." },
      { status: 400 }
    );
  }
}
