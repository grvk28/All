import { Link } from "react-router-dom"
let obj={
    first:['Home','Shorts','Subscriptions'],
    second:['Library','History','Your videos', 'Watch later','Liked videos','jubin','Best Old songs'],
    subscriptions:['T-series','Doordarshan National','edureka','Raja Baidyo','MySirG.com','24Billions.com','Gaurav Kumar'],
    explore:['Trending','Shopping','Music','Movies & Shows','Live','Gaming','News','Sports','Learning', 'Fashion & Beauty'],
    More:['Premium','Studio','Music','Kids']
}
function Sidenav(){
 console.log(obj.first)
 let a=obj.first
    return(
        <div className='Side'>
            <div className='Side-first'>
                {
                    obj.first.map((v,i)=>{
                        return(
                            <Link className={'Side'+v}>{v}</Link>
                        )
                    })
                }
            </div>
            <div className="Side-line"></div>
            <div className='Side-second'>
                {
                    obj.second.map((v,i)=>{
                        return(
                            <Link className={'Side'+v}>{v}</Link>
                        )
                    })
                }
            </div>
            <div className="Side-line"></div>
            <div className='Side-third'>
                {
                    obj.subscriptions.map((v,i)=>{
                        return(
                            <Link className={'Side'+v}>{v}</Link>
                        )
                    })
                }
            </div>
            <div className="Side-line"></div>
            <div className='Side-four'>
                {
                    obj.explore.map((v,i)=>{
                        return(
                            <Link className={'Side'+v}>{v}</Link>
                        )
                    })
                }
            </div>
            <div className="Side-line"></div>
            <div className='Side-five'>
                {
                    obj.More.map((v,i)=>{
                        return(
                            <Link className={'Side'+v}>{v}</Link>
                        )
                    })
                }
            </div>
            <div className="Side-line"></div>
        </div>
    )
}

export default Sidenav