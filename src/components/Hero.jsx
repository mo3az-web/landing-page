import React from 'react'

function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-cover bg-center overflow-hidden" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=2070')" }}>
      
      {/* طبقة التعتيم (Overlay) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* محتوى الهيرو */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          استمتع بأفضل <span className="text-yellow-400">قهوة</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          جرب نكهاتنا المميزة في جو دافئ ومريح. الكافيه المثالي للقاء الأصدقاء أو الاسترخاء بعد يوم طويل.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black font-bold rounded-full transition-all duration-300">
            اكتشف قائمتنا
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero