import React, { useState } from 'react';
import './App.scss';
import TableData from './components/TableData';
import ToolbarApp from './components/ToolbarApp';
import { ResponseRandomData } from './models/responseRandomData';

const App = () => {
  const [fakerData, setFakerData] = useState<ResponseRandomData[] | []>([]);

  return (
    <div className="App">
      <ToolbarApp getFakerData={setFakerData} />
      <TableData fakerData={fakerData as ResponseRandomData[]} />
    </div>
  );
};

export default App;
