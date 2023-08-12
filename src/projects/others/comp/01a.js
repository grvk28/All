import { Link } from "react-router-dom";
function Firsta(){
    function fun (){
        let p=document.getElementById('fn')
        p.style.display='flex'
        setTimeout(()=>{
            p.style.display='none'
        },5000)
        console.log('hi')
    }
    function sec(){
        let p=document.getElementById('gn')
        p.style.display='flex'
        setTimeout(()=>{
            p.style.display='none'
        },5000)
    }
    return(
        < div className="one">
            <div className="one-A">
                <Link className="one-logo">
                    <div className="logo-A">.</div>
                    <div className="logo-B">.</div>
                    <div className="logo-C">.</div>
                </Link>
                <div className="fun" id='fn'>
                    <div>O</div>
                    <Link>Explore Topics</Link>
                    <div>.*</div>
                </div>
                <div className="gun" id='gn'>
                    <div className="gun-first">
                        <div className="gun-write">
                            <div>W</div>
                            <div>Write</div>
                        </div>
                        <div className="gun-profile">
                            <div>P</div>
                            <div>Profile</div>
                        </div>
                        <div className="gun-library">
                            <div>L</div>
                            <div>Library</div>
                        </div>
                        <div className="gun-stories">
                            <div>S</div>
                            <div>Stories</div>
                        </div>
                        <div className="gun-stats">
                            <div>&</div>
                            <div>Stats</div>
                        </div>
                    </div>
                    <div className="lines">.</div>
                    <div className="gun-sec">
                        <div>Settings</div>
                        <div>Refine recommendations</div>
                        <div>Manage publications</div>
                        <div>Help</div>
                    </div>
                    <div className="lines">.</div>
                    <div className="gun-third">
                        <div>Become a member</div>
                        <div>Create a Mastodon account</div>
                        <div>Apply for author verification</div>
                        <div>Apply to the Partner Program</div>
                        <div>Gift a membership</div>
                    </div>
                    <div className="lines">.</div>
                    <div className="gun-four">
                        <div>Sign out</div>
                        <div>gaurav91226591@gmail.com</div>
                    </div>
                    <div className="lines">.</div>
                    <div className="gun-five">
                        <div>Status</div>
                        <div>Writers</div>
                        <div>Blog</div>
                        <div>Careers</div>
                        <div>Privacy</div>
                        <div>Terms</div>
                        <div>About</div>
                        <div>Text to speech</div>
                    </div>
                </div>
                <div className="one-search">
                    <input className="oneInput"
                    placeholder="Search Medium"
                    onClick={fun}
                    >
                        
                    </input>
                    <div className="one-marks">
                            <div className="one-icon">O</div>
                    </div>
                </div>
            </div>
            <div className="one-B">
                <Link className="one-first">
                    <div className="first-A" style={{textDecoration:'none'}}>D</div>
                    <div className="first-B" style={{textDecoration:'none'}}>Write</div>
                </Link>
                <Link className="one-sec">O</Link>
                <button className="one-third"
                    onClick={sec}
                >
                    <div className="oneCircle">.</div>
                    <div className="oneLast">
                        <div>\/</div>
                    </div>
                </button>
            </div>

        </div>
    )
}

export default Firsta;
