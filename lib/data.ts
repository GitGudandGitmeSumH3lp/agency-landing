// Define interfaces for type safety
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: "Search" | "PenTool" | "BarChart3" | "Code"; // Keys for icons
  features: string[];
}

// --- MOCK DATA ---

export const projects: Project[] = [
  {
    id: "1",
    title: "Neon FinTech App",
    category: "App Development",
    image: "/api/placeholder/600/400", // We will use placeholders for now
    description: "A complete banking solution redesign focusing on Gen Z users.",
  },
  {
    id: "2",
    title: "EcoEats Branding",
    category: "Branding",
    image: "/api/placeholder/600/400",
    description: "Sustainable food delivery service identity and packaging.",
  },
  {
    id: "3",
    title: "Nexus Dashboard",
    category: "Web Design",
    image: "/api/placeholder/600/400",
    description: "SaaS analytics dashboard with real-time data visualization.",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "The Future of SEO in 2025",
    slug: "future-of-seo-2025",
    date: "Dec 15, 2024",
    excerpt: "Why AI answers are changing the way we structure content.",
    content: `
      <p>Search Engine Optimization is undergoing a seismic shift. With the rise of AI-generated answers (SGE), the traditional "10 blue links" are being pushed further down the page.</p>
      <h3>The Rise of Zero-Click Searches</h3>
      <p>Users are getting their answers directly on the search results page. This means your content needs to be optimized for "Answer Engine Optimization" (AEO) rather than just keywords.</p>
      <h3>What this means for your business</h3>
      <p>Focus on deep, authoritative content that AI cannot easily replicate. Experience and unique data are your new best friends.</p>
    `,
  },
  {
    id: "2",
    title: "Minimalism in Web Design",
    slug: "minimalism-web-design",
    date: "Nov 22, 2024",
    excerpt: "How whitespace increases conversion rates and reduces cognitive load.",
    content: `
      <p>Minimalism isn't just an aesthetic choice; it's a functional one. By removing the clutter, you guide the user's eye exactly where you want it to go.</p>
      <h3>Cognitive Load Theory</h3>
      <p>Every element on a page requires brain power to process. When you reduce visual noise, you make it easier for users to make decisions—like clicking that "Buy Now" button.</p>
    `,
  },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Founder & CEO",
    image: "/api/placeholder/150/150",
    bio: "Visionary leader with 10+ years in digital marketing.",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Head of Design",
    image: "/api/placeholder/150/150",
    bio: "Award-winning designer obsessed with typography.",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "SEO Optimization",
    description: "Climb the rankings with our data-first approach.",
    iconName: "Search",
    features: ["Keyword Strategy", "Technical Audits", "Backlink Building"],
  },
  {
    id: "2",
    title: "Content Marketing",
    description: "Compelling storytelling that engages your audience.",
    iconName: "PenTool",
    features: ["Blog Writing", "Copywriting", "Email Campaigns"],
  },
  {
    id: "3",
    title: "Paid Advertising",
    description: "Maximize your ROI with targeted PPC campaigns.",
    iconName: "BarChart3",
    features: ["Google Ads", "Facebook/Instagram Ads", "Retargeting"],
  },
  {
    id: "4",
    title: "Web Development",
    description: "Blazing fast websites built on Next.js.",
    iconName: "Code",
    features: ["Custom Coding", "CMS Integration", "E-commerce"],
  },
];

// --- HELPER FUNCTIONS ---

export function getAllProjects() {
  return projects;
}

export function getAllPosts() {
  return posts;
}

export function getAllTeam() {
  return team;
}

export function getAllServices() {
  return services;

}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}