import React from 'react';
import styled from 'styled-components';
function Footer() {
    
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
         <div className="container">
            <a href="/"><strong>정보처리방침</strong></a>
            &ensp;&ensp;<a href="/" ><strong>이용약관</strong></a>
            <hr/>
            <p className="text-xl-left"><strong>한국장학재단</strong><br/>(41200) 대구광역시 동구 신암로 125(신암동 819-1) 한국장학재단 콜센터 1599-2000</p>
            
             {/*Footer Botton*/}
             <div className="footer-bottom">
                 <p className="text-xs-center">
                     &copy;{new Date().getFullYear()} 장학금통합관리시스템 madebyTeamEllie - All Rights Reserved
                 </p>
             </div>
          </div>   
          </div>    
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer=styled.footer`
.footer-middle {
    background:var(--mainDark);
    padding-top: 1.5rem;
    color: var(--mainWhite);
}
.footer-bottom{
    padding-top: 1rem;
    padding-bottom:1rem;
}
a{
    color: var(--mainWhite);
}
a: hover{
color:var(--mainLightGrey);
}
hr{
    background-color: white;
}
`;
