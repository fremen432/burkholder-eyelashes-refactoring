import man1 from '../images/profilePictures/ben-parker.jpeg'
import man2 from '../images/profilePictures/podpros.jpeg'
import woman1 from '../images/profilePictures/christina-wocintechchat.jpeg'
import woman2 from '../images/profilePictures/vince-veras.jpeg'

const productDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

const products = [
  {
    name: 'Volume Adhesive',
    href: '#',
    price: '$40.00',
    color: 'Clear',
    inStock: true,
    size: 'Small',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLAV5_Volume5ml_Thumbnail_x190.jpg?v=1614031666',
    imageAlt: "",
    featured: true,
    description: productDescription
  },
  {
    name: 'Diamond Adhesive',
    href: '#',
    price: '$55.00',
    color: 'Clear',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLDA5_Diamond5ml_Thumbnail_360x.jpg?v=1614015061',
    imageAlt: "",
    featured: true,
    description: productDescription
  },
  {
    name: 'Onyx Adhesive',
    href: '#',
    price: '$65.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLOA05_Onyx5ml_Thumbnail_360x.jpg?v=1614030217',
    imageAlt: '',
    featured: true,
    description: productDescription
  },
  {
    name: 'Volume Adhesive',
    href: '#',
    price: '$40.00',
    color: 'Clear',
    inStock: true,
    size: 'Small',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLAV5_Volume5ml_Thumbnail_x190.jpg?v=1614031666',
    imageAlt: "",
    featured: false,
    description: productDescription
  },
  {
    name: 'Diamond Adhesive',
    href: '#',
    price: '$55.00',
    color: 'Clear',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLDA5_Diamond5ml_Thumbnail_360x.jpg?v=1614015061',
    imageAlt: "",
    featured: false,
    description: productDescription
  },
  {
    //   id: 3,
    name: 'Onyx Adhesive',
    href: '#',
    price: '$65.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLOA05_Onyx5ml_Thumbnail_360x.jpg?v=1614030217',
    imageAlt: '',
    featured: false,
    description: productDescription
  },
  {
    id: 1,
    name: 'Volume Adhesive',
    href: '#',
    price: '$40.00',
    color: 'Clear',
    inStock: true,
    size: 'Small',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLAV5_Volume5ml_Thumbnail_x190.jpg?v=1614031666',
    imageAlt: "",
    featured: false,
    description: productDescription
  },
  {
    //   id: 2,
    name: 'Diamond Adhesive',
    href: '#',
    price: '$55.00',
    color: 'Clear',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLDA5_Diamond5ml_Thumbnail_360x.jpg?v=1614015061',
    imageAlt: "",
    featured: false,
    description: productDescription
  },
  {
    //   id: 3,
    name: 'Onyx Adhesive',
    href: '#',
    price: '$65.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLOA05_Onyx5ml_Thumbnail_360x.jpg?v=1614030217',
    imageAlt: '',
    featured: false,
    description: productDescription
  },
]

const people = [
  {
    name: 'John Smith',
    role: 'CEO',
    imageUrl: man1,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Joe Schmoe',
    role: 'Marketing Director',
    imageUrl: man2,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Mary Jane',
    role: 'Products Manager',
    imageUrl: woman1,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jane Doe',
    role: 'Accounting',
    imageUrl: woman2,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // {
  //   name: 'Jane Doe',
  //   role: 'CEO',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  //   twitterUrl: '#',
  //   linkedinUrl: '#',
  // },
  // More people...
]

export { products, people }