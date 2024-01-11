import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return(
        <header>
            <div className="header_">
                <h2><Link className="link_component" to="/">스터디 프로젝트</Link></h2>
            </div>
        </header>
    )
}

export default Header;