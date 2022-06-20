import React from 'react';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import { LEVELS } from '../../models/levels.enum';


const TaskListComponent = () => {

    const defaultTask = new Task('Sergio', 'Falcon', 'sefaca24@gmail.com', true);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your task:
            </div>
            {/* Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
