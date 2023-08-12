import {Link} from 'react-router-dom'
function Footer(){
    return(
        <>
        <div className="sch-ft">
                <div>Twitter</div>
                <div>Instagram</div>
                <div>Facebook</div>
                <div>Gmail</div>
                <Link to='/'>All Pages</Link>
        </div>
        </>
    )
}

export default Footer