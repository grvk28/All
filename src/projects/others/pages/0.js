//import FirstA from "../comp/01"
import './0.css'
import FirstB from "../comp/02"
import Third from "../comp/03"
import Footer from "../comp/04"
import Firsta from "../comp/01a"

//Medium

function First(){
    return(
        <div>
            <div className='source'>//source https://medium.com/swlh/quick-guide-for-fetching-api-data-using-react-redux-and-hooks-with-explanation-10503726bc6b</div>
            <div className="app">Open in App .*</div>
            <Firsta/>
            <div className="line"></div>
            {/* <div className="line"></div> */}
            <FirstB/>
            <Third/>
        </div>
    )
}

export default First