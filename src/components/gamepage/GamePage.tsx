import { useParams, useNavigate } from 'react-router-dom'
import { ChevronRight, Gamepad2 } from 'lucide-react'
import Header from '../Header'
import Footer from '../Footer'
import { games } from '../../data/games'

const GamePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const currentGame = games.find((game) => game.id === id)

  if (!currentGame) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-theme-main text-theme-light">
        <h1 className="text-4xl font-bold">404 - Game Not Found</h1>
        <p className="text-theme-muted mt-4">The game you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-theme-main text-theme-main font-serif">
      <Header />

      <main className="flex-grow w-full max-w-[1920px] mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cột Trái: Khu vực chơi game */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Ô đen chứa Game (Placeholder) */}
            <div className="w-full aspect-video bg-black border-2 border-theme-gold shadow-[0_0_20px_var(--c-shadow)] flex items-center justify-center relative rounded-lg overflow-hidden">
              <p className="text-theme-dim animate-pulse font-mono">Đang tải tài nguyên game (ID: {id})...</p>
              {/* Sau này bạn sẽ nhúng iframe hoặc canvas game vào đây */}
            </div>

            {/* Thông tin Game */}
            <div className="bg-theme-surface p-6 rounded-lg border border-theme-gold-dim">
              <h1 className="text-3xl font-bold text-theme-light mb-2">{currentGame.title}</h1>
              <p className="text-theme-muted">{currentGame.description}</p>
            </div>
          </div>

          {/* Cột Phải: Danh sách game */}
          <div className="lg:col-span-1 h-fit">
            <h3 className="text-xl font-bold text-theme-gold mb-4 uppercase tracking-widest border-b border-theme-gold-dim pb-2">Danh sách game khác</h3>
            
            {/* Danh sách dạng cột text */}
            <div className="bg-theme-surface/50 rounded-lg border border-theme-dim max-h-[600px] overflow-y-auto custom-scrollbar flex flex-col">
            {games.map((game) => {
                const isActive = game.id === id
                return (
                <div 
                    key={game.id} 
                    onClick={() => navigate(`/game/${game.id}`)} 
                    className={`group p-4 border-b border-theme-dim cursor-pointer transition-all duration-200 flex items-center justify-between ${isActive ? 'bg-theme-accent/20' : 'hover:bg-theme-surface-hover'}`}
                >
                <div className="flex items-center gap-3">
                    <Gamepad2 className={`w-5 h-5 transition-colors ${isActive ? 'text-theme-accent' : 'text-theme-dim group-hover:text-theme-accent'}`} />
                    <span className={`font-medium tracking-wide transition-colors ${isActive ? 'text-theme-light' : 'text-theme-muted group-hover:text-theme-light'}`}>{game.title}</span>
                </div>
                    {isActive && <ChevronRight className="w-5 h-5 text-theme-accent" />}
                </div>
            )})}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default GamePage
