

export const get = async (url='', params={}) => {
  return await new Promise((resolve, reject) => {
    const results = [];
    setTimeout(() => {
      resolve({ data: { results } });
    }, 1000);
  })
}
