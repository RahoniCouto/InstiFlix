import React from 'react';
import Route from '../../../Componentes/Route';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
      <Route>
        <h1>Cadastro de Categoria</h1>

        <Link to="/Cadastro/video">
            cadastrar video
        </Link>

      </Route>
    );
  }

  export default CadastroCategoria;