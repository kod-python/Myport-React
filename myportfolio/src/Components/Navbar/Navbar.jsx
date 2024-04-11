import "./Navbar.css"



const Nav = () =>{

    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();

    return(
        <div className="Nav">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />


    <header>
       <a href="#"><i className="fa-solid fa-gear"></i></a> 

       <h2>{showTime}</h2>
      
  
    </header>

            
        </div>
    )
}

export default Nav


