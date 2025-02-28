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


export const siteConfig: SiteConfig = {
  site: "https://experiencedrivencommerce.nl",//DEPLOY_ENV === "test" ? "https://test.example.com/" : "https://example.com/",
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
