import { Link } from "react-router-dom";
let mid=['All','Mixes','Music','Live','Satsang','Bhajan music','Bollywood Music',
        'Bowling (cricket)','Dramedy','Recently uploaded','Watched','New to you'];

function MidNav(){
    return(
        <div class='OneMid'>
            {
                mid.map((v,i)=>{
                    return(
                        <Link className={'Mid'+i}>{v}</Link>
                    )
                })
            }
        </div>
    )
}

export default MidNav