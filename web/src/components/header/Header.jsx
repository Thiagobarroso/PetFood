import React from 'react';
import './style.css';

function Header() {
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12">
      <header>
        <h1 className="py-4 px-4 text-center">PetFood</h1>
      </header>

      <button
        onClick={() => openDrawer()}
        className="btn btn-secundary cart-button"
      >
        <i class="ph-fill ph-shopping-cart"></i> 2 Ítens
      </button>
    </div>
  );
}

export default Header;
