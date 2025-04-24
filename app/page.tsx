import { EmailCreator } from "@/app/components/email/EmailCreator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">
            Email Temporal
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Crea emails temporales verificados con perfiles de usuario
            aleatorios para proteger tu privacidad en línea
          </p>
        </header>

        <main>
          <EmailCreator />
        </main>

        <footer className="mt-16 text-center">
          <div className="max-w-2xl mx-auto border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Email Temporal - Protege tu
              privacidad en línea
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Los emails temporales son válidos por 24 horas. Todos los perfiles
              generados son ficticios.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
