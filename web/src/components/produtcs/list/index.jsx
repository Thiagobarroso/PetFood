import React from 'react';
import './style.css';

function index() {
  return (
    <div className="product-list cal-12 mb-3">
      <div className="row">
        <div className="col-3">
          <img
            src="https://m.media-amazon.com/images/I/61krIHXdNGS.__AC_SX300_SY300_QL70_ML2_.jpg"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h5>
            <label className="badge text-bg-secondary">R$30,00</label>
          </h5>
          <small>
            <b>Nome do produto</b>
            <p>Detalhes do produto</p>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-danger">remover</button>
        </div>
      </div>
    </div>
  );
}

export default index;
