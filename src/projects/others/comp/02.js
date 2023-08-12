import { Link } from "react-router-dom";
function FirstB(){
    return(
        <div>
            <div className="Two">
            <div className="Two-head">
            Quick Guide for Fetching API data
            Using React Redux and Hooks(with 
            Examples)
            </div>
            <div className="Two-sec">
                <div className="TwoCircle">
                    <Link className="CircleA"></Link>
                    <Link className="CircleB"></Link>
                </div>
                <div className="Two-Prof">
                    <div className="Two-person">
                        <div className="Three-one">
                            <Link>Javaria Brascom</Link>
                            <div className="childOne">
                                <div className="cId">
                                    <div className="conePhoto">

                                    </div>
                                    <div className="coneName">
                                        Javaria Brascom
                                    </div>
                                </div>
                                <div className="childTwo">
                                    Fullstack Engineer and Video game Conseiller
                                </div>
                                <div className="lines"></div>
                                <div className="childThree">
                                    <div className="cThreeA">
                                        12 Followers
                                    </div>
                                    <button className="cThreeB">
                                            Follow
                                    </button>
                                </div>
                            </div>
                        </div> 
                        <div>.</div>
                        <Link className="tpr">Follow</Link>
                    </div>
                    <div className="TwoMain">
                        <div className="Two-Detail">
                            <div className="Two-one">Published in </div>
                            <div className="Two-two"><Link>The Startup</Link></div>
                        </div>
                        <div className="Two-time">
                            <div className="date"
                            >Feb 2, 2021 . 4 min read .</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lines'></div>
            <div className='third'>
                <div className='third-one'>
                    <div className='clap'>C 121</div>
                    <div className='respond'>R</div>
                </div>
                <div className='third-two'>
                    <div className='Save'>S</div>
                    <div className='Listen'>L</div>
                    <div className='Share'>E</div>
                </div>
            </div>
            <div className='lines'></div>
            
            
            </div>
        </div>
    )
}

export default FirstB;