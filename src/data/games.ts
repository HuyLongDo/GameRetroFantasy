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

  // --- NES ---
  {
    id: '1',
    title: 'Super Mario Bros',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16847-super-mario-bros-japan-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/054/05422d830e4c64879a1482701303cc91.jpg',
    description: 'The definitive platformer. Rescue Princess Peach from Bowser.',
    featured: true,
  },
  {
    id: '2',
    title: 'Contra',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16631-contra-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/390/390f7724a4962205566f122588c27931.jpg',
    description: 'Legendary run-and-gun action. Spread gun included!',
    featured: true,
  },
  {
    id: '3',
    title: 'Battle City (Tank 1990)',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16468-battle-city-japan.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/625/625686007f353a2333f269411d5f2f51.jpg',
    description: 'Protect your base and destroy enemy tanks.',
    featured: false,
  },
  {
    id: '4',
    title: 'Dr. Mario',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16701-dr-mario-japan-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/00f/00f91a6d45904f44208a0901e354972e.jpg',
    description: 'Classic puzzle action with falling vitamins.',
    featured: false,
  },

  // --- GBA ---
  {
    id: '5',
    title: 'Pokemon Emerald',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40238-pokemon-emerald-version-usa-europe.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/600/6007038933e8c1f06240217be5471d2b.jpg',
    description: 'Explore Hoenn and catch Rayquaza.',
    featured: true,
  },
  {
    id: '6',
    title: 'The Legend of Zelda: The Minish Cap',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40324-the-legend-of-zelda-the-minish-cap-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/674/674149957f86f37ae0460338006e2f1e.jpg',
    description: 'Link shrinks down to save the Picori.',
    featured: true,
  },
  {
    id: '7',
    title: 'Dragon Ball Z: Buus Fury',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40062-dragon-ball-z-buu-s-fury-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/429/4294b4e3f412499a039b56f2e82f4d67.jpg',
    description: 'Action RPG following the final Z saga.',
    featured: false,
  },

  // --- Arcade ---
  {
    id: '8',
    title: 'Metal Slug X',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/32454-metal-slug-x-super-vehicle-001-decoded.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/099/0994119d80d285a85fa0df21d583005a.jpg',
    description: 'Peak 2D pixel art action shooting.',
    featured: true,
  },
  {
    id: '9',
    title: 'Street Fighter II: World Warrior',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/10143-street-fighter-ii-the-world-warrior-world-910522.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/697/697207db188435f3dfd2d141e6e4f3a9.jpg',
    description: 'The king of fighting games.',
    featured: false,
  },
  {
    id: '10',
    title: 'Cadillacs and Dinosaurs',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/9166-cadillacs-and-dinosaurs-world-930201.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/481/481541f5316315668b31a3962649a3c9.jpg',
    description: 'Classic beat-em-up with dinosaurs.',
    featured: true,
  },

  // --- SNES ---
  {
    id: '11',
    title: 'Super Mario World',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/18635-super-mario-world-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/0a5/0a5fa70678c43054366e4a2b91873832.jpg',
    description: 'Marios first 16-bit adventure.',
    featured: true,
  },
  {
    id: '12',
    title: 'Mega Man X',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/18167-mega-man-x-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/710/7107297e685fba394857774134be1c25.jpg',
    description: 'Faster, slicker, and more action-packed Mega Man.',
    featured: false,
  },

  // --- PS1 ---
  {
    id: '13',
    title: 'Tekken 3',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/40172-tekken-3.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/83f/83f6f9c89366f0761e0642f741349583.jpg',
    description: 'The best 3D fighter on PlayStation.',
    featured: true,
  },
  {
    id: '14',
    title: 'Bloody Roar II',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/40049-bloody-roar-2.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/36c/36c05d8f6f5950a41f6e1f0e248b64e5.jpg',
    description: 'Transform into beasts and fight.',
    featured: false,
  },
  {
    id: '15',
    title: 'Pepsiman',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41951-pepsiman-japan.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/316/3165b4c48971f6534950e303426e8557.jpg',
    description: 'Run, dodge, and deliver Pepsi!',
    featured: false,
  },

  // --- Genesis ---
  {
    id: '16',
    title: 'Sonic the Hedgehog 2',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/29676-sonic-the-hedgehog-2-world.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/224/22462abc9039600994d5b214041f0f04.jpg',
    description: 'Introduce Tails and the spin dash.',
    featured: true,
  },

  // --- PS1 Cont ---
  {
    id: '17',
    title: 'Crash Bandicoot',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41793-crash-bandicoot.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/993/993959954449b4c09d73c713219036f4.jpg',
    description: 'Spin and jump through Wumpa Island.',
    featured: true,
  },
  {
    id: '18',
    title: 'Jackie Chan Stuntmaster',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41855-jackie-chan-stuntmaster.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/081/081394f475a805096b1836104473379c.jpg',
    description: 'Fight through New York as Jackie Chan.',
    featured: false,
  },
  {
    id: '19',
    title: 'Yu-Gi-Oh! Forbidden Memories',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/40193-yu-gi-oh-forbidden-memories.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/62c/62c0b2f5670868f02008316c14102905.jpg',
    description: 'Classic card dueling action.',
    featured: true,
  },
  {
    id: '20',
    title: 'Resident Evil 3: Nemesis',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41983-resident-evil-3-nemesis.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/091/0914856f874983058f4a74288ec7b08b.jpg',
    description: 'Escape while being hunted by Nemesis.',
    featured: false,
  },

  // --- GBA Cont ---
  {
    id: '21',
    title: 'Dragon Ball Advanced Adventure',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40060-dragon-ball-advanced-adventure-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/88c/88c60f27f05814521404090b3956795f.jpg',
    description: 'Relive Gokus early adventures.',
    featured: true,
  },
  {
    id: '22',
    title: 'Mega Man Zero',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40347-mega-man-zero-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/694/69403a088863f663c6c0ca8e09f5e381.jpg',
    description: 'Intense action featuring Zero.',
    featured: false,
  },
  {
    id: '23',
    title: 'Kirby: Nightmare in Dream Land',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40307-kirby-nightmare-in-dream-land-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/390/390632598858e72783f234f9a0d8b44c.jpg',
    description: 'Remake of the classic Kirby adventure.',
    featured: false,
  },

  // --- Arcade Cont ---
  {
    id: '24',
    title: 'The King of Fighters 98',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/32426-the-king-of-fighters-98-the-slugfest-king-of-pro-wrestling-98.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/303/303107297929cf0592e356c9a752243d.jpg',
    description: 'Massive dream match roster.',
    featured: true,
  },
  {
    id: '25',
    title: 'Snow Bros. - Nick & Tom',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/8920-snow-bros-nick-tom-set-1.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/f60/f60232491f04f2f4b669e4f07a755d49.jpg',
    description: 'Turn enemies into snowballs.',
    featured: false,
  },
  {
    id: '26',
    title: 'Double Dragon',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/8410-double-dragon-set-1.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/609/6099951590e8080f5556cd0520268ecf.jpg',
    description: 'The classic beat-em-up.',
    featured: false,
  },

  // --- SNES Cont ---
  {
    id: '27',
    title: 'Donkey Kong Country',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/17638-donkey-kong-country-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/49a/49a5628468705035252b4ef425f1627c.jpg',
    description: 'Incredible 16-bit graphics.',
    featured: true,
  },
  {
    id: '28',
    title: 'Chrono Trigger',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/17508-chrono-trigger-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/60b/60b86a11706692881a7424072f623630.jpg',
    description: 'Time-traveling RPG masterpiece.',
    featured: true,
  },
  {
    id: '29',
    title: 'Mortal Kombat II',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/18214-mortal-kombat-ii-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/09a/09a250325d0458b292e212f360341764.jpg',
    description: 'The brutal fighting classic.',
    featured: false,
  },

  // --- NES Cont ---
  {
    id: '30',
    title: 'Mega Man 3',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/17101-mega-man-3-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/screenshots/46e/46ed06443657753066927d6270d740c2.jpg',
    description: 'Introduce Rush the dog.',
    featured: false,
  },
  {
    id: '31',
    title: 'Castlevania',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16575-castlevania-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/297/297a510040786562c5a8d601d3e2dbec.jpg',
    description: 'Hunt Dracula in this classic.',
    featured: false,
  },
  {
    id: '32',
    title: 'Ninja Gaiden',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/17161-ninja-gaiden-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/72a/72a98e8f81f9b31950e4130f14ba6985.jpg',
    description: 'Fast-paced ninja action.',
    featured: false,
  },

  // --- Genesis Cont ---
  {
    id: '33',
    title: 'Golden Axe',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/28609-golden-axe-usa-europe.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/81b/81b975e5f396e9875f73c683707267f5.jpg',
    description: 'High fantasy hack-and-slash.',
    featured: false,
  },
  {
    id: '34',
    title: 'Comix Zone',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/28308-comix-zone-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/960/960b2e8d9c49089ef0983196ed8f9e61.jpg',
    description: 'Fight inside a comic book.',
    featured: true,
  },
  {
    id: '35',
    title: 'Earthworm Jim',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/28434-earthworm-jim-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/05b/05b382103f569a7c361958611124d852.jpg',
    description: 'Wacky humor and creative levels.',
    featured: false,
  },
  {
    id: '36',
    title: 'Streets of Rage 2',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/29729-streets-of-rage-2-usa.html',
    thumbnail: 'https://images.weserv.nl/?url=https://media.rawg.io/media/games/46c/46c3187c3e80f08940845a761ec83f3e.jpg',
    description: 'The pinnacle of street fighters.',
    featured: true,
  }
  
]
