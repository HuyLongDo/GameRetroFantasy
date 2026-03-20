// import { useState } from 'react';
// import { cn } from '../lib/utils'; // Dùng hàm cn đã cài

// export const GameThumbnail = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
//   const [error, setError] = useState(false);

//   return (
//     <div className={cn("overflow-hidden bg-slate-800", className)}>
//       <img
//         src={error ? `https://placehold.co/400x600/1e293b/ffffff?text=${encodeURIComponent(alt)}` : src}
//         alt={alt}
//         className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
//         onError={() => setError(true)}
//         loading="lazy"
//       />
//     </div>
//   );
// };