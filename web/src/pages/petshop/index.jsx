import React from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/produtcs/card/index';
import './style.css';

function index() {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src="https://img.freepik.com/vetores-premium/logotipo-fofinho-da-petshop-com-gato-e-cachorro_454510-56.jpg"
              className="img-fluid imagem-logo"
            />

            <b>Petlove</b>

            <div className="icons d-flex">
              <i class="ph-fill ph-star"></i>
              <text>3,69</text>
              <i class="ph-fill ph-money"></i>
              <text>$$$</text>
              <i class="ph-fill ph-gps-fix"></i>
              <text>3,69Km</text>
            </div>
            <label className="badge">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h5>Produtos</h5>
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 11, , 12, 13].map((produto) => (
                <Card />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
