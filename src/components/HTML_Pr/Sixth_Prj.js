import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Sixth_Prj(){
    return(
        <div id="wrap">
            <header className="spotify_header">
                <img className="spotify_img" src="https://noona-spotify.netlify.app/image/logo.png"></img>

                <div>
                    <a href="#" className="spotify_nav">Premium</a>
                    <a href="#" className="spotify_nav">Support</a>
                    <a href="#" className="spotify_nav">Download</a>
                    <span className="spotify_nav">|</span>
                    <a href="#" className="spotify_nav">Sign Up</a>
                    <a href="#" className="spotify_nav">Log In</a>
                </div>

            </header>
            
            <body className="spotify_body">

                <div className="spotify_container">

                
                    <div className="body_headline">
                        Listening is
                        <div>
                            everything
                        </div>
                    </div>
                    
                    <div className="body_sub_headline">
                        "Millions of songs and padcasts. No credit card needed."
                    </div>
                    
                    <div className="spotify_btn">
                        <button className="spotify_btn_style">Get Spotify free</button>
                    </div>
                </div>

            </body>
            <footer className="spotify_footer">
                <div className="spotify_container">
                
                    <div className="spotify_footer_menu">
                        <div className="spotify_first_box">
                            <div>
                            <img className="spotify_img" src="https://noona-spotify.netlify.app/image/logo.png"></img>
                            </div>

                            <div className="spotify_column">
                                <div className="spotify_sub_title">COMPANY
                                    
                                    <a href="#" className="spotify_footer_item">About</a>
                                    <a href="#" className="spotify_footer_item">Jobs</a>
                                    <a href="#" className="spotify_footer_item">For the Record</a>

                                </div>
                            </div>

                            <div className="spotify_column">
                                <div className="spotify_sub_title">COMMUNITIES
                                    
                                    <a href="#" className="spotify_footer_item">For Artists</a>
                                    <a href="#" className="spotify_footer_item">Developers</a>
                                    <a href="#" className="spotify_footer_item">Investors</a>
                                    <a href="#" className="spotify_footer_item">Vendors</a>

                                </div>
                            </div>

                            <div className="spotify_column">
                                <div className="spotify_sub_title">USEFUL LINKS
                                    <a href="#" className="spotify_footer_item">Support</a>
                                    <a href="#" className="spotify_footer_item">Web Player</a>
                                    <a href="#" className="spotify_footer_item">Free Mobile App</a>

                                </div>
                            </div>

                        </div>

                        <div className="spotify_second_box">
                            <div className="spotify_icon_box"></div>
                        </div>
                    </div>
                
                </div>
            </footer>
        </div>
    );
}

export default Sixth_Prj;