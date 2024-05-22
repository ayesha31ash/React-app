// App.tsx
import React from 'react';
import MainTable from './MainTable';
import LineGraph from './LineGraph';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <MainTable />
      <LineGraph />
    </div>
  );
};

export default App;
