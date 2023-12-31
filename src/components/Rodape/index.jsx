import './Rodape.css';
import { AiFillGithub } from 'react-icons/ai';

const Rodape = () => {
    return (
        <p className='rodape'>
            <a href="http://github.com/pedrohmatos" target="_blank" rel="author">
                Desenvolvido por Pedro Matos <AiFillGithub size={ 20 } />
            </a>
        </p>
    )
};

export default Rodape