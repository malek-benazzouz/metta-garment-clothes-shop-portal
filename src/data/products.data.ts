import { Product } from './product.model';

export function findProductById(id: string): Product | undefined {
  return PRODUCTS_DATA.find(p => p.id === id);
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: '001',
    name: '001 KIRGHIZISTAN T',
    description: 'Single Craft',
    price: 65,
    imageUrl: 'assets/products/001-kirghizistan.svg'
  },
  {
    id: '001prime',
    name: '001\' THE SOURCE',
    description: 'Crafts Set',
    price: 600,
    imageUrl: 'assets/products/001prime-the-source.svg'
  },
  {
    id: '002',
    name: '002 TADJIKISTAN T',
    description: 'Single Craft',
    price: 65,
    imageUrl: 'assets/products/002-tadjikistan.svg'
  },
  {
    id: '002prime',
    name: '002\' THE OPPOSITION',
    description: 'Crafts Set',
    price: 600,
    imageUrl: 'assets/products/002prime-the-opposition.svg'
  },
  {
    id: '003',
    name: '003 KIRGHIZISTAN T',
    description: 'Single Craft',
    price: 65,
    imageUrl: 'assets/products/001-kirghizistan.svg'
  },
  {
    id: '003prime',
    name: '003\' THE SOURCE',
    description: 'Crafts Set',
    price: 600,
    imageUrl: 'assets/products/001prime-the-source.svg'
  },
  {
    id: '004',
    name: '004 TADJIKISTAN T',
    description: 'Single Craft',
    price: 65,
    imageUrl: 'assets/products/002-tadjikistan.svg'
  },
  {
    id: '004prime',
    name: '004\' THE OPPOSITION',
    description: 'Crafts Set',
    price: 600,
    imageUrl: 'assets/products/002prime-the-opposition.svg'
  },
  {
    id: '005',
    name: '005 KIRGHIZISTAN T',
    description: 'Single Craft',
    price: 65,
    imageUrl: 'assets/products/001-kirghizistan.svg'
  },
  {
    id: '005prime',
    name: '005\' THE SOURCE',
    description: 'Crafts Set',
    price: 600,
    imageUrl: 'assets/products/001prime-the-source.svg'
  },
  {
    id: '006',
    name: '006 TADJIKISTAN T',
    description: 'Single Craft',
    price: 65,
    imageUrl: 'assets/products/002-tadjikistan.svg'
  },
  {
    id: '006prime',
    name: '006\' THE OPPOSITION',
    description: 'Crafts Set',
    price: 600,
    imageUrl: 'assets/products/002prime-the-opposition.svg'
  },
  {
    id: '007',
    name: '007 KIRGHIZISTAN T',
    description: 'Single Craft',
    price: 65,
    imageUrl: 'assets/products/001-kirghizistan.svg'
  },
  {
    id: '007prime',
    name: '007\' THE SOURCE',
    description: 'Crafts Set',
    price: 600,
    imageUrl: 'assets/products/001prime-the-source.svg'
  }
];
