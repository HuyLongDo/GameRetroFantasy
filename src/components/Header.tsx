import { Search } from 'lucide-react'

const Header = () => {
  const navItems = ['Trang Chủ', 'Tướng', 'Vật Phẩm']

  return (
    <header className="w-full h-20 px-8 flex items-center justify-between bg-theme-header border-b border-theme-gold-dim backdrop-blur-sm shadow-[0_4px_20px_var(--c-shadow)] z-50 sticky top-0">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="text-xl md:text-2xl font-extrabold tracking-widest text-transparent bg-clip-text text-gradient-gold font-serif filter drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">
          RETRO FANTASY
        </div>
      </div>

      {/* Center: Nav Items */}
      <nav className="hidden md:flex items-center gap-12">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-theme-light opacity-70 hover:opacity-100 hover-text-theme-highlight font-serif font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-accent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
          </a>
        ))}
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
