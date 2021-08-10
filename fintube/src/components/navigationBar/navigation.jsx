
import { useState } from 'react';
import './navBar.css';
export function NavBar({Route,setState}){

  const[hambug,sethambug]=useState('hambug')
    return (  
    <nav className='navbar'>
  
         <div className='nav-hambug' onClick={()=>sethambug('hambug-view')}>
              <svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" fill="white"></path></svg>
             
            <a className='nav-link'>FT</a>
            <h2>FinTube</h2>
         
         </div>
         
         <div className='navbar-left'>
            <div className='navbar-items login'>
                    <svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11z" fill="currentColor"></path></svg>
                   
            </div>
            <div className='navbar-items' onClick={()=>setState('Wishlist')}>
                <svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z" fill="currentColor"></path></svg>
               
            </div>
           <div  className='navbar-items'>
              <button className='navbar-theme'>🌞</button>
            </div>
        </div>
      </nav>
    )
}