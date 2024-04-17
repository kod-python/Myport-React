import "./About.css"
import Navbar from "../../Components/Navbar/Navbar"
import chrome from "../../images/chrome.jpeg"
import css from "../../images/css.png"
import git from "../../images/git.jpg"
import github from "../../images/github.png"
import html from "../../images/html.png"
import java from "../../images/script.png"
import react from "../../images/react.png"
import vecel from "../../images/vercel.png"




const About = () =>{

    return(
        <div className="about">
<Navbar />


<div className="about-main">


<div className="about-top">

<div className="about-desc">
<h1>ABOUT ME</h1>
<h2>Ge to Know Me</h2>

<p>Am a young gentle guy who has a High National Diploma in I.C.T. I have knowledge in linux and write in bash script to execute complex code with <br />just a single command and is a self thought.  I also have knowledge in Markup language such as HTML, cascade styles sheet(CSS/SASS) and <br /> programming language such as python and with the python i build back-end using Django and flask framework. Am a front-end developer <br /> as well. Am ready to learn more and improve upon my skill pertaining to the I.T field. Am discipline, smart, physically and mentaaly strong. <br /> Will be glad working with any company willing to use my skills in their company to solve problems within the country and also if possible br around the world.</p>

</div>



<div className="skills">

<h1>MY SKILLS</h1>

<h2>Front-end tools</h2>

<div className="image">
<img src={html} alt="" className="img-resp" />
<img src={css} alt=""  className="img-resp" />
<img src={java} alt="" className="img-resp" />
<img src={react} alt="" className="img-resp" />

</div>
</div>


<div className="tools">
<h2>Tools & Methods</h2>
<div className="image">
<img src={git} alt="" />
<img src={github} alt="" />
<img src={vecel} alt=""  className="vecel"/>
<img src={chrome} alt="" />

</div>
</div>

<div className="scrollbar"></div>

</div>








</div>




        </div>
    )
}
export default About