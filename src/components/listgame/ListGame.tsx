import { useState, useEffect } from 'react'
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ButtonOrange from '../layouttheme/button/ButtonOrange'
import SyncDataButton from '../../data/SyncDataButton'
import axios from 'axios'
import { type Game } from '../../data/games'

const API_URL = 'https://69b8da52e69653ffe6a5b3ce.mockapi.io/api/gameretro/games';

const ListGame = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  // Loading game
  const [allGames, setAllGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setAllGames(response.data);
        setError(null);
      } catch (err) {
        setError('Không thể tải danh sách game. Vui lòng thử lại sau.');
        console.error("Failed to fetch games:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);
  
  // Lọc game theo category và search
  const categoryFilter = searchParams.get('category')
  const searchFilter = searchParams.get('search')
  
  const filteredGames = allGames.filter(game => {
    const matchCategory = categoryFilter ? game.category === categoryFilter : true
    const matchSearch = searchFilter ? game.title.toLowerCase().includes(searchFilter.toLowerCase()) : true
    return matchCategory && matchSearch
  })

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

  // Tính toán dải phân trang để không hiện quá nhiều nút (chỉ hiện tối đa 5 trang)
  const getPaginationGroup = () => {
    const maxButtons = 5
    let start = Math.max(1, currentPage - 2)
    // eslint-disable-next-line prefer-const
    let end = Math.min(totalPages, start + maxButtons - 1)
    
    if (end - start < maxButtons - 1) start = Math.max(1, end - maxButtons + 1)
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  // Reset về trang 1 khi thay đổi bộ lọc
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1)
  }, [categoryFilter, searchFilter])

  if (loading) {
    return <div className="text-center text-theme-gold text-xl p-10">Đang tải thư viện game...</div>
  }

  if (error) {
    return <div className="text-center text-red-400 text-xl p-10">{error}</div>
  }

  // Tạo tiêu đề động dựa trên bộ lọc
  let title = 'Thư viện Game'
  if (searchFilter) title = `Kết quả tìm kiếm: "${searchFilter}"`
  else if (categoryFilter) title = `Thể loại ${categoryFilter}`

  return (
  <div className="flex flex-col items-center w-full">
    <h1 id="game-list-start" className='text-[30px] mb-10 text-theme-gold font-bold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
      {title}
    </h1>
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-serif mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {currentGames.length === 0 && !loading && (
          <div className="col-span-full text-center text-theme-muted py-10">
            <p>Không tìm thấy game nào trong danh mục này.</p>
          </div>
        )}

        {currentGames.map((game) => (
          <div 
            // Dùng kết hợp id và random để tránh lỗi key trùng nhau nếu API bị duplicate dữ liệu
            key={`${game.id}-${Math.random()}`} 
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

          {getPaginationGroup().length > 0 && getPaginationGroup()[0] > 1 && (
             <span className="px-2 text-theme-gold">...</span>
          )}

          {getPaginationGroup().map((number) => (
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

          {getPaginationGroup().length > 0 && getPaginationGroup()[getPaginationGroup().length - 1] < totalPages && (
             <span className="px-2 text-theme-gold">...</span>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-theme-gold/50 text-theme-gold hover:bg-theme-gold hover:text-theme-main disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-theme-gold transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Nút để đồng bộ dữ liệu lên MockAPI (chỉ dùng cho mục đích phát triển) */}
      <div className="flex justify-center mt-12">
        <SyncDataButton />
      </div>
    </div>
  </div>
  )
}

export default ListGame;
