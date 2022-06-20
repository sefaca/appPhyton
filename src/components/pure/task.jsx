import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({task}) => {
    return (
            <div>
                <h2>
                    Nombre: {task.name}
                </h2>
                <h3>
                    Apellido: {task.subname}
                </h3>
                <h3>
                    Email: {task.email}
                </h3>                
                <h5>
                    El usuario esta: {task.conected ? 'Contacto en línea' : 'Contacto no disponible'}
                </h5>
            </div>
        );
        };    



TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
