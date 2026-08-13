export type Project = {
  id: string
  title: string
  description: string
  cover: string
  coverCrop?: string
  images: string[]
  imageAspectRatios: string[]
  desktopCover?: string
}

export type RobloxGallerySlot = 'square' | 'feature' | 'portrait' | 'landscape'

type RobloxProjectSource = {
  id: string
  title: string
  cover: string
  video?: string
  thumbnail?: string
  thumbnailPosition?: string
  mobileThumbnailPosition?: string
  mobileThumbnailAspectRatio?: string
  desktopSlot?: RobloxGallerySlot
}

export type RobloxProject = RobloxProjectSource

export const artist = {
  name: 'Ali Taha Yapışkan',
  role: '3D Character Artist',
  location: 'Eskişehir, Turkey',
  email: 'qaliqtaha@gmail.com',
  artstation: 'https://www.artstation.com/artofaty',
  instagram: 'https://instagram.com/artofaty',
  linkedin: 'https://www.linkedin.com/in/artofaty',
  youtube: 'https://www.youtube.com/@artofaty'
}

export const projects: Project[] = [
  {
    id: 'anastasia',
    title: 'Anastasia',
    description: 'Personal practice work focused on hand-painted PBR, stylized anatomy, realtime presentation, and fantasy character detail.',
    cover: 'https://cdna.artstation.com/p/assets/covers/images/096/089/076/large/ali-taha-yapiskan-ali-taha-yapiskan-thumb3.webp?1770314065',
    desktopCover: 'https://cdna.artstation.com/p/assets/images/images/095/850/850/large/ali-taha-yapiskan-render1.webp?1770313842',
    coverCrop: '55% 32%',
    images: [
      'https://cdna.artstation.com/p/assets/images/images/095/850/850/large/ali-taha-yapiskan-render1.webp?1770313842',
      'https://cdnb.artstation.com/p/assets/images/images/095/850/865/large/ali-taha-yapiskan-render2.webp?1769686072',
      'https://cdna.artstation.com/p/assets/images/images/095/850/866/large/ali-taha-yapiskan-render3.webp?1769686078',
      'https://cdnb.artstation.com/p/assets/images/images/095/850/867/large/ali-taha-yapiskan-render4.webp?1769686085',
      'https://cdna.artstation.com/p/assets/images/images/095/850/870/large/ali-taha-yapiskan-render5.webp',
      'https://cdn.artstation.com/p/video_sources/003/074/080/turntable.mp4'
    ],
    imageAspectRatios: ['1 / 1', '1 / 1', '1 / 1', '1 / 1', '1 / 1', '1 / 1'],
  },
  {
    id: 'miss-fortune',
    title: 'Miss Fortune',
    description: 'A hand-painted texturing study made without generators, exploring readable forms, stylized material separation, and game-ready presentation.',
    cover: 'https://cdna.artstation.com/p/assets/images/images/088/540/482/large/ali-taha-yapiskan-missfortune.jpg?1748537997',
    coverCrop: '50% 35%',
    images: [
      'https://cdna.artstation.com/p/assets/images/images/088/540/482/large/ali-taha-yapiskan-missfortune.jpg?1748537997'
    ],
    imageAspectRatios: ['1 / 1'],
  },
  {
    id: 'mermaid',
    title: 'Mermaid',
    description: 'A practice character built around hand-painted texture decisions, silhouette clarity, and stylized fantasy presentation.',
    cover: 'https://cdnb.artstation.com/p/assets/images/images/088/540/785/large/ali-taha-yapiskan-mermaid-full.jpg?1766042317',
    coverCrop: 'center top',
    images: [
      'https://cdnb.artstation.com/p/assets/images/images/088/540/785/large/ali-taha-yapiskan-mermaid-full.jpg?1766042317'
    ],
    imageAspectRatios: ['1920 / 2824'],
  },
  {
    id: 'orc',
    title: 'Orc',
    description: 'A character bust created to practice new workflows, creature anatomy, sculpting discipline, grooming, and realistic rendering.',
    cover: 'https://cdna.artstation.com/p/assets/images/images/088/472/900/large/ali-taha-yapiskan-orc.jpg?1770710654',
    coverCrop: '48% 42%',
    images: [
      'https://cdna.artstation.com/p/assets/images/images/088/472/900/large/ali-taha-yapiskan-orc.jpg?1770710654'
    ],
    imageAspectRatios: ['1 / 1'],
  }
]

const defineRobloxProject = (project: RobloxProjectSource): RobloxProject => project

export const robloxProjects: RobloxProject[] = [
  defineRobloxProject({ id: 'mANbmy', title: 'Wendigo', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/058/883/large/naksi-naksi-videoframe-8835.webp?1777493577', video: '/videos/roblox/mANbmy-wendigo.mp4', desktopSlot: 'feature' }),
  defineRobloxProject({ id: 'K3ALqG', title: 'Krampus Shrek', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/059/805/large/naksi-naksi-videoframe-0.webp?1777485089', video: '/videos/roblox/K3ALqG-krampus-shrek.mp4' }),
  defineRobloxProject({ id: 'EzraOq', title: 'Leshen', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/949/237/large/naksi-naksi-videoframe-872.webp?1778528120', video: '/videos/roblox/EzraOq-leshen.mp4', mobileThumbnailAspectRatio: '3 / 4', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: 'dydVeQ', title: 'Wise Mystical Tree', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/056/669/large/naksi-naksi-videoframe-443.webp?1777485120', video: '/videos/roblox/dydVeQ-wise-mystical-tree.mp4' }),
  defineRobloxProject({ id: '3EKJbv', title: 'Mind Flayer', cover: 'https://cdna.artstation.com/p/assets/covers/images/098/295/332/large/naksi-naksi-videoframe-8333.webp?1777484903', video: '/videos/roblox/3EKJbv-mind-flayer.mp4', mobileThumbnailAspectRatio: '7 / 10' }),
  defineRobloxProject({ id: 'kNgea0', title: 'Crawler', cover: 'https://cdna.artstation.com/p/assets/covers/images/098/526/608/large/naksi-naksi-videoframe-9061.webp?1777485804', video: '/videos/roblox/kNgea0-crawler.mp4' }),
  defineRobloxProject({ id: '98qrkR', title: 'Ink Bendy', cover: 'https://cdna.artstation.com/p/assets/covers/images/098/063/336/large/naksi-naksi-videoframe-660.webp?1777485161', video: '/videos/roblox/98qrkR-ink-bendy.mp4', desktopSlot: 'feature' }),
  defineRobloxProject({ id: '0lbwPy', title: 'Terrifier', cover: 'https://cdnb.artstation.com/p/assets/video_clips/images/098/073/123/large/naksi-thumb.jpg?1777484969', video: '/videos/roblox/0lbwPy-terrifier.mp4', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: '4NDq5L', title: 'Scarecrow', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/081/269/large/naksi-naksi-videoframe-9582.webp?1778583259', video: '/videos/roblox/4NDq5L-scarecrow.mp4', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: 'L4Lm8k', title: 'The Rake', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/489/453/large/naksi-naksi-videoframe-635.webp?1778583434', video: '/videos/roblox/L4Lm8k-the-rake.mp4', thumbnailPosition: '50% 0%', mobileThumbnailAspectRatio: '3 / 4' }),
  defineRobloxProject({ id: '2BAJ8e', title: 'Ossis', cover: 'https://cdna.artstation.com/p/assets/covers/images/098/828/190/large/naksi-naksi-videoframe-865.webp?1778164688', video: '/videos/roblox/2BAJ8e-ossis.mp4', thumbnailPosition: '50% 0%', mobileThumbnailAspectRatio: '3 / 4' }),
  defineRobloxProject({ id: 'nJXOZ6', title: 'Bat', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/277/201/large/naksi-naksi-videoframe-9265.webp?1777494154', video: '/videos/roblox/nJXOZ6-bat.mp4', mobileThumbnailAspectRatio: '16 / 9', desktopSlot: 'landscape' }),
  defineRobloxProject({ id: 'a0mZ4k', title: 'Cacodemon', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/595/981/large/naksi-naksi-videoframe-802.webp?1777493929', video: '/videos/roblox/a0mZ4k-cacodemon.mp4', mobileThumbnailAspectRatio: '10 / 9', desktopSlot: 'landscape' }),
  defineRobloxProject({ id: 'x39QgO', title: 'Sukuna Heian', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/094/217/large/naksi-naksi-videoframe-764.webp?1777485286', video: '/videos/roblox/x39QgO-sukuna-heian.mp4' }),
  defineRobloxProject({ id: 'YGNzP3', title: 'Evil Santa', cover: 'https://cdna.artstation.com/p/assets/covers/images/098/573/308/20260429125517/smaller_square/naksi-naksi-videoframe-760.jpg?1777485317', video: '/videos/roblox/YGNzP3-evil-santa.mp4', thumbnail: '/images/roblox/YGNzP3-evil-santa.jpg', thumbnailPosition: '50% 13%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: '5WAdeE', title: 'Worm', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/464/647/20260429152042/smaller_square/naksi-naksi-videoframe-949.jpg?1777494042', video: '/videos/roblox/5WAdeE-worm.mp4', thumbnail: '/images/roblox/5WAdeE-worm.jpg', thumbnailPosition: '50% 28%' }),
  defineRobloxProject({ id: '31dqQo', title: 'Captain Clark', cover: 'https://cdna.artstation.com/p/assets/covers/images/101/121/356/large/aty-aty-untitled-00015.jpg?1785169077', video: '/videos/roblox/31dqQo-captain-clark.mp4', thumbnail: '/images/roblox/31dqQo-captain-clark.jpg', thumbnailPosition: '50% 8%', mobileThumbnailAspectRatio: '3 / 4', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: 'wre5r6', title: 'Girl Char', cover: 'https://cdnb.artstation.com/p/assets/video_clips/images/098/586/743/20260429152649/smaller_square/naksi-thumb.jpg?1777494409', video: '/videos/roblox/wre5r6-girl-char.mp4', thumbnail: '/images/roblox/wre5r6-girl-char.jpg', thumbnailPosition: '50% 0%' }),
  defineRobloxProject({ id: '1NQkwK', title: 'Gatekeeper', cover: 'https://cdna.artstation.com/p/assets/video_clips/images/098/153/788/20260429152756/smaller_square/naksi-thumb.jpg?1777494476', video: '/videos/roblox/1NQkwK-gatekeeper.mp4', thumbnail: '/images/roblox/1NQkwK-gatekeeper.jpg', thumbnailPosition: '50% 0%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: 'ZlAEK8', title: 'SCP-3199', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/164/377/20260415161952/smaller_square/naksi-naksi-videoframe-1337.jpg?1776287992', video: '/videos/roblox/ZlAEK8-scp-3199.mp4', thumbnail: '/images/roblox/ZlAEK8-scp-3199.jpg', thumbnailPosition: '50% 10%' }),
  defineRobloxProject({ id: '8B90Bq', title: 'Clown3', cover: 'https://cdna.artstation.com/p/assets/covers/images/098/190/830/20260429125033/smaller_square/naksi-naksi-videoframe-9252.jpg?1777485033', video: '/videos/roblox/8B90Bq-clown3.mp4', thumbnail: '/images/roblox/8B90Bq-clown3.jpg', thumbnailPosition: '50% 0%' }),
  defineRobloxProject({ id: 'BkGDwl', title: 'Ghost Face', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/545/425/20260428073048/smaller_square/naksi-naksi-videoframe-9374.jpg?1777379449', video: '/videos/roblox/BkGDwl-ghost-face.mp4', thumbnail: '/images/roblox/BkGDwl-ghost-face.jpg', thumbnailPosition: '50% 24%' }),
  defineRobloxProject({ id: 'mAowAa', title: 'Scary', cover: 'https://cdna.artstation.com/p/assets/covers/images/098/239/926/20260429152848/smaller_square/naksi-naksi-videoframe-695.jpg?1777494528', video: '/videos/roblox/mAowAa-scary.mp4', thumbnail: '/images/roblox/mAowAa-scary.jpg', thumbnailPosition: '50% 22%' }),
  defineRobloxProject({ id: 'V2l0L5', title: 'Pinky', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/324/583/20260421030230/smaller_square/naksi-naksi-videoframe-8853.jpg?1776758550', video: '/videos/roblox/V2l0L5-pinky.mp4', thumbnail: '/images/roblox/V2l0L5-pinky.jpg', thumbnailPosition: '50% 28%' }),
  defineRobloxProject({ id: 'XJ8Eaw', title: 'Dark Princess', cover: 'https://cdnb.artstation.com/p/assets/video_clips/images/098/488/803/20260426115127/smaller_square/naksi-thumb.jpg?1777222287', video: '/videos/roblox/XJ8Eaw-dark-princess.mp4', thumbnail: '/images/roblox/XJ8Eaw-dark-princess.jpg', thumbnailPosition: '50% 0%' }),
  defineRobloxProject({ id: 'oJekyL', title: 'Grim Reaper', cover: 'https://cdna.artstation.com/p/assets/covers/images/098/545/368/20260428072904/smaller_square/naksi-naksi-videoframe-603.jpg?1777379345', video: '/videos/roblox/oJekyL-grim-reaper.mp4', thumbnail: '/images/roblox/oJekyL-grim-reaper.jpg', thumbnailPosition: '50% 10%' }),
  defineRobloxProject({ id: 'XJ80WD', title: 'Baby Ghost Face', cover: 'https://cdnb.artstation.com/p/assets/video_clips/images/098/591/393/20260429153012/smaller_square/naksi-thumb.jpg?1777494612', video: '/videos/roblox/XJ80WD-baby-ghost-face.mp4', thumbnail: '/images/roblox/XJ80WD-baby-ghost-face.jpg', thumbnailPosition: '50% 12%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: 'rl1dlG', title: 'Rydia', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/575/945/20260429041352/smaller_square/naksi-naksi-videoframe-9298.jpg?1777454032', video: '/videos/roblox/rl1dlG-rydia.mp4', thumbnail: '/images/roblox/rl1dlG-rydia.jpg', thumbnailPosition: '50% 22%' }),
  defineRobloxProject({ id: 'RKoQLy', title: 'Harvester', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/583/151/20260429082835/smaller_square/naksi-naksi-videoframe-584.jpg?1777469315', video: '/videos/roblox/RKoQLy-harvester.mp4', thumbnail: '/images/roblox/RKoQLy-harvester.jpg', thumbnailPosition: '50% 24%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: 'QKqYWL', title: 'Ringmaster', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/585/633/20260429093752/smaller_square/naksi-naksi-videoframe-797.jpg?1777473472', video: '/videos/roblox/QKqYWL-ringmaster.mp4', thumbnail: '/images/roblox/QKqYWL-ringmaster.jpg', thumbnailPosition: '50% 0%' }),
  defineRobloxProject({ id: 'DLe8m9', title: 'Creeper', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/056/267/20260427153524/smaller_square/naksi-naksi-videoframe-9252.jpg?1777322125', video: '/videos/roblox/DLe8m9-creeper.mp4', thumbnail: '/images/roblox/DLe8m9-creeper.jpg', thumbnailPosition: '50% 28%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: '2B0VNe', title: 'Pale Man Hand', cover: 'https://cdna.artstation.com/p/assets/video_clips/images/098/477/606/20260426021514/smaller_square/naksi-thumb.jpg?1777187714', video: '/videos/roblox/2B0VNe-pale-man-hand.mp4', thumbnail: '/images/roblox/2B0VNe-pale-man-hand.jpg', thumbnailPosition: '50% 48%' }),
  defineRobloxProject({ id: 'wra0l5', title: 'Gun', cover: 'https://cdnb.artstation.com/p/assets/covers/images/098/084/397/20260413095317/smaller_square/naksi-naksi-videoframe-2685.jpg?1776091997', video: '/videos/roblox/wra0l5-gun.mp4', thumbnail: '/images/roblox/wra0l5-gun.jpg', thumbnailPosition: '50% 50%' }),
  defineRobloxProject({ id: 'wrYlQ5', title: 'Pupkin', cover: 'https://cdnb.artstation.com/p/assets/video_clips/images/098/597/547/20260429161405/smaller_square/naksi-thumb.jpg?1777497245', video: '/videos/roblox/wrYlQ5-pupkin.mp4', thumbnail: '/images/roblox/wrYlQ5-pupkin.jpg', thumbnailPosition: '50% 5%' }),
  defineRobloxProject({ id: 'kNxX30', title: 'Yarn Character', cover: 'https://cdna.artstation.com/p/assets/covers/images/098/609/942/20260430034813/smaller_square/naksi-naksi-videoframe-851.jpg?1777538893', video: '/videos/roblox/kNxX30-yarn-character.mp4', thumbnail: '/images/roblox/kNxX30-yarn-character.jpg', thumbnailPosition: '50% 0%' }),
  defineRobloxProject({ id: 'bg4keG', title: 'Chain Clown', cover: 'https://cdna.artstation.com/p/assets/video_clips/images/098/651/364/20260501104150/smaller_square/naksi-thumb.jpg?1777650110', video: '/videos/roblox/bg4keG-chain-clown.mp4', thumbnail: '/images/roblox/bg4keG-chain-clown.jpg', thumbnailPosition: '50% 0%' }),
  defineRobloxProject({ id: 'WX5EYJ', title: 'SCP-3008', cover: 'https://cdnb.artstation.com/p/assets/covers/images/099/158/865/20260529161251/smaller_square/naksi-naksi-videoframe-9244.jpg?1780089171', video: '/videos/roblox/WX5EYJ-scp-3008.mp4', thumbnail: '/images/roblox/WX5EYJ-scp-3008.jpg', thumbnailPosition: '50% 10%' }),
  defineRobloxProject({ id: 'nJPkNr', title: 'Darling Dolly', cover: 'https://cdnb.artstation.com/p/assets/covers/images/099/491/919/20260529161213/smaller_square/naksi-naksi-videoframe-9368.jpg?1780089133', video: '/videos/roblox/nJPkNr-darling-dolly.mp4', thumbnail: '/images/roblox/nJPkNr-darling-dolly.jpg', thumbnailPosition: '50% 10%' }),
  defineRobloxProject({ id: 'x36ke4', title: 'Leatherface', cover: 'https://cdnb.artstation.com/p/assets/video_clips/images/099/507/495/20260530093604/smaller_square/naksi-thumb.jpg?1780151765', video: '/videos/roblox/x36ke4-leatherface.mp4', thumbnail: '/images/roblox/x36ke4-leatherface.jpg', thumbnailPosition: '50% 10%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: '3En2ZD', title: 'Poor George', cover: 'https://cdna.artstation.com/p/assets/covers/images/099/536/930/20260531140655/smaller_square/naksi-naksi-videoframe-631.jpg?1780254415', video: '/videos/roblox/3En2ZD-poor-george.mp4', thumbnail: '/images/roblox/3En2ZD-poor-george.jpg', thumbnailPosition: '50% 10%' }),
  defineRobloxProject({ id: 'YGy046', title: 'Bog Zombie', cover: 'https://cdnb.artstation.com/p/assets/covers/images/099/563/013/20260601103740/smaller_square/naksi-naksi-videoframe-514.jpg?1780328260', video: '/videos/roblox/YGy046-bog-zombie.mp4', thumbnail: '/images/roblox/YGy046-bog-zombie.jpg', thumbnailPosition: '50% 15%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: 'K3oD6X', title: 'Anxiety', cover: 'https://cdna.artstation.com/p/assets/covers/images/099/627/014/20260603110807/smaller_square/naksi-naksi-videoframe-9274.jpg?1780502887', video: '/videos/roblox/K3oD6X-anxiety.mp4', thumbnail: '/images/roblox/K3oD6X-anxiety.jpg', thumbnailPosition: '50% 10%' }),
  defineRobloxProject({ id: 'nJPBP9', title: 'Jack the Reaper', cover: 'https://cdnb.artstation.com/p/assets/covers/images/091/534/889/smaller_square/naksi-naksi-5-jack-the-reaper-thumb.jpg?1757060162', thumbnail: '/images/roblox/nJPBP9-jack-the-reaper.jpg', thumbnailPosition: '50% 30%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: '8Bd6XR', title: 'SCP-173', cover: 'https://cdna.artstation.com/p/assets/covers/images/091/539/216/smaller_square/naksi-naksi-16-scp-173-thumb.jpg?1757070204', thumbnail: '/images/roblox/8Bd6XR-scp-173.jpg', thumbnailPosition: '50% 20%' }),
  defineRobloxProject({ id: 'a038mX', title: 'Crouchy', cover: 'https://cdnb.artstation.com/p/assets/covers/images/091/539/283/smaller_square/naksi-naksi-4-crouchy-thumb.jpg?1757070391', thumbnail: '/images/roblox/a038mX-crouchy.jpg', thumbnailPosition: '50% 15%' }),
  defineRobloxProject({ id: 'zxw4o4', title: 'Comedy Mask', cover: 'https://cdna.artstation.com/p/assets/covers/images/091/539/302/smaller_square/naksi-naksi-27-comedy-mask-thumb.jpg?1757070480', thumbnail: '/images/roblox/zxw4o4-comedy-mask.jpg', thumbnailPosition: '50% 50%' }),
  defineRobloxProject({ id: 'BkKPm6', title: 'Dragon', cover: 'https://cdnb.artstation.com/p/assets/covers/images/091/539/321/smaller_square/naksi-naksi-2-dragon-thumb.jpg?1757070558', thumbnail: '/images/roblox/BkKPm6-dragon.jpg', thumbnailPosition: '50% 50%' }),
  defineRobloxProject({ id: 'K3Zdky', title: 'Sparkit', cover: 'https://cdnb.artstation.com/p/assets/covers/images/091/539/379/smaller_square/naksi-naksi-26-sparkit-thumb.jpg?1757070648', thumbnail: '/images/roblox/K3Zdky-sparkit.jpg', thumbnailPosition: '50% 0%' }),
  defineRobloxProject({ id: 'Nq3YQD', title: 'Kitsun', cover: 'https://cdnb.artstation.com/p/assets/covers/images/091/539/419/smaller_square/naksi-naksi-28-kitsun-thumb.jpg?1757070703', thumbnail: '/images/roblox/Nq3YQD-kitsun.jpg', thumbnailPosition: '50% 50%' }),
  defineRobloxProject({ id: 'XJ89ly', title: 'Grintale', cover: 'https://cdna.artstation.com/p/assets/images/images/091/452/200/20250902133150/smaller_square/naksi-32-grintale.jpg?1756837910', thumbnail: '/images/roblox/XJ89ly-grintale.jpg', thumbnailPosition: '50% 0%' }),
  defineRobloxProject({ id: 'oJYP5B', title: 'Lyleen', cover: 'https://cdna.artstation.com/p/assets/images/images/091/451/552/20250902131213/smaller_square/naksi-29-lyleen.jpg?1756836733', thumbnail: '/images/roblox/oJYP5B-lyleen.jpg', thumbnailPosition: '50% 46%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: 'L4GbEK', title: 'Elizabee', cover: 'https://cdnb.artstation.com/p/assets/images/images/091/434/513/20250902033508/smaller_square/naksi-23-elizabee.jpg?1756802108', thumbnail: '/images/roblox/L4GbEK-elizabee.jpg', thumbnailPosition: '50% 35%' }),
  defineRobloxProject({ id: 'Nq3e4q', title: 'LittleFireGuy', cover: 'https://cdna.artstation.com/p/assets/images/images/091/434/592/20250902033427/smaller_square/naksi-24-littlefireguy.jpg?1756802067', thumbnail: '/images/roblox/Nq3e4q-little-fire-guy.jpg', thumbnailPosition: '50% 38%', desktopSlot: 'portrait' }),
  defineRobloxProject({ id: 'AZGKdm', title: 'Penking', cover: 'https://cdna.artstation.com/p/assets/images/images/091/452/342/20250902133750/smaller_square/naksi-33-penking.jpg?1756838270', thumbnail: '/images/roblox/AZGKdm-penking.jpg', thumbnailPosition: '50% 25%' }),
  defineRobloxProject({ id: 'GvGDRz', title: 'Quivern', cover: 'https://cdna.artstation.com/p/assets/images/images/091/451/834/20250902131907/smaller_square/naksi-30-quivern.jpg?1756837147', thumbnail: '/images/roblox/GvGDRz-quivern.jpg', thumbnailPosition: '50% 20%' }),
  defineRobloxProject({ id: 'YGdE1V', title: 'Fuack', cover: 'https://cdnb.artstation.com/p/assets/images/images/091/452/119/20250902132747/smaller_square/naksi-31-fuack.jpg?1756837667', thumbnail: '/images/roblox/YGdE1V-fuack.jpg', thumbnailPosition: '50% 20%' }),
  defineRobloxProject({ id: 'AZG42N', title: 'Relaxaurus', cover: 'https://cdnb.artstation.com/p/assets/images/images/091/434/723/20250902033441/smaller_square/naksi-25-relaxaurus.jpg?1756802081', thumbnail: '/images/roblox/AZG42N-relaxaurus.jpg', thumbnailPosition: '50% 25%' }),
  defineRobloxProject({ id: 'dyD6Qw', title: 'Chikipi', cover: 'https://cdnb.artstation.com/p/assets/images/images/091/433/803/20250902023806/smaller_square/naksi-22-chikipi.jpg?1756798687', thumbnail: '/images/roblox/dyD6Qw-chikipi.jpg', thumbnailPosition: '50% 15%' })
]
