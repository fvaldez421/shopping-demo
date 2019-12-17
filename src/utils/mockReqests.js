/**
 * Mock requests
 * this file contains exports to mock and test the UI these exports
 * replicate actual requests by using Promise functions and time outs
 */
import { getItem, setItem } from "./storage";
import { items } from './mockData';

/**
 * @param {{}} [params] an object of params to be parsed and added to the end of the request
 * @return {String} parsed params in the following format `?key=value&key=value`
 */
const paramsToString = (params=null) => {
  const pList = [];
  if (params) {
    Object.entries(params).forEach(([ key, value ]) => {
      pList.push(`${key}=${value}`);
    });
  }
  return `?${pList.join('&')}`;
}

/**
 * Mock get request returns different payloads depending on url provided
 * @param {String} url the url for the request  
 * @param {{}} params the key value pairs to be added to the url
 * @return {Promise}`{ status, data }`
 */
export const get = async (url='', params={}) => {
  return await new Promise((resolve) => {
    let results = items;
    if (url === '/search/wishlist') results = getItem('wishlist') || {};
    setTimeout(() => {
      resolve({ data: results, status: 200 });
    }, 1000);
  })
};

/**
 * Mock post request can return different payloads depending on url provided
 * @param {String} url the url for the request  
 * @param {{}} body the post body to be sent
 * @return {Promise}`{ status, data }`
 */
export const post = async (url='', body={}) => {
  return await new Promise((resolve) => {
    let results = {};
    if (url === '/wishlist') {
      const wishlist = getItem('wishlist') || {};
      const { id, ...obj } = body;
      const updatedWishlist = { ...wishlist, [id]: { id, ...obj } };
      setItem('wishlist', updatedWishlist);
      results = updatedWishlist;
    }
    setTimeout(() => {
      resolve({ data: results, status: 200 });
    }, 200);
  })
};

/**
 * Mock delete request returns different payloads depending on url provided
 * @param {String} url the url for the request
 * @param {Object} params the key value pairs to be added to the url
 * @return {Promise}`{ status, data }`
 */
export const remove = async (url='', params={}) => {
  return await new Promise((resolve) => {
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

