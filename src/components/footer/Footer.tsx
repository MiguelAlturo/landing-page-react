import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12" >

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Don Pepe
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs mx-auto sm:mx-0">
              Ofrecemos productos de alta calidad con envíos a todo el país.
              Innovación, diseño y confianza en un solo lugar.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">
              Enlaces
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">
              Información
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6">
              Síguenos
            </h4>
            <div className="flex justify-center sm:justify-start gap-5">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Don Pepe. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;