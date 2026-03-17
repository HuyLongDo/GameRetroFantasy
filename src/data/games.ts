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
  'NES',
  'SNES',
  'GBA',
  'Genesis',
  'PS1',
  'Arcade',
]

export const games: Game[] = [

// // --- NES ---
  {
    id: '1',
    title: 'Super Mario Bros',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16847-super-mario-bros-japan-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/60/2023/02/14/43732_5b8d8cd28a8cfd5d0f922202ee6baa7690aa666d.png',
    description: 'The definitive platformer. Rescue Princess Peach from Bowser.',
    featured: true,
  },
  {
    id: '2',
    title: 'Contra',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16684-super-contra-japan.html',
    thumbnail: 'https://i.987967.xyz/screenshot/55/s/16684_d456d0a6f8c6ce4f51624d7e1bab68c75041a9c6.png',
    description: 'Legendary run-and-gun action. Spread gun included!',
    featured: true,
  },
  {
    id: '3',
    title: 'Battle City (Tank 1990)',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/32354-tank-force-us-4-players.html',
    thumbnail: 'https://i.987967.xyz/screenshot/19/g/32354_75feccf6ed1fb71e7806a336d8b4d55bacff1d15.png',
    description: 'Protect your base and destroy enemy tanks.',
    featured: false,
  },
  {
    id: '4',
    title: 'Dr. Mario',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16701-dr-mario-japan-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/79/2021/02/25/42309_efa1a669c86a8953bf2204bf7e74a30b867951db.png',
    description: 'Classic puzzle action with falling vitamins.',
    featured: false,
  },

  // --- GBA ---
  {
    id: '5',
    title: 'Pokemon Emerald',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40238-pokemon-emerald-version-usa-europe.html',
    thumbnail: 'https://i.987967.xyz/screenshot/2b/2020/11/27/65411_6007038933e8c1f06240217be5471d2b.png',
    description: 'Explore Hoenn and catch Rayquaza.',
    featured: true,
  },
  {
    id: '6',
    title: 'The Legend of Zelda: The Minish Cap',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40324-the-legend-of-zelda-the-minish-cap-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/1e/2020/11/27/65497_674149957f86f37ae0460338006e2f1e.png',
    description: 'Link shrinks down to save the Picori.',
    featured: true,
  },
  {
    id: '7',
    title: 'Dragon Ball Z: Buus Fury',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40062-dragon-ball-z-buu-s-fury-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/67/2020/11/27/65235_4294b4e3f412499a039b56f2e82f4d67.png',
    description: 'Action RPG following the final Z saga.',
    featured: false,
  },

  // --- Arcade ---
  {
    id: '8',
    title: 'Metal Slug X',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/32454-metal-slug-x-super-vehicle-001-decoded.html',
    thumbnail: 'https://i.987967.xyz/screenshot/5a/2020/11/27/57706_0994119d80d285a85fa0df21d583005a.png',
    description: 'Peak 2D pixel art action shooting.',
    featured: true,
  },
  {
    id: '9',
    title: 'Street Fighter II: World Warrior',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/10143-street-fighter-ii-the-world-warrior-world-910522.html',
    thumbnail: 'https://i.987967.xyz/screenshot/a9/2020/11/27/35369_697207db188435f3dfd2d141e6e4f3a9.png',
    description: 'The king of fighting games.',
    featured: false,
  },
  {
    id: '10',
    title: 'Cadillacs and Dinosaurs',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/9166-cadillacs-and-dinosaurs-world-930201.html',
    thumbnail: 'https://i.987967.xyz/screenshot/c9/2020/11/27/34385_481541f5316315668b31a3962649a3c9.png',
    description: 'Classic beat-em-up with dinosaurs.',
    featured: true,
  },

  // --- SNES ---
  {
    id: '11',
    title: 'Super Mario World',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/18635-super-mario-world-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/32/2020/11/27/43634_0a5fa70678c43054366e4a2b91873832.png',
    description: 'Marios first 16-bit adventure.',
    featured: true,
  },
  {
    id: '12',
    title: 'Mega Man X',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/18167-mega-man-x-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/25/2020/11/27/43166_7107297e685fba394857774134be1c25.png',
    description: 'Faster, slicker, and more action-packed Mega Man.',
    featured: false,
  },

  // --- PS1 ---
  {
    id: '13',
    title: 'Tekken 3',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/40172-tekken-3.html',
    thumbnail: 'https://i.987967.xyz/screenshot/83/2020/11/27/65315_83f6f9c89366f0761e0642f741349583.png',
    description: 'The best 3D fighter on PlayStation.',
    featured: true,
  },
  {
    id: '14',
    title: 'Bloody Roar II',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/40049-bloody-roar-2.html',
    thumbnail: 'https://i.987967.xyz/screenshot/e5/2020/11/27/65191_36c05d8f6f5950a41f6e1f0e248b64e5.png',
    description: 'Transform into beasts and fight.',
    featured: false,
  },
  {
    id: '15',
    title: 'Pepsiman',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41951-pepsiman-japan.html',
    thumbnail: 'https://i.987967.xyz/screenshot/57/2020/11/27/67093_3165b4c48971f6534950e303426e8557.png',
    description: 'Run, dodge, and deliver Pepsi!',
    featured: false,
  },

  // --- Genesis ---
  {
    id: '16',
    title: 'Sonic the Hedgehog 2',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/29676-sonic-the-hedgehog-2-world.html',
    thumbnail: 'https://i.987967.xyz/screenshot/04/2020/11/27/54756_22462abc9039600994d5b214041f0f04.png',
    description: 'Introduce Tails and the spin dash.',
    featured: true,
  },

  // --- PS1 Cont ---
  {
    id: '17',
    title: 'Crash Bandicoot',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41793-crash-bandicoot.html',
    thumbnail: 'https://i.987967.xyz/screenshot/f4/2020/11/27/66931_993959954449b4c09d73c713219036f4.png',
    description: 'Spin and jump through Wumpa Island.',
    featured: true,
  },
  {
    id: '18',
    title: 'Jackie Chan Stuntmaster',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41855-jackie-chan-stuntmaster.html',
    thumbnail: 'https://i.987967.xyz/screenshot/9c/2020/11/27/66991_081394f475a805096b1836104473379c.png',
    description: 'Fight through New York as Jackie Chan.',
    featured: false,
  },
  {
    id: '19',
    title: 'Yu-Gi-Oh! Forbidden Memories',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/40193-yu-gi-oh-forbidden-memories.html',
    thumbnail: 'https://i.987967.xyz/screenshot/05/2020/11/27/65336_62c0b2f5670868f02008316c14102905.png',
    description: 'Classic card dueling action.',
    featured: true,
  },
  {
    id: '20',
    title: 'Resident Evil 3: Nemesis',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41983-resident-evil-3-nemesis.html',
    thumbnail: 'https://i.987967.xyz/screenshot/8b/2020/11/27/67123_0914856f874983058f4a74288ec7b08b.png',
    description: 'Escape while being hunted by Nemesis.',
    featured: false,
  },

  // --- GBA Cont ---
  {
    id: '21',
    title: 'Dragon Ball Advanced Adventure',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40060-dragon-ball-advanced-adventure-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/5f/2020/11/27/65233_88c60f27f05814521404090b3956795f.png',
    description: 'Relive Gokus early adventures.',
    featured: true,
  },
  {
    id: '22',
    title: 'Mega Man Zero',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40347-mega-man-zero-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/81/2020/11/27/65520_69403a088863f663c6c0ca8e09f5e381.png',
    description: 'Intense action featuring Zero.',
    featured: false,
  },
  {
    id: '23',
    title: 'Kirby: Nightmare in Dream Land',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40307-kirby-nightmare-in-dream-land-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/4c/2020/11/27/65480_390632598858e72783f234f9a0d8b44c.png',
    description: 'Remake of the classic Kirby adventure.',
    featured: false,
  },

  // --- Arcade Cont ---
  {
    id: '24',
    title: 'The King of Fighters 98',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/32426-the-king-of-fighters-98-the-slugfest-king-of-pro-wrestling-98.html',
    thumbnail: 'https://i.987967.xyz/screenshot/3d/2020/11/27/57675_303107297929cf0592e356c9a752243d.png',
    description: 'Massive dream match roster.',
    featured: true,
  },
  {
    id: '25',
    title: 'Snow Bros. - Nick & Tom',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/8920-snow-bros-nick-tom-set-1.html',
    thumbnail: 'https://i.987967.xyz/screenshot/49/2020/11/27/34173_f60232491f04f2f4b669e4f07a755d49.png',
    description: 'Turn enemies into snowballs.',
    featured: false,
  },
  {
    id: '26',
    title: 'Double Dragon',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/8410-double-dragon-set-1.html',
    thumbnail: 'https://i.987967.xyz/screenshot/cf/2020/11/27/33662_6099951590e8080f5556cd0520268ecf.png',
    description: 'The classic beat-em-up.',
    featured: false,
  },

  // --- SNES Cont ---
  {
    id: '27',
    title: 'Donkey Kong Country',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/17638-donkey-kong-country-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/7c/2020/11/27/42634_49a5628468705035252b4ef425f1627c.png',
    description: 'Incredible 16-bit graphics.',
    featured: true,
  },
  {
    id: '28',
    title: 'Chrono Trigger',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/17508-chrono-trigger-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/30/2020/11/27/42508_60b86a11706692881a7424072f623630.png',
    description: 'Time-traveling RPG masterpiece.',
    featured: true,
  },
  {
    id: '29',
    title: 'Mortal Kombat II',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/18214-mortal-kombat-ii-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/64/2020/11/27/43214_09a250325d0458b292e212f360341764.png',
    description: 'The brutal fighting classic.',
    featured: false,
  },

  // --- NES Cont ---
  {
    id: '30',
    title: 'Mega Man 3',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/17101-mega-man-3-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/c2/2020/11/27/42177_46ed06443657753066927d6270d740c2.png',
    description: 'Introduce Rush the dog.',
    featured: false,
  },
  {
    id: '31',
    title: 'Castlevania',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/16575-castlevania-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/ec/2020/11/27/41668_297a510040786562c5a8d601d3e2dbec.png',
    description: 'Hunt Dracula in this classic.',
    featured: false,
  },
  {
    id: '32',
    title: 'Ninja Gaiden',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/17161-ninja-gaiden-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/85/2020/11/27/42232_72a98e8f81f9b31950e4130f14ba6985.png',
    description: 'Fast-paced ninja action.',
    featured: false,
  },

  // --- Genesis Cont ---
  {
    id: '33',
    title: 'Golden Axe',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/28609-golden-axe-usa-europe.html',
    thumbnail: 'https://i.987967.xyz/screenshot/f5/2020/11/27/53733_81b975e5f396e9875f73c683707267f5.png',
    description: 'High fantasy hack-and-slash.',
    featured: false,
  },
  {
    id: '34',
    title: 'Comix Zone',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/28308-comix-zone-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/61/2020/11/27/53434_960b2e8d9c49089ef0983196ed8f9e61.png',
    description: 'Fight inside a comic book.',
    featured: true,
  },
  {
    id: '35',
    title: 'Earthworm Jim',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/28434-earthworm-jim-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/52/2020/11/27/53561_05b382103f569a7c361958611124d852.png',
    description: 'Wacky humor and creative levels.',
    featured: false,
  },
  {
    id: '36',
    title: 'Streets of Rage 2',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/29729-streets-of-rage-2-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/3e/2020/11/27/54832_46c3187c3e80f08940845a761ec83f3e.png',
    description: 'The pinnacle of street fighters.',
    featured: true,
  }
  
]
