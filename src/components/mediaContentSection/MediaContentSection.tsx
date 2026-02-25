interface Props {
  title: string;
  description: string;
  mediaUrl: string;
  mediaType?: "image" | "video";
  reverse?: boolean;
}

const MediaContentSection = ({
  title,
  description,
  mediaUrl,
  mediaType = "image",
  reverse = false,
}: Props) => {
  return (
    <section className="w-full py-10 px-6 md:px-12 lg:px-20">
      <div className="w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
          {mediaType === "image" ? (
            <img
              src={mediaUrl}
              alt={title}
              className="w-full h-[550px] md:h-[450px] object-cover rounded-2xl shadow-lg"
            />
          ) : (
            <video
              src={mediaUrl}
              controls
              className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-lg"
            />
          )}
        </div>
        <div
          className={`flex flex-col justify-center space-y-6 ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {description}
          </p>

          <div>
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-yellow-400 transition shadow-md ">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MediaContentSection;