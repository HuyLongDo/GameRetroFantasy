export interface Game {
  id: string
  title: string
  category: string
  embedUrl: string
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
    title: 'Super Mario Bros',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16847-super-mario-bros-japan-usa.html',
    thumbnail: 'https://www.retrogames.cc/images/screenshots/nes/16847-super-mario-bros-japan-usa-1.jpg',
    description: 'An epic space battle adventure where you pilot an advanced starfighter against hordes of alien invaders. Upgrade your ship, unlock powerful weapons, and save the galaxy.',
    featured: true,
  },
  {
    id: '2',
    title: 'Contra',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16631-contra-usa.html',
    thumbnail: 'https://www.retrogames.cc/images/screenshots/nes/16631-contra-usa-1.jpg',
    description: 'Experience high-speed racing action on breathtaking tracks. Customize your car, compete in championships, and prove you are the fastest driver on the planet.',
    featured: true,
  },
  {
    id: '3',
    title: 'Pokemon Emerald',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40238-pokemon-emerald-version-usa-europe.html',
    thumbnail: 'https://www.retrogames.cc/images/screenshots/gba/40238-pokemon-emerald-version-usa-europe-1.jpg',
    description: 'Challenge your brain with hundreds of mind-bending puzzles. A perfect game to relax and sharpen your logical thinking.',
    featured: true,
  },
  {
    id: '4',
    title: 'Metal Slug X',
    category: 'Arcade',
    embedUrl: "https://www.retrogames.cc/embed/32454-metal-slug-x-super-vehicle-001-decoded.html",
    thumbnail: "https://www.retrogames.cc/images/screenshots/arcade/32454-metal-slug-x-super-vehicle-001-decoded-1.jpg",
    description: 'In a futuristic city, you are the last hope. A fast-paced combat game with a deep story and character customization.',
  },
  
]
