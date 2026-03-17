import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import Header from '../Header'
import Footer from '../Footer'
import ListGame  from '../listgame/ListGame'

const MainMenu = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3 // Đặt âm lượng 30%
      
      const tryPlay = () => {
        // Nếu đang phát rồi thì thôi, không gọi lại để tránh lỗi
        if (audioRef.current && !audioRef.current.paused) return

        const playPromise = audioRef.current?.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              // Gỡ bỏ sự kiện sau khi đã phát thành công
              document.removeEventListener('click', tryPlay)
              document.removeEventListener('keydown', tryPlay)
              window.removeEventListener('scroll', tryPlay)
              window.removeEventListener('wheel', tryPlay)
              window.removeEventListener('touchstart', tryPlay)
              window.removeEventListener('touchmove', tryPlay)
            })
            .catch((error) => {
              // Chỉ log lỗi nếu không phải lỗi do người dùng chưa tương tác (để đỡ rác console)
              if (error.name !== 'NotAllowedError') {
                 console.log("Playback failed:", error)
              }
              setIsPlaying(false)
            })
        }
      }

      // Thử phát ngay lập tức
      tryPlay()

      // Nếu bị chặn, phát ngay khi người dùng tương tác lần đầu
      document.addEventListener('click', tryPlay)
      document.addEventListener('keydown', tryPlay)
      window.addEventListener('scroll', tryPlay)
      window.addEventListener('wheel', tryPlay)     // Bắt sự kiện lăn chuột
      window.addEventListener('touchstart', tryPlay) // Bắt sự kiện chạm màn hình
      window.addEventListener('touchmove', tryPlay)  // Bắt sự kiện vuốt

      return () => {
        document.removeEventListener('click', tryPlay)
        document.removeEventListener('keydown', tryPlay)
        window.removeEventListener('scroll', tryPlay)
        window.removeEventListener('wheel', tryPlay)
        window.removeEventListener('touchstart', tryPlay)
        window.removeEventListener('touchmove', tryPlay)
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-theme-main text-theme-main font-serif overflow-hidden relative">
      {/* Background Music */}
      <audio ref={audioRef} src="/Granblue%20Fantasy%20Versus%20Soundtrack%20-%20Main%20Menu.mp3" loop />

      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--c-border-gold)] via-[var(--c-bg-main)] to-black"></div>

      {/* Header Component */}
      <Header />

      {/* Body Section (Carousel) */}
      {/* Main Menu */}
      <main className="flex-grow flex flex-col items-center w-full relative z-10">
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
      
      </main>

      {/* Music Toggle Button */}
      <button 
        onClick={() => {
          if (audioRef.current) {
            if (isPlaying) audioRef.current.pause()
            else audioRef.current.play()
            setIsPlaying(!isPlaying)
          }
        }}
        className="fixed bottom-8 right-8 z-50 p-3 bg-theme-surface/80 border border-theme-gold text-theme-gold rounded-full hover:bg-theme-gold hover:text-theme-main transition-all duration-300 shadow-[0_0_15px_var(--c-shadow)]"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default MainMenu
