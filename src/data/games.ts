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
    title: 'Marvel vs Capcom - clash of super heroes (980123 USA)',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/9123-marvel-vs-capcom-clash-of-super-heroes-980123-usa.html',
    thumbnail: 'https://i.987967.xyz/previews/mvscu.png',
    description: 'Protect your base and destroy enemy tanks.',
    featured: false,
  },
  {
    id: '4',
    title: 'Sonic The Hedgehog (USA, Europe)',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/30899-sonic-the-hedgehog-usa-europe.html',
    thumbnail: 'https://i.987967.xyz/screenshot/77/d/30899_acc786ae8f4fe4ef9ff4a74d5c3a77fabaa240ca.png',
    description: 'Classic puzzle action with falling vitamins.',
    featured: false,
  },

  // --- GBA ---
  {
    id: '5',
    title: 'Sonic 2 Heroes',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/42282-sonic-2-heroes.html',
    thumbnail: 'https://i.987967.xyz/screenshot/47/2021/11/27/42282_15c8060c46bba364cc04720a89aab1b247e01bac.png',
    description: 'Explore Hoenn and catch Rayquaza.',
    featured: true,
  },
  {
    id: '6',
    title: 'The King of Fighters 2002 Super (bootleg) [Bootleg]',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/10391-the-king-of-fighters-2002-super-bootleg-bootleg.html',
    thumbnail: 'https://i.987967.xyz/previews/kf2k2plc.png',
    description: 'Link shrinks down to save the Picori.',
    featured: true,
  },
  {
    id: '7',
    title: 'Dragon Ball Z: Buus Fury',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/40062-dragon-ball-z-buu-s-fury-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/43/p/19537_65a82901654bd8bc9026fc19222257b9b08d2a78.png',
    description: 'Action RPG following the final Z saga.',
    featured: false,
  },

  // --- Arcade ---
  {
    id: '8',
    title: ' JoJo is Bizarre Adventure: Heritage for the Future / JoJo no Kimyou na Bouken: Mirai e no Isan (Japan 990927, NO CD)',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/8843-jojos-bizarre-adventure%3A-heritage-for-the-future-jojo-no-kimyou-na-bouken%3A-mirai-e-no-isan-japan-990927-no-cd.html',
    thumbnail: 'https://i.987967.xyz/screenshot/19/2020/12/28/8843_660ca881b33a86ab9b3c21b5de5fbdcabaeca0cc.png',
    description: 'Peak 2D pixel art action shooting.',
    featured: true,
  },
  {
    id: '9',
    title: 'Metal Slug',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/46918-metal-slug.html',
    thumbnail: 'https://i.987967.xyz/screenshot/47/2026/03/17/46918_0bdfc30dfb80721808f625a3c28ea315a7c025a9.png',
    description: 'The king of fighting games.',
    featured: false,
  },
  {
    id: '10',
    title: 'Sonic Generations 2',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/42251-sonic-generations-2.html',
    thumbnail: 'https://i.987967.xyz/screenshot/47/2021/03/01/42251_3eef350d7662446f9cd290f14802e15f0351844b.png',
    description: 'Classic beat-em-up with dinosaurs.',
    featured: true,
  },

  // --- SNES ---
  {
    id: '11',
    title: 'A.B. Cop (Japan, FD1094 317-0169b decrypted) [Bootleg]',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/33056-a-b-cop-japan-fd1094-317-0169b-decrypted.html',
    thumbnail: 'https://i.987967.xyz/screenshot/19/a/abcopjd.png',
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
    title: 'Aero the Acro-Bat 2 (USA)',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/16728-aero-the-acro-bat-2-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/47/q/28591_f3f16915ee2285c3a5cc4ff33ce57be07910d1d8.png',
    description: 'The best 3D fighter on PlayStation.',
    featured: true,
  },
  {
    id: '14',
    title: '64th. Street - A Detective Story (World)',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/33055-64th-street-a-detective-story-world.html',
    thumbnail: 'https://i.987967.xyz/screenshot/19/6/64street.png',
    description: 'Transform into beasts and fight.',
    featured: false,
  },
  {
    id: '15',
    title: 'A.B. Cop (Japan, FD1094 317-0169b)',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/7687-a-b-cop-japan-fd1094-317-0169b.html',
    thumbnail: 'https://i.987967.xyz/previews/abcopj.png',
    description: 'Run, dodge, and deliver Pepsi!',
    featured: false,
  },

  // --- Genesis ---
  {
    id: '16',
    title: '007 - Tomorrow Never Dies',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/40787-007-tomorrow-never-dies.html',
    thumbnail: 'https://i.987967.xyz/screenshot/72/40787.jpg',
    description: 'Introduce Tails and the spin dash.',
    featured: true,
  },

  // --- PS1 Cont ---
  {
    id: '17',
    title: 'Ace Combat',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41524-ace-combat.html',
    thumbnail: 'https://i.987967.xyz/screenshot/72/2019/01/09/41524_7652872a5c104476f282a7c88a947b12f7d1ae10.png',
    description: 'Spin and jump through Wumpa Island.',
    featured: true,
  },
  {
    id: '18',
    title: 'Auto Destruct',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41589-auto-destruct.html',
    thumbnail: 'https://i.987967.xyz/screenshot/72/2019/05/27/SLES-00909.jpg',
    description: 'Fight through New York as Jackie Chan.',
    featured: false,
  },
  {
    id: '19',
    title: 'Battle Arena Toshinden 4',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/41605-battle-arena-toshinden-4.html',
    thumbnail: 'https://i.987967.xyz/screenshot/72/2019/06/03/41605_605c0d442353b09712f7d61b9e34b834185b9b0c.jpg',
    description: 'Classic card dueling action.',
    featured: true,
  },
  {
    id: '20',
    title: 'Resident Evil 3: Nemesis',
    category: 'PS1',
    embedUrl: 'https://www.retrogames.cc/embed/42155-resident-evil-3-nemesis-u.html',
    thumbnail: 'https://i.987967.xyz/screenshot/72/2020/06/18/41501_e9a4d1293c5514a11ddb4daf727b191ce6732a30.png',
    description: 'Escape while being hunted by Nemesis.',
    featured: false,
  },

  // --- GBA Cont ---
  {
    id: '21',
    title: 'Action Man - Robot Atak (E)(Rising Sun)',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/27829-action-man-robot-atak-e-rising-sun.html',
    thumbnail: 'https://www.retrogames.cc/video/gameboyadvance/action-man---robot-atak.mp4',
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
