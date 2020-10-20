import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main.page';
import Search from './pages/Search.page';
import Watch from './pages/Watch.page';
import Exception from './components/addressError/Exception';
import PlayListContainer from './containers/PlayListContainer';


const App = () => {
  const data = {
    "context": {
      "client": {
        "hl": "ko",
        "gl": "KR",
        "deviceMake": "Apple",
        "visitorData": "CgtyLVE5YVVFQXRlMCjarbX8BQ%3D%3D",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36,gzip(gfe)",
        "clientName": "WEB",
        "clientVersion": "2.20201016.02.00",
        "osName": "Macintosh",
        "osVersion": "10_15_5",
        "browserName": "Chrome",
        "browserVersion": "86.0.4240.80",
        "screenWidthPoints": 955,
        "screenHeightPoints": 862,
        "screenPixelDensity": 1,
        "screenDensityFloat": 1,
        "utcOffsetMinutes": 540,
        "userInterfaceTheme": "USER_INTERFACE_THEME_DARK",
        "connectionType": "CONN_CELLULAR_4G"
      },
      "request": {
        "sessionId": "6885254901637862013",
        "internalExperimentFlags": [],
        "consistencyTokenJars": []
      },
      "adSignalsInfo": {
        "consentBumpParams": {
          "consentHostnameOverride": "https://www.youtube.com",
          "urlOverride": ""
        }
      },
      "user": {},
      "clientScreenNonce": "MC43MDkwMTg4NTkzMTU4Mg..",
      "clickTracking": {
        "clickTrackingParams": "CBwQ8eIEIhMI44mQ1KbA7AIVFu5YCh24egxa"
      }
    },
    "continuation": "4qmFsgLfAxIPRkV3aGF0X3RvX3dhdGNoGpADQ0JoNnB3SkRhVGhCUVVkMGRrRkJSa3hWWjBGQ1V6RkpRVUZSUWtkU1dHUnZXVmhTWm1SSE9XWmtNa1l3V1RKblFVRlJRVUZCVVVWQ1FVRkJRVUZSUVVKQlFVRkNRVkpCUVVkS1gzQnJUbE50ZDA5M1EwMW5jMGx6TlZneGJISlhRV3cyVEZOQlZXOXhRMmxGUzBoNlFYZFVibVJtVDBWSk5GRnJTbFpaVjA1RlRrZFNjMVZXYkRCUk1HY3hUMFpTVFZWVlNsZFJiVTFaYVdKSVgyZE9VWFZYYlZsTFdrRnZVV1ZZVW1aalIwWnVXbFk1ZW1KdFJuZGpNbWgyWkVKSlprMUVRazlrTVRnMFVXcG9RMUZzVm1oWk1GRXdXa2Q0VWxkWVVrUlRSRlUwVmtWNFVsRnNXa05aZUc5MlFVRkNjbUozUVVKVE1VbEJRVlYwVTBGQlJVRlNhMVl6WVVkR01GZ3pVblpZTTJSb1pFZE9iMEZCUlVGQlFVVkNRVkZCUVVGQlJVRkJVVUZCUVZGRpICGxoXaHR0cHM6Ly93d3cueW91dHViZS5jb20iAJoCGmJyb3dzZS1mZWVkRkV3aGF0X3RvX3dhdGNo"
  }

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const [value, setValue] = useState({});

  useEffect(() => {
    axios({
      url: 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8',
      method: "POST",
      data: data,
      headers: config,
    }).then(val => setValue(val.data.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems[0].richItemRenderer.content.videoRenderer.descriptionSnippet));
   }, []);

  useEffect(() => {
    if(value.runs) {
      console.log(value.runs[0])
    }
  }, [value]);

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search/:title" component={Search} />
      <Route exact path="/search/:title/watch" component={Watch} />
      <Route exact path="/list" component={PlayListContainer} />
      <Route path="*" component={Exception} />
    </Switch>
  )
}

export default App;