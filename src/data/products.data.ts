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
    price: 320,
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
    name: '002 EMBROIDERED WHITE GAMMADIA SHIRT',
    description: 'The Life Garment',
    price: 410,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-white-gammadia-shirt/',
    imageUrlDesktop: 'assets/products/002-life-garment-embroidered-white-gammadia-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/002-life-garment-embroidered-white-gammadia-shirt-mobile.webp',
    isAvailable: true
  },
  {
    id: '002prime',
    name: '002\' MIROIR DE LIBERTÉ',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-miroir-de-liberte/',
    imageUrlDesktop: 'assets/products/002prime-essence-garment-miroir-de-liberte-desktop.webp',
    imageUrlMobile: 'assets/products/002prime-essence-garment-miroir-de-liberte-mobile.webp',
    isAvailable: true
  },
  {
    id: '003',
    name: '003 ASCENSION LIFE SHIRT',
    description: 'The Life Garment',
    price: 380,
    productPageLink: 'https://door.metta-garment.com/product/ascension-life-shirt/',
    imageUrlDesktop: 'assets/products/003-life-garment-ascension-life-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/003-life-garment-ascension-life-shirt-mobile.webp',
    isAvailable: true
  },
  {
    id: '003prime',
    name: '003\' CHEMIN DE LA CONNAISSANCE',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-chemin-connaissance/',
    imageUrlDesktop: 'assets/products/003prime-essence-garment-chemin-de-la-connaissance-desktop.webp',
    imageUrlMobile: 'assets/products/003prime-essence-garment-chemin-de-la-connaissance-mobile.webp',
    isAvailable: true
  },
  {
    id: '004',
    name: '004 EMBROIDERED GREEN GAMMADIA SHIRT',
    description: 'The Life Garment',
    price: 410,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-green-gammadia-shirt/',
    imageUrlDesktop: 'assets/products/004-life-garment-embroidered-green-gammadia-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/004-life-garment-embroidered-green-gammadia-shirt-mobile.webp',
    isAvailable: true
  },
  {
    id: '004prime',
    name: '004\' TERRE INTÉRIEURE',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/004prime-essence-garment-terre-interieure-desktop.webp',
    imageUrlMobile: 'assets/products/004prime-essence-garment-terre-interieure-mobile.webp',
    isAvailable: true
  },
  {
    id: '005',
    name: '005 EMBROIDERED LADDER SHIRT',
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-ladder-shirt/',
    imageUrlDesktop: 'assets/products/005-life-garment-embroidered-ladder-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/005-life-garment-embroidered-ladder-shirt-mobile.webp',
    isAvailable: false
  },
  {
    id: '005prime',
    name: '005\' SAMVEGA',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-samvega/',
    imageUrlDesktop: 'assets/products/005prime-essence-garment-samvega-desktop.webp',
    imageUrlMobile: 'assets/products/005prime-essence-garment-samvega-mobile.webp',
    isAvailable: true
  },
  {
    id: '006',
    name: '006 EMBROIDERED CALLIGRAPHY SHIRT',
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-calligraphy-shirt/',
    imageUrlDesktop: 'assets/products/006-life-garment-embroidered-calligraphy-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/006-life-garment-embroidered-calligraphy-shirt-mobile.webp',
    isAvailable: false
  },
  {
    id: '006prime',
    name: '006\' NUIT DE FEU',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-nuit-de-feu/',
    imageUrlDesktop: 'assets/products/006prime-essence-garment-nuit-de-feu-desktop.webp',
    imageUrlMobile: 'assets/products/006prime-essence-garment-nuit-de-feu-mobile.webp',
    isAvailable: true
  },
  {
    id: '007',
    name: '007 JAMES BOND',
    description: 'The Agent Garment',
    price: 0,
    productPageLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrlDesktop: 'assets/products/007-life-garment-james-bond-desktop.png',
    imageUrlMobile: 'assets/products/007-life-garment-james-bond-mobile.png',
    isAvailable: true // TODO prodReadiness set James Bond availability to false
  },
  {
    id: '007prime',
    name: '007\' HIÉRARCHIE DES ÉTATS',
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-hierarchie-des-etats/',
    imageUrlDesktop: 'assets/products/007prime-essence-garment-hierarchie-des-etats-desktop.webp',
    imageUrlMobile: 'assets/products/007prime-essence-garment-hierarchie-des-etats-mobile.webp',
    isAvailable: true
  }
];
