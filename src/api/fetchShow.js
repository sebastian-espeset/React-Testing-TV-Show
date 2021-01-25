import axios from 'axios';

export const fetchShow = (showCallback, seasonCallback,styleCallback) => {
    axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        console.log(res.data)
        showCallback(res.data);
        seasonCallback(styleCallback(res.data._embedded.episodes));
      });
  };
  