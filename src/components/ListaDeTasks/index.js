import './ListaDeTask.css';
import Task from '../Task';

const ListaDeTasks = (props) => {


    return (
        props.todasTasks.length > 0 &&
        <main className='lista'>
            {props.todasTasks.map((el) => {
                return <Task nomeDaTask={el} key={el} apagarTask={props.apagarTask}/>
            })}
        </main>
    )
};

export default ListaDeTasks