import { useState, useEffect } from 'react'
import ListGame  from '../listgame/ListGame'

const MainMenu = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: 1, image: "./static/granblue-fantasy-chinh-thuc-do-bo-steam-tin-game-1.jpg", alt: "Lets play the game", desc: "", color: "from-red-900/80 to-slate-900" },
    { id: 2, image: "./static/granblue-fantasy-relink-endless-ragnarok-ra-mat-thang-7-2026-tin-game-4.jpg", color: "from-emerald-900/90 to-slate-900" },
    { id: 3, image: "./static/grancypher.jpg", alt: "", desc: "", color: "from-cyan-900/80 to-slate-900" },
    { id: 4, image: "./static/blueprotol.webp", alt: "", desc: "", color: "from-amber-900/80 to-slate-900" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Chuyển slide mỗi 4 giây

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--c-border-gold)] via-[var(--c-bg-main)] to-black"></div>

      {/* Body Section (Carousel) */}
      <div className="flex flex-col items-center w-full relative z-10">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group mb-16">
          
          {/* Slides Container */}
          <div 
            className="flex h-full transition-transform duration-1000 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full h-full relative flex flex-col items-center justify-center">
                 {/* Background Image Full Size */}
                 <img src={slide.image} alt={slide.alt} className="absolute inset-0 w-full h-full object-cover z-0" />
                 
                 {/* Overlay to ensure text readability */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} mix-blend-multiply opacity-10 z-10`}></div>

                 <div className="relative z-20 text-center mt-24 md:mt-32 lg:mt-40 px-4">
                    <h2 className="text-lg md:text-2xl font-bold text-white mb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)] tracking-[0.2em] md:tracking-[0.3em] uppercase">{slide.alt}</h2>
                    <p className="text-base md:text-xl text-theme-light tracking-wider font-light italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{slide.desc}</p>
                 </div>

                 {/* Gradient Fade to Bottom */}
                 <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 bg-gradient-to-t from-[var(--c-bg-main)] via-[var(--c-bg-main)]/80 to-transparent z-30 pointer-events-none"></div>
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
      </div>
    </div>
  )
}

export default MainMenu
