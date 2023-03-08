import "./App.css";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import { useState } from "react";
// import About from "./components/About";


// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Routes,
//   BrowserRouter as Router
// } from 'react-router-dom';


function App() {

  const [Mode,setMode] = useState('light');
  // const [alert,setAlert] = useState({
  //   msg: "sampple message",
  //   type: "sample type"
  // });
  const [alert,setAlert] = useState({
    msg: "alerts showup here",
    type: "warning"
  });

  const showalert = (message,type) => { 
    setAlert({
      msg: message,
      type: type
    })
    // setTimeout(() => {
    //   setAlert(null);
    // }, 2000);
  }
  const [theme,settheme] = useState('rgb(0,14,51)');


  const togglemode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(0,14,51)';
      showalert("Dark Mode has been enabled","success");
      settheme('rgb(0,14,51)')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled","success")
    }
    
  } 

  const setbgcol = (col)=>{
    if(col==='rgb(0,14,51)'){
      if(Mode==="dark")
      { //blue
        document.body.style.backgroundColor = 'rgb(0,14,51)';
        settheme('rgb(0,14,51)');
      }
    } 
    else if (col==='rgb(99,7,0)'){
      if(Mode==="dark")
      {//red
        document.body.style.backgroundColor = 'rgb(99,7,0)';
        settheme('rgb(99,7,0)');
      }
    }
    else if (col==='rgb(122,110,0)'){
      if(Mode==="dark")
      {//yellow
        document.body.style.backgroundColor = 'rgb(122,110,0)';
        settheme('rgb(122,110,0)');
      }
    }
    else if (col==='rgb(0,49,2)'){
      if(Mode==="dark")
      {//green
        document.body.style.backgroundColor = 'rgb(0,49,2)';
        settheme('rgb(0,49,2)');
      }
    }
  }
  

  return (
    <>
    {/* <Router> */}
        <Nav title="AKHSINAK" homepage="TEXTFORM" link="ABOUT" mode = {Mode} togglemodeprop = {togglemode} setbgcol = {setbgcol} />
        <Alert alertobj = {alert}/>
        <div className="container">
            {/* <About title="Accordion"/> */}
            {/* <Routes> */}
          {/* <Route path="/about">
            <About/>
          </Route> */}

          {/* <Route exact path = "/about" element={<About/>}/> */}
          {/* <Route exact path='/textform' element={<TextForm title="Enter Some Text Here" mode = {Mode} showalert = {showalert} theme = {theme}/>}/> */}
      <TextForm title="Enter Some Text Here" mode = {Mode} showalert = {showalert} theme = {theme}/> 
            {/* </Routes> */}
        </div>  
    {/* </Router> */}
    </>
  );
}

export default App;

