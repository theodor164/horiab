import Header from "../components/Header";
import Video from "../components/Video";

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
  // Implement the account creation form
  return (
    <div>
      <Header></Header>
      <h2>Videos</h2>
      {/* Add form components */}
      <Video videoId={videoId20} />
      <Video videoId={videoId19} />
      <Video videoId={videoId18} />
      <Video videoId={videoId17} />
      <Video videoId={videoId16} />
      <Video videoId={videoId15} />
      <Video videoId={videoId14} />
      <Video videoId={videoId13} />
      <Video videoId={videoId12} />
      <Video videoId={videoId11} />
      <Video videoId={videoId10} />
      <Video videoId={videoId9} />
      <Video videoId={videoId8} />
      <Video videoId={videoId7} />
      <Video videoId={videoId6} />
      <Video videoId={videoId5} />
      <Video videoId={videoId4} />
      <Video videoId={videoId3} />
      <Video videoId={videoId2} />
      <Video videoId={videoId1} />
    </div>
  );
};

export default Videos;