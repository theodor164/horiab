import Header from "../components/Header";
import Video from "../components/Video";
import { useState, useEffect } from 'react';

const Videos = () => {
  const videoId1 = 'C7DEi8lsnM4';
  const videoId2 = 'mW-mg7NJdj0';
  const videoId3 = 'mas4uKtzils';
  const videoId4 = 'L4qQ-nehR-c';
  const videoId5 = 'JgBcGW8Dv2k';
  const videoId6 = 'hWZPXM3eSJg';
  const videoId7 = 'wc-aOXV898I';
  const videoId8 = 'oxSmZk2UdzM';
  const videoId9 = 'RPeB5dS9gvo';
  const videoId10 = 'pFUZPH7tPOk';
  const videoId11 = 'JNGQgijMnz4';
  const videoId12 = 'QsOjgHSt01E';
  const videoId13 = 'uui_OsKri7I';
  const videoId14 = 'aeB0lKD9aBw';
  const videoId15 = 'RIplcbViH4k';
  const videoId16 = 'bcf_60s4vF0';
  const videoId17 = 'jOoG3AunQbE';
  const videoId18 = 'gYb8JZ-fZdQ';
  const videoId19 = 'aAIFLm889FA';
  const videoId20 = 'WEE_Zg85kwU';
  const videosArray = [videoId1, videoId2, videoId3, videoId4, videoId5, videoId6, videoId7, videoId8, 
    videoId9, videoId10, videoId11, videoId12, videoId13, videoId14, videoId15, videoId16, 
    videoId17, videoId18, videoId19, videoId20, ]

  const [videoIds, setVideoIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const totalVideos = 20; // Replace with the total number of videos you have

  // Simulate fetching initial video IDs
  useEffect(() => {
    // Replace this with your actual logic to fetch initial video IDs
    const initialVideoIds = [videoId1, videoId2];
    setVideoIds(initialVideoIds);
    setLoading(false);
  }, []);

  // Simulate fetching more video IDs when reaching the bottom of the page
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
        if (!loading) {
          setLoading(true);
          setTimeout(() => {
            // Replace this with your actual logic to fetch more video IDs
            const currentVideoCount = videoIds.length;
            const remainingVideos = totalVideos - currentVideoCount;

            if (remainingVideos > 0) {
              const moreVideoIds = Array.from(
                { length: Math.min(remainingVideos, 2) }, // Fetch up to 3 videos at a time
                (_, index) => videosArray[currentVideoCount + index]
              );
              setVideoIds((prevIds) => [...prevIds, ...moreVideoIds]);
            }

            setLoading(false);
          }, 1000); // Simulating an asynchronous request delay
        }
      }
    };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }); // Include videoIds in the dependency array to prevent potential issues


  return (
    <div>
      <Header></Header>
      <h2>Videos</h2>
      {videoIds.map((videoId) => (
        <Video key={videoId} videoId={videoId} />
      ))}
      {loading && <div>Loading more videos...</div>}
    </div>
  );
};

export default Videos;