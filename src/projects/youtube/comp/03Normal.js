let videos=[
    ['./img/jsk.jpg','T-Series','19 M views'],
    ['./img/jsk.jpg','T-Series','19 M views'],
    ['./img/jsk.jpg','T-Series','19 M views']
]

function Normal(){
    return(
        <div className="OneNormal">
            {
                videos.map((v,i)=>{
                    return(
                        <div className={'Normal'+i}>
                            <img src={v[0]}/>
                            <div>{v[1]}</div>
                            <div>{v[2]}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Normal;