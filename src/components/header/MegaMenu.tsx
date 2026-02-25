import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface Category {
  name: string;
  highlight?: boolean;
  subcategories?: string[];
}

interface Props {
  open: boolean;
}

const categories: Category[] = [
  { name: "LO NUEVO", highlight: true },
  { name: "OUTLET", highlight: true },
  {
    name: "Juguetería",
    subcategories: [
      "Fanzone",
      "Pepeganga Toys",
      "Tiendas Oficiales",
      "Marcas",
      "Didácticos y preescolar",
      "Muñecas",
      "Vehículos de juguete",
      "Juguetes de Bebé",
      "Juegos de Mesa",
      "Figuras de Acción y Robot",
    ],
  },
  {
    name: "Bebé",
    subcategories: ["Ropa", "Coches", "Sillas", "Accesorios"],
  },
];
const MegaMenu = ({ open }: Props) => {
  const [active, setactive] = useState<Category | null>(categories[2]);

  if (!open) return null;

  return (
    <div className="absolute top-full left-0  bg-white shadow-xl border-t border-gray-200 z-50">
      <div className={`${active?.subcategories  ? "max-w-xl grid grid-cols-2 py-6" : "max-w-md grid grid-cols-1 py-6"}`}>
        <div className="border-r border-gray-200 max-h-[420px] overflow-y-auto px-6 w-[300px]">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onMouseEnter={() => setactive(cat)}
              className={`flex justify-between items-center py-3 px-2 cursor-pointer rounded-md transition
                ${
                  cat.highlight
                    ? "text-red-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <span>{cat.name}</span>
              {cat.subcategories && <ChevronRight size={16} />}
            </div>
          ))}
        </div>

        {active && active.subcategories && (
          <div className="max-h-[420px] overflow-y-auto px-6">
            {active?.subcategories ? (
              active.subcategories.map((sub) => (
                <div
                  key={sub}
                  className="py-3 px-2 cursor-pointer text-gray-700 hover:bg-gray-100 rounded-md transition"
                >
                  {sub}
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MegaMenu;