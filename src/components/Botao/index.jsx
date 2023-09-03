import './Botao.css';

const Botao = ( {children, clicou} ) => {
    return (
        <button onClick={clicou} className='botao'>
            {children}
        </button>
    )
};

export default Botao