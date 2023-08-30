import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import ListaDeTasks from './components/ListaDeTasks';
import { useState } from 'react';

function App() {

  const [arrTask, setArrTask] = useState([]);

  const addTask = (nome) => {
    setArrTask((prev) => [...prev, nome]);
  };

  const apagar = (task) => {
    setArrTask(arrTask.filter((el) =>  el !== task));
  };

  return (
    <div className="App">
      <Cabecalho enviandoTask ={addTask}/>
      <ListaDeTasks
        todasTasks ={arrTask}
        apagarTask ={apagar}
      />
      <Rodape />
    </div>
  );
}

export default App;
