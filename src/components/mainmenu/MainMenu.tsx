import { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ListGame  from '../listgame/ListGame'

const MainMenu = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: 1, image: "https://placehold.co/500x150/020617/fef3c7?text=HỘI+CHIẾN+BINH&font=serif", alt: "Hội Chiến Binh", desc: "Sức mạnh thiêng liêng từ ngọn lửa rồng.", color: "from-red-900/80 to-slate-900" },
    { id: 2, image: "https://placehold.co/500x150/020617/fef3c7?text=RỪNG+YÊU+TINH&font=serif", alt: "Rừng Yêu Tinh", desc: "Bí mật ẩn giấu sau màn sương vĩnh cửu.", color: "from-emerald-900/80 to-slate-900" },
    { id: 3, image: "https://placehold.co/500x150/020617/fef3c7?text=LÃNH+ĐỊA+BĂNG&font=serif", alt: "Lãnh Địa Băng", desc: "Nơi chỉ những kẻ mạnh nhất mới tồn tại.", color: "from-cyan-900/80 to-slate-900" },
    { id: 4, image: "https://placehold.co/500x150/020617/fef3c7?text=THÁP+CỔ+XƯA&font=serif", alt: "Tháp Cổ Xưa", desc: "Kho báu huyền thoại đang chờ người sở hữu.", color: "from-amber-900/80 to-slate-900" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Chuyển slide mỗi 4 giây

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="min-h-screen flex flex-col bg-theme-main text-theme-main font-serif overflow-hidden relative">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--c-border-gold)] via-[var(--c-bg-main)] to-black"></div>

      {/* Header Component */}
      <Header />

      {/* Body Section (Carousel) */}
      {/* Main Menu */}
      <main className="flex-grow flex flex-col items-center w-full relative z-10">
        <div className="relative w-full h-[600px] overflow-hidden group mb-16">
          
          {/* Slides Container */}
          <div 
            className="flex h-full transition-transform duration-1000 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className={`min-w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${slide.color} relative`}>
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
                 <img src={slide.image} alt={slide.alt} className="w-auto h-24 md:h-32 mb-6 drop-shadow-lg z-10" />
                 <p className="text-xl md:text-2xl text-theme-light opacity-90 tracking-wider font-light italic z-10">{slide.desc}</p>
                 {/* Gradient Fade to Bottom */}
                 <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--c-bg-main)] to-transparent z-20 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border border-theme-gold ${index === currentSlide ? 'bg-theme-accent w-8' : 'bg-transparent hover:bg-theme-gold/50'}`}
              />
            ))}
          </div>
          
        </div>
      
      {/* ListGame components */}
      <ListGame />
      
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default MainMenu
