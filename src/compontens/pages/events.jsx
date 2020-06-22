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

  let test =
    apiData &&
    apiData.items.slice(0, 9).map((track) => {
      console.log(track);
      return (
        <p key={track.id}>
          <img src={track.image} alt="" />
            <div className="test">
                {track.title}
                </div>
            </p>
      );
    });
  return <>{test}</>;
};
export default function Home() {
  return (
    <section className="events">
        <Fetch />
    </section>
  );
}