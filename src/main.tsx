import React from 'react';
import ReactDOM from 'react-dom/client';
import { render as renderAppA } from 'poc-app';

function App() {
  React.useEffect(() => {
    // Mount App A into the div with ID 'app-a-container'
    renderAppA('app-a-container');
  }, []);

  return (
    <div>
      <h1>Lace Platform App</h1>
      <div id="app-a-container"></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);