import { Link } from "react-router-dom";
function Menu(){
    return(
        <div className="sch-mn">
            <div className="sch-mn-s">
            <div className="sch-mn-sA">
                <Link to='/' style={{ textDecoration: 'none',color:'white' }}>Home *</Link>
                <div className="sA-child">
                    <Link to='/' style={{ textDecoration: 'none',color:'white' }}>Home</Link>
                    <Link style={{ textDecoration: 'none',color:'white' }}>Tjhsh</Link>
                    <Link style={{ textDecoration: 'none',color:'white' }}>Jjsg</Link>
                    <Link style={{ textDecoration: 'none',color:'white' }}>Tjjh</Link>
                </div>
                 
            </div>
            <Link to='/administration' style={{ textDecoration: 'none',color:'white' }}>Administration</Link>
            <Link to='/classes' style={{ textDecoration: 'none',color:'white' }}>Classes</Link>
            <Link to='/teachers' style={{ textDecoration: 'none',color:'white' }}>Teachers</Link>
            <Link to='/students' style={{ textDecoration: 'none',color:'white' }}>Students</Link>
            <Link to='/sports' style={{ textDecoration: 'none',color:'white' }}>Sports</Link>
            <Link to='/alumini' style={{ textDecoration: 'none',color:'white' }}>Alumini</Link>
            </div>
        </div>
    )
}

export default Menu;