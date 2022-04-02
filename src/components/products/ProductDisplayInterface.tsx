export interface Root {
  meta: Meta;
  data: Daum[];
}

export interface Meta {
  copyright: string;
  emails: string;
  api: Api;
  category: any;
  tag: any;
  pagination: Pagination;
}

export interface Api {
  version: string;
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
  title: string;
  slug: string;
  link: any;
  moreInfo: string;
  description: string;
  taxable: boolean;
  taxableAmount: number;
  decimal: boolean;
  hasOffer: boolean;
  categoryId: number;
  categoryTitle: string;
  categorySlug: string;
  categoryIcon: string;
  categoryBackgroundImage: string;
  unitPrice: UnitPrice[];
  images: Image[];
  warehouses: Warehouse[];
  tags: any[];
  brand: any;
}

export interface UnitPrice {
  id: number;
  title: string;
  sellingPrice: number;
  markedPrice: number;
  newPrice: number;
  oldPrice: number;
  size: any;
  sku: string;
  description: any;
  barcode: any;
  stock: number;
  hasOffer: boolean;
  alwaysAvailable: boolean;
}

export interface Image {
  id: number;
  imageName: string;
  unit_price_id: any;
}

export interface Warehouse {
  id: number;
  title: string;
}
