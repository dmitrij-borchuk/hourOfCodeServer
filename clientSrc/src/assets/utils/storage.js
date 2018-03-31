const storage = localStorage;
export const set = (key, data) => storage.setItem(key, JSON.stringify(data));
export const get = key => JSON.parse(storage.getItem(key));
