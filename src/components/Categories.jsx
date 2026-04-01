const CATEGORIES = [
  { id: 1, name: "قهوة", icon: "☕" },
  { id: 2, name: "مشروبات باردة", icon: "🧊" },
  { id: 3, name: "حلويات", icon: "🍰" },
  { id: 4, name: "ساندوتشات", icon: "🥪" },
];

function Categories() {
  return (
    <section className="py-20 bg-yellow-50/50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">القائمة</h2>
        <p className="text-gray-600 mb-12">اختر تصنيفك المفضل واستمتع بمذاق لا يقاوم</p>

        <div className="flex justify-center gap-8 flex-wrap">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center bg-white px-10 py-8 rounded-2xl shadow-sm border border-yellow-100 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer min-w-[160px]"
            >
              <span className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {category.icon}
              </span>
              <span className="text-lg font-bold text-gray-700 group-hover:text-yellow-600 transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;