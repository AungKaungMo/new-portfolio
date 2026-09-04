const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

const rawSiteUrl = configuredSiteUrl?.trim() || "http://localhost:3000";

const normalizedSiteUrl = /^https?:\/\//.test(rawSiteUrl)
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const siteUrl = new URL(normalizedSiteUrl);

export const siteConfig = {
  name: "Aung Kaung Moe",
  title: "Aung Kaung Moe — Software Engineer",
  description:
    "Portfolio of Aung Kaung Moe, a software engineer building intuitive SaaS products, scalable web applications, and AI-powered workflows.",
  url: siteUrl,
  github: "https://github.com/AungKaungMo",
  linkedin: "https://www.linkedin.com/in/aung-kaung-moe-215795255/",
} as const;

export const isVercelPreview = process.env.VERCEL_ENV === "preview";
