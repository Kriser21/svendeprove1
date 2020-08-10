import React, { useState, useEffect } from 'react';


const Fetch = () =>{
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/mediesuset/news', {
method:'GET',
redirect: 'follow',
})
            
.then((res) => res.json())
.then((data) => setApiData(data))
.catch((err) => console.log(err));        
}
});

console.log(apiData && apiData);

let home =
apiData&&
    apiData.items.slice(0, 8 ).map((track) =>{
        console.log (track);
        return(
            <div key={track.name} className="HomeContent">
            <img src={track.image} alt="" />
            <p>{track.title}</p>
            <p>{track.teaser}</p>
            <p>{track.local_time}</p>
            </div>
         );
    });

return <> {home}</>;

};

export default function Home(){
    return(
        <section>
            <div className="events">
            <Fetch/>
            </div>
        </section>
    );
}
