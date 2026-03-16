import { useState, useEffect } from 'react'
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { games } from '../../data/games'
import ButtonOrange from '../layouttheme/button/ButtonOrange'

const ListGame = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  
  const categoryFilter = searchParams.get('category')
  const filteredGames = categoryFilter 
    ? games.filter(game => game.category === categoryFilter) 
    : games

  // Cấu hình phân trang: 4 cột x 4 hàng = 16 game/trang
  const itemsPerPage = 16
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentGames = filteredGames.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Cuộn nhẹ lên đầu danh sách khi chuyển trang (tùy chọn)
    const listElement = document.getElementById('game-list-start')
    if (listElement) listElement.scrollIntoView({ behavior: 'smooth' })
  }

  // Reset về trang 1 khi thay đổi bộ lọc
  useEffect(() => {
    setCurrentPage(1)
  }, [categoryFilter])

  return (
  <div className="flex flex-col items-center w-full">
    <h1 id="game-list-start" className='text-[30px] mb-10 text-theme-gold font-bold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
      {categoryFilter ? `Danh mục: ${categoryFilter}` : 'Thư viện Game'}
    </h1>
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-serif mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {currentGames.map((game) => (
          <div 
            key={game.id} 
            className="bg-theme-surface border border-theme-gold-dark rounded-lg overflow-hidden shadow-[0_8px_30px_var(--c-shadow)] group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_var(--c-shadow)]"
          >
            <div 
              className="relative cursor-pointer"
              onClick={() => navigate(`/game/${game.id}`)}
            >
              <img src={game.thumbnail} alt={game.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-theme-light tracking-wide truncate mb-4">{game.title}</h3>
              <div className="mt-auto">
                <ButtonOrange 
                  onClick={() => navigate(`/game/${game.id}`)}
                  className="w-full"
                >
                  <PlayCircle size={20} />
                  Play
                </ButtonOrange>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-theme-gold/50 text-theme-gold hover:bg-theme-gold hover:text-theme-main disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-theme-gold transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg border font-bold text-lg transition-all duration-300 ${
                currentPage === number
                  ? 'bg-theme-gold text-theme-main border-theme-gold shadow-[0_0_10px_var(--c-shadow)] scale-110'
                  : 'bg-theme-surface border-theme-gold/30 text-theme-muted hover:border-theme-gold hover:text-theme-light'
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-theme-gold/50 text-theme-gold hover:bg-theme-gold hover:text-theme-main disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-theme-gold transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  </div>
  )
}

export default ListGame;
