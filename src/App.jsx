import { useState } from 'react';
import './App.css';
import ListaDeTask from './components/ListaDeTask';
import AdicionarTask from './components/AdicionarTask';
import Rodape from './components/Rodape';

function App() {

	// Estado da lista renderizada iniciando como uma Array de dois Objetos
	const [task, setTask] = useState([
		{
			id: 1,
			title: 'Uma tarefa...',
			completed: false
		},
		{
			id: 2,
			title: 'Ler Livros',
			completed: true
		}
	]);

	// Função que mapeia a variável estado da lista que é renderizada e durante a iteração, se a propriedade 'id' for igual ao 'id' da task que chamou essa função, então o valor da propriedade 'completed' do elemento será invertido
	const handleTaskClick = (taskId) => {
		const newTaskCompleted = task.map((el) => {

			if (el.id === taskId) {
				return {...el, completed: !el.completed}
			}

			return el
		});

		setTask(newTaskCompleted);
	};

	// Função que configura o estado da lista renderizada ao adicionar uma nova tarefa com base no título que é passado ao input
	const handleTaskAddition = (taskTitle) => {

		setTask((prev) => {
			let newId = 1;

			if(prev.length > 0) {
				newId = prev[prev.length - 1].id + 1;
			}

			const newTaskAdded = [
				...task,
				{
					id: newId,
					title: taskTitle,
					completed: false
				}
			];
			
			return newTaskAdded;
		});
	};

	// Função que filtra o estado da lista renderizada ao retornar somente os objetos que possuem um 'id' diferente do 'id' da tarefa que chamou essa função
	const handleTaskDelete = (taskId) => {
		const newTaskNoRemoved = task.filter((el) => {
			return el.id !== taskId
		});

		setTask(newTaskNoRemoved);
	};

	return (
		<main className='App'>
			<AdicionarTask 
				handleTaskAddition={handleTaskAddition} 
			/>
			<ListaDeTask
				criaTasks={task}
				completarTarefa={handleTaskClick}
				apagarTarefa={handleTaskDelete}
			/>
			<Rodape />
		</main>
	)
}

export default App;
