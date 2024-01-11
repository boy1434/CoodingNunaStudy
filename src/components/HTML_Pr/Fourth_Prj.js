import React from "react";

function FourTh_Prj() {
    return(
        <body className="insta_main">
            <div className="insta_mainbox">
                <img src="https://i.namu.wiki/i/C9DgUkHfi6o7f1AWb529VHjHQeWtTFhVdFNc6YVScQzg4pARwRjBOWgidRveffl1j8ZqQbXQ40d64t1XVHL6Zw.svg" width={175} height={51}></img>

                <div className="input_box">
                <input className="id_input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"></input>
                <input className="pw_input" type="password" placeholder="비밀번호"></input>
                </div>

                <div className="insta_Btn">
                    <button className="insta_login_btn">로그인</button>
                <hr/>
                </div>
            </div>

            <div>
            </div>
        </body>
    );
}

export default FourTh_Prj;