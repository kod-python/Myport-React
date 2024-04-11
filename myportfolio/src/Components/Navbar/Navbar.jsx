import "./Navbar.css";
import React, { useState, useEffect } from "react";



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


    <header>
       
       <a href="#" onMouseEnter={changeGearColor}><i className="fa-solid fa-gear gear-icon"></i></a> 

       <h2>{currentTime}</h2>
      



  
    </header>

            
        </div>
    )
}

export default Nav


