function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* الجانب الأيسر: الصورة (تظهر في الأعلى في الموبايل) */}
          <div className="flex-1 relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-yellow-400 rounded-2xl -z-10 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" 
              alt="تجربة الكافيه" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>

          {/* الجانب الأيمن: المحتوى النصي */}
          <div className="flex-1 text-right">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 relative inline-block">
              قصة مكاننا
              <span className="block h-1 w-12 bg-yellow-400 mt-2 ml-auto"></span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-loose mb-8">
              في كافيهنا، نؤمن أن القهوة ليست مجرد مشروب، بل هي تجربة تبدأ من اختيار حبات البن المختصة بعناية وتنتهي بلحظة هدوء تستحقها. صممنا هذا المكان ليكون ملاذك المثالي للإنجاز، الإبداع، أو حتى لقاء دافئ مع الأصدقاء.
            </p>

            {/* مميزات سريعة بأيقونات بسيطة */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3 justify-end">
                <span className="text-gray-700 font-medium">بيئة هادئة للعمل</span>
                <div className="bg-yellow-100 p-2 rounded-lg text-xl">💻</div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <span className="text-gray-700 font-medium">بن مختص 100%</span>
                <div className="bg-yellow-100 p-2 rounded-lg text-xl">☕</div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <span className="text-gray-700 font-medium">جلسات مريحة</span>
                <div className="bg-yellow-100 p-2 rounded-lg text-xl">🛋️</div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <span className="text-gray-700 font-medium">انترنت سريع</span>
                <div className="bg-yellow-100 p-2 rounded-lg text-xl">🚀</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;