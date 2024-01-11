import React from "react";

function FourTh_Prj() {
    return(
        <div id="wrap">
            <body className="insta_main">
                <div className="insta_main_box">

                <div className="insta_box">
                    <img src="https://i.namu.wiki/i/C9DgUkHfi6o7f1AWb529VHjHQeWtTFhVdFNc6YVScQzg4pARwRjBOWgidRveffl1j8ZqQbXQ40d64t1XVHL6Zw.svg" width={175} height={51}></img>

                    <div className="input_box">
                    <input className="id_input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"></input>
                    <input className="pw_input" type="password" placeholder="비밀번호"></input>
                    </div>

                    <div className="insta_Btn">
                        <button className="insta_login_btn">로그인</button>
                    <hr/>
                    </div>

                    <div className="facebook_link">
                        <img src=""></img> 
                        <a className="facebook_login" href="#"><span>FaceBook으로 로그인</span></a>
                    </div>

                    <div className="lost_pw">
                        <a className="facebook_lost_pw" href="#"><span>비밀번호를 잊으셨나요?</span></a>
                    </div>

                </div>
                    <div className="insta_join_box">
                    <span>계정이 없으신가요? <a className="join_link" href="">가입하기</a></span>
                    </div>

                    <div className="app_box">
                        앱을 다운로드하세요.

                        <div>
                            <span>
                                <img className="download_img" src="https://static.cdninstagram.com/rsrc.php/v3/yi/r/cWx_hQBPmbo.png"></img>
                                <img className="download_img" src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"></img>
                            </span>
                        </div>

                    </div>

                    
                </div>
                
            </body>
                    <div className="insta_footer">
                        <span>
                            <a className="footer_content" href="https://about.meta.com/">Meta</a>
                            <a className="footer_content" href="https://about.instagram.com/">소개</a>
                            <a className="footer_content" href="https://about.instagram.com/blog">블로그</a>
                            <a className="footer_content" href="https://about.instagram.com/about-us/careers">채용 정보</a>
                            <a className="footer_content" href="https://help.instagram.com/">도움말</a>
                            <a className="footer_content" href="https://developers.facebook.com/docs/instagram">API</a>
                            <a className="footer_content" href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">개인정보처리방침</a>
                            <a className="footer_content" href="https://help.instagram.com/581066165581870/">약관</a>
                            <a className="footer_content" href="https://www.instagram.com/explore/locations/">위치</a>
                            <a className="footer_content" href="https://www.instagram.com/web/lite/">Instagram Lite</a>
                            <a className="footer_content" href="https://www.threads.net/login">Threads</a>
                        </span>

                        <div className="footer_content_box">
                            <span>
                                <a className="footer_content">연락처 업로드 & 비사용자</a>
                                <a className="footer_content">Meta Verified</a>
                            </span>
                        </div>

                        <div>
                            <span>
                                <a className="footer_content">
                                    
                                    <select>
                                        <option value="한국어">한국어</option>
                                        <option value="English">English</option>
                                        <option value="English(UK)">English(UK)</option>
                                        <option value="中文(简体)">中文(简体)</option>
                                        <option value="日本語">日本語</option>

                                    </select>
                                </a>
                                <a className="footer_content">@ 2024 Instagram from meta</a>
                                
                            </span>
                        </div>

                    </div>
        </div>
    );
}

export default FourTh_Prj;