import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Home(){
    return(
      <div className="home_wrap">  
        <div className="home">
                    <li className="home_content">
                    <Link className="link_component" to="/Hc">   HTML/CSS Study </Link>
                        
                    </li>

                    
                
        </div>
       </div> 
    );
}

export default Home;