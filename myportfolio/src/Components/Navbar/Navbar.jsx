import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Nav = () =>{
    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    

 
    function getCurrentTime() {
        const date = new Date();
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }


  

 
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    function changeGearColor() {
        const gearIcon = document.querySelector('.gear-icon');
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
        gearIcon.style.color = randomColor;
    }


    // const date = new Date();
    // const showTime = date.getHours() 
    //     + ':' + date.getMinutes() 
    //     + ":" + date.getSeconds();

  

    return(
        <div className="Nav">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />



<div className="head-nav">
<div className="fa-time">
        <div className="fa">
       <a href="#" onMouseEnter={changeGearColor}><i className="fa-solid fa-gear gear-icon"></i></a> 
       </div>
       

<div className="home-nav">

<nav>

    <ul>
        <div className="nav-icons">

        {/* <li><a href="/">Home</a></li> */}

<li>

    <Link to="/">Home</Link>
</li>

        <i className="fa-solid fa-home"></i>

        </div>

        <div className="nav-icons">

        {/* <li><a href="about">About</a></li> */}

<li>

    <Link to="/About">About</Link>
</li>

        <i className="fa-solid fa-user"></i>

        </div>
       
       <div className="nav-icons">
       {/* <li><a href="/Portfolio">Portfolio</a></li> */}


<li>

    <Link to="/Portfolio">Portfolio</Link>
</li>

        <i className="fa-solid fa-toolbox"></i>

       </div>
       
       <div className="nav-icons">
       {/* <li><a href="Contact">Contact Me</a></li> */}


   <li>
    
    <Link to="/Contact">Contact</Link>
    </li>    
        <i className="fa-solid fa-envelope-open"></i>
       </div>
       
       
    </ul>
</nav>



</div>





<div className="time">
<h2>{currentTime}</h2>
</div>
      
        </div>
       
</div>

     
      
      




            
        </div>
    )
}

export default Nav


