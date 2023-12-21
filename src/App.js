import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import AddTask from './components/AddTask'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/About'
import { Link } from 'react-router-dom'


function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        name:'Doing dishes',
        day:"10/1/2024",
        reminder:true
    },
    {
        id:2,
        name:'Get passport',
        day:'15/1/2024',
        reminder:true
    },
    {
        id:3,
        name:'Kill the president',
        day:'31/5/2024',
        reminder:false
    }
])

  //Delete task
  const deleteTask = (id) => {
    //
    console.log('Delete ' + id)
    setTasks(tasks.filter((task) => 
      task.id !== id
    ))
  }

  const addTask = (id, name, day, reminder) => {
    console.log('New element added : ' + name + " " + day + " " + reminder)
    
    const newTask = {id,name,day,reminder}

    setTasks([...tasks, newTask])
  }

  return (
    <Router>
      <div className="App">
          <Header title="sup"/>
          <Routes>
            <Route exact path='/' element={<TasksContainer tasks={tasks} onDelete={deleteTask} onAddTask={addTask}/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
          <AddTask onAddTask={addTask}/>
          <Link to='/about'>Go to about...</Link>
      </div>
    </Router>
  );
}


export default App;
