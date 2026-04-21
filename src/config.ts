export const SITE = {
  website: "https://singbox.ygjc.cc/",
  author: "毛佳国",
  profile: "https://github.com/08yt/astro-devosfera",
  desc: "专注 Sing-box 软件的详细使用教程与配置指南。分享跨平台代理工具 Sing-box 的进阶技巧、节点搭建和路由规则配置。",
  title: "Sing-box 教程指南",
  ogImage: "devosfera-og.png", // ubicado en la carpeta public
  lightAndDarkMode: true,
  postPerIndex: 20,
  postPerPage: 20,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "编辑此文章",
    url: "https://github.com/08yt/astro-devosfera/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "America/Mexico_City", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: true, // mostrar/ocultar el reproductor en el hero
    src: "/audio/intro-web.mp3", // ruta al archivo (relativa a /public)
    label: "INTRO.MP3", // etiqueta display en el reproductor
    duration: 30, // duración en segundos (para la barra de progreso fija)
  },
} as const;
