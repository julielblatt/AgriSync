import React from 'react';
import './bovinos.css';
const Bovinos = () => {
  return (
    <div className="bovinos-container">
      <h2>Cadastro de Bovinos</h2>
      <form>
        <label>
          Vaca Lactação:
          <input type="text" name="vacaLactacao" />
        </label>
        <label>
          Vaca seca:
          <input type="text" name="vacaSeca" />
        </label>
        <label>
          Novilha 1 a 2 anos:
          <input type="text" name="novilha" />
        </label>
        <label>
          Terneira até 1 ano:
          <input type="text" name="terneira" />
        </label>
        <label>
          Bezerros:
          <input type="text" name="bezerros" />
        </label>
        <button type="submit">Salvar</button>
        <button className="logout-button">Sair</button>
      </form>
    </div>
  );
};

export default Bovinos;