import React from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-feather'

let Apps = ['Youtube','School','Travel','Shopping','Flipkart','Chrome','Whatsapp','Facebook','Instagram','Twitter','LinkedIn','Nasa']
let links = ['/youtube','/school','/travel','/shopping','/flipkart','/chrome','/bander','/cheetah','/kutta','/bilaw','/girgit','/machhad']

const D_Apps = () => {
  return (
    <div className='RowW80' style={{marginTop:'5vh'}}>
            {
                Apps.map((val,ind)=>{
                    return (
                        <div className='ColW20' style={{width:'200px'}}>
                            <Link className='DAppRowW70' to={links[ind]} >
                                <div className='RowW80' style={{borderRadius:'50%',backgroundColor:'greenyellow',marginTop:'15px',width:'90px'}}><Icons.AlertCircle size={70}/></div>
                                <div>{val}</div>
                            </Link>
                        </div>
                    )
                })
            }
            
    </div>
  )
}

export default D_Apps