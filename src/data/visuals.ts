export type GameVisual = {
  wallpaper: string;
  logo?: string;
};

export const gameVisuals: Record<string, GameVisual> = {
  "trails-in-the-sky-fc": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2401-m.jpg"
  },
  "trails-in-the-sky-sc": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2402-m.jpg"
  },
  "trails-in-the-sky-3rd": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2403-m.jpg"
  },
  "trails-from-zero": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2404-m.jpg"
  },
  "trails-to-azure": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2405-m.jpg"
  },
  "trails-of-cold-steel": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2406-m.jpg"
  },
  "trails-of-cold-steel-ii": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2407-m.jpg"
  },
  "trails-of-cold-steel-iii": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2408-m.jpg"
  },
  "trails-of-cold-steel-iv": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2409-m.jpg"
  },
  "trails-into-reverie": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2410-m.jpg"
  },
  "trails-through-daybreak": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2411-m.jpg"
  },
  "trails-through-daybreak-ii": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2412-m.jpg"
  },
  "trails-beyond-the-horizon": {
    wallpaper: "https://www.falcom.co.jp/page/wp-content/uploads/2025/01/cal-h2411-m.jpg",
    logo: "https://thelegendofheroes.com/horizon/img/horizon-logo.webp"
  }
};

export const arcTitlesRu = {
  liberl: "Арка Либерла",
  crossbell: "Арка Кроссбелла",
  erebonia: "Арка Эребонии",
  reverie: "Перекресток арок",
  calvard: "Арка Кальварда"
} as const;
