import axios from 'axios';
import { useCallback, useState } from 'react';
import { games, type Game } from './games';

const API_URL = 'https://69b8da52e69653ffe6a5b3ce.mockapi.io/api/gameretro/games'; 

const SyncDataButton = () => {
    const [isUploading, setIsUploading] = useState(false);

    const handleSyncData = useCallback(async () => {
        setIsUploading(true);
        try {
            // Bước 1: Lấy danh sách ID hiện tại để xóa
            const checkResponse = await axios.get(API_URL);
            const apiGames: Game[] = checkResponse.data;

            // Bước 2: Xóa sạch data cũ
            if (apiGames.length > 0) {
                console.log(`Đang xóa ${apiGames.length} game cũ (tuần tự để tránh lỗi)...`);
                // Dùng vòng lặp for...of để xóa tuần tự, tránh làm sập MockAPI
                for (const game of apiGames) {
                    await axios.delete(`${API_URL}/${game.id}`);
                }
            }
            
            // Bước 3: Upload dữ liệu mới từ file
            console.log(`Đang upload ${games.length} game mới...`);
            for (const game of games) {
                await axios.post(API_URL, game);
            }

            alert("Đã làm mới dữ liệu thành công! Trang sẽ tải lại.");
            window.location.reload();

        } catch (error) {
            console.error("Lỗi khi đồng bộ dữ liệu:", error);
            alert("Có lỗi xảy ra (có thể do quá tải API). Hãy thử bấm Đồng bộ lại lần nữa.");
        } finally {
            setIsUploading(false);
        }
    }, []);

    return (
        <button 
            onClick={handleSyncData} 
            disabled={isUploading}
            className={`opacity-1 cursor-pointer px-4 py-2 rounded ${isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}
        >
            {isUploading ? 'Đang đồng bộ...' : 'Load game mới'}
        </button>
    );
};

export default SyncDataButton;
