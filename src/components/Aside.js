import icon1 from '../assets/meditation_logo.png'
import icon2 from '../assets/swim_logo.png'
import icon3 from '../assets/bike_logo.png'
import icon4 from '../assets/gym_logo.png'

function Aside(){
    return(
        <aside>
            <img src={icon1} alt='icon-1'></img>
            <img src={icon2} alt='icon-2'></img>
            <img src={icon3} alt='icon-3'></img>
            <img src={icon4} alt='icon-4'></img>
        </aside>
    )
}

export default Aside;