import React, { useState } from 'react';
import './App.scss';
import TableData from './components/TableData';
import ToolbarApp from './components/ToolbarApp';
import { ResponseRandomData } from './models/responseRandomData';

const App = () => {
  const [fakerData, setFakerData] = useState<ResponseRandomData[] | []>([]);
  const [bottomInView, setBottomInView] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <ToolbarApp setFakerData={setFakerData} fakerData={fakerData} bottomInView={bottomInView} />
      <TableData
        fakerData={fakerData as ResponseRandomData[]}
        setBottomInView={setBottomInView}
      />
    </div>
  );
};

export default App;
