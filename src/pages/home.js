import './css/home.css'
import { Link } from 'react-router-dom'
import RStrap from '../0Refer/11RStrap/zparent'
let names =['A','B','C','D','E','F','G','H','I']

const HomeA=()=>{
    let click = () =>{
        var a= document.getElementsByClassName('HomeLine')
        var b=document.getElementById('1').style
        b.dispaly='none'
        a.style.backgroundColor='blue'
        a.style.color='white'
        console.log('hi',a.style,b.style)
    }
    return(
        <div className='Main'>
            <div className='HomeMain' id='1'>
            { names.map((val,ind) => {
                            return (
                                <Link onClick={click} className='HomeLine'>
                                    {ind+1}' '{val} 
                                </Link>
                            )
                        })
                       }
            </div>
            <RStrap/>
        </div>
    )
}
export default HomeA
