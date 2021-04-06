import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>TURISTANDO</h1>
        <h2>testapp</h2>
      </div>
      <div>
        <h3>Cadastro de local</h3>
      </div>
      <div className="form">
        <label>Nome: </label>
        <input type="text" name="localNome"></input>
        <label>Descrição: </label>
        <input type="text" name="descricao"></input>
        <label>Localização: </label>
        <input type="text" name="localizacao"></input>
        <label>Cidade: </label>
        <input type="text" name="cidade"></input>

        <button>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
