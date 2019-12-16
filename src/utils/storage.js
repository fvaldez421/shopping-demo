

export const setItem = (key, item) => {
  item = JSON.stringify(item);
  localStorage.setItem(key, item);
}

export const getItem = key => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}