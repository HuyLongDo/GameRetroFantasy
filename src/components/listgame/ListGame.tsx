import { PlayCircle } from 'lucide-react'

const ListGame = () => {
  // Dữ liệu mẫu, bạn có thể thay thế bằng API call sau này
  const games = [
    { id: 1, title: "Dragon's Wrath", image: "https://placehold.co/600x400/7f1d1d/fef3c7?text=Dragon's+Wrath&font=serif" },
    { id: 2, title: "Elven Whispers", image: "https://placehold.co/600x400/064e3b/fef3c7?text=Elven+Whispers&font=serif" },
    { id: 3, title: "Frostguard Keep", image: "https://placehold.co/600x400/155e75/fef3c7?text=Frostguard+Keep&font=serif" },
    { id: 4, title: "Ancient Tower", image: "https://placehold.co/600x400/78350f/fef3c7?text=Ancient+Tower&font=serif" },
    { id: 5, title: "Shadow's Gambit", image: "https://placehold.co/600x400/1e1b4b/fef3c7?text=Shadow's+Gambit&font=serif" },
    { id: 6, title: "Sunken Kingdom", image: "https://placehold.co/600x400/1e3a8a/fef3c7?text=Sunken+Kingdom&font=serif" },
  ];

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-serif">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <div 
            key={game.id} 
            className="bg-theme-surface border border-theme-gold-dark rounded-lg overflow-hidden shadow-[0_8px_30px_var(--c-shadow)] group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_var(--c-shadow)]"
          >
            <div className="relative">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-theme-light tracking-wide truncate mb-4">{game.title}</h3>
              <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-theme-accent/80 text-theme-main font-bold uppercase tracking-wider rounded-md transition-all duration-300 hover:bg-theme-accent hover:shadow-lg hover:shadow-amber-500/20">
                <PlayCircle size={20} />
                Chơi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListGame;
