import "./App.css";
import Footer from "./components/footer/Footer";
import GridImages from "./components/gridImages/GridImages";
import Header from "./components/header/Header";
import HeroBanner from "./components/heroBanner/HeroBanner";
import MediaContentSection from "./components/mediaContentSection/MediaContentSection";
import ProductCarousel from "./components/productCarousel/ProductCarousel";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <MediaContentSection
        title="Descubre nuestra nueva colección"
        description="Explora productos diseñados para brindar calidad, innovación y estilo. Encuentra opciones ideales para cada momento."
        mediaUrl="https://placehold.co/1000x600?text=Nueva+Colección"
      />
      <MediaContentSection
        title="Tecnología que transforma"
        description="Innovación y rendimiento en cada producto."
        mediaUrl="https://placehold.co/1000x600?text=Producto+Tecnológico"
        reverse
      />
      <ProductCarousel start={0} limit={12} redirectUrl="#" />
      <GridImages
        images={[
          { id: "1", url: "https://placehold.co/600x400?text=1" },
          { id: "2", url: "https://placehold.co/600x400?text=2" },
          { id: "3", url: "https://placehold.co/600x400?text=3" },
          { id: "4", url: "https://placehold.co/600x400?text=4" },
          { id: "5", url: "https://placehold.co/600x400?text=5" },
          { id: "6", url: "https://placehold.co/600x400?text=6" },
          { id: "7", url: "https://placehold.co/600x400?text=7" },
          { id: "8", url: "https://placehold.co/600x400?text=8" },
        ]}
      />
      <ProductCarousel
        start={13}
        limit={24}
        title="Productos de la segunda colección"
        redirectUrl="#"
      />
      <Footer />
    </>
  );
}

export default App;
