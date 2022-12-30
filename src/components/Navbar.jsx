import React from 'react'
 
function Navbar() {
  return (
    <div >
        <nav className="navbar   navbar-light d-none d-lg-block ">
  <div class=" container">
    <div className='d-flex flex-column'>
    <a class="navbar-brand fw-bold fs-2 " style={{color:"#14ff82"}} >Fancovo</a>
    <p className='text-white'>A marketplace for conversations,mentorships and performance</p>
    </div>
  
    <div class="d-flex input-group w-auto">
     <span className='mx-2 text-white'>Sign up</span>
     <span className='text-white'>Login</span>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar