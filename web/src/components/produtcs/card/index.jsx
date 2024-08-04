import React from 'react';
import './style.css';

function index() {
  return (
    <div className="col-3 product">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA3ZSKOclOjJJ38R7e6REeHPjdvfrVbMjuA&s"
        className="img-fluid align-center"
      />
      <button className="btn ronded-cicle">+</button>
      <h4>
        <label className="badge-produto">R$23,99</label>
      </h4>
      <small>Nome do produto</small>
    </div>
  );
}

export default index;
