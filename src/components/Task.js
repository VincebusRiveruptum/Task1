const Task = ({task, onDelete}) => {   
    return(
        <div>
            <h2>{task.name}</h2>
            <h3>{task.day}</h3>
            <button onClick={() => onDelete(task.id)}>
                Remove
            </button>
        </div>
    )
} 

export default Task;