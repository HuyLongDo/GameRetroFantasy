export interface Game {
  id: string
  title: string
  category: string
  thumbnail: string
  description: string
  featured?: boolean
}

export const categories = [
  'Action',
  'Adventure',
  'Puzzle',
  'Racing',
  'Sports',
  'Strategy',
  'Shooting',
  'Arcade',
]

export const games: Game[] = [
  {
    id: '1',
    title: 'Space Warriors',
    category: 'Shooting',
    thumbnail: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=300&fit=crop',
    description: 'Epic space battle adventure',
    featured: true,
  },
  {
    id: '2',
    title: 'Racing Thunder',
    category: 'Racing',
    thumbnail: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&h=300&fit=crop',
    description: 'High-speed racing action',
    featured: true,
  },
  {
    id: '3',
    title: 'Puzzle Master',
    category: 'Puzzle',
    thumbnail: 'https://images.unsplash.com/photo-1606503153255-59d8b2e4ab79?w=400&h=300&fit=crop',
    description: 'Challenge your brain',
    featured: true,
  },
  {
    id: '4',
    title: 'Cyber Knight',
    category: 'Action',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop',
    description: 'Futuristic combat game',
  },
  {
    id: '5',
    title: 'Kingdom Quest',
    category: 'Adventure',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop',
    description: 'Medieval adventure awaits',
  },
  {
    id: '6',
    title: 'Sports Legend',
    category: 'Sports',
    thumbnail: 'https://images.unsplash.com/photo-1461896836934- voices?w=400&h=300&fit=crop',
    description: 'Become a sports champion',
  },
  {
    id: '7',
    title: 'Battle Tactics',
    category: 'Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0c?w=400&h=300&fit=crop',
    description: 'Strategic warfare game',
  },
  {
    id: '8',
    title: 'Retro Runner',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
    description: 'Classic arcade fun',
  },
  {
    id: '9',
    title: 'Dragon Slayer',
    category: 'Action',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop',
    description: 'Defeat the mighty dragons',
  },
  {
    id: '10',
    title: 'Mind Bender',
    category: 'Puzzle',
    thumbnail: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=300&fit=crop',
    description: 'Twist your mind',
  },
  {
    id: '11',
    title: 'Turbo Drift',
    category: 'Racing',
    thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop',
    description: 'Drift to victory',
  },
  {
    id: '12',
    title: 'Alien Invasion',
    category: 'Shooting',
    thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=300&fit=crop',
    description: 'Defend Earth from aliens',
  },
]
