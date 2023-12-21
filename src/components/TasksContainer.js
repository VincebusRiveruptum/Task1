import Button from './Button'
import TasksList from './TasksList';

const TasksContainer = ({tasks, onDelete, onAddTask}) =>{
    return(
        <div class="taskContainer">
            <TasksList tasks={tasks} onDelete={onDelete} />
        </div>
    )
}

export default TasksContainer;