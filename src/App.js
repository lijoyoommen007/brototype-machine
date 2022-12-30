import React, { useRef, useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import TimezoneSelect from 'react-timezone-select'
import  "./app.css"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import axios from 'axios';


function App() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {refEmail1,refFname1,refLname1,refPassword1,refUsername1} = useRef()
  const [err,setErr] = useState("")


  const handleLogin=async(e)=>{
    e.preventDefault()
    console.log('reached here');
    const details = {
      firstname:fname,
      lastname: lname,
      username : username,
      password : password,
      email:email,
      timezone:selectedTimezone.toString()
    }
    console.log(typeof(selectedTimezone));
    try{
      if(!fname){
        setErr("First Name is required")
      }else if(!lname){
        setErr("Last Name is required")
      }else if(!username){
        setErr("UserName is required")
      }else if(!password){
        setErr("password is required")
      }else if(!email){
        setErr("email is required")
      }else{
       await axios.post("https://brototype.onrender.com/api/fansignup",details).then((res)=>{
        if(res.data.error){
          setErr(res.data.err)
        }else{
          setErr("succesfully Registered")
        }
       })
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleLogin1=async(e)=>{
    e.preventDefault()
    console.log('reached here');
    const details = {
      firstname:fname,
      lastname: lname,
      username : username,
      password : password,
      email:email,
      timezone:selectedTimezone.toString()
    }
    console.log(typeof(selectedTimezone));
    try{
      if(!fname){
        setErr("First Name is required")
      }else if(!lname){
        setErr("Last Name is required")
      }else if(!username){
        setErr("UserName is required")
      }else if(!password){
        setErr("password is required")
      }else if(!email){
        setErr("email is required")
      }else{
       await axios.post("https://brototype.onrender.com/api/talentsignup",details).then((res)=>{
        console.log(res);
        if(res.data.error){
          setErr(res.data.error)
        }else if(res.data.err){
          console.log(err);
        }else{
          setErr("succesfully Registered")
        }
       })
      }
    }catch(err){
      console.log(err);
    }
  }


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const [selectedTimezone, setSelectedTimezone] = useState({})

  return (
    <div className=''>
    <Navbar/>
    <MDBContainer className="p-3 d-flex  flex-column w-50 container1">
      
    <MDBTabs pills justify className='mb-3 d-flex flex-row '>
      
        <MDBTabsItem>
          {justifyActive == "tab1"? <a className='topswitch btn d-flex justify-content-center leftswitch'  style={{backgroundColor:"#14ff82"}}   onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            <span className='span1' style={{color:"black"}}> FAN SIGNUP </span> 
          </a>: <a className='topswitch btn d-flex justify-content-center leftswitch rounded-left' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
          <span className='span1'> FAN SIGNUP </span>
          </a>}
         
        </MDBTabsItem>
        <MDBTabsItem>
       { justifyActive == "tab2"? 
          <a className='topswitch btn d-flex justify-content-center rightswitch' style={{backgroundColor:"#14ff82"}} onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            <span className='span1'style={{color:"black"}}> TALENT SIGNUP </span>
          </a>:<a className='topswitch btn d-flex justify-content-center rightswitch'  onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
          <span className='span1' > TALENT SIGNUP </span>
          </a>}
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3 ">
            <p className='text-white'>Create Your Fan Account</p>
          </div>
          { err && <div className="alert alert-danger text-center" role="alert"> {err}</div>}
          <form>
          <div className='d-flex flex-column'>

          <span className='span2 '>First Name*</span>
          <input ref={refFname1} className='mb-2 input1' onChange={(e)=>{setFname(e.target.value)}}  placeholder='First Name'  type='text'/>
          
          <span className='span2'>Last Name*</span>
          <input ref={refLname1} className='mb-2 input1'  onChange={(e)=>{setLname(e.target.value)}}  placeholder='Last Name'  type='text'/>
          
          <span className='span2'>UserName*</span>
          <input ref={refUsername1} className='mb-2 input1'  onChange={(e)=>{setUsername(e.target.value)}} placeholder='UserName' type='text'/>
          
          <span className='span2'>Email*</span>
          <input ref={refEmail1} className='mb-2 input1'  onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'  type='email'/>
          
          <span className='span2'>TimeZone*</span>
          <TimezoneSelect className='mb-2'
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />

          <span className='span2'>Password*</span>
          <input ref={refPassword1} className='mb-2 input1' placeholder='password'  onChange={(e)=>{setPassword(e.target.value)}}  type='password'/>
          </div>


          <div className="d-flex justify-content-center mx-4 ">
            <MDBCheckbox style={{width:"10px",height:"10px"}} name='flexCheck'  />
            <span className='span2'>I agree to the <span style={{color:"#14ff82"}}> terms and condition </span> </span>
          </div>

          <button className="w-100"  style={{borderRadius:"20px",backgroundColor:"#14ff82",color:"black"}} onClick={handleLogin}>Sign Up</button>
          <div className="d-flex justify-content-center ">
            <span className='span2'>Already have an account <a style={{color:"#14ff82"}} > Signin </a> </span>
          </div>
          </form>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

        <div className="text-center mb-3 ">
            <p className='text-white'>Create Your Fan Account</p>
          </div>
          { err && <div className="alert alert-danger text-center" role="alert"> {err}</div>}
          <form>
          <div className='d-flex flex-column'>

          <span className='span2 '>First Name*</span>
          <input ref={refFname1} className='mb-2 input1' onChange={(e)=>{setFname(e.target.value)}}  placeholder='First Name'  type='text'/>
          
          <span className='span2'>Last Name*</span>
          <input ref={refLname1} className='mb-2 input1'  onChange={(e)=>{setLname(e.target.value)}}  placeholder='Last Name'  type='text'/>
          
          <span className='span2'>UserName*</span>
          <input ref={refUsername1} className='mb-2 input1'  onChange={(e)=>{setUsername(e.target.value)}} placeholder='UserName' type='text'/>
          
          <span className='span2'>Email*</span>
          <input ref={refEmail1} className='mb-2 input1'  onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'  type='email'/>
          
          <span className='span2'>TimeZone*</span>
          <TimezoneSelect className='mb-2'
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />

          <span className='span2'>Password*</span>
          <input ref={refPassword1} className='mb-2 input1' placeholder='password'  onChange={(e)=>{setPassword(e.target.value)}}  type='password'/>
          </div>


          <div className="d-flex justify-content-center mx-4 ">
            <MDBCheckbox style={{width:"10px",height:"10px"}} name='flexCheck'  />
            <span className='span2'>I agree to the <span style={{color:"#14ff82"}}> terms and condition </span> </span>
          </div>

          <button className="w-100"  style={{borderRadius:"20px",backgroundColor:"#14ff82",color:"black"}} onClick={handleLogin1}>Sign Up</button>
          <div className="d-flex justify-content-center ">
            <span className='span2'>Already have an account <a style={{color:"#14ff82"}} > Signin </a> </span>
          </div>
          </form>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>

    <Footer/>
    
    </div>
  );
}

export default App;
