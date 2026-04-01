import React from "react";

const products = [
  {
    id: 1,
    name: "قهوة اسبريسو",
    price: 30,
    category: "قهوة مختصة",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e11?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "كابتشينو",
    price: 40,
    category: "مشروبات ساخنة",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "لاتيه",
    price: 45,
    category: "مشروبات ساخنة",
    image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "كيك شوكولاتة",
    price: 50,
    category: "حلويات",
    image: "https://images.unsplash.com/photo-1605475121903-0b3b3f1d7c88?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "آيس كوفي",
    price: 35,
    category: "مشروبات باردة",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
  },
];

function Products() {
  return (
    <section className="py-20 bg-yellow-50/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="text-right">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
              الأكثر مبيعاً ☕
            </h2>
            <p className="text-gray-500">اخترنا لك بعناية أفضل ما نقدمه اليوم</p>
          </div>
          <button className="text-yellow-700 font-bold hover:underline decoration-2 underline-offset-8 transition-all">
            عرض المنيو بالكامل ←
          </button>
        </div>

        {/* السكرول المحسن */}
        <div className="flex gap-8 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory scrollbar-hide">
          {products.map((item) => (
            <div
              key={item.id}
              className="min-w-[280px] md:min-w-[320px] snap-center group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-yellow-200"
            >
              {/* الحاوية للصورة */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{item.category}</span>
                </div>
              </div>

              {/* التفاصيل */}
              <div className="p-6 text-right">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-black text-gray-800 tracking-tight">
                     {item.price} <span className="text-sm font-normal text-gray-500">جنيه</span>
                  </span>
                  <h3 className="text-xl font-bold text-gray-700">{item.name}</h3>
                </div>

        
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;