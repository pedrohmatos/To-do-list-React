import Task from '../Task';
import './ListaDeTask.css';

const ListaDeTask = ( {criaTasks, completarTarefa, apagarTarefa} ) => {

    return (
        <section>
            {criaTasks.map((obj) => {
                return <Task descricao={obj} completarTarefa={completarTarefa} apagarTarefa={apagarTarefa}/>
            })}
        </section>
    )
};

export default ListaDeTask