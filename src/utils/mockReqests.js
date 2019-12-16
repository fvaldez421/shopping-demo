import { getItem, setItem } from "./storage";


export const get = async (url='', params={}) => {
  return await new Promise((resolve, reject) => {
    let results = items;
    if (url === '/search/wishlist') results = getItem('wishlist') || {};
    setTimeout(() => {
      resolve({ data: results, status: 200 });
    }, 1000);
  })
};

export const post = async (url='', body={}) => {
  return await new Promise((resolve, reject) => {
    let results = {};
    if (url === '/wishlist') {
      const wishlist = getItem('wishlist') || {};
      const { id, name } = body;
      const updatedWishlist = { ...wishlist, [id]: name };
      setItem('wishlist', updatedWishlist);
      results = updatedWishlist;
    }
    setTimeout(() => {
      resolve({ data: results, status: 200 });
    }, 200);
  })
};

export const remove = async (url='', params={}) => {
  return await new Promise((resolve, reject) => {
    let results = {};
    if (url === '/wishlist') {
      const wishlist = getItem('wishlist') || {};
      const { id } = params;
      delete wishlist[id];
      setItem('wishlist', wishlist);
      results = wishlist;
    }
    setTimeout(() => {
      resolve({ data: results, status: 200 });
    }, 200);
  })
};


var items = [
  {
    id: 'uirehashwrthaershtwhtthhrt',
    name: 'Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
    rating: 4.3,
    price: 330,
    special: '10% off',
    imgs: [],
  },
  {
    id: 'ukhjtrsljtrwqthwhioghaerthhrt',
    name: 'Orren Ellis Chana 2-Light LED Kitchen Island Dome Pendant',
    rating: 2.6,
    price: 180,
    special: null,
    imgs: [],
  },
  {
    id: 'uirehashwrthewrtujyretgreyaerthhrt',
    name: 'Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
    rating: 3.6,
    price: 600,
    special: '15% off',
    imgs: [],
  },
  {
    id: 'ukhjtrsljtriyjerte6wt6uqwoghaerthhrt',
    name: 'Orren Ellis Chana 5-Light LED Kitchen Island Dome Pendant',
    rating: 1.8,
    price: 321,
    special: '$10 off',
    imgs: [],
  },
  {
    id: 'uirehashwrthewrtujywjjqwjjqwretgreyaerthhrt',
    name: 'Orren Ellis Chana 8-Light LED Kitchen Island Dome Pendant',
    rating: 3.3,
    price: 340,
    special: null,
    imgs: [],
  },
  {
    id: 'ukhjtrsljtrioghaejwthwthwjwthywherthhrt',
    name: 'Orren Ellis Chana 7-Light LED Kitchen Island Dome Pendant',
    rating: 4.3,
    price: 230,
    special: '$25 off',
    imgs: [],
  },
  {
    id: 'uirehashwrthewrtujyhwthretgreyaerthhrt',
    name: 'Orren Ellis Chana 9-Light LED Kitchen Island Dome Pendant',
    rating: 4.3,
    price: 300,
    special: null,
    imgs: [],
  }
];





