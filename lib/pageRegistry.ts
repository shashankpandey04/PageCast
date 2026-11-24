export interface PageDefinition {
  id: string;
  route: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  iconName: string;
  accentColor: string;
  gradient: string;
}

export const PAGE_REGISTRY: readonly PageDefinition[] = [
  {
    id: "sample",
    route: "/screen/sample",
    title: "Sample Display Screen",
    subtitle: "16:9 Layout Architecture & Essential Elements",
    category: "Sample Screen",
    description: "Comprehensive blueprint demonstrating TV safe margins, typography hierarchy, live widgets, and bottom ticker clearance.",
    iconName: "Layout",
    accentColor: "blue",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "register-now",
    route: "/screen/register-now",
    title: "Register Now",
    subtitle: "Join the Re:Invent Fest 2026",
    category: "Registration",
    description: "Sign up for the Re:Invent Fest 2026 and be part of the exciting event.",
    iconName: "User",
    accentColor: "green",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
  },
  {
    id: "speakers",
    route: "/screen/speakers",
    title: "Speaker 1",
    subtitle: "Meet Our Speakers",
    category: "Speakers",
    description: "A sequential display of all 12 speaker profiles with photos, titles, and bios.",
    iconName: "Users",
    accentColor: "emerald",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
] as const;

export const DEFAULT_ROUTE = "/screen/sample";

export function isValidRoute(route: string): boolean {
  return PAGE_REGISTRY.some((page) => page.route === route);
}

export function getPageByRoute(route: string): PageDefinition | undefined {
  return PAGE_REGISTRY.find((page) => page.route === route);
}

export function getNextRoute(currentRoute: string): string {
  const currentIndex = PAGE_REGISTRY.findIndex((page) => page.route === currentRoute);
  if (currentIndex === -1 || currentIndex === PAGE_REGISTRY.length - 1) {
    return PAGE_REGISTRY[0].route;
  }
  return PAGE_REGISTRY[currentIndex + 1].route;
}

export function getPrevRoute(currentRoute: string): string {
  const currentIndex = PAGE_REGISTRY.findIndex((page) => page.route === currentRoute);
  if (currentIndex <= 0) {
    return PAGE_REGISTRY[PAGE_REGISTRY.length - 1].route;
  }
  return PAGE_REGISTRY[currentIndex - 1].route;
}