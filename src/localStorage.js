function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readAtLocalStorage(key) {
  const data = localStorage.getItem(key);
  const res = data === null ? undefined : JSON.parse(data);
  return res;
}

export { saveToLocalStorage, readAtLocalStorage };
