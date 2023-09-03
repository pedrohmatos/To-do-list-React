import Task from '../Task';
import './ListaDeTask.css';

const ListaDeTask = ( {criaTasks, completarTarefa, apagarTarefa} ) => {

    return (
        <section className='listaDeTask'>
            {criaTasks.map((obj) => {
                return <Task descricao={obj} completarTarefa={completarTarefa} apagarTarefa={apagarTarefa} key={obj.id}/>
            })}
        </section>
    )
};

export default ListaDeTask