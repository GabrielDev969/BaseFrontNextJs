export function Footer() {
    return (
      <footer className="bg-gray-50 border-t border-gray-200 mt-12 sm:mt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Base Project Next. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="https://github.com/GabrielDev969" className="text-xs sm:text-sm text-gray-400 hover:text-gray-600 transition-colors">Github</a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-gray-600 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }