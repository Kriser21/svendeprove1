import React, { useState, useEffect } from 'react';

const Fetch = () =>{
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/mediesuset/events', {
method:'GET',
redirect: 'follow',
})
            
.then((res) => res.json())
.then((data) => setApiData(data))
.catch((err) => console.log(err));        
}
});

console.log(apiData && apiData);


let test =
apiData&&
    apiData.items.slice(0, 8).map((track) =>{
        console.log (track);
        return(
            <div key={track.id}>
            <p> <span>{track.stage_name}</span>
            <img src={track.image} alt=""/>
            </p>
            </div>
            
         )
    });

    return <>{test}</>;

};

export default function Home(){
    return(
        <section>
            Events
            <div className="events">
            <Fetch/>
            </div>
        </section>
    );
}
