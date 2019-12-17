/**
 * Sets item in localStorage
 */
export const setItem = (key, item) => {
  item = JSON.stringify(item);
  localStorage.setItem(key, item);
}

/**
 * Gets item from localStorage
 * @param {String} key 
 */
export const getItem = key => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}