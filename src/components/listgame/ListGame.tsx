import { PlayCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { games } from '../../data/games'

const ListGame = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-serif">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <div 
            key={game.id} 
            className="bg-theme-surface border border-theme-gold-dark rounded-lg overflow-hidden shadow-[0_8px_30px_var(--c-shadow)] group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_var(--c-shadow)]"
          >
            <div className="relative">
              <img src={game.thumbnail} alt={game.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-theme-light tracking-wide truncate mb-4">{game.title}</h3>
              <button 
                onClick={() => navigate(`/game/${game.id}`)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-theme-accent/80 text-theme-main font-bold uppercase tracking-wider rounded-md transition-all duration-300 hover:bg-theme-accent hover:shadow-lg hover:shadow-amber-500/20"
              >
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
