import React, { useState, useEffect } from 'react';
import CampHero from '../img/camp-logo.jpg';
const FetchCamp = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    if (!apiData) {
      const fetchHeaders = new Headers();
      fetchHeaders.append('Accept', 'application/json');

      fetch('https://api.mediehuset.net/mediesuset/camps', {
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
    apiData.items.slice(0, 3).map((track) => {
      let SliceDescription = track.description.substr(0, 180)
      console.log(track);
      return (
        <div key={track.id} className="TheCamps">
          <img src={track.image} alt="" />
          <h2> {track.name} </h2>
          <p>{SliceDescription}</p>
          {/* <p>{track.description}</p> */}
      <p> <span>Samlet antal pladser: </span>{track.num_people} </p>
      <button>LÆS MERE</button>
        </div>
      );
    });
  return <>{test}</>;
};
export default function Camps() {
  return (
    <section className="camps">
      <div className="CampHero">
        <img src={CampHero} alt="" />
      </div>
      <p className="CampsTeaxt">
        <h1>CAMPS</h1>
        <span>
          På Mediesuset finder du tre camp områder som hver skiller sig ud med
          deres specielle stemning om du enten er til fest og ballade eller
          komfort og service på højt niveau. På alle camp områder er der adgang
          til forplejning i form af mad og drikke, og toilet og bade
          faciliteter. Camp områderne er placeret tæt på festivalpladsen så at
          vores gæster hurtigt kan komme til og fra områderne i mellem de mange
          events. Det er muligt at reservere pladser på de forskellige camp
          områder - dog kræver Camp Kultunaut og De Luxe 4 dages partout armbånd
          og De luxe armbånd. Reservation kan foretages når du bestiller billet.
        </span>
      </p>
      <div className="TheCampsW">
        <FetchCamp />
      </div>
    </section>
  );
}