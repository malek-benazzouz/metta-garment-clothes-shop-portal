export interface Product {
  id: string; // e.g. '001' or '001prime'
  name: string; // e.g. '001 KIRGHIZISTAN T'
  description: string; // e.g. 'Single Craft'
  price: number; // in EUR
  imageUrlMobile: string; // e.g. 'assets/products/001-kirghizistan.svg'
  imageUrlDesktop: string; // e.g. 'assets/products/001-kirghizistan.svg'
  isAvailable: boolean; // if the product is not available, its leaf will be a normal non-clickable leaf with no number
}
