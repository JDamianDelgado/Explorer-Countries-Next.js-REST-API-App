"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Country {
  flags: { png: string; svg: string; alt: string };
  name: {
    common: string;
    official: string;
    nativeName?: { [key: string]: { official: string; common: string } };
  };
  translations: { spa: { common: string } };
}

export default function Proyecto() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [buscar, setBuscar] = useState("");
  const [verMas, setVerMas] = useState<Country | null>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,translations")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const normalizar = (texto: string) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filtrarPaises = countries.filter((country) =>
    normalizar(country.translations.spa.common).includes(normalizar(buscar)),
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(50,180,250,0.2),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.18),_transparent_25%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] px-4 py-6 text-center sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-4xl rounded-2xl border-4 border-gray-600 bg-gray-900/90 p-5 text-base leading-loose shadow-lg sm:p-6 sm:text-lg">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Explorador de Banderas
        </h1>

        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Buscar país en español..."
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
              className="w-full rounded-xl bg-white p-3 pr-12 text-center text-black transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {buscar && (
              <button
                onClick={() => setBuscar("")}
                className="absolute top-1/2 right-3 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-sm text-black transition hover:bg-red-500 hover:text-white active:scale-90"
                aria-label="Limpiar búsqueda"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtrarPaises.map((country, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex h-full w-full flex-col gap-3 rounded-2xl border-4 border-gray-600 bg-gray-900 p-4 text-center tracking-wide text-white shadow-lg transition hover:scale-[1.02] hover:bg-gray-800"
          >
            <h2 className="break-words p-2 text-xl">
              <strong>{country.translations.spa.common}</strong>
            </h2>

            <button
              type="button"
              className="relative mx-auto aspect-[5/3] w-full max-w-xs overflow-hidden rounded-lg"
              onClick={() => setVerMas(country)}
            >
              <Image
                src={
                  country.flags?.svg || country.flags?.png || "/image/image.png"
                }
                alt={country.flags.alt || "Bandera"}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                className="object-cover"
                unoptimized
              />
            </button>

            <button
              onClick={() => setVerMas(country)}
              className="mt-auto rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
            >
              Ver Detalles
            </button>
          </motion.div>
        ))}
      </div>

      {verMas && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-gray-600 bg-gray-900 p-5 text-left text-white shadow-xl sm:p-6"
          >
            <button
              onClick={() => setVerMas(null)}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-black transition hover:bg-red-500 hover:text-white active:scale-90"
            >
              ×
            </button>

            <h2 className="mb-2 pr-10 text-2xl font-bold">
              {verMas.translations.spa.common}
            </h2>

            <p className="mb-2 text-gray-300">
              <strong>Nombre Oficial:</strong> {verMas.name.official}
            </p>
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={verMas.flags.svg}
                alt={verMas.flags.alt || "Bandera"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                unoptimized
              />
            </div>
            <p className="mb-4 text-gray-400">
              {verMas.flags.alt || "Sin descripción"}
            </p>

            <div>
              <strong>Nombres Nativos:</strong>
              <p className="mt-1 text-gray-300">
                {verMas.name.nativeName
                  ? Object.values(verMas.name.nativeName)
                      .map((n) => n.common)
                      .join(", ")
                  : "No disponible"}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
