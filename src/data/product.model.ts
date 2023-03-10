export enum ProductCategory {
  LifeGarment = 'LifeGarment',
  EssenceGarment = 'EssenceGarment'
}

export interface Product {
  id: string;                       // e.g. '001' or '001prime'
  name: string;                     // e.g. '001 METTÄ LIFE SHIRT'
  category: ProductCategory;        // e.g. ProductCategory.LifeGarment
  description: string;              // e.g. 'The Life Garment'
  price?: number;                   // Optional - in EUR
  productPageLink: string;          // e.g. 'https://door.metta-garment.com/product/metta-life-shirt/'
  imageUrlDesktop: string;          // e.g. 'assets/products/001-life-garment-metta-life-shirt-desktop.webp'
  imageUrlMobile: string;           // e.g. 'assets/products/001-life-garment-metta-life-shirt-mobile.webp'
  isAvailable: boolean;             // if the product is not available, its leaf will be a normal non-clickable leaf with no number
}
