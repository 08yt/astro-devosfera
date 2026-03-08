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
