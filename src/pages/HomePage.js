import { NavLink } from 'react-router-dom'
import './UserPage.css'

function HomePage(){
    return(
        <div className='userChoice'>
            <p><NavLink to="user/:id">Karl</NavLink></p>
            <p><NavLink to="user/:id">Cecilia</NavLink></p>
        </div>
    )
}
export default HomePage;