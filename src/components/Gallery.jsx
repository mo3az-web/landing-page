const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  "https://images.unsplash.com/photo-1461988625982-7e46a099bf4f",
];

function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* العناوين */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">أجواء الكافيه</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* شبكة الصور */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-200 aspect-[4/5]"
            >
              <img
                src={src}
                alt={`Cafe atmosphere ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* طبقة شفافة عند التمرير */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="border-2 border-white/50 p-2 rounded-full">
                  <span className="text-white text-sm">عرض التفاصيل</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;