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
    imageUrlDesktop: 'assets/products/001-life-garment-metta-life-shirt.webp',
    imageUrlMobile: 'assets/products/001-life-garment-metta-life-shirt.webp',
    isAvailable: true
  },
  {
    id: '001prime',
    name: 'ÉNERGIE ÉTERNELLE',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-energie-eternelle/',
    imageUrlDesktop: 'assets/products/001prime-essence-garment-energie-eternelle.webp',
    imageUrlMobile: 'assets/products/001prime-essence-garment-energie-eternelle.webp',
    isAvailable: true
  },
  {
    id: '002',
    name: 'EMBROIDERED WHITE GAMMADIA SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 430,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-white-gammadia-shirt/',
    imageUrlDesktop: 'assets/products/002-life-garment-embroidered-white-gammadia-shirt.webp',
    imageUrlMobile: 'assets/products/002-life-garment-embroidered-white-gammadia-shirt.webp',
    isAvailable: true
  },
  {
    id: '002prime',
    name: 'MIROIR DE LIBERTÉ',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-miroir-de-liberte/',
    imageUrlDesktop: 'assets/products/002prime-essence-garment-miroir-de-liberte.webp',
    imageUrlMobile: 'assets/products/002prime-essence-garment-miroir-de-liberte.webp',
    isAvailable: true
  },
  {
    id: '003',
    name: 'ASCENSION LIFE SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 690,
    productPageLink: 'https://door.metta-garment.com/product/ascension-life-shirt/',
    imageUrlDesktop: 'assets/products/003-life-garment-ascension-life-shirt.webp',
    imageUrlMobile: 'assets/products/003-life-garment-ascension-life-shirt.webp',
    isAvailable: true
  },
  {
    id: '003prime',
    name: 'CHEMIN DE LA CONNAISSANCE',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-chemin-connaissance/',
    imageUrlDesktop: 'assets/products/003prime-essence-garment-chemin-de-la-connaissance.webp',
    imageUrlMobile: 'assets/products/003prime-essence-garment-chemin-de-la-connaissance.webp',
    isAvailable: true
  },
  {
    id: '004',
    name: 'EMBROIDERED GREEN GAMMADIA SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 430,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-green-gammadia-shirt/',
    imageUrlDesktop: 'assets/products/004-life-garment-embroidered-green-gammadia-shirt.webp',
    imageUrlMobile: 'assets/products/004-life-garment-embroidered-green-gammadia-shirt.webp',
    isAvailable: true
  },
  {
    id: '004prime',
    name: 'L\'ARBRE DES BÉATITUDES',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/the-essence-garment-larbre-des-beatitudes/',
    imageUrlDesktop: 'assets/products/004prime-essence-garment-arbre-beatitudes.webp',
    imageUrlMobile: 'assets/products/004prime-essence-garment-arbre-beatitudes.webp',
    isAvailable: true
  },
  {
    id: '005',
    name: 'EMBROIDERED LADDER SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-ladder-shirt/',
    imageUrlDesktop: 'assets/products/005-life-garment-embroidered-ladder-shirt.webp',
    imageUrlMobile: 'assets/products/005-life-garment-embroidered-ladder-shirt.webp',
    isAvailable: false
  },
  {
    id: '005prime',
    name: 'LE NUAGE MESSAGER',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/the-essence-garment-le-nuage-messager/',
    imageUrlDesktop: 'assets/products/005prime-essence-garment-nuage-messager.webp',
    imageUrlMobile: 'assets/products/005prime-essence-garment-nuage-messager.webp',
    isAvailable: true
  },
  {
    id: '006',
    name: 'EMBROIDERED CALLIGRAPHY SHIRT',
    category: ProductCategory.LifeGarment,
    description: 'The Life Garment',
    price: 250,
    productPageLink: 'https://door.metta-garment.com/product/embroidered-calligraphy-shirt/',
    imageUrlDesktop: 'assets/products/006-life-garment-embroidered-calligraphy-shirt.webp',
    imageUrlMobile: 'assets/products/006-life-garment-embroidered-calligraphy-shirt.webp',
    isAvailable: false
  },
  {
    id: '006prime',
    name: 'NUIT DE FEU',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-nuit-de-feu/',
    imageUrlDesktop: 'assets/products/006prime-essence-garment-nuit-de-feu.webp',
    imageUrlMobile: 'assets/products/006prime-essence-garment-nuit-de-feu.webp',
    isAvailable: true
  },
  {
    id: '007',
    name: 'JAMES BOND',
    category: ProductCategory.LifeGarment,
    description: 'The Secret Garment',
    price: 0,
    productPageLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrlDesktop: 'assets/products/007-life-garment-james-bond.png',
    imageUrlMobile: 'assets/products/007-life-garment-james-bond-mobile.png',
    isAvailable: false
  },
  {
    id: '007prime',
    name: 'HIÉRARCHIE DES ÉTATS',
    category: ProductCategory.EssenceGarment,
    description: 'The Essence Garment',
    productPageLink: 'https://door.metta-garment.com/essence-garment-hierarchie-des-etats/',
    imageUrlDesktop: 'assets/products/007prime-essence-garment-hierarchie-des-etats.webp',
    imageUrlMobile: 'assets/products/007prime-essence-garment-hierarchie-des-etats.webp',
    isAvailable: true
  }
];
