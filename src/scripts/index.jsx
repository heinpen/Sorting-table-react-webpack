import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';

import connectBD from './components/connectDB';
import App from './components/App.jsx';

connectBD(renderTable);
function renderTable(data) {
  // Render react dom after receiving data.
  ReactDOM.render(
    <React.StrictMode>
      <App content={data} />
    </React.StrictMode>,
    document.getElementById('container'),
  );
}
