import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-primary-dark/90 text-white">
      <div className="text-center px-4">
        <h1 className="text-9xl font-display font-bold mb-4">404</h1>
        <h2 className="text-3xl font-display font-semibold mb-4">
          Página não encontrada
        </h2>
        <p className="text-xl text-primary-gray mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue/90 transition-all duration-200"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}

