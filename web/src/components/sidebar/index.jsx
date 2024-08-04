import React from 'react';
import { useState, useEffect } from 'react';

import './style.css';
import { Dock } from 'react-dock';

import Product from '../produtcs/list';

function index() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.addEventListener('openCart', () => setOpened(true));
  });

  return (
    <Dock
      position="right"
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha sacola (5)</h5>
        <div className="row products">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((produto) => (
            <Product />
          ))}
        </div>
      </div>
    </Dock>
  );
}

export default index;
