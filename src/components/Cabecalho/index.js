import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import './Cabecalho.css';
import Botao from './Botao';
import { useState } from 'react';

const Cabecalho = (props) => {
    const [nome, setNome] = useState('');
    
    const enviar = (event) => {
        event.preventDefault();

        props.enviandoTask(nome);
        setNome('');
    };

    return  (
        <header className="cabecalhoDaPagina">
            <h1>Just do it.</h1>
            <form onSubmit={enviar}>
                <input
                    value={nome}
                    onChange={(ev) => setNome(ev.target.value)}
                    type="text"
                    placeholder="Atividade à fazer..."
                />
                <Botao>
                    Adicionar<span><AiOutlineUsergroupAdd/></span>
                </Botao>
            </form>
        </header>
    )
}

export default Cabecalho