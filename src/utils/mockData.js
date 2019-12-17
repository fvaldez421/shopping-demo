/**
 * This file holds mock data for any requests in the app
 */

export const images = [
  'https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
  'https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1907&q=80',
  'https://static.boredpanda.com/blog/wp-content/uploads/2018/08/5b74330692694_5GS84Mw0cNQDTvd57x06N99BFCuw4Fc71KPEptDW-bA__700.jpg',
  'https://static.boredpanda.com/blog/wp-content/uploads/2018/08/5b7eacb072de3_Wlv_pXT4yKHkMwucl8FZZ3Hp9ILEE1Ed3wPhTUXaQRQ__700.jpg',
  'https://static.boredpanda.com/blog/wp-content/uploads/2018/08/5b742cc2102d0_ePLDbETWtbNYC_T2O8wIZAiyGOR6jaoydq_jwn73VNU__700.jpg',
  'https://moderndogmagazine.com/sites/default/files/images/articles/top_images/Training-Header_0.jpg',
  'https://www.purina.com.au/-/media/Project/Purina/Main/Puppy-Articles/CategoryPages/puppy-exercising-carousel.jpg?h=410&la=en&w=730&hash=17AE2750E1B78A5AA6F0AFCD02AD7350',
  'https://static.boredpanda.com/blog/wp-content/uploads/2018/08/5b727e73082bb_t1g5jyzgqvt01__700.jpg',
  'https://s8297.pcdn.co/wp-content/uploads/2019/08/176127107_9128ea128f_z.jpg',
  'https://s.hdnux.com/photos/01/07/12/35/18655045/5/920x920.jpg',
  'https://www.k9rl.com/wp-content/uploads/2017/03/picking-the-best-puppy-825x510.jpg',
];

const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomImages = () => {
  let count = 0;
  const imgs = [];
  while (count < 5) {
    const img = images[getRandomNum(0, images.length - 1)]
    imgs.push(img)
    count++;
  }
  return [...new Set(imgs)];
}

export const items = [
  {
    id: 'uirehashwrthaershtwhtthhrt',
    name: 'Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
    rating: 4.3,
    price: 330,
    special: '10% off',
    imgs: getRandomImages()
  },
  {
    id: 'ukhjtrsljtrwqthwhioghaerthhrt',
    name: 'Orren Ellis Chana 2-Light LED Kitchen Island Dome Pendant',
    rating: 2.6,
    price: 180,
    special: null,
    imgs: getRandomImages()
  },
  {
    id: 'uirehashwrthewrtujyretgreyaerthhrt',
    name: 'Orren Ellis Chana 3-Light LED Kitchen Island Dome Pendant',
    rating: 3.6,
    price: 600,
    special: '15% off',
    imgs: getRandomImages()
  },
  {
    id: 'ukhjtrsljtriyjerte6wt6uqwoghaerthhrt',
    name: 'Orren Ellis Chana 5-Light LED Kitchen Island Dome Pendant',
    rating: 1.8,
    price: 321,
    special: '$10 off',
    imgs: getRandomImages()
  },
  {
    id: 'uirehashwrthewrtujywjjqwjjqwretgreyaerthhrt',
    name: 'Orren Ellis Chana 8-Light LED Kitchen Island Dome Pendant',
    rating: 3.3,
    price: 340,
    special: null,
    imgs: getRandomImages()
  },
  {
    id: 'ukhjtrsljtrioghaejwthwthwjwthywherthhrt',
    name: 'Orren Ellis Chana 7-Light LED Kitchen Island Dome Pendant',
    rating: 4.3,
    price: 230,
    special: '$25 off',
    imgs: getRandomImages()
  },
  {
    id: 'uirehashwrthewrtujyhwthretgreyaerthhrt',
    name: 'Orren Ellis Chana 9-Light LED Kitchen Island Dome Pendant',
    rating: 4.3,
    price: 300,
    special: null,
    imgs: getRandomImages()
  }
];