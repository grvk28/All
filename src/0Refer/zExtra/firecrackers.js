//import './css/1.css'
function Fire(){
    //document.getElementById('red').style.left='0vw';
    
    let r=document.getElementById('red');
    let g=document.getElementById('green')
    let b=document.getElementById('blue')
    let p=document.getElementById('purple')

    var moved=false
    //let
    
    function move(){
        if(moved){
            moved=false;
           //g.style={left:'75vw'}
            
        }
        else{
            moved=true;
           // g.style={left:'0vw'}

        }
    }
    //move();
    setInterval(move,30000);
    
    return(
        <div className='bl' style={{backgroundColor:'black',width:'600px',height:'400px'}}>
            <div className="tpc" id="we" style={{backgroundColor:'white', 
            width:'20px', height:'5px',left:'100px'}}></div>
            <div >
                <div className='block' id='red'></div>
                {/* <div className='block' id='green'></div>
                <div className='block' id='blue'></div>
                <div className='block' id='purple'></div> */}
            </div>
        </div>
    )

}

export default Fire;