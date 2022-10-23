import React, { useState } from 'react';
import {Toggle} from '../components/Toggle';

function WheatherPage() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <Toggle  isOn={isOn} toggle={setIsOn}>
        <h1>Aujourd'hui il fait beau</h1>
        <h2>24°C à l'ombre et Soleil </h2>
      </Toggle>
    </>
    
  );
}

export default WheatherPage;
