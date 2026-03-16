import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, ChevronDown } from 'lucide-react'
import { categories } from '../data/games'

const Header = () => {
  const navigate = useNavigate()
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const navItems = ['Game', 'ROMS', 'Danh mục']

  return (
    <header className="w-full h-20 px-8 flex items-center justify-between bg-theme-header border-b border-theme-gold-dim backdrop-blur-sm shadow-[0_4px_20px_var(--c-shadow)] z-50 sticky top-0">
      {/* Left: Logo */}
      <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="text-xl md:text-2xl font-extrabold tracking-widest text-transparent bg-clip-text text-gradient-gold font-serif filter drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">
          RETRO FANTASY
        </div>
      </div>

      {/* Center: Nav Items */}
      <nav className="hidden md:flex items-center gap-12">
        {navItems.map((item) => {
          if (item === 'Danh mục') {
            return (
              <div key={item} className="relative">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center gap-1 text-theme-light opacity-70 hover:opacity-100 hover-text-theme-highlight font-serif font-bold uppercase tracking-wider text-sm transition-all duration-300 group"
                >
                  {item}
                  <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Box */}
                {isCategoryOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-theme-surface border border-theme-gold rounded-lg shadow-[0_4px_20px_var(--c-shadow)] grid grid-cols-2 gap-2 z-50 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
                    {categories.map((cat) => (
                      <a 
                        key={cat} 
                        href="#" 
                        className="text-theme-muted hover:text-theme-accent text-xs font-serif tracking-wide py-1 px-2 hover:bg-theme-main/50 rounded transition-colors"
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          }
          return (
          <a
            key={item}
            href="#"
            className="text-theme-light opacity-70 hover:opacity-100 hover-text-theme-highlight font-serif font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-accent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
          </a>
          )
        })}
      </nav>

      {/* Right: Search Bar */}
      <div className="relative group">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-theme-input text-theme-light border border-theme-gold-dark/50 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-theme-gold-light focus:ring-1 focus:ring-theme-gold-light/50 transition-all w-40 focus:w-64 placeholder-theme-gold-dark font-serif text-sm opacity-90"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-theme-gold w-4 h-4 hover-text-theme-highlight transition-colors" />
      </div>
    </header>
  )
}

export default Header
