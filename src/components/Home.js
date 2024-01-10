import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Home(){
    return(
       <div className="home">
                <li>
                  <Link to="/Hc">   HTML/CSS Study </Link>
                    
                </li>

                <li>
                    JavaScript Study
                    
                </li>

                <li>
                    React Study
                    
                </li>

                <li>
                    Node.js Study
                    
                </li>
            
       </div>
    );
}

export default Home;