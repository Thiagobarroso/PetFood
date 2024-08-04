import React from 'react';
import Product from '../../components/produtcs/list/index';
import './style.css';

function index() {
  return (
    <div className="h-100">
      <header>
        <h1 className="py-4 px-4 text-center">PetFood</h1>
      </header>

      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-2">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-4 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-4 pl-0">
                <input
                  type="text"
                  placeholder="Numero"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-4 pl-0">
                <input
                  type="text"
                  placeholder="Complemento"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-2">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Numero do cartão"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-6">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Nome do titular"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-6">
                <input
                  type="text"
                  placeholder="CPF/CPNJ do titular"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <button className="btn btn-secundary w-100 py-3">
              Finalizar Compra
            </button>
          </div>
          <div className="col-6">
            <div className="box col mb-4 box-sidebar">
              <h5>Minha Sacola (5)</h5>
              <div className="row products">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((produto) => (
                  <Product />
                ))}
              </div>
              <div className="row products"></div>
            </div>
            <div className="box-preco d-flex w-100 justify-content-between">
              <h6>TOTAL:</h6>
              <b>R$30,00</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
