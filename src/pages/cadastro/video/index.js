import React from 'react';
import { Link } from 'react-router-dom';
import Route from '../../../Componentes/Route';

function CadastroVideo(){
    return (
      <Route>
        <h1>Cadastro Video</h1>

      
        <Link to="/">
            Ir para home
        </Link>

      </Route>
    );
  }

  export default CadastroVideo;