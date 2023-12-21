import { Link } from 'react-router-dom'

export default function About(){
    return(
        <div>
            <h1>About this...</h1>
            <p>This is a simple task tracker app excersise for practicing the React framework and JS languaje. By Vincebus Riveruptum and Joaquín Ayala</p>
            <Link to='/'>Go back...</Link> 
        </div>

    )
}