import { ShoppingCart, User, MapPin, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logoPepeGanga.webp";
import MegaMenu from "./MegaMenu";

interface Category {
  name: string;
  url: string;
}

const categories: Category[] = [
  { name: "Juguetería", url: "#" },
  { name: "Bebé", url:  "#" },
  { name: "Moda", url:  "#" },
  { name: "Electro", url:  "#" },
  { name: "Electrobelleza", url:  "#" },
  { name: "Tecnología", url: "#" },
  { name: "Hogar", url:  "#"},
  { name: "Belleza", url:  "#" },
  { name: "Deportes", url: "#" },
  { name: "Muebles", url:  "#" },
  { name: "Outlet", url:  "#" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      <div className="bg-yellow-400 px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <img src={logo} className="w-20 object-contain" />

          <div className="hidden md:flex items-center gap-2 text-sm text-gray-700">
            <MapPin size={18} />
            <span>
              Mi ubicación <span className="font-semibold">Elegir</span>
            </span>
          </div>
        </div>

        <div className="flex-1 hidden md:flex justify-center">
          <div className="relative w-full max-w-2xl">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              className="bg-gray-100 w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-sm cursor-pointer hover:opacity-80">
            <User size={20} />
            <span>Mi Cuenta</span>
          </div>

          <div className="flex items-center gap-2 relative cursor-pointer hover:opacity-80">
            <ShoppingCart size={22} />
            <span className="hidden md:inline text-sm">Mi Carrito</span>

            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>

      <div className="relative border-t border-gray-200 bg-white">
        <div className="hidden md:flex items-center gap-6 px-8 py-3 text-sm text-gray-700">
          
          {/* HAMBURGER CATEGORÍAS */}
          <button
            onClick={() => setOpenMegaMenu(!openMegaMenu)}
            className="flex items-center gap-2 font-medium text-gray-800 hover:text-blue-600 transition"
          >
            {openMegaMenu ? <X size={22} /> : <Menu size={22} />}
            Categorías
          </button>

          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.url}
              className={`hover:text-red-500 transition ${
                cat.name === "Outlet"
                  ? "text-red-500 font-semibold"
                  : ""
              }`}
            >
              {cat.name}
            </a>
          ))}
        </div>
        {openMegaMenu && (
          <div
            onClick={() => setOpenMegaMenu(false)}
            className="fixed inset-0 bg-black/40 z-0 top-33"
          />
        )}

        {/* MEGA MENU */}
        <MegaMenu
          open={openMegaMenu}
        />
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.url}
              className="block text-gray-700"
            >
              {cat.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
export default Header;