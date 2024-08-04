import React from 'react';

import './styles/global.css';
import Sidebar from '../src/components/sidebar';
import Petshop from './pages/petshop';

function App() {
  return (
    <div>
      <Petshop />
      <Sidebar />;
    </div>
  );
}

export default App;
