import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    if (!apiData) {
      const fetchHeaders = new Headers();
      fetchHeaders.append('Accept', 'application/json');

    fetch('https://api.mediehuset.net/mediesuset/events',{
        method: 'GET',
        headers: fetchHeaders,
        redirect: 'follow',
      })
        .then((res) => res.json())
        .then((data) => setApiData(data))
        .catch((err) => console.log(err));
    }
  });
  console.log('data', apiData && apiData);

  let events =
    apiData &&
    apiData.items.slice(0, 9).map((track) => {
      let SliceDescription = track.description.substr(0, 180)
      console.log(track);
      return (
        <div key={track.name} className="EventsContent">
          <img src={track.image} alt="" />
          <p>{SliceDescription}</p>
          <p>{track.stage_name}</p>
          <p>{track.local_time}</p>
          <p>{track.type_name}</p>
        </div>
      );
    });
  return <>{events}</>;
};
//   let fetch =
//     apiData &&
//     apiData.items.slice(0, 9).map((track) => {
//       return ( <p>
//         console.log(track);
//       </p>
//       );
//     });

//   return <> 
//   {fetch}
//    </>;
// };
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