import sampleSize from 'lodash/sampleSize';

const products = [
  {
    id: 1,
    name: 'Basic off-white polo tee',
    price: '$10.90',
    beforeDiscount: '$20',
    sold: 30,
    numberOfReviews: 20,
    rating: 4.9,
    variants: ['Size: XS', 'Size: S', 'Size: M', 'Size: L', 'Size: XL'],
    images: [
      require('images/products/1/1_1.jpg'),
      // require('images/products/1/1_2.jpg'),
      // require('images/products/1/1_3.jpg'),
      // require('images/products/1/1_4.jpg'),
      // require('images/products/1/1_5.jpg'),
    ],
  },
  {
    id: 2,
    name: 'Minimalist grain long sleeves shirt',
    price: '$15.90',
    beforeDiscount: null,
    sold: 120,
    numberOfReviews: 103,
    rating: 4.7,
    variants: ['Size: XS', 'Size: S', 'Size: M', 'Size: L', 'Size: XL'],
    images: [
      require('images/products/2/2_1.jpg'),
      // require('images/products/2/2_2.jpg'),
      // require('images/products/2/2_3.jpg'),
      // require('images/products/2/2_4.jpg'),
      // require('images/products/2/2_5.jpg'),
      // require('images/products/2/2_6.jpg'),
    ],
  },
  {
    id: 3,
    name: 'Comfy white long pants',
    price: '$30',
    beforeDiscount: '$35',
    sold: 0,
    numberOfReviews: 339,
    rating: 4,
    variants: ['Size: XS', 'Size: S', 'Size: M', 'Size: L', 'Size: XL'],
    images: [
      require('images/products/3/3_1.jpg'),
      // require('images/products/3/3_2.jpg'),
      // require('images/products/3/3_3.jpg'),
    ],
  },
  {
    id: 4,
    name: 'Soft leather autumn heels',
    price: '$25',
    beforeDiscount: null,
    sold: 5,
    numberOfReviews: 84,
    rating: 5,
    variants: ['Size: UK 6', 'Size: UK 7', 'Size: UK 8', 'Size: UK 9', 'Size: UK 10'],
    images: [
      require('images/products/4/4_1.jpg'),
      // require('images/products/4/4_2.jpg'),
    ],
  },
  {
    id: 5,
    name: 'Sports tank singlet',
    price: '$12',
    beforeDiscount: '$20',
    sold: 304,
    numberOfReviews: 3819,
    rating: 4.5,
    variants: ['Size: XS', 'Size: S', 'Size: M', 'Size: L', 'Size: XL'],
    images: [
      require('images/products/5/5_1.jpg'),
      // require('images/products/5/5_2.jpg'),
      // require('images/products/5/5_3.jpg'),
      // require('images/products/5/5_4.jpg'),
      // require('images/products/5/5_5.jpg'),
      // require('images/products/5/5_6.jpg'),
    ],
  },
  {
    id: 6,
    name: 'Casual basic shorts',
    price: '$15.50',
    beforeDiscount: null,
    sold: 24,
    numberOfReviews: 391,
    rating: 3,
    variants: ['Size: XS', 'Size: S', 'Size: M', 'Size: L', 'Size: XL'],
    images: [
      require('images/products/6/6_1.jpg'),
      // require('images/products/6/6_2.jpg'),
      // require('images/products/6/6_3.jpg'),
      // require('images/products/6/6_4.jpg'),
      // require('images/products/6/6_5.jpg'),
    ],
  },
  {
    id: 7,
    name: 'Crop top white tee',
    price: '$8',
    beforeDiscount: '$15',
    sold: 5,
    numberOfReviews: 31,
    rating: 5,
    variants: ['Size: XS', 'Size: S', 'Size: M', 'Size: L', 'Size: XL'],
    images: [
      require('images/products/7/7_1.jpg'),
      // require('images/products/7/7_2.jpg'),
      // require('images/products/7/7_3.jpg'),
      // require('images/products/7/7_4.jpg'),
      // require('images/products/7/7_5.jpg'),
      // require('images/products/7/7_6.jpg'),
      // require('images/products/7/7_7.jpg'),
    ],
  },
  {
    id: 8,
    name: 'Minimalist bucket hat',
    price: '$13',
    beforeDiscount: null,
    sold: 253,
    numberOfReviews: 395,
    rating: 4.2,
    variants: ['Size: XS', 'Size: S', 'Size: M', 'Size: L', 'Size: XL'],
    images: [
      require('images/products/8/8_1.jpg'),
      // require('images/products/8/8_2.jpg'),
      // require('images/products/8/8_3.jpg'),
      // require('images/products/8/8_4.jpg'),
    ],
  },
  {
    id: 9,
    name: 'Throwback white shoes',
    price: '$39',
    beforeDiscount: null,
    sold: 32,
    numberOfReviews: 3198,
    rating: 4.6,
    variants: ['Size: UK 6', 'Size: UK 7', 'Size: UK 8', 'Size: UK 9', 'Size: UK 10'],
    images: [
      require('images/products/9/9_1.jpg'),
      // require('images/products/9/9_2.jpg'),
      // require('images/products/9/9_3.jpg'),
      // require('images/products/9/9_4.jpg'),
    ],
  },
  {
    id: 10,
    name: 'Elegant leather handbag',
    price: '$120',
    beforeDiscount: '$200',
    sold: 3,
    numberOfReviews: 395,
    rating: 2.5,
    variants: ['Size: XS', 'Size: S', 'Size: M', 'Size: L', 'Size: XL'],
    images: [
      require('images/products/10/10_1.jpg'),
      // require('images/products/10/10_2.jpg'),
      // require('images/products/10/10_3.jpg'),
      // require('images/products/10/10_4.jpg'),
    ],
  },
];

export const getProducts = () => products;
export const getNProducts = (n) => sampleSize(products, n);
export const getProductById = (id) => products.find((product) => product.id === id);
