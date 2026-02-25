import { useEffect, useState } from "react";
import { getProducts } from "../services/products.services";
import type { Product } from "../types/product.type";

interface Props {
  start?: number;
  limit?: number;
}

export const useProducts = ({
  start = 0,
  limit = 12,
}: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProducts();

        const sliced = data.slice(start, start + limit);

        setProducts(sliced);
      } catch (error) {
        console.error("Error cargando productos", error);
        setError("Error cargando productos");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [start, limit]);

  return { products, loading, error };
};