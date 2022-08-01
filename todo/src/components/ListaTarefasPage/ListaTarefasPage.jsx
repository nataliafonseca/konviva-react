import './ListaTarefasPage.css';

import { useState } from 'react';

import useListaTarefas from '../../services/ListaTarefas/useListaTarefas';
import Tarefa from '../Tarefa';

function ListaTarefasPage() {
  const { listaDeTarefas, adicionarTarefa, limparListaDeTarefas } =
    useListaTarefas();

  const [novaTarefa, setNovaTarefa] = useState('');

  function inputChangeCallBack(event) {
    setNovaTarefa(event.target.value);
  }

  function btnNovaTarefaCallBack(event) {
    event.preventDefault();
    if (novaTarefa.trim()) {
      adicionarTarefa(novaTarefa); // cria a nova tarefa;
    }
    setNovaTarefa(''); //limpa o valor da tela
  }

  return (
    <div className="ListaTarefasPage">
      <h1>Lista de Atividades!</h1>
      <button onClick={limparListaDeTarefas}>Limpar Lista</button>
      <form onSubmit={btnNovaTarefaCallBack} className="action-box">
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={novaTarefa}
          onChange={inputChangeCallBack}
          required
        />
        <button type="submit" className="button big">
          +
        </button>
      </form>
      <p>
        Tarefas pendentes:{' '}
        <span>
          {listaDeTarefas.filter((tarefa) => tarefa.concluida === false).length}
        </span>
      </p>
      <div className="list">
        {listaDeTarefas.map((item, i) => {
          return <Tarefa key={i} tarefa={item}></Tarefa>;
        })}
      </div>
    </div>
  );
}

export default ListaTarefasPage;
