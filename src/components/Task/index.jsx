import './Task.css';

const Task = ( {descricao, completarTarefa, apagarTarefa} ) => {
    const {id, title, completed} = descricao;

    return (
        <div
            className='task'
            style={completed ? {borderLeft: '6px solid #0077ff', opacity: '0.5'} : {}}
        >
            <p>
                {title}
            </p>
            <span>
                <button type="submit" onClick={() => completarTarefa(id)}>
                    &#x2714;
                </button>
                <button type="submit" onClick={() => apagarTarefa(id)}>
                    X
                </button>
            </span>
        </div>
    )
};

export default Task