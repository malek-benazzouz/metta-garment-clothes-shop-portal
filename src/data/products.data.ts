import { Product, ProductCategory } from './product.model';

export function findProductById(id: string): Product | undefined {
  return PRODUCTS_DATA.find(p => p.id === id);
}

export function getProductAvailMap(): { [productId: string]: boolean } {
  return PRODUCTS_DATA.reduce((acc, val) => ({ ...acc, [val.id]: val.isAvailable }), {});
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: '001',
    name: 'METTÄ LIFE SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 340,
    productPageLink: 'https://door.metta-garment.com/product/metta-life-shirt/',
    imageUrlDesktop: 'assets/products/001-life-garment-metta-life-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/001-life-garment-metta-life-shirt-desktop.webp',
    isAvailable: true
  },
  {
    id: '001prime',
    name: 'ÉNERGIE ÉTERNELLE',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-energie-eternelle/',
    imageUrlDesktop: 'assets/products/001prime-essence-garment-energie-eternelle-desktop.webp',
    imageUrlMobile: 'assets/products/001prime-essence-garment-energie-eternelle-desktop.webp',
    isAvailable: true
  },
  {
    id: '002',
    name: 'EMBROIDERED WHITE GAMMADIA SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 430,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-white-gammadia-shirt/',
    imageUrlDesktop: 'assets/products/002-life-garment-embroidered-white-gammadia-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/002-life-garment-embroidered-white-gammadia-shirt-desktop.webp',
    isAvailable: true
  },
  {
    id: '002prime',
    name: 'MIROIR DE LIBERTÉ',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-miroir-de-liberte/',
    imageUrlDesktop: 'assets/products/002prime-essence-garment-miroir-de-liberte-desktop.webp',
    imageUrlMobile: 'assets/products/002prime-essence-garment-miroir-de-liberte-desktop.webp',
    isAvailable: true
  },
  {
    id: '003',
    name: 'ASCENSION LIFE SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 400,
    productPageLink: 'https://door.metta-garment.com/product/ascension-life-shirt/',
    imageUrlDesktop: 'assets/products/003-life-garment-ascension-life-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/003-life-garment-ascension-life-shirt-desktop.webp',
    isAvailable: true
  },
  {
    id: '003prime',
    name: 'CHEMIN DE LA CONNAISSANCE',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-chemin-connaissance/',
    imageUrlDesktop: 'assets/products/003prime-essence-garment-chemin-de-la-connaissance-desktop.webp',
    imageUrlMobile: 'assets/products/003prime-essence-garment-chemin-de-la-connaissance-desktop.webp',
    isAvailable: true
  },
  {
    id: '004',
    name: 'EMBROIDERED GREEN GAMMADIA SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 430,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-green-gammadia-shirt/',
    imageUrlDesktop: 'assets/products/004-life-garment-embroidered-green-gammadia-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/004-life-garment-embroidered-green-gammadia-shirt-desktop.webp',
    isAvailable: true
  },
  {
    id: '004prime',
    name: 'TERRE INTÉRIEURE',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-terre-interieure/',
    imageUrlDesktop: 'assets/products/004prime-essence-garment-terre-interieure-desktop.webp',
    imageUrlMobile: 'assets/products/004prime-essence-garment-terre-interieure-desktop.webp',
    isAvailable: true
  },
  {
    id: '005',
    name: 'EMBROIDERED LADDER SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-ladder-shirt/',
    imageUrlDesktop: 'assets/products/005-life-garment-embroidered-ladder-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/005-life-garment-embroidered-ladder-shirt-desktop.webp',
    isAvailable: false
  },
  {
    id: '005prime',
    name: 'SAMVEGA',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-samvega/',
    imageUrlDesktop: 'assets/products/005prime-essence-garment-samvega-desktop.webp',
    imageUrlMobile: 'assets/products/005prime-essence-garment-samvega-desktop.webp',
    isAvailable: true
  },
  {
    id: '006',
    name: 'EMBROIDERED CALLIGRAPHY SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-calligraphy-shirt/',
    imageUrlDesktop: 'assets/products/006-life-garment-embroidered-calligraphy-shirt-desktop.webp',
    imageUrlMobile: 'assets/products/006-life-garment-embroidered-calligraphy-shirt-desktop.webp',
    isAvailable: false
  },
  {
    id: '006prime',
    name: 'NUIT DE FEU',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-nuit-de-feu/',
    imageUrlDesktop: 'assets/products/006prime-essence-garment-nuit-de-feu-desktop.webp',
    imageUrlMobile: 'assets/products/006prime-essence-garment-nuit-de-feu-desktop.webp',
    isAvailable: true
  },
  {
    id: '007',
    name: 'JAMES BOND',
    category: ProductCategory.LifeGarment,
    description: 'The Secret Garment',
    price: 0,
    productPageLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrlDesktop: 'assets/products/007-life-garment-james-bond-desktop.png',
    imageUrlMobile: 'assets/products/007-life-garment-james-bond-mobile.png',
    isAvailable: false
  },
  {
    id: '007prime',
    name: 'HIÉRARCHIE DES ÉTATS',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-hierarchie-des-etats/',
    imageUrlDesktop: 'assets/products/007prime-essence-garment-hierarchie-des-etats-desktop.webp',
    imageUrlMobile: 'assets/products/007prime-essence-garment-hierarchie-des-etats-desktop.webp',
    isAvailable: true
  }
];
