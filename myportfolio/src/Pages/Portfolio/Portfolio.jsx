import "./Portfolio.css"
import Navbar from "../../Components/Navbar/Navbar"
import build from "../../images/building.png"
import cofe from "../../images/Cofe.png"
import coin from "../../images/coin.png"
import furniture from "../../images/furniture.png"
import lifestyle from "../../images/lifestyle.png"
import mini from "../../images/mini-sign-up.png"
import payment from "../../images/payment.png"
import question from "../../images/questio.png"
import resume from "../../images/resume.png"
import voting from "../../images/voting.png"
import react1 from "../../images/react1.png"
import css from "../../images/css.png"
import html from "../../images/html.png"
import java from "../../images/script.png"
import react from "../../images/react.png"
import git from "../../images/githubhub.png"





const Portfolio =() =>{

    return(

        <div className="portfolio">
             <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
     <Navbar />

<div className="infos">
<h1> <span className="folio">MY</span>PORTFOLIO</h1>

<p>Preview of some projects i worked on</p>
</div>



<div className="main-image-container">





<div className="image-container">


<div className="container">
    <img src={furniture} alt="img" className="image"/>
   
<div className="overlay">
    <a href="https://kod-python.github.io/furniture/"><i className="fa-solid fa-eye" target="Blank"></i></a>
    <a href="https://github.com/kod-python/furniture"><img src={git} alt="" className="gi" target="Blank" /></a>


    <div className="overlay-text">
    <h2>My Project Source</h2>
</div>



<div className="overlay-img">
<img src={html} alt="html" className="imaima"/>
<img src={css} alt="html" className="imaima"/>
</div>
   
</div>

</div>


<div className="container">
    <img src={cofe} alt="img" className="image" />

    <div className="overlay">
    <a href="https://kod-python.github.io/cofeshop/"><i className="fa-solid fa-eye" target="Blank"></i></a>
    <a href="https://github.com/kod-python/cofeshop"><img src={git} alt="" className="gi" target="Blank" /></a>

    <div className="overlay-text">
    <h2>My Project Source</h2>
</div>




    <div className="overlay-img">
<img src={html} alt="html" className="imaima"/>
<img src={css} alt="html" className="imaima"/>
</div>


    </div>
</div>



</div>end


<div className="image-container">



<div className="container">
    <img src={payment} alt="img" className="image" />

    <div className="overlay">
    <a href=""><i className="fa-solid fa-eye" target="Blank"></i></a>
    <a href=""><img src={git} alt="" className="gi" target="Blank" /></a>


    <div className="overlay-text">
    <h2>My Project Source</h2>
</div>


    <div className="overlay-img">
<img src={html} alt="html" className="imaima"/>
<img src={css} alt="html" className="imaima"/>
</div>

    </div>
</div>


<div className="container">
    <img src={build} alt="img" className="image" />

    <div className="overlay">
    <a href=""><i className="fa-solid fa-eye" target="Blank"></i></a>
    <a href=""><img src={git} alt="" className="gi" target="Blank"/></a>


    <div className="overlay-text">
    <h2>My Project Source</h2>
</div>




    <div className="overlay-img">
<img src={html} alt="html" className="imaima"/>
<img src={css} alt="html" className="imaima"/>
</div>

    </div>
</div>


</div>end





<div className="image-container">



<div className="container">
    <img src={question} alt="img" className="image" />

    <div className="overlay">
    <a href=""><i className="fa-solid fa-eye" target="Blank"></i></a>
    <a href=""><img src={git} alt="" className="gi" target="Blank"/></a>


    <div className="overlay-text">
    <h2>My Project Source</h2>
</div>



    <div className="overlay-img1">
<img src={html} alt="html" className="imaima1"/>
<img src={java} alt="html" className="imaima2"/>
<img src={css} alt="html" className="imaima1"/>
</div>

    </div>
</div>


<div className="container">
    <img src={mini} alt="img" className="image" />

    <div className="overlay">
    <a href="https://kod-python.github.io/mini-signup" target="Blank"><i className="fa-solid fa-eye"></i></a>
    <a href="https://github.com/kod-python/mini-signup" target="Blank"><img src={git} alt="" className="gi"/></a>



    <div className="overlay-text">
    <h2>My Project Source</h2>
</div>



    <div className="overlay-img">
<img src={html} alt="html" className="imaima"/>
<img src={css} alt="html" className="imaima"/>
</div>

    </div>
</div>



</div>end







<div className="image-container">



<div className="container">
    <img src={resume} alt="img" className="image" />

    <div className="overlay">
    <a href=""><i className="fa-solid fa-eye" target="Blank"></i></a>
    <a href=""><img src={git} alt="" className="gi"  target="Blank"  /></a>


    <div className="overlay-text">
    <h2>My Project Source</h2>
</div>



    <div className="overlay-img">
<img src={html} alt="html" className="imaima"/>
<img src={css} alt="html" className="imaima"/>
</div>

    </div>
</div>


<div className="container">
    <img src={react1} alt="img" className="image" />

    <div className="overlay">
    <a href=""><i className="fa-solid fa-eye" target="Blank"></i></a>
    <a href=""><img src={git} alt="" className="gi" target="Blank" /></a>

    <div className="overlay-text">
    <h2>My Project Source</h2>
</div>




    <div className="overlay-img2">
<img src={react} alt="html" className="imaima3"/>

</div>

    </div>
</div>




</div>end




<div className="image-container">



<div className="container">
    <img src={voting} alt="img" className="image" />

    <div className="overlay">
    <a href=""><i className="fa-solid fa-eye" target="Blank"></i></a>
    <a href=""><img src={git} alt="" className="gi" target="Blank" /></a>
  


    <div className="overlay-text">
    <h2>My Project Source</h2>
</div>


    <div className="overlay-img1">

<img src={html} alt="html" className="imaima1"/>
<img src={java} alt="html" className="imaima2"/>
<img src={css} alt="html" className="imaima1"/>
</div>

    </div>
</div>



</div>end







</div>








        </div>
    )
}

export default Portfolio