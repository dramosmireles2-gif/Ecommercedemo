export interface Product {
  id: number
  name: string
  price: string
  category: string
  imageUrl: string
  imageAlt: string
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Oversized Noir Blazer',
    price: '€285',
    category: 'Outerwear',
    imageUrl: '/product-1.jpg',
    imageAlt: 'Oversized black blazer on model',
  },
  {
    id: 2,
    name: 'Essential White Tee',
    price: '€65',
    category: 'Tops',
    imageUrl: '/product-2.jpg',
    imageAlt: 'Clean white t-shirt laid flat',
  },
  {
    id: 3,
    name: 'Cargo Beige Pants',
    price: '€195',
    category: 'Bottoms',
    imageUrl: '/product-3.jpg',
    imageAlt: 'Beige cargo pants on model',
  },
  {
    id: 4,
    name: 'Minimal Black Dress',
    price: '€320',
    category: 'Dresses',
    imageUrl: '/product-4.jpg',
    imageAlt: 'Minimal black dress on model',
  },
  {
    id: 5,
    name: 'Studio Grey Hoodie',
    price: '€145',
    category: 'Tops',
    imageUrl: '/product-5.jpg',
    imageAlt: 'Grey hoodie on model',
  },
  {
    id: 6,
    name: 'Sand Linen Set',
    price: '€240',
    category: 'Sets',
    imageUrl: '/product-6.jpg',
    imageAlt: 'Sand colored linen co-ord set',
  },
]

export const NAV_LINKS = [
  { label: 'New In', href: '#collections' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#newsletter' },
] satisfies { label: string; href: string }[]

export const MARQUEE_TEXT = 'NEW IN · SS26 COLLECTION · MARÉ · FREE RETURNS · MADE IN PORTUGAL · NEW IN · SS26 COLLECTION · MARÉ · FREE RETURNS · MADE IN PORTUGAL · '
