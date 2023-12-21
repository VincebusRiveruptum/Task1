
import Task from './Task'

const TasksList = ({tasks, onDelete}) => {
    return(
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default TasksList;