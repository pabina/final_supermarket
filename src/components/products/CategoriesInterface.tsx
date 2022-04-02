export interface Root {
  meta: Meta;
  data: Daum[];
  code: number;
}

export interface Meta {
  copyright: string;
  emails: string;
  api: Api;
  banners: Banner[];
  pagination: Pagination;
}

export interface Api {
  version: string;
}

export interface Banner {
  id: number;
  title: string;
  shortDescription: string;
  type: string;
  websiteUrl: any;
  linkTo: any;
  bannerImage: string;
  position: any;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: any[];
}

export interface Daum {
  id: number;
  parentId: any;
  title: string;
  description: any;
  slug: string;
  icon: string;
  backgroundImage: string;
  position: number;
  hasProduct: boolean;
  avgRating: number;
  ratingCount: number;
  productCount: number;
  userRating: any;
  banner: any[];
  hierarchy_level: number;
  isRestaurant: boolean;
  isRestaurantOpen: boolean;
  subcategories: Subcategories;
}

export interface Subcategories {
  data: Daum2[];
  meta: Meta2;
}

export interface Daum2 {
  id: number;
  parentId: number;
  title: string;
  description: any;
  slug: string;
  icon: string;
  backgroundImage: string;
  hasProduct: boolean;
  avgRating: number;
  ratingCount: number;
  productCount: number;
  userRating: number;
  banner: any[];
  position: number;
  hierarchy_level: number;
  isRestaurant: boolean;
  isRestaurantOpen: boolean;
  products: any[];
  subcategories: Subcategories2;
}

export interface Subcategories2 {
  data: any[];
}

export interface Meta2 {
  pagination: Pagination2;
}

export interface Pagination2 {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  links: any[];
}
