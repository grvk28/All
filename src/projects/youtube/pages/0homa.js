import Nav from "../comp/00Nav"
import './css/0.css'
import Sidenav from "../comp/01Sidenav"
import MidNav from '../comp/02MidNav'
function YHome(){
    return(
        <div>
            <Nav/>
            <Sidenav/>
            <MidNav/>
        </div>
    )
}

export default YHome