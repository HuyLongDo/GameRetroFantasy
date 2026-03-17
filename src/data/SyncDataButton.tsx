import axios from 'axios';
import { useCallback, useState } from 'react';
import { games } from './games';

// QUAN TRỌNG: Hãy thay thế 'xxxxxx' bằng Project ID của bạn trên MockAPI
const API_URL = 'https://69b8da52e69653ffe6a5b3ce.mockapi.io/api/gameretro/games'; 

const SyncDataButton = () => {
    const [isUploading, setIsUploading] = useState(false);

    const handleSyncData = useCallback(async () => {
        setIsUploading(true);
        try {
            // Bước 1: Kiểm tra xem trên MockAPI đã có dữ liệu chưa
            const checkResponse = await axios.get(API_URL);
            
            if (checkResponse.data && checkResponse.data.length > 0) {
                alert(`Đã có ${checkResponse.data.length} game trên hệ thống. Không cần upload thêm.`);
                return;
            }

            // Bước 2: Nếu chưa có dữ liệu, thực hiện upload hàng loạt
            console.log(`Đang khởi tạo ${games.length} game lên MockAPI...`);
            
            const uploadRequests = games.map(game => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { id, ...gameWithoutId } = game; 
                return axios.post(API_URL, gameWithoutId);
            });

            await Promise.all(uploadRequests);
            
            alert(` Upload thành công toàn bộ ${games.length} game!`);
        } catch (error) {
            console.error("Lỗi khi đồng bộ dữ liệu:", error);
            alert("Có lỗi xảy ra khi upload dữ liệu. Vui lòng kiểm tra Console và API_URL.");
        } finally {
            setIsUploading(false);
        }
    }, []);

    return (
        <button 
            onClick={handleSyncData} 
            disabled={isUploading}
            className={`px-4 py-2 rounded ${isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors`}
        >
            {isUploading ? 'Đang kiểm tra & Upload...' : 'Load game'}
        </button>
    );
};

export default SyncDataButton;
