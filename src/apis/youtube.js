import axios from 'axios';

const KEY = 'AIzaSyCam-SnAYm3eaVbfVrM2GOcJZZ-Kb_TqPU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY
  }
});
