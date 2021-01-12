import {useEffect, useState} from 'react';

const url = 'http://media.mw.metropolia.fi/wbma/media';

const fetchData = async () => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
const enrichImageData = async (item) => {
  const response = await fetch(`${url}/${item.file_id}`);
  const json = await response.json();
  item.thumbnails = {w160: json.thumbnails.w160};
  return item;
};
const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  useEffect(() => {
    fetchData()
        .then((items) => Promise.all(items.map((i) => enrichImageData(i))))
        .then((items) => setMediaArray(items));
  }, []);
  return mediaArray;
};

export {useLoadMedia};
