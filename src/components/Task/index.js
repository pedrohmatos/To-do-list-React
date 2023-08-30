import { ImCheckboxChecked } from 'react-icons/im';
import './Task.css';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useState } from 'react';

const Task = (props) => {

    const [finish, setFinish] = useState(false);

    const checked = () => {
        setFinish(!finish);
    };

    return (
        <div className={finish ? `completar` : `task`} key={props.nomeDaTask}>
            <p>{props.nomeDaTask}</p>
            <div>
                <span onClick={checked}>
                    <ImCheckboxChecked/>
                </span>
                <span onClick={() => props.apagarTask(props.nomeDaTask)}>
                    <BsFillTrash3Fill/>
                </span>
            </div>
        </div>
    )
};

export default Task