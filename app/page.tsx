"use client";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Presentacion() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(50,180,250,0.2),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.18),_transparent_25%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] px-4 py-6 sm:px-6 lg:px-8"
    >
      <section className="mx-auto w-full max-w-5xl rounded-2xl border-4 border-gray-600 bg-gray-900/60 p-6 shadow-lg backdrop-blur-md sm:p-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
            Explorer Countries: Integración de API con Next.js
          </h1>
          <p className="max-w-4xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
            Bienvenido a la documentación y demostración de Explorer Countries,
            una página que permite explorar diferentes banderas del mundo
            mediante el uso de una API gratuita.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col items-stretch justify-center gap-5 py-8 text-gray-300 sm:gap-6 lg:flex-row lg:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="flex w-full flex-1 flex-col gap-4 rounded-2xl border border-gray-600 bg-gray-900/60 p-5 text-base backdrop-blur-md sm:p-6 sm:text-lg"
        >
          <h2 className="rounded-xl bg-red-100 p-3 text-center text-xl text-blue-900 sm:text-2xl">
            Características Principales
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-relaxed">
            <li>
              <strong>Consumo Eficiente de Datos</strong>: Interacción fluida
              con servicios externos mediante solicitudes HTTP optimizadas.
            </li>
            <li>
              <strong>Desarrollo de Interfaces de Usuario (UI)</strong>:
              Diseño de experiencias de usuario (UX) intuitivas, optimizando la
              navegación y el acceso a conjuntos de datos.
            </li>
            <li>
              <strong>Arquitectura Robusta</strong>: Gestión avanzada de estados
              de carga, respuestas asíncronas y manejo de errores.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="flex w-full flex-1 flex-col gap-4 rounded-2xl border border-gray-600 bg-gray-900/60 p-5 text-base backdrop-blur-md sm:p-6 sm:text-lg"
        >
          <h2 className="rounded-xl bg-red-100 p-3 text-center text-xl text-blue-900 sm:text-2xl">
            Stack Tecnológico
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-relaxed">
            <li>
              <strong>Framework:</strong> Next.js para un renderizado híbrido
              de alto rendimiento.
            </li>
            <li>
              <strong>Fuente de Datos:</strong> Rest Countries API para el
              acceso a datos geográficos globales.
            </li>
            <li>
              <strong>Estilo:</strong> Tailwind CSS para un diseño responsivo,
              moderno y de bajo peso.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="flex items-center justify-center text-center lg:self-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/proyecto" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:w-auto"
            >
              Ver Proyecto
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}
