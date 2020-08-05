import React, { useState} from 'react';

export default function Color() {
    const [color,setColor]=useState('red');
    const [textColor,setTextColor]=useState('white');
    return (
      <div className="App">
        <button style={{background:color,color:textColor}} className='btn btn-primary' onClick={()=>{setColor("black");setTextColor('red')}}>Click here</button>
      </div>
    );
  }