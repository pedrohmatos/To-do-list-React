import { Fragment, useState } from 'react';
import Botao from '../Botao';
import './AdicionarTask.css';

const AdicionarTask = ( {handleTaskAddition} ) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    return (
        <Fragment>
            <h1>Minhas Tarefas</h1>
            <div className='adicionarTask'>
                <input
                    type='text'
                    onChange={handleInputChange}
                    value={inputData}
                    placeholder='Digite uma tarefa aqui...'
                    id='input Task'
                />
                <div className='botaoAdicionar'>
                    <Botao
                        clicou={() => {
                            handleTaskAddition(inputData);
                            setInputData('');
                        }}
                    >
                        Adicionar
                    </Botao>
                </div>
            </div>
        </Fragment>
    )
};

export default AdicionarTask