import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar"
import love from "../../images/love.png"
import robot from "../../images/robot.png"




const Home = () =>{

    return(

        <div className="Home">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
           
       

       <Navbar />
  
  <div className="home">
  <img src={robot} alt="" className="robot"/>

  <div className="home-desc">

    <div className="page-desc">
    <h2>Hi i'm <span className="name">Stanley Kodjo</span>  </h2>
 <p>I'm a Software Developer <br />
 <span>I build aesthetic web sites and apps <img src={love} alt="" className="love"/></span> <span>Explore more on my site</span>
 
 </p>

    <div className="button">
  <a href="#"><button type="submit">View Resume </button></a>  
  <i className="fa-solid fa-download"></i>
  
 
    </div>
 

    </div>



 <div className="home-nav">

<nav>
    <ul>
        <div className="nav-icons">

        <a href="#">

        <div className="ho">
           <li>Home</li>
        </div>

        <div className="hom">
         <i className="fa-solid fa-home"></i>
        </div>
      
       
        </a>
       
        
        </div>


        <div className="nav-icons">
        <a href="">
        <div className="abou">
         <li>About</li>
         </div>
        
     <div className="hom">
       <i className="fa-solid fa-user"></i>
     </div>
      
        </a>
       
        
        </div>


        <div className="nav-icons">
        <a href="#">
        
        <div className="port">
           <li>Portfolio</li>
           </div>
    
     <div className="hom">
     <i className="fa-solid fa-toolbox"></i>
     </div>
        
        </a>
       
        
        </div>


        <div className="nav-icons">
        <a href="#">

<div className="cont">

        <li>Contact Me</li>
       </div>

       <div className="hom">
       <i className="fa-solid fa-envelope"></i>
       </div>
 
        
        
        
        
        </a>
      
        </div>
        
    </ul>
</nav>


 </div>
  </div>
 

  </div>


 
        </div>
    )
}
export default Home