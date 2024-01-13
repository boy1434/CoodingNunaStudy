import React from "react";

function Fifth_Prj(){
    return(
        <div id="wrap">
            <div className="positioning">

            <div className="po_box_seperate">
            <p>position : absolute</p>
                부모 영역에서 left right top bottom 을 이용해 주어진 위치로 움직임
                화면의 절댓값으로 간다
                <div className="po_box red"></div>
                <div className="po_box blue locate_absolute">absolute left: 400px
    top:200px</div>
                <div className="po_box yellow"></div>
                
            </div>

            <div className="po_box_seperate">
                <p>position : relative</p>
                HTML 태그가 있는 위치에서 left,right,top,bottom 값을 통해 움직임
                <div className="po_box red"></div>
                <div className="po_box blue locate_relative">relative left: 400</div>
                <div className="po_box yellow"></div>
            </div>
            
            <div className="po_box_seperate">
                <p>position : fixed</p>
                absolute 와 비슷하지만 스크롤로 내려도 브라우저 창 기준 그 위치 고정.
                <div className="po_box red"></div>
                <div className="po_box blue locate_fixed">fixed</div>
                <div className="po_box yellow"></div>
            </div>

            <div className="po_box_seperate">
                <p>position : stiky</p>
                relative 와 비슷하지만 스크롤로 내리면 fixed 처럼 그 위치에 고정
                <div className="po_box red"></div>
                <div className="po_box blue locate_sticky">sticky</div>
                <div className="po_box yellow"></div>
            </div>

            <div className="po_box_seperate ">
                <p>display : flex</p>
                <li>display: flex 는 모든 요소를 가로로 둔다.</li>
                <li>display: flex 는 부모한테 적용을 하고 자손을 컨트롤한다</li>
                <li>모바일 앱 개발환경에 너무 좋다.</li>
                <li>justify-content : 가로로 요소들을 움직인다
                    (flex-start, center, flex-end, space-between, space-around 등등)</li>

                <div className="locate_display_flex_center">  

                <div className="po_box red"></div>
                <div className="po_box blue ">display :flex(center)</div>
                <div className="po_box yellow"></div>

                
                </div>
            </div>

            <div className="po_box_seperate ">
                <p>display : flex</p>
                
                <li>justify-content : 가로로 요소들을 움직인다
                    (flex-start, center, flex-end, space-between, space-around 등등)</li>

                <div className="locate_display_flex_space-between">  

                <div className="po_box red"></div>
                <div className="po_box blue ">display : space-between</div>
                <div className="po_box yellow"></div>

                
                </div>
            </div>

            <div className="po_box_seperate ">
                <p>display : flex</p>
                
                <li>align-items : 세로로 요소들을 움직인다
                    (flex-start, center, flex-end, space-between, space-around 등등)</li>

                <div className="locate_display_flex_align_items">  

                <div className="po_box red"></div>
                <div className="po_box blue ">align-items : center height vh50</div>
                <div className="po_box yellow"></div>

                
                </div>
            </div>

            <div className="po_box_seperate ">
                <p>display : flex</p>
                
                <li>flex-direction:column : 가로로 정렬된 요소를 세로로 바꾸고</li>
                <li>justify-content 는 세로로</li>
                <li>align-items 는 가로 방향으로 바뀐다</li>

                <div className="locate_display_flex_direction_column_space-between">  

                <div className="po_box red">space-between 이해가 안감.........ㅠㅠㅠ</div>
                <div className="po_box blue">
                    flexbox연습하는 웹사이트: <a href="https://flexboxfroggy.com/#ko">🤪</a></div>
                <div className="po_box yellow"></div>

                </div>
            </div>

            <div className="po_box_seperate ">
                <h4>문제 1</h4>
                
                

                <div className="">  

                <div className="po_box black">div1</div>
                <div className="po_box black">div2</div>
                <div className="po_box black">div3</div>

                </div>
            </div>

            </div>
        </div>
    )
}

export default Fifth_Prj;