import React from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-feather'

let Apps = ['Youtube','School','Travel(3)','Shopping','Flipkart','Chrome','Whatsapp','(53)Facebook','Instagram','Twitter']
let links = ['/youtube','/school','/travel','/shopping','/flipkart','/chrome','/bander','/cheetah','/kutta','/bilaw']

const IconsMenu = () => {
  return (
    <div className='RowW100' style={{marginTop:'1vh'}}>
            {
                Apps.map((val,ind)=>{
                    return (
                        <div className='ColW20' style={{width:'90px'}} >
                            <Link className='RowW100' to={links[ind]} >
                                <div className='RowW100' style={{height:'40px',width:'40px',borderRadius:'50%',backgroundColor:'greenyellow',marginTop:'15px'}}><Icons.AlertCircle size={20}/></div>
                                <div style={{fontSize:'13px'}}>{val}</div>
                            </Link>
                        </div>
                    )
                })
            }
            
    </div>
  )
}

export default IconsMenu