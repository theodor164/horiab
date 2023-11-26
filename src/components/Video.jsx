import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const Video = ({ videoId }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    // Fetch video details using YouTube Data API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyDCWGxkyh7xVk8Cy3ZMwoxeiFuJkEX3RHM`
        );

        setVideo(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    fetchData();
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>;
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default Video;