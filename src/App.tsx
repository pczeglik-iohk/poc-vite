import React from 'react';
import { render as renderStakingApp } from 'staking-app';

export const App = () => {
  React.useEffect(() => {
    renderStakingApp('staking-app-container');
  }, []);

  return (
    <div>
      <h1>Lace Platform App</h1>
      <div id="staking-app-container"></div>
    </div>
  );
}