import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
  googleAnalysis?: string;
  search?: boolean;
}

// Dynamically set site URL based on the environment
const DEPLOY_ENV = process.env.ASTRO_DEPLOY_ENV || "production"; // Default to production if not set

export const siteConfig: SiteConfig = {
  site: DEPLOY_ENV === "test" 
    ? "https://acc.experiencedrivencommerce.nl" 
    : "https://experiencedrivencommerce.nl",

  title: "Digital data analytics",
  slogan: "Data ontgrendeld: van inzicht naar impact.",
  description: "In de digitale wereld draait alles om data. Maar hoe haal je écht waardevolle inzichten uit je data?",
  
  social: {
    github: "",
    linkedin: "https://www.linkedin.com/in/mulderjordy/",
    email: "jordy@jm-dataconsultancy.nl",
    rss: false,
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "",
  search: true,
};
