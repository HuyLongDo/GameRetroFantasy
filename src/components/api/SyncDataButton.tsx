import axios from 'axios';
import { useCallback, useState } from 'react';
import { games, type Game } from '../../data/games';

const API_URL = 'https://69b8da52e69653ffe6a5b3ce.mockapi.io/api/gameretro'; 

const SyncDataButton = () => {
  const [isUploading, setIsUploading] = useState(false)

  const handleSyncData = useCallback(async () => {
    setIsUploading(true)
    try {
      // Bước 1: Kiểm tra xem trên MockAPI đã có dữ liệu chưa
      const checkResponse = await axios.get(API_URL)
      const apiGames: Game[] = checkResponse.data

      if (apiGames.length === 0) {
        // Nếu chưa có dữ liệu, thực hiện upload
        console.log(`Đang upload ${games.length} game mới...`)
        for (const game of games) {
          await axios.post(API_URL, game)
        }
        alert('Đã tải dữ liệu game lên trang mock thành công!')
      } else {
        // Nếu đã có dữ liệu, thông báo
        alert('Dữ liệu game đã có trên trang mock!')
      }
      window.location.reload()
    } catch (error) {
      console.error('Lỗi khi đồng bộ dữ liệu:', error)
      alert('Có lỗi xảy ra (có thể do quá tải API). Hãy thử bấm Đồng bộ lại lần nữa.')
    } finally {
      setIsUploading(false)
    }
  }, [])


    return (
        <button 
            onClick={handleSyncData} 
            disabled={isUploading}
            className={`opacity-1 cursor-pointer px-4 py-2 rounded ${isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}
        >
            {isUploading ? 'Đang đồng bộ...' : 'Load game mới'}
        </button>
    )
};

export default SyncDataButton;
