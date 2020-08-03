import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    if (!apiData) {
      const fetchHeaders = new Headers();
      fetchHeaders.append('Accept', 'application/json');

      fetch('https://api.mediehuset.net/mediesuset/events', {
        method: 'GET',
        headers: fetchHeaders,
        redirect: 'follow',
      })
        .then((res) => res.json())
        .then((data) => setApiData(data))
        .catch((err) => console.log(err));
    }
  });
  console.log(apiData && apiData);

  let fetch =
    apiData &&
    apiData.items.slice(0, 9).map((track) => {
      let time = track.local_time.substr(11, 12)
      // let alt = track.description.substr(0, 15)
      console.log(track);
      return (
        <p key={track.id} className="EventsContent">
          <img src={track.image} alt={track.description} />
            <div >
               <h1>{track.title}</h1>
                <br/>
               kl. {time}
                </div>
            </p>
      );
    });
  return <>{fetch}</>;
};
export default function Home() {
  return (
    <section className="LineUpSection">
      <h2>LINE-UP</h2>
      <div className="filter">
        <button>A-Å</button>
        <button>RØD SCENE</button>
        <button>BLÅ SCENE</button>
        <button>GRØN SCENE</button>
        <button>LILLA SCENE</button>
        <button>FILTER</button>
      </div>
      <div className="LineUp">
        <Fetch />
        </div>
    </section>
  );
}