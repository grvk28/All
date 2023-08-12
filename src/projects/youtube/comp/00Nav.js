import {Link} from 'react-router-dom'
let obj1={
    title1:'Youtube Home',
    title2:'Search',
    title3:'Search with your voice',
    title4:'Create',
    title5:'Notifications'
}

let sug={

}

function Nav(){
    var id=[];
    for(var i=0;i<10;i++){
        id.push(<div>{i}</div>)
    }
    let see=()=>{

    }
    let play=()=>{
        let r=document.getElementById('ser')
        r.style.display='flex'
        setTimeout(()=>{
            r.style.display='none'
        },5000)
    }
    return(
        <div className="One">
            <div className='OneLeft'>
                <Link className="OnePad"
                 onMouseMove={see}>
                    <div className="OneDad"></div>
                    <div className="OneDad"></div>
                    <div className="OneDad"></div>
                </Link>
                <Link className="OneTitle">
                    <div className="OneRect"> 
                            <div className="OneTri"></div>
                    </div>
                    <div className="OneName">Youtube</div>
                    <div className="OneCn">IN</div>
                </Link>
            </div>
            <div className="OneSearch">
                <div className="OneForm">
                    <input className='OneFill'
                    placeholder=' Search'
                    onClick={play}
                    />
                </div>
                <Link className="OneLens">
                    <div className='OneOo'>O</div>
                    <div className='OneJe'>\</div>
                </Link>
                <Link className="OneMic">
                    <div className="MicUp">
                        <div className='Mu'>M</div>
                    </div>
                    {/* <div className="MicMid"></div>
                    <div className="MicDown"></div> */}
                </Link>
            </div>
            <div className="OneRight">
                {/* <div className="OneGol"></div>
                <div className="OneBhopu"></div> */}
                <Link className="OneCreate">
                    <div className='OneC'>C</div>
                </Link>
                <Link className="OneBell">
                    <div className='OneC'>B</div>
                </Link>
                <div className="OneProfile"></div>
            </div>
            <div id='ser' className='CardA'>
                {id}
            </div>
        </div>
    )
}

export default Nav;