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
    title: 'Megaman 4 (USA)',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/16783-mega-man-4-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/55/2020/12/28/16697_fc8ca60e30cf5828143512404665bdcf64cd8e92.png',
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
    title: 'Megaman X (Europe)',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/16693-megaman-x-europe.html',
    thumbnail: 'https://i.987967.xyz/screenshot/44/u/18401_9183805ab8ee94a8cf180f5e4e91e1f224b13258.png',
    description: 'Relive Gokus early adventures.',
    featured: true,
  },
  {
    id: '22',
    title: 'Mega Man Zero',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/19499-megaman-zero-u-venom.html',
    thumbnail: 'https://i.987967.xyz/screenshot/43/q/19499_de0aa1cbd769743c296973d995959a4d5d9972d9.png',
    description: 'Intense action featuring Zero.',
    featured: false,
  },
  {
    id: '23',
    title: 'Kirby is Adventure (USA) (Rev A)',
    category: 'GBA',
    embedUrl: 'https://www.retrogames.cc/embed/20458-kirby-s-adventure-usa-rev-a.html',
    thumbnail: 'https://i.987967.xyz/screenshot/55/p/20531_522994506b4d1635036c9ab66eb0e6e9425ddd7a.png',
    description: 'Remake of the classic Kirby adventure.',
    featured: false,
  },

  // --- Arcade Cont ---
  {
    id: '24',
    title: 'Final Fight (900112 USA)',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/8497-final-fight-900112-usa.html',
    thumbnail: 'https://i.987967.xyz/previews/ffightua.png',
    description: 'Massive dream match roster.',
    featured: true,
  },
  {
    id: '25',
    title: 'Takahashi Meijin no Bouken Jima (Japan)',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/21355-takahashi-meijin-no-bouken-jima-japan.html',
    thumbnail: 'https://i.987967.xyz/screenshot/55/e/21355_fd05ba148b28635ee70310791191c96f19f4f996.png',
    description: 'Turn enemies into snowballs.',
    featured: false,
  },
  {
    id: '26',
    title: 'Dragon Unit / Castle of Dragon',
    category: 'Arcade',
    embedUrl: 'https://www.retrogames.cc/embed/8354-dragon-unit-castle-of-dragon.html',
    thumbnail: 'https://i.987967.xyz/previews/drgnunit.png',
    description: 'The classic beat-em-up.',
    featured: false,
  },

  // --- SNES Cont ---
  {
    id: '27',
    title: 'Metal Slug 3',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/9159-metal-slug-3-ngh-2560.html',
    thumbnail: 'https://i.987967.xyz/previews/mslug3h.png',
    description: 'Incredible 16-bit graphics.',
    featured: true,
  },
  {
    id: '28',
    title: 'Metal Slug 4',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/9161-metal-slug-4-ngh-2630.html',
    thumbnail: 'https://i.987967.xyz/previews/mslug4h.png',
    description: 'Time-traveling RPG masterpiece.',
    featured: true,
  },
  {
    id: '29',
    title: 'Metal Slug 5 ',
    category: 'SNES',
    embedUrl: 'https://www.retrogames.cc/embed/9166-metal-slug-5-ngh-2680.html',
    thumbnail: 'https://i.987967.xyz/previews/mslug5h.png',
    description: 'The brutal fighting classic.',
    featured: false,
  },

  // --- NES Cont ---
  {
    id: '30',
    title: 'Metal Warriors',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/24394-metal-warriors-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/79/r/24394_03e3c2f45322f1f0fdde5d9753bcea1a6ebfa17c.png',
    description: 'Introduce Rush the dog.',
    featured: false,
  },
  {
    id: '31',
    title: 'Castlevania III - Dracula s Curse',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/20451-castlevania-iii-dracula-s-curse-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/55/j/20451_5666b39217391996ef126a9db15c8bc8508b54f6.png',
    description: 'Hunt Dracula in this classic.',
    featured: false,
  },
  {
    id: '32',
    title: 'Super Castlevania IV',
    category: 'NES',
    embedUrl: 'https://www.retrogames.cc/embed/23973-super-castlevania-iv-usa.html',
    thumbnail: 'https://i.987967.xyz/screenshot/79/y/23973_e4165b6392e811d0babed69d446dacb73c5b62b7.png',
    description: 'Fast-paced ninja action.',
    featured: false,
  },

  // --- Genesis Cont ---
  {
    id: '33',
    title: 'Castlevania - Harmony of Dissonance',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/29237-castlevania-harmony-of-dissonance-u-independent.html',
    thumbnail: 'https://i.987967.xyz/screenshot/43/q/29237_a86c3f6c0d6b490ea13f703f7281edfc9652abf3.png',
    description: 'High fantasy hack-and-slash.',
    featured: false,
  },
  {
    id: '34',
    title: 'Castlevania - Symphony Of The Night',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/41504-castlevania-symphony-of-the-night.html',
    thumbnail: 'https://i.987967.xyz/screenshot/72/2023/07/13/41504_bc53cd8aa0c83c8e379c8cf1e53d72a8dcd58550.png',
    description: 'Fight inside a comic book.',
    featured: true,
  },
  {
    id: '35',
    title: 'Final Fantasy Tactics Advance',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/17590-final-fantasy-tactics-advance-e-surplus.html',
    thumbnail: 'https://i.987967.xyz/screenshot/43/e/17590_a54e4ed06f49b4ff7d0c28d5e566fdf60f853426.png',
    description: 'Wacky humor and creative levels.',
    featured: false,
  },
  {
    id: '36',
    title: 'Ghosts n Goblins (US)',
    category: 'Genesis',
    embedUrl: 'https://www.retrogames.cc/embed/8657-ghostsn-goblins-us.html',
    thumbnail: 'https://i.987967.xyz/previews/gngt.png',
    description: 'The pinnacle of street fighters.',
    featured: true,
  }
  
]
