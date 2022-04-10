const products = [
    {
    //   id: 1,
      name: 'Volume Adhesive',
      href: '#',
      price: '$40.00',
      color: 'Clear',
      inStock: true,
      size: 'Small',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLAV5_Volume5ml_Thumbnail_x190.jpg?v=1614031666',
      imageAlt: "",
      featured: true
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
      featured: true
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
      featured: true
    },
    {
    //   id: 1,
      name: 'Volume Adhesive',
      href: '#',
      price: '$40.00',
      color: 'Clear',
      inStock: true,
      size: 'Small',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLAV5_Volume5ml_Thumbnail_x190.jpg?v=1614031666',
      imageAlt: "",
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
    },
  ]
    
  const people = [
    {
      name: 'Jane Doe',
      role: 'CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Jane Doe',
      role: 'CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Jane Doe',
      role: 'CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Jane Doe',
      role: 'CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Jane Doe',
      role: 'CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Jane Doe',
      role: 'CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    // More people...
  ]
  

  export { products, people}