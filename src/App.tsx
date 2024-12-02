import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { renderApp } from 'staking-app';

const r = (el: ReactNode, container: Element) => {
  createRoot(container).render(el)
}

export const App = () => {
  React.useEffect(() => {
    renderApp({ containerId: '#staking-app-container', render: r });
  }, []);

  return (
    <div>
      <h1>Lace Platform App</h1>
      <div id="staking-app-container"></div>
    </div>
  );
}