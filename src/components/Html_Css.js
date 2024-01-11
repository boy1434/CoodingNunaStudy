import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function HC(){
    return(
        <div>
          <div>
            <Link to="/Fst_Pr">1. 웹 사이트 뼈대 만들기  - (HTML 연습)</Link>
          </div>  
          
          <div>
            <Link to="/Sec_Pr">2. CSS 웹사이트 꾸미기  - (CSS 연습)</Link>
          </div>

          <div>
            <Link to="/Thi_Pr">3.구글 웹사이트 만들기</Link>
          </div>

          <div>
            <Link to="/Four_pr">4.인스타 웹사이트 만들기</Link>
          </div>
        </div>
    )
}

export default HC;