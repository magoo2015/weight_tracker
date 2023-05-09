import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{weight: 275, date: '11-23-2021'}, {weight: 270, date: '11-24-2021'}])


  return (
    <div>
      <DisplayEntries parentEntries = {entries} />

    </div>
  );
}

export default App;
