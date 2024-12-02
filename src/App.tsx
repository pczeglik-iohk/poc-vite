import React from 'react';
import { render as renderStakingApp } from 'poc-app';

export const App = () => {
  React.useEffect(() => {
    renderStakingApp('poc-app-container');
  }, []);

  return (
    <div>
      <h1>Lace Platform App</h1>
      <div id="poc-app-container"></div>
    </div>
  );
}