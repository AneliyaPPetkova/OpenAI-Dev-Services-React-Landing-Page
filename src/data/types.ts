export interface SolutionItem {
  id: number;
  title: string;
  info: string;
}

export interface NavList {
  id: number;
  title: string;
  items: NavListItem[];
}

export interface NavListItem {
  id: number;
  title: string;
  link: string;
}

export interface Article {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
  publishedAt: string;
  isFeatured: boolean;
}
