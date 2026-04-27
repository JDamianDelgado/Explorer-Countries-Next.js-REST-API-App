export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-700 bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-gray-400 sm:px-6">
        <p>© {new Date().getFullYear()} JD. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
