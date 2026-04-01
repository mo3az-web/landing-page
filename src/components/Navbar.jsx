import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // أيقونات الهامبرغر والإغلاق

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // مراقبة السكرول لتغيير حالة الناف بار
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 ${
        scrolled
          ? 'bg-yellow-50/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* اللوجو */}
        <div className={`text-2xl font-extrabold transition-colors duration-300 ${scrolled ? 'text-yellow-600' : 'text-white'}`}>
          Café
        </div>

        {/* الروابط للشاشات الكبيرة */}
        <ul className={`hidden md:flex gap-8 font-medium transition-colors duration-300 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
          <li className="hover:text-yellow-500 cursor-pointer">الرئيسية</li>
          <li className="hover:text-yellow-500 cursor-pointer">القائمة</li>
          <li className="hover:text-yellow-500 cursor-pointer">عن الكافيه</li>
          <li className="hover:text-yellow-500 cursor-pointer">اتصل بنا</li>
        </ul>

        {/* زرار الموبايل */}
        <div className="md:hidden flex items-center gap-4">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-transform active:scale-95">
            اطلب من المنزل
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl focus:outline-none">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-yellow-50/95 backdrop-blur-md shadow-lg mt-2 rounded-lg py-4 px-6 flex flex-col gap-4 text-gray-700 font-medium transition-all duration-300">
          <li className="hover:text-yellow-500 cursor-pointer">الرئيسية</li>
          <li className="hover:text-yellow-500 cursor-pointer">القائمة</li>
          <li className="hover:text-yellow-500 cursor-pointer">عن الكافيه</li>
          <li className="hover:text-yellow-500 cursor-pointer">اتصل بنا</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;