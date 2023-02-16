import { Product } from './product.model';

export function findProductById(id: string): Product | undefined {
  return PRODUCTS_DATA.find(p => p.id === id);
}

export function getProductAvailMap(): { [productId: string]: boolean } {
  return PRODUCTS_DATA.reduce((acc, val) => ({ ...acc, [val.id]: val.isAvailable }), {});
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: '001',
    name: '001 METTÄ LIFE SHIRT',
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/product/metta-life-shirt/',
    imageUrlDesktop: 'assets/products/001-life-garment-metta-life-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/001-life-garment-metta-life-shirt-mobile.webp',
    isAvailable: true
  },
  {
    id: '001prime',
    name: '001\' ÉNERGIE ÉTERNELLE',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-energie-eternelle/',
    imageUrlDesktop: 'assets/products/001prime-essence-garment-energie-eternelle-desktop.webp',
    imageUrlMobile: 'assets/products/001prime-essence-garment-energie-eternelle-mobile.webp',
    isAvailable: true
  },
  {
    id: '002',
    name: '002 TADJIKISTAN T1 VERY VERY VERY LONG TITLE',
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/002-tadjikistan.svg',
    imageUrlMobile: 'assets/products/002-tadjikistan.svg',
    isAvailable: true
  },
  {
    id: '002prime',
    name: '002\' THE OPPOSITION',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/002prime-the-opposition.svg',
    imageUrlMobile: 'assets/products/002prime-the-opposition.svg',
    isAvailable: true
  },
  {
    id: '003',
    name: '003 KIRGHIZISTAN T',
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/001-kirghizistan.svg',
    imageUrlMobile: 'assets/products/001-kirghizistan.svg',
    isAvailable: true
  },
  {
    id: '003prime',
    name: '003\' THE SOURCE',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/001prime-the-source.svg',
    imageUrlMobile: 'assets/products/001prime-the-source.svg',
    isAvailable: true
  },
  {
    id: '004',
    name: '004 TADJIKISTAN T',
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/002-tadjikistan.svg',
    imageUrlMobile: 'assets/products/002-tadjikistan.svg',
    isAvailable: true
  },
  {
    id: '004prime',
    name: '004\' THE OPPOSITION',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/002prime-the-opposition.svg',
    imageUrlMobile: 'assets/products/002prime-the-opposition.svg',
    isAvailable: true
  },
  {
    id: '005',
    name: '005 KIRGHIZISTAN T',
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/001-kirghizistan.svg',
    imageUrlMobile: 'assets/products/001-kirghizistan.svg',
    isAvailable: true
  },
  {
    id: '005prime',
    name: '005\' THE SOURCE',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/001prime-the-source.svg',
    imageUrlMobile: 'assets/products/001prime-the-source.svg',
    isAvailable: true
  },
  {
    id: '006',
    name: '006 TADJIKISTAN T',
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/002-tadjikistan.svg',
    imageUrlMobile: 'assets/products/002-tadjikistan.svg',
    isAvailable: false
  },
  {
    id: '006prime',
    name: '006\' THE OPPOSITION',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/002prime-the-opposition.svg',
    imageUrlMobile: 'assets/products/002prime-the-opposition.svg',
    isAvailable: true
  },
  {
    id: '007',
    name: '007 KIRGHIZISTAN T',
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/001-kirghizistan.svg',
    imageUrlMobile: 'assets/products/001-kirghizistan.svg',
    isAvailable: true
  },
  {
    id: '007prime',
    name: '007\' THE SOURCE',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/001prime-the-source.svg',
    imageUrlMobile: 'assets/products/001prime-the-source.svg',
    isAvailable: false
  }
];
