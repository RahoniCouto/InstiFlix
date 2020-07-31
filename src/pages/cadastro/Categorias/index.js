import React, { useState } from 'react';
import Route from '../../../Componentes/Route';
import FormField from '../../../Componentes/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['teste']);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#141414'
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function funcaoHendler(info) {
    const { getAttribute, value } = info.target;
    setValue(
      getAttribute('name'),
      value
    );
  }

    return (
      <Route>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infos){
          infos.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
        }}>
        
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={ funcaoHendler }
        />


          <div>
            <label>
              Descrição:
              <textarea 
                type="text"
                name="descricao"
                defaultValue={values.descricao}
                onChange={ funcaoHendler }
              />
            </label>
          </div>

          <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.nome}
          onChange={ funcaoHendler }
          />

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
            )
          })}
        </ul>

        <Link to="/Cadastro/video">
            cadastrar video
        </Link>

      </Route>
    );
  }

  export default CadastroCategoria;