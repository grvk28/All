import React from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-feather'
import IconsMenu from './Apps'

const Cdashboard = () => {
  let func1 = () => {
    let pp = document.getElementById('hideA')
    console.log(pp)
    pp.style.display === 'none' ? pp.style.display='flex' : pp.style.display='none'
    //if(pp.style.display === 'flex')pp.style.display = 'none'
  }
  return (
    <div className='ColW100'>
      <div className='RowW30' style={{left:'35%'}}>
        <div className='RowW80' style={{padding:'0%',fontSize:'13px', left:'6%', justifyContent:'right'}}>
          <Link>Gmail</Link>
          <Link>Drive</Link>
          <Link style={{padding:'10px'}} onClick={func1}>
            <div style={{ height:'20px', width:'20px', backgroundColor:'greenyellow'}}></div>
          </Link>
          <div id='hideA' style={{display:'flex'}}>Gaurav</div>
          <Link><div style={{height:'30px', width:'30px', borderRadius:'50%',backgroundColor:'greenyellow'}}></div></Link>
        </div>
      </div>
      <div className='RowW30' style={{marginTop:'16vh'}}>
          <h1>Google</h1>
      </div>
      <div className='RowW40' style={{borderRadius:'25px', boxShadow:'1px 1px 1px 1px grey',height:'50px'}}>
        <Icons.Search size={40} style={{left:'-15%', top:'-8px'}}/>
        <input style={{width:'60%',position:'relative', left:'-50px',top:'-6px',borderColor:'white', borderStyle:'none'}} placeholder='Search Google or type a URL'/>
      </div>
      <div className='RowW40'>
        <IconsMenu/>
      </div>
      <div className='ColW40' style={{borderWidth:'1px', borderColor:'grey', borderStyle:'groove', marginTop:'10px'}}>
        <div className='DownHead' style={{position:'relative',left:'-25%'}}>From your google drive</div>
        <div className='RowW40' style={{justifyContent:'right',position:'absolute',right:'0px', top:'0px',padding:'0px'}} >
          <div><Icons.HelpCircle size={35}/></div>
          <div><Icons.Watch size={35}/></div>
        </div>
        <div className='ColW100' >
          <div className='RowW100'style={{justifyContent:'left', left:'-28px'}}>
            <Icons.Bluetooth size={40}/>
            <div>Hi kaise ho</div>
          </div>
          <div className='RowW100'style={{justifyContent:'left', left:'-28px'}}>
            <Icons.Bluetooth size={40}/>
            <div>Hi kaise ho</div>
          </div>
          <div className='RowW100'style={{justifyContent:'left', left:'-28px'}}>
            <Icons.Bluetooth size={40}/>
            <div>Hi kaise ho</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cdashboard