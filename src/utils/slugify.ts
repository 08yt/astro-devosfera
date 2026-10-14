import kebabcase from "lodash.kebabcase";
import slugify from "slugify";

/**
 * Check if string contains non-Latin characters
 */
const hasNonLatin = (str: string): boolean => /[^\x00-\x7F]/.test(str);

const tagMap: Record<string, string> = {
  "服务器搭建": "server",
  "规则进阶": "advanced",
  "基础入门": "basics",
  "极客探索": "geek",
  "客户端": "clients",
  "路由分流": "routing",
  "配置详解": "config",
  "配置转换": "convert",
  "新协议": "protocols",
  "Sing-box": "sing-box",
  "拓展教程": "tutorials",
  "运维自动化": "ops-auto",
  Homelab: "homelab",
  Docker: "docker",
  "代理工具": "proxy-tools",
  "网络技术": "networking",
  "网络安全": "security",
  DNS: "dns",
  AI: "ai",
  "开发者工具": "devtools",
  "效率工具": "productivity",
  "内网穿透": "intranet",
  "软路由": "soft-router",
  NAS: "nas",
  "虚拟化": "virtualization",
  "Web服务器": "webserver",
  "运维监控": "monitoring",
  "流媒体": "streaming",
  "机场评测": "airport",
  "软件对比": "compare",
  "前端开发": "frontend",
  "后端开发": "backend",
  Cloudflare: "cloudflare",
  Linux: "linux",
  "工作流": "workflow",
  "选购指南": "buying-guide",
  "代码协作": "git",
  "网络架构": "net-arch",
};

/**
 * Slugify a string using a hybrid approach:
 * - For Latin-only strings: use slugify (eg: "E2E Testing" -> "e2e-testing", "TypeScript 5.0" -> "typescript-5.0")
 * - For strings with non-Latin characters: use lodash.kebabcase (preserves non-Latin chars)
 */
export const slugifyStr = (str: string): string => {
  if (tagMap[str]) {
    return tagMap[str];
  }
  if (hasNonLatin(str)) {
    // Preserve non-Latin characters (e.g., Burmese, Chinese, etc.)
    return kebabcase(str);
  }
  // Handle Latin strings with better number/acronym handling
  return slugify(str, { lower: true });
};

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));
