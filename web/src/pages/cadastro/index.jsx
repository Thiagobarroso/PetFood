import React from 'react';
import ilustration from '../../../assets/5466825.jpg';

function Cadastro() {
  return (
    <div className="container-fluid h-100 bg-primary">
      <div className="row">
        <div className="col-12"></div>
        <h1 className="display-2 py-4 px-4 text-center">PetFood</h1>
        <div className="col-6 d-flex justify-content-center">
          {' '}
          <img src={ilustration} className="img-fluid img-ilustration" />
        </div>

        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">
              Falta Pouco para o seu pet ser feliz
            </h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
            />
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento"
            />

            <br />
            <br />

            <button className="btn btn-lg w-100 btn-secundary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
