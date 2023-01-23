import React from 'react';
import './App.scss';
import TableData from './components/TableData';
import ToolbarApp from './components/ToolbarApp';

const App = () => (
  <div className="App">
    <ToolbarApp />
    <TableData />
  </div>
);

export default App;
