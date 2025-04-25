import { EmailCreator } from "@/app/components/email/EmailCreator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
            Fake Profile Generator
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Crea perfiles completos con emails temporales verificados para proteger tu privacidad en línea
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Seguro
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Temporal
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-900/30 text-pink-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Anónimo
            </span>
          </div>
        </header>

        <main>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <EmailCreator />
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/20 p-6 rounded-lg border border-gray-700/50">
              <div className="text-blue-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Perfiles Aleatorios</h3>
              <p className="text-gray-400">Genera identidades completas con nombres, direcciones y datos personales ficticios.</p>
            </div>
            
            <div className="bg-gray-800/20 p-6 rounded-lg border border-gray-700/50">
              <div className="text-purple-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Emails Verificables</h3>
              <p className="text-gray-400">Recibe mensajes reales en buzones temporales que se eliminan automáticamente.</p>
            </div>
            
            <div className="bg-gray-800/20 p-6 rounded-lg border border-gray-700/50">
              <div className="text-pink-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Privacidad Total</h3>
              <p className="text-gray-400">Protege tus datos reales al registrarte en sitios web o probar servicios en línea.</p>
            </div>
          </div>
        </main>

        <footer className="mt-16 text-center">
          <div className="max-w-2xl mx-auto border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Fake Profile Generator - Protege tu identidad en línea
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Los perfiles generados son completamente ficticios. Los emails temporales son válidos por 24 horas.
            </p>
            <p className="text-xs text-gray-600 mt-4">
              Creado por <a href="https://github.com/dest92" className="text-blue-400 hover:text-blue-300 transition-colors">Matías Acebal</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
