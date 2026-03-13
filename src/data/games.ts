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
    description: 'An epic space battle adventure where you pilot an advanced starfighter against hordes of alien invaders. Upgrade your ship, unlock powerful weapons, and save the galaxy.',
    featured: true,
  },
  {
    id: '2',
    title: 'Racing Thunder',
    category: 'Racing',
    thumbnail: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&h=300&fit=crop',
    description: 'Experience high-speed racing action on breathtaking tracks. Customize your car, compete in championships, and prove you are the fastest driver on the planet.',
    featured: true,
  },
  {
    id: '3',
    title: 'Puzzle Master',
    category: 'Puzzle',
    thumbnail: 'https://images.unsplash.com/photo-1606503153255-59d8b2e4ab79?w=400&h=300&fit=crop',
    description: 'Challenge your brain with hundreds of mind-bending puzzles. A perfect game to relax and sharpen your logical thinking.',
    featured: true,
  },
  {
    id: '4',
    title: 'Cyber Knight',
    category: 'Action',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop',
    description: 'In a futuristic city, you are the last hope. A fast-paced combat game with a deep story and character customization.',
  },
  {
    id: '5',
    title: 'Kingdom Quest',
    category: 'Adventure',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop',
    description: 'A vast medieval world awaits. Explore ancient ruins, fight mythical creatures, and forge your own destiny in this grand adventure.',
  },
  {
    id: '6',
    title: 'Sports Legend',
    category: 'Sports',
    thumbnail: 'https://images.unsplash.com/photo-1461896836934-0c25d3a4d410?w=400&h=300&fit=crop',
    description: 'Become a sports champion across multiple disciplines. Compete against the best and write your name in the hall of fame.',
  },
  {
    id: '7',
    title: 'Battle Tactics',
    category: 'Strategy',
    thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0c?w=400&h=300&fit=crop',
    description: 'A turn-based strategic warfare game. Command your armies, outsmart your opponents, and conquer the world.',
  },
  {
    id: '8',
    title: 'Retro Runner',
    category: 'Arcade',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
    description: 'Classic arcade fun with a modern twist. Run, jump, and dodge obstacles in this addictive, high-score chasing game.',
  },
]
