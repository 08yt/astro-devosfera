import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconMedium from "@/assets/icons/IconMedium.svg";
import IconTumblr from "@/assets/icons/IconTumblr.svg";
import IconYoutube from "@/assets/icons/IconYoutube.svg";
import IconReddit from "@/assets/icons/IconReddit.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/08yt/astro-devosfera",
    linkTitle: `GitHub 上的 ${SITE.title}`,
    icon: IconGitHub,
  },
  {
    name: "X",
    href: "https://x.com/Michaelsan91718",
    linkTitle: `X 上的 ${SITE.title}`,
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/avdyan/",
    linkTitle: `LinkedIn 上的 ${SITE.title}`,
    icon: IconLinkedin,
  },
  {
    name: "Medium",
    href: "https://medium.com/@mjiaguo",
    linkTitle: `Medium 上的 ${SITE.title}`,
    icon: IconMedium,
  },
  {
    name: "Tumblr",
    href: "https://www.tumblr.com/blog/sinbblog",
    linkTitle: `Tumblr 上的 ${SITE.title}`,
    icon: IconTumblr,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@singboxa",
    linkTitle: `YouTube 上的 ${SITE.title}`,
    icon: IconYoutube,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/Lucky_8588/",
    linkTitle: `Reddit 上的 ${SITE.title}`,
    icon: IconReddit,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `通过 WhatsApp 分享此文章`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `在 Facebook 上分享此文章`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `在 X 上分享此文章`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `通过 Telegram 分享此文章`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `在 Pinterest 上分享此文章`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `通过邮件分享此文章`,
    icon: IconMail,
  },
] as const;
