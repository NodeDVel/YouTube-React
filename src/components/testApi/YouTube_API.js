import React, { useState } from 'react';

import axios from 'axios';

const API_KEY = "AIzaSyCqxQUVujJ4d2IVigUad4c0AfPEVrk4pOs";

const params = {
  part: 'snippet',
  maxResults: 10,
  key: API_KEY,
}

const response = axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`, { params });

const YouTube_API = () => {
  const [data, setData] = useState(null);

  response.then(res => setData(res.data));
  
  const onClickAPI = () => {
    console.log(data.items);
  }
  return (
    <h1 onClick={onClickAPI}>button</h1>
  )  
}

export default YouTube_API;