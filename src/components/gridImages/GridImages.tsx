
import type { ImageItem } from "../../types/Image.type";

interface Props {
  images: ImageItem[];
}
const ImageGrid=({ images }: Props) =>{
  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <img
              src={img.url}
              alt={img.alt || "image"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
export default ImageGrid;