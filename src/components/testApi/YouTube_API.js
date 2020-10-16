import React from 'react';

import axios from 'axios';

const KEY = "AIzaSyCqxQUVujJ4d2IVigUad4c0AfPEVrk4pOs";
const id = "7TBPrYJDoDE";

const params = {
  part: 'snippet',
  maxResults: 10,
  key: KEY,
}

const response = axios.get(`https://www.googleapis.com/youtube/v3/search?key=${KEY}`, { params });

const YouTube_API = () => {
  const onClickAPI = () => {
    console.log(response);
  }
  return (
    <h1 onClick={onClickAPI}>button</h1>
  )  
}

export default YouTube_API;