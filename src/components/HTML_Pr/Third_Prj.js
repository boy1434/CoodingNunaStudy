import React from "react";

function Third_Prj(){
    return(
        <body>

  <div class="navbar">
    <a href="#" class="first-nav-item">Google 정보</a>
    <a href="#" class="first-nav-item">스토어</a>
    <a href="#" class="second-nav-item">Gmail</a>
    <a href="#" class="second-nav-item">images</a>
    <i class="fa-solid fa-bars"></i>
  </div>

  <div class="main">
    <a href="https://www.google.co.kr/?hl=ko"><img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
        width="272" /></a>
    <div class="input-area">
      <i class="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" class="input-box" placeholder="Google 검색 또는 URL 입력" />
      <i class="fa-solid fa-microphone mic-icon"></i>
      <div class="button-area">
        <button class="button-style">Google search</button>
        <button class="button-style">I'm feeling luckys</button>

        <div>
          Google offerd in:
          <a href="#" class="language">한국어</a>
          <a href="#" class="language">English</a>
          <a href="#" class="language">Francis</a>
          <a href="#" class="language">상진이</a>
        </div>
      </div>

    </div>
  </div>

  <div class="footer">
    <div class="first-line">
      대한민국
    </div>

    <div class="second-line">
      <span>
        <a href="#" class="second-line-item">광고</a>
        <a href="#" class="second-line-item">비즈니스</a>
        <a href="#" class="second-line-item">검색의 원리</a>
      </span>

      <span class="second-line-sencond">
        <a href="#" class="second-line-item">개인정보처리방침</a>
        <a href="#" class="second-line-item">약관</a>
        <a href="#" class="second-line-item">설정</a>
      </span>
    </div>
  </div>
</body>
    );

}

export default Third_Prj;